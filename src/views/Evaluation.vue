<template>
  <div class="">
    <div class="text-center flex justify-center	">
      <p
        class="font-bold text-l md:text-xl text-center	m-0 mt-10 text-center bg-green-200	bg-opacity-70 p-4 w-70 flex"
        v-if="showMsg"
      >
        Thank you for subscribing. We will contact you as soon as possible.
      </p>
    </div>
    <h2 class="font-bold text-xl md:text-4xl text-center p-10 py-10 md:py-16">
      EVALUATION
    </h2>
    <div class="px-4 md:px-16 lg:px-36 text-base lg:text-lg">
      <p>Do you want to sell your property ?</p>
      <p>
        Our experts provide an accurate evaluation based on the market trends and their experience
      </p>
      <p>Fill out the form below and we will contact you promptly</p>
    </div>
    <!-- form -->
    <form @submit.prevent="addContact()" class="px-4 md:px-16 lg:px-36 my-4 text-sm">
     
      <h2 class="text-center font-bold text-xl my-4">Contact</h2>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="my-2">Gender</label>
          <multiselect
            class="mt-2 mb-3"
            required
            v-model="ContactTitleId"
            label="shortDescription"
            track-by="shortDescription"
            item-value="id"
            :show-labels="false"
            :searchable="false"
            :options="genders"
            placeholder="Mlle / Mr"
            :close-on-select="true"
          >
          </multiselect>

          <!-- <select
            name="shortDescription"
            id=""
            class="px-3 py-2 my-2 border block w-full"
            :class="contact.ContactTitleId ? '' : 'greyed-select'"
            required
            v-model="contact.ContactTitleId"
          >
            <option value="" disabled selected hidden>Mr/Mlle</option>
            <option :value="gender.id" v-for="gender in genders" :key="gender.id"
              >{{ gender.shortDescription }}
            </option>
          </select> -->
        </div>
        <div>
          <label class="my-2">Full Name *</label>
          <input
            type="text"
            placeholder="Your Full name .."
            class="px-3 py-2 my-2 border block w-full"
            v-model="contact.Name"
            required
          />
        </div>
        <div>
          <label class="my-2">Email *</label>
          <input
            type="email"
            placeholder="Your Email address .."
            class="px-3 py-2 my-2 border block w-full"
            v-model="contact.PrivateEmail"
            required
          />
        </div>
        <div>
          <label class="my-2">Phone Number *</label>
          <input
            type="text"
            placeholder="Your Phone Number .."
            class="px-3 py-2 my-2 border block w-full"
            v-model="contact.PrivateMobile"
            required
          />
        </div>
      </div>

      <h2 class="text-center font-bold text-xl my-4">Address</h2>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="my-2">Address *</label>
          <input
            type="text"
            placeholder="Address"
            class="px-3 py-2 my-2 border block w-full"
            v-model="contact.Address1"
            required
          />
        </div>
        <div class>
          <label class="my-2">Number *</label>
          <input
            type="number"
            placeholder="Number .."
            class="px-3 py-2 my-2 border block w-full "
            v-model="contact.Number"
            required
          />
        </div>
        <div>
          <label class="my-2">City *</label>
          <input
            type="text"
            placeholder="City .."
            class="px-3 py-2 my-2 border block w-full"
            v-model="contact.City"
            required
          />
        </div>
        <div>
          <label class="my-2">PostCode *</label>
          <input
            type="text"
            placeholder="Postcode .."
            class="px-3 py-2 my-2 border block w-full"
            v-model="contact.Zip"
            required
          />
        </div>
      </div>

      <h2 class="text-center font-bold text-xl my-4 gap-4">
        Property description
      </h2>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="my-2">Transaction type</label>
          <multiselect
            class="mt-2 mb-3"
            required
            v-model="contact.TransactionType"
            label="name"
            track-by="name"
            item-value="id"
            :show-labels="false"
            :searchable="false"
            :options="$t('transactions')"
            placeholder="For Sale / For Rent"
            :close-on-select="true"
          >
          </multiselect>

          <!-- <select
            name=""
            id=""
            class="px-3 py-2 my-2 border block w-full"
            :class="contact.TransactionType ? '' : 'greyed-select'"
            required
            v-model="contact.TransactionType"
          >
            <option value="undefined" disabled selected hidden>For Sale/ For Rent </option>
            <option v-for="transaction in $t('transactions')" :key="transaction.id">{{
              transaction.name
            }}</option>
          </select> -->
        </div>
        <div>
          <label class="my-2">Property type</label>
          <multiselect
            class="mt-2 mb-3"
            required
            v-model="contact.PropertyType"
            label="name"
            track-by="name"
            item-value="id"
            :show-labels="false"
            :searchable="false"
            :options="$t('categories')"
            placeholder="Your Property type"
            :close-on-select="true"
          >
          </multiselect>

          <!-- <select
            name=""
            id="mySelect"
            class="px-3 py-2 my-2 border block w-full"
            :class="contact.PropertyType ? '' : 'greyed-select'"
            required
            v-model="contact.PropertyType"
          >
            <option value="undefined" disabled selected hidden>Your Property type </option>
            <option v-for="category in $t('categories')" :key="category.id">{{
              category.name
            }}</option>
          </select> -->
        </div>

        <div>
          <label class="my-2">Construction Year</label>
          <input
            type="text"
            placeholder="Year"
            class="px-3 py-2 my-2 border block w-full"
            v-model="contact.ConstructionYear"
          />
        </div>
        <div>
          <label class="my-2">Surface</label>
          <input
            type="text"
            placeholder="m²"
            class="px-3 py-2 my-2 border block w-full"
            v-model="contact.Surface"
          />
        </div>
        <div>
          <label class="my-2">Country</label>
          <multiselect
            class="mt-2 mb-3"
            required
            v-model="selected"
            label="name"
            track-by="name"
            item-value="id"
            :show-labels="false"
            :options="$t('countries')"
            placeholder="Countries..."
            :close-on-select="true"
            open-direction="bottom"
          >
          </multiselect>

          <!-- <v-select
            id=""
            class="px-3 py-2 my-2 border block w-full"
            required
            label="Country"
            item-text="name"
            item-value="id"
            :options="$t('countries')"
            v-model="selected"
            placeholder="Country"
          >
            <template v-slot:option="option">
              {{ option.name }}
            </template>
            <template v-slot:selected-option="option">
              {{ option.name }}
            </template>
          </v-select> -->
        </div>
        <div class="col-span-2 my-2">
          <label>Comments</label>
          <textarea class="w-full border border-2 h-32 px-3 py-2 mt-3" v-model="Comments"></textarea>
        </div>
      </div>
      <div class="text-center mt-4 mb-12">
         <button 
            class="text-center px-24 py-2 font-semibold bg-yellow-500 text-white transition duration-500 ease-in-out  hover:bg-yellow-600 transform hover:-translate-y-1  ...">
        Submit
      </button>
      </div>
     
    </form>
    <!-- form -->
        <Footer />

  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import axios from "axios";
