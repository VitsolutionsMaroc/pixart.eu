<template>
  <main class="bg-gray-100">
    <div class="container max-w-screen-md mx-auto px-6">
      <div class="text-center flex justify-center	">
        <p
          class="font-bold text-l md:text-xl text-center	m-0 mt-8 mb-6 text-center bg-green-200	bg-opacity-70 p-4 w-70 flex"
          v-if="showMsg"
        >
          Thank you for subscribing. We will contact you as soon as possible.
        </p>
      </div>
      <h3 class="text-center font-semibold text-3xl mt-4">Contact Us</h3>
      <div class="mt-2 mx-auto w-12 h-2 bg-yellow-600"></div>
      <form @submit.prevent="addContact()" class="mt-12">
        <div class="grid grid-cols-2 gap-6">
          <div>
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
          <div>
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
          </div>
          <div>
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
          <div>
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
          <div class="col-span-2">
            <label class="text-gray-600">Message</label>
            <textarea
              required
              type="text"
              placeholder="Write your message here..."
              class="my-2 shadow-all w-full pr-10 pl-4 py-3 text-gray-700"
              name=""
              id=""
              cols="30"
              rows="8"
              v-model="contact.Comments"
            ></textarea>
          </div>
        </div>
        <div class="flex items-center mt-6">
          <input
            required
            type="checkbox"
            id="register"
            class=" check h-4 w-4 text-gray-500 border rounded mr-2"
            v-model="contact.AgreementMailingCampaign"
          />
          <label class="text-gray-600 font-meduim" for="register">Register for news letter</label>
        </div>
        <div class="flex items-center mt-2">
          <input
            required
            type="checkbox"
            id="accept_terms"
            class=" check h-4 w-4 text-gray-500 border rounded mr-2"
            v-model="contact.Newsletter"
          />
          <label class="  text-gray-600 font-meduim" for="accept_terms">Accept our terms </label>
        </div>
        <div class="text-center mt-4">
          <button
            class="text-center px-24 py-2 font-semibold bg-yellow-500 text-white transition duration-500 ease-in-out  hover:bg-yellow-600 transform hover:-translate-y-1  ..."
          >
            Send
          </button>
        </div>
      </form>
    </div>
    <div style="text-align:center;font-size:1.5rem;font-weight:bold ;margin-top:50px">
      <h1 style="font-size:2rem">OUR ADRESSES</h1>
    </div>
    <div class="grid lg:grid-cols-3 gap-10 px-16 py-8 mt-10 infos">
       <div>
       <i class="fas fa-map-marker-alt"></i>
         <h1> IBP sa</h1>
        <p>
           277 Av. d’Auderghem – 1040 Brussels <br>
             <i
                class="fas fa-mobile"
                style="color:orange; margin-right:10px"
              ></i>
              +3227430380
        </p>
         <a
              target="_blank"
              rel="noopener noreferrer"
              class=" text-base-2 text-yellow-500"
              style="font-size:0.8rem"
              href="https://www.ibp.be/"
              >www.ibp.be</a
            >
      </div>

     
      
      <div>
       <i class="fas fa-map-marker-alt"></i>
         <h1>IBPG</h1>
        <p>
          Kolokotroni 9 –Kifisia 14562 & Agiou Alexandrou 7 –Paleo Faliro
            17561–  Kολοκοτρώνη 9 -Kηφισιά 14562 & Αγίου Αλεξάνδρου 7,
            175 61 Παλαιό Φάληρο<br />
            <span
              ><i
                class="fas fa-mobile"
                style="color:orange; margin-right:10px"
              ></i>
              +30 2106918330</span
            >
        </p>
      </div>
      <div>
       <i class="fas fa-map-marker-alt"></i>
         <h1>Pixart</h1>
        <p>
        8 Grand Rue Clervaux - L -9711 Luxembourg<br />
            <span
              ><i
                class="fas fa-mobile"
                style="color:orange; margin-right:10px"
              ></i
              >+352661373707</span
            >
        </p>
      </div>
      <div>
        <i class="fas fa-map-marker-alt"></i>
        <h1>Dubai - UAE</h1>
        <p>
         ICON TOWER - Office 1003<br />
            AL Thanyah First
        </p>
      </div>
      
      
      </div>
    <div class="my-6">
      <div class="w-full relative" style="height: 600px;">
        <iframe
          class="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.115500598798!2d-13.205914385474111!3d27.15265595625698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc377385dffcb983%3A0x8babf333b39745c2!2sBUC%20SAHARA!5e0!3m2!1sfr!2s!4v1610589576752!5m2!1sfr!2s"
          aria-hidden="false"
          tabindex="0"
        ></iframe>
        <div class="shadow-all bg-white absolute w-70 m-24 top-0 left-0">
          <h3 class="bg-gray-200 font-bold text-xl w-full px-4 py-6 text-center border-b">
            Contact
          </h3>
          <ul class="p-5 border-b ml-8">
            <div class="flex just ">
              <img
                class=" mb-4 mr-4 w-5 h-5 md:w-10 md:h-10"
                src="../assets/img/iconmonstr-email-3-96 (2).png"
              />
              <li class="mb-2 mt-2">info@pixart.be</li>
            </div>
            <div class="flex just ">
              <img
                class=" mb-4 mr-4 w-5 h-5 md:w-10 md:h-10"
                src="../assets/img/iconmonstr-phone-1-96.png"
              />
              <li class="mb-2">+352661373707</li>
            </div>
            <div class="flex just ">
              <img
                class=" mb-4 mr-4 w-5 h-5 md:w-10 md:h-10"
                src="../assets/img/iconmonstr-building-18-96.png"
              />
              <li class="mb-2 mt-2">8  Grand Rue Clervaux   -   L -9711 Luxembourg</li>
            </div>
          </ul>
          
         
        </div>
      </div>
    </div>
     <div>
   
     
    </div>
    <Footer />
  </main>
