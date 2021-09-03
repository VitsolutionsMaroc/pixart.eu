<template>
  <main class="bg-gray-100">
    <div class="container max-w-screen-md mx-auto px-6">
      <div class="text-center flex justify-center	">
        <p
          class="font-bold text-l md:text-xl text-center	m-0 mt-5 text-center bg-green-200	bg-opacity-70 p-4 w-70 flex mb-5"
          v-if="showMsg"
        >
           {{ $t("Contact.SuccessMessage") }}
        </p>
      </div>
      <h3 class="text-center font-semibold text-3xl">{{ $t("FilterHome.Search") }}</h3>
      <div class="mt-2 mx-auto w-12 h-2 bg-yellow-600"></div>
      <form @submit.prevent="addContact()" class="mt-5" ref="clear">
        <div>
          <div class="grid grid-cols-4 gap-6">
            <div class="col-span-2">
              <label class="text-gray-600 text-transparent"></label>
              <multiselect
                required
                class="flex items-center mt-2 mb-6 shadow-all bg-white "
                v-model="contact.TransactionType.id"
                label="name"
                track-by="name"
                item-value="id"
                :show-labels="false"
                :searchable="false"
                :options="$t('transactions')"
                :placeholder="$t('EsatateFilter.Transaction')"
                :close-on-select="true"
              >
              </multiselect>
            </div>
            <div>
             
              <div class="flex items-center mt-2 mb-6  bg-white priceInput">
                <input
                  required
                  type="number"
                  :placeholder="$t('EsatateFilter.MinPrice')"
                  class="w-full pr-10 pl-4 py-3  shadow-all text-gray-700 h-11 "
                  v-model="contact.PriceMin"
                />
              </div>
            </div>
            <div>
              
              <div class="flex items-center mt-2 mb-6  priceInput">
                <input
                  required
                  type="number"
                  :placeholder="$t('EsatateFilter.MaxPrice')"
                  class="w-full pr-10 pl-4 py-3 shadow-all text-gray-700 h-11"
                  v-model="contact.PriceMax"
                />
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <div class="flex items-center mt-2 mb-6">
              <input
                required
                type="number"
                class="w-full pr-10 pl-4 py-3 shadow-all text-gray-700 h-11  ring-4	"
                v-model="contact.ZipCodes"
                :placeholder="$t('EsatateFilter.zipCodes')"
              />
            </div>

            <div>
              <multiselect
                required
                class="flex items-center mt-2 mb-6 shadow-all  "
                v-model="selected"
                label="name"
                track-by="name"
                item-value="id"
                :show-labels="false"
                :options="$t('countries')"
               :placeholder="$t('FilterHome.Countries')"
                :close-on-select="true"
                open-direction="bottom"
              >
              </multiselect>
            </div>
          </div>
          <div class="mt-6">
            <h4 class="text-lg font-meduim mb-4">{{ $t("LookingFor.Type") }}</h4>
            <div class="px-9 grid grid-cols-4 gap-3">
              <div
                class="flex items-center"
                v-for="category in $t('categories')"
                :key="category.id"
              >
                <input
                  required
                  :value="category.id"
                  :id="category.id"
                  name="category"
                  type="radio"
                  class="check h-4 w-4 text-gray-700 border  mr-2"
                  v-model="checked"
                />
                <label class=" checkboxLabel text-gray-600 font-semibold" :for="category.id">{{
                  category.name
                }}</label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-center font-semibold text-3xl mt-12">
            {{ $t("LookingFor.YourContactDetails") }}
          </h3>
          <div class="mt-2 mx-auto w-16 h-2 bg-yellow-600"></div>
          <div class="mt-5">
            <div class="grid grid-cols-2 gap-6">
              <div>
                <label class="text-gray-600">{{ $t("Contact.FirstName") }} *</label>
                <div class="flex items-center my-2 shadow-all">
                  <input
                    required
                    type="text"
                    :placeholder="$t('Contact.PlaceHolderName')"
                    class="w-full pr-10 pl-4 py-3 text-gray-700"
                    v-model="contact.FirstName"
                  />
                </div>
              </div>
              <div>
                <label class="text-gray-600">{{ $t("Contact.LastName") }} *</label>
                <div class="flex items-center my-2 shadow-all">
                  <input
                    required
                    type="text"
                   :placeholder="$t('Contact.PlaceHolderLast')"
                    class="w-full pr-10 pl-4 py-3 text-gray-700"
                    v-model="contact.Name"
                  />
                </div>
              </div>
              <div>
                <label class="text-gray-600">{{ $t("Contact.Email") }} </label>
                <div class="flex items-center my-2 shadow-all">
                  <input
                    required
                    type="email"
                    :placeholder="$t('Contact.EmailHolder')"
                    class="w-full pr-10 pl-4 py-3 text-gray-700"
                    v-model="contact.PrivateEmail"
                  />
                </div>
              </div>
              <div>
                <label class="text-gray-600">{{ $t("Contact.PhoneNumber") }} </label>
                <div class="flex items-center my-2 shadow-all">
                  <input
                    required
                    type="number"
                    :placeholder="$t('Contact.textTel')"
                    class="w-full pr-10 pl-4 py-3 text-gray-700"
                    v-model="contact.PrivateMobile"
                  />
                </div>
              </div>
            </div>
            <div class="text-center mt-5 mb-5">
              <button
                class="text-center px-24 py-2 font-semibold bg-yellow-500 text-white transition duration-500 ease-in-out  hover:bg-yellow-600 transform hover:-translate-y-1  ..."
              >
               {{ $t("FooterComponant.Submit") }}
              </button>
              <!-- <button type="button" class="bg-rose-600 ..." v-if="isLoaded">
                  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                  </svg>
                  Processing
              </button> -->
            </div>
          </div>
        </div>
      </form>
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
  name: "Evaluation",
  components: {
    Multiselect,
    Footer,
    JQuery,
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
      isLoaded: false,

      contact: {
        Name: "",
        FirstName: "",
        CountryId: "",
        ContactTypeIds: "",
        AgreementEmail: true,
        AgreementSms: true,
        AgreementMailingCampaign: true,
        PrivateMobile: "",
        OfficeIds: [6644],
        StatusId: 1,
        TransactionType: { id: "" },
        LanguageId: "fr-BE",
        PrivateEmail: "",
        selected: "",
        checked: "",

        SearchCriteria: [
          {
            PurposeId: "",
            CategoryId: "",
            PriceMax: "",
            PriceMin: "",
            ZipCodes: [],
          },
        ],
      },
      selected: "",
      options: [],
      transactions: [],
      categories: [],
      countries: [],
      checked: "",
    };
  },

  methods: {
    getTransactionType(id) {
      if (id === 2) {
        return 5;
      } else if (id === 1) {
        return 4;
      } else if (id === 3) {
        return 4;
      }
    },

    addContact: function() {
      console.log(event.target);
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

          let contact = {
            Name: this.contact.Name,
            FirstName: this.contact.FirstName,
            Zip: this.contact.Zip,
            SearchCriteria: [
              {
                CountryId: this.selected.id,
                PurposeId: this.contact.TransactionType.id.id,
                CategoryId: this.checked,
                PriceMax: this.contact.PriceMax,
                PriceMin: this.contact.PriceMin,
                ZipCodes: [this.contact.ZipCodes],
              },
            ],

            ContactTypeIds: this.getTransactionType(this.contact.TransactionType.id.id),
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
            .post(DefaultdataJson.Whise.Url + "contacts/create", contact, config)
            .then((response) => {
              this.isLoaded = true;
              this.showMsg = true;
              (this.contact = {
                Name: "",
                FirstName: "",
                CountryId: "",
                ContactTypeIds: "",
                AgreementEmail: true,
                AgreementSms: true,
                AgreementMailingCampaign: true,
                PrivateMobile: "",
                OfficeIds: [6644],
                StatusId: 1,
                TransactionType: { id: "" },
                LanguageId: "fr-BE",
                PrivateEmail: "",
                selected: "",
                checked: "",
                SearchCriteria: [
                  {
                    PurposeId: "",
                    CategoryId: "",
                    PriceMax: "",
                    PriceMin: "",
                    ZipCodes: [],
                  },
                ],
              }),
                console.log(this.contact.ContactTypeIds);

              // this.contact.TransactionType = "";
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
  filter: hue-rotate(172deg);
}
.check:checked {
  outline: 0;
  box-shadow: none;
}
input[type="radio"] {
  cursor: pointer;
  border: 0px;
  outline: 0;
  box-shadow: none;
}
.check:checked + .checkboxLabel {
  color: #d97706 !important;
  outline: 0;
  box-shadow: none;
}
input[type="radio"] {
  -webkit-appearance: checkbox; /* Chrome, Safari, Opera */
  -moz-appearance: checkbox; /* Firefox */
  -ms-appearance: checkbox; /* not currently supported */
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="radio"] {
  -webkit-appearance: checkbox;
  -moz-appearance: checkbox;
  -ms-appearance: checkbox; /* not currently supported */
  -o-appearance: checkbox; /* not currently supported */
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
input[type="radio"]:focus,
.input[type="radio"]:active,
.input[type="radio"].active,
.input[type="radio"]:focus:active {
  outline: 0;
  -webkit-box-shadow: 0;
  box-shadow: none;
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
