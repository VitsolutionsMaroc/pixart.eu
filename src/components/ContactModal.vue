<template>
  <div class="modal-wrapper rapperTour p-8">
     <div class="text-center flex justify-center	">
        <p
          class="font-bold text-l md:text-xl text-center	m-0 mt-8 mb-6 text-center bg-green-200	bg-opacity-70 p-4 w-70 flex"
          v-if="showMsg"
        >
          Thank you for subscribing. We will contact you as soon as possible.
        </p>
      </div>
    <h2 class="text-lg text-gray-600 font-bold mb-4">Create New Contact</h2>

    <form @submit.prevent="addContact()">
         <div class="mb-5">
            <label class="text-gray-600">Last Name *</label>
            <div class="flex items-center my-2 shadow-all">
              <input
                required
                type="text"
                placeholder="Your last name..."
                class="w-full pr-10 pl-4 py-3 text-gray-700"
                v-model="contact.Name"
              />
            </div>
          </div >
           <div class="mb-5">
            <label class="text-gray-600">First Name *</label>
            <div class="flex items-center my-2 shadow-all">
              <input
                required
                type="text"
                placeholder="Your first name..."
                class="name w-full pr-10 pl-4 py-3 text-gray-700"
                v-model="contact.FirstName"
              />
            </div>
          </div>
           <div class="mb-5">
            <label class="text-gray-600">E-mail *</label>
            <div class="flex items-center my-2 shadow-all">
              <input
                required
                type="email"
                placeholder="Your E-mail address..."
                class="w-full pr-10 pl-4 py-3 text-gray-700"
                v-model="contact.PrivateEmail"
              />
            </div>
          </div>
          <div class="mb-5">
            <label class="text-gray-600">Phone Number *</label>
            <div class="flex items-center my-2 shadow-all">
              <input
                required
                type="number"
                placeholder="Your phone number address..."
                class="w-full pr-10 pl-4 py-3 text-gray-700"
                v-model="contact.PrivateMobile"
              />
            </div>
          </div>
      <div class="text-center mt-8">

      <button
         class="text-center px-24 py-2 font-semibold bg-yellow-500 text-white transition duration-500 ease-in-out  hover:bg-yellow-600 transform hover:-translate-y-1  ..."
      >
        Submit
      </button>
                </div>

    </form>
  </div>
</template>

<style scoped>
.shadow-all {
  -webkit-box-shadow: 0px 0px 4px gray;
  -moz-box-shadow: 0px 0px 4px gray;
  box-shadow: 0px 0px 4px gray;
}
</style>

<script>
import axios from "axios";
import Multiselect from "vue-multiselect";
import _ from "lodash";
import JQuery from "jquery";
let DefaultdataJson = require('../config/default.json');


export default {
   components: {
    Multiselect,
    JQuery,
  },
  data() {
    return {
       showMsg: false,
      isLoaded: false,

      contact: {
        Name: "",
        FirstName: "",
        CountryId: "",
        ContactTypeIds: "",
        PrivateMobile: "",
        CountryId: 1,
        OfficeIds: [6644],
        StatusId: 1,
        LanguageId: "fr-BE",
        PrivateEmail: "",
        selected: "",
        checked: "",
        Comments: "",
      },
      selected: "",
      options: [],
      transactions: [],
      checked: "",
    };
  },
  methods: {
    addContact() {
       let authCredentials = {
        ClientId: 4668,
        OfficeId: 6644,
      };

      // let apiToken =
      //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlhdCI6MTYxMjMzOTQ3Mn0.eyJzZXJ2aWNlQ29uc3VtZXJJZCI6MjMzLCJ0eXBlSWQiOjQsImNsaWVudElkIjo0NjY4fQ.gDNwAXok3Fr4AR4kuJ12vVcytlmr0--bInx65euVxos";

      const config = {
        headers: {
         Authorization: `Bearer `+  DefaultdataJson.Whise.AuthToken,
          "Content-Type": "application/json",
        },
      };

      axios
        .post(DefaultdataJson.Whise.Url + "admin/clients/token", authCredentials, config)
        .then((response) => {
          let token = response.data.token;
          const config = {
            headers: {
              Authorization: `Bearer `+  DefaultdataJson.Whise.AuthToken,
              "Content-Type": "application/json",
            },
          };

          let contact = {
             Name: this.contact.Name,
            FirstName: this.contact.FirstName,
            PrivateMobile: this.contact.PrivateMobile,
            CrmOfficeID: [4381],
            StatusId: 1,
            CountryId: 1,
            LanguageId: "fr-BE",
            Comments: this.contact.Comments,
            PrivateEmail: this.contact.PrivateEmail,
            AgreementEmail: this.contact.Newsletter,
            AgreementSms: this.contact.Newsletter,
            EstateID: [ this.$route.params.estateId],
         
          };
                console.log(contact);

          axios
            .post(DefaultdataJson.Whise.Url + "contacts/create", contact, config)
            .then(response => {
              this.isLoaded = true;
              this.showMsg = true;
              (this.contact = {
                Name: "",
                FirstName: "",
                PrivateMobile: "",
                CountryId: 1,
                CrmOfficeID: [4381],
                StatusId: 1,
                LanguageId: "fr-BE",
                PrivateEmail: "",
                selected: "",
                checked: "",
                EstateID: [ ],

             }),
                console.log(this.contact.EstateIds);

            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
              window.scrollTo(0, 0);

    }
  }
};
</script>
<style scoped>
  select,
option {
  color: black;
}
.select,
option [disabled] {
  color: grey;
}
.greyed-select {
  color: grey !important;
}
.multiselect {
  border-radius: 0px;
}
.priceInput {
  border-radius: 0px;
}
.multiselect__placeholder {
  color: black !important;
  font-size: larger !important;
}
.check {
  border-color: black;
  border-radius: 0px;
}
input[type="checkbox"] {
  cursor: pointer;
  border: 0px;
}

.check:checked {
  filter: hue-rotate(175deg) brightness(160%);
  outline: 0;
  box-shadow: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

input:focus,
.input:active,
.input.active,
.input:focus:active {
  outline: 0;
  -webkit-box-shadow: inset 0 0.5px 0.5px rgba(0, 0, 0, 0.075), 0 0 5px rgba(223, 149, 35, 0.75);
  box-shadow: inset 0 0.5px 0.5px rgba(0, 0, 0, 0.075), 0 0 5px rgba(223, 149, 35, 0.75);
}

button:focus,
.button:active,
.button.active,
.button:focus:active {
  outline: 0;
  -webkit-box-shadow: inset 0 0.5px 0.5px rgba(0, 0, 0, 0.075), 0 0 5px rgba(223, 149, 35, 0.75);
  box-shadow: inset 0 0.5px 0.5px rgba(0, 0, 0, 0.075), 0 0 5px rgba(223, 149, 35, 0.75);
}

textarea:focus,
.textarea:active,
.textarea.active,
.textarea:focus:active {
  outline: 0;
  -webkit-box-shadow: inset 0 0.5px 0.5px rgba(0, 0, 0, 0.075), 0 0 5px rgba(223, 149, 35, 0.75);
  box-shadow: inset 0 0.5px 0.5px rgba(0, 0, 0, 0.075), 0 0 5px rgba(223, 149, 35, 0.75);
}
</style>