</template>

<style scoped>
.shadow-all {
  -webkit-box-shadow: 0px 0px 4px gray;
  -moz-box-shadow: 0px 0px 4px gray;
  box-shadow: 0px 0px 4px gray;
}
</style>
<script>
import Footer from "@/components/Footer.vue";
import axios from "axios";
import Multiselect from "vue-multiselect";
import _ from "lodash";
import JQuery from "jquery";
let DefaultdataJson = require('../config/default.json');

export default {
  name: "Contactus",
  components: {
    Multiselect,
    Footer,
    JQuery,
  },
  
  data() {
    return {
      filters: {
        keyword: "",
      },
      styleOption: {
        color: "black",
      },
      showMsg: false,
      isLoaded: false,

      contact: {
        Name: "",
        FirstName: "",
        CountryId: "",
        ContactTypeIds: "",
        AgreementEmail: false,
        AgreementSms: false,
        AgreementMailingCampaign: false,
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
    addContact: function() {
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
        .post( DefaultdataJson.Whise.Url + "admin/clients/token", authCredentials, config)
        .then((response) => {
          let token = response.data.token;
          // const config = {
          //   headers: {
          //     Authorization: 'Bearer ' + DefaultdataJson.Whise.AuthToken,
          //     "Content-Type": "application/json",
          //   },
          // };

          let contact = {
            Name: this.contact.Name,
            FirstName: this.contact.FirstName,
            PrivateMobile: this.contact.PrivateMobile,
            OfficeIds: [6644],
            StatusId: 1,
            CountryId: 1,
            LanguageId: "fr-BE",
            Comments: this.contact.Comments,
            PrivateEmail: this.contact.PrivateEmail,
            AgreementEmail: this.contact.Newsletter,
            AgreementSms: this.contact.Newsletter,
            AgreementMailingCampaign: true,
          };

          console.log(contact);

          axios
            .post(DefaultdataJson.Whise.Url + "contacts/create", contact, config)
            .then((response) => {
              this.isLoaded = true;
              this.showMsg = true;
              (this.contact = {
                Name: "",
                FirstName: "",
                AgreementEmail: "",
                AgreementSms: "",
                AgreementMailingCampaign: "",
                PrivateMobile: "",
                CountryId: 1,
                OfficeIds: [6644],
                StatusId: 1,
                LanguageId: "fr-BE",
                PrivateEmail: "",
                selected: "",
                checked: "",
              }),
                console.log(this.contact.AgreementMailingCampaign);
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
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

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

.infos p{
  line-height: 1.8;
}
.infos i{
  margin-bottom:10px;
 font-size: 1.25rem;
}
</style>