import Multiselect from "vue-multiselect";
import _ from "lodash";
let DefaultdataJson = require('../config/default.json');


export default {
  name: "Evaluation",
  components: {
    Multiselect,
    Footer,
  },
  data() {
    return {
      filters: {
        keyword: "",
        countries: [],
      },
      styleOption: {
        color: "black",
      },
      showMsg: false,

      contact: {
        Name: "",
        FirstName: "",
        Address1: "",
        Address2: "",
        Number: "",
        Box: "",
        Zip: "",
        City: "",
        CountryId: "",
        PrivateTel: "",
        ContactTypeIds: [178477],
        AgreementEmail: true,
        AgreementSms: true,
        AgreementMailingCampaign: true,
        PrivateMobile: "",
        OfficeIds: [6644],
        StatusId: 1,
        LanguageId: "fr-BE",
        PrivateEmail: "",
        selected: "",
      },
      ContactTitleId: "",
      Comments: "",
      selected: "",
      options: [],
      transactions: [],
      categories: [],
      genders: [],
      countries: [],
    };
  },

  methods: {
   
    getGenders() {
      let authCredentials = {
        ClientId: 4668,
        OfficeId: 6644,
      };

      // let apiToken =
      //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlhdCI6MTYxMjMzOTQ3Mn0.eyJzZXJ2aWNlQ29uc3VtZXJJZCI6MjMzLCJ0eXBlSWQiOjQsImNsaWVudElkIjo0NjY4fQ.gDNwAXok3Fr4AR4kuJ12vVcytlmr0--bInx65euVxos";
      const config = {
        headers: {
           Authorization: `Bearer `+ DefaultdataJson.Whise.AuthToken,
          "Content-Type": "application/json",
        },
      };
      axios
        .post(DefaultdataJson.Whise.Url + "admin/clients/token", authCredentials, config)
        .then((response) => {
          let token = response.data.token;
          // const config = {
          //   headers: {
          //     // Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlhdCI6MTYxMjMzOTA2Mn0.eyJzZXJ2aWNlQ29uc3VtZXJJZCI6MjMzLCJ0eXBlSWQiOjQsImNsaWVudElkIjo0NjY4fQ.mXvm76zTWTrgba9mGU8ny_I4ZZvmXGaRfnpO7mfMhBo`,
          //     Authorization: `Bearer `+ DefaultdataJson.Whise.AuthToken,
          //     "Content-Type": "application/json",
          //   },
          // };

          axios
            .post(DefaultdataJson.Whise.Url + "contacts/titles/list", authCredentials, config)
            .then((response) => {
              this.genders = response.data.contactTitles;
            })
            .catch((error) => {
              console.log(error);
            });
        })

        .catch((error) => {
          console.log(error);
        });
    },
    addContact() {
      let authCredentials = {
        ClientId: 4668,
        OfficeId: 6644,
      };

      // let apiToken =
      //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlhdCI6MTYxMjMzOTQ3Mn0.eyJzZXJ2aWNlQ29uc3VtZXJJZCI6MjMzLCJ0eXBlSWQiOjQsImNsaWVudElkIjo0NjY4fQ.gDNwAXok3Fr4AR4kuJ12vVcytlmr0--bInx65euVxos";

      const config = {
        headers: {
          Authorization: `Bearer `+ DefaultdataJson.Whise.AuthToken,
          "Content-Type": "application/json",
        },
      };

      axios
        .post(DefaultdataJson.Whise.Url + "admin/clients/token", authCredentials, config)
        .then((response) => {
          let token = response.data.token;
          const config = {
            headers: {
              Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlhdCI6MTYxMjMzOTA2Mn0.eyJzZXJ2aWNlQ29uc3VtZXJJZCI6MjMzLCJ0eXBlSWQiOjQsImNsaWVudElkIjo0NjY4fQ.mXvm76zTWTrgba9mGU8ny_I4ZZvmXGaRfnpO7mfMhBo`,
              "Content-Type": "application/json",
            },
          };

          let contact = {
            Name: this.contact.Name,
            FirstName: this.contact.FirstName,
            Address1: this.contact.Address1,
            Address2: "",
            Number: this.contact.Number,
            Box: "",
            Zip: this.contact.Zip,
            City: this.contact.City,
            PrivateTel: this.contact.PrivateTel,
            ContactTitleId: this.ContactTitleId.id,
            ContactTypeIds: [178477],
            Comments:
              this.contact.TransactionType.name +
              ", " +
              this.contact.PropertyType.name +
              ", " +
              this.contact.ConstructionYear +
              ", " +
              this.contact.Surface +
              "m²",
            PrivateMobile: this.contact.PrivateMobile,
            OfficeIds: [6644],
            CountryId: this.selected.id,
            StatusId: 1,
            LanguageId: "fr-BE",
            PrivateEmail: this.contact.PrivateEmail,
            AgreementEmail: true,
            AgreementSms: true,
            AgreementMailingCampaign: true,
          };
          console.log(contact);
          axios
            .post( DefaultdataJson.Whise.Url + "contacts/create", contact, config)
            .then((response) => {
              this.showMsg = true;

              (this.contact.ContactTitleId = ""),
                (this.contact.ContactTypeIds = ""),
                (this.selected = ""),
                (this.contact.Name = "");
              this.contact.PrivateEmail = "";
              this.contact.PrivateMobile = "";
              this.contact.FirstName = "";
              (this.contact.Address1 = ""),
                (this.contact.PrivateTel = ""),
                (this.contact.City = ""),
                (this.contact.Zip = ""),
                (this.contact.Comments = "");
              this.contact.TransactionType = "";
              this.contact.PropertyType = "";
              this.contact.Year = "";
              this.contact.Surface = "";
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
      window.scrollTo(0, 0);


      
    },
    
  },

  mounted() {
    this.getGenders();
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


<style scoped>
.shadow-all {
  -webkit-box-shadow: 0px 0px 3px gray;
  -moz-box-shadow: 0px 0px 4px gray;
  box-shadow: 0px 0px 4px gray;
}
</style>
<style scoped>
.placeholder{
  color: darkslategray;
}
select,
option {
  color: black;
}
.select,
option [disabled] {
  color: darkslategray;
}
.greyed-select {
  color: darkslategray !important;
}
input:focus, .input:active, .input.active, .input:focus:active {
  outline: 0;
  -webkit-box-shadow: inset 0 0.5px 0.5px rgba(0,0,0,.075),0 0 5px rgba(223, 149, 35, 0.75);
  box-shadow: inset 0  0.5px 0.5px rgba(0,0,0,.075),0 0 5px rgba(223, 149, 35, 0.75);
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}
label{
color:black;
}

button:focus,
.button:active,
.button.active,
.button:focus:active {
  outline: 0;
  -webkit-box-shadow: inset 0 0.5px 0.5px rgba(0, 0, 0, 0.075), 0 0 5px rgba(223, 149, 35, 0.75);
  box-shadow: inset 0 0.5px 0.5px rgba(0, 0, 0, 0.075), 0 0 5px rgba(223, 149, 35, 0.75);
}

</style>
