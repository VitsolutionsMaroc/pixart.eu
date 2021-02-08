<template>
  <div class="">
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
          <select
            name=""
            id=""
            class="px-3 py-2 my-2 border block w-full"
            required
            v-model="contact.ContactTitleId"
          >
            <option value="undefined" disabled selected hidden >Mr/Mlle</option>
            <option :value="gender.id" v-for="gender in genders" :key="gender.id"
              >{{ gender.shortDescription }}
            </option>
          </select>
        </div>
        <div>
          <label class="my-2">Name</label>
          <input
            type="text"
            placeholder="Your Full name .."
            class="px-3 py-2 my-2 border block w-full"
            v-model="contact.Name"
          />
        </div>
        <div>
          <label class="my-2">Email *</label>
          <input
            type="text"
            placeholder="Your Email address .."
            class="px-3 py-2 my-2 border block w-full"
            v-model="contact.PrivateEmail"
          />
        </div>
        <div>
          <label class="my-2">Phone Number *</label>
          <input
            type="text"
            placeholder="Your Phone Number .."
            class="px-3 py-2 my-2 border block w-full"
            v-model="contact.PrivateMobile"
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
          />
        </div>
        <div>
          <label class="my-2">Number *</label>
          <input
            type="text"
            placeholder="Number .."
            class="px-3 py-2 my-2 border block w-full"
            v-model="contact.PrivateTel"
          />
        </div>
        <div>
          <label class="my-2">City *</label>
          <input
            type="text"
            placeholder="City .."
            class="px-3 py-2 my-2 border block w-full"
            v-model="contact.City"
          />
        </div>
        <div>
          <label class="my-2">PostCode *</label>
          <input
            type="text"
            placeholder="Postcode .."
            class="px-3 py-2 my-2 border block w-full"
            v-model="contact.Zip"
          />
        </div>
      </div>

      <h2 class="text-center font-bold text-xl my-4 gap-4">
        Property description
      </h2>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="my-2">Transaction type</label>
          <select
            name=""
            id=""
            class="px-3 py-2 my-2 border block w-full"
            required
            v-model="contact.TransactionType"
          >
            <option value="undefined" disabled selected hidden 
              >For Sale/ For Rent
            </option>
            <option v-for="transaction in $t('transactions')" :key="transaction.id">{{
              transaction.name
            }}</option>
          </select>
        </div>
        <div >
          <label class="my-2">Property type</label>
          <select
            name=""
            id=""
            class="px-3 py-2 my-2 border block w-full"
            required
            v-model="contact.PropertyType"
          >
            <option value="undefined" disabled selected hidden>Your Property type </option>
            <option class="" v-for="category in $t('categories')" :key="category.id">{{
              category.name
            }}</option>
          </select>
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
          <v-select
            id="mySelect"
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
          </v-select>
        </div>
        <div class="col-span-2 my-2">
          <label>Comments</label>
          <textarea class="w-full border border-2 h-32" v-model="contact.Comments"></textarea>
        </div>
      </div>
      <button class="bg-yellow-500 text-white px-4 py-2 mx-auto text-center ">
        Submit
      </button>
    </form>
    <!-- form -->
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import axios from "axios";
import Multiselect from "vue-multiselect";
import _ from "lodash";
import vSelect from "vue-select";

export default {
  name: "Evaluation",
  components: {
    Multiselect,
    Footer,
    vSelect,
  },
  data() {
    return {
      filters: {
        keyword: "",
        countries: [],
      },
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
        ContactTitleId: [],
        ContactTypeIds: [178477],
        AgreementEmail: true,
        AgreementSms: true,
        AgreementMailingCampaign: true,
        Comments: "",
        PrivateMobile: "",
        OfficeIds: [6644],
        StatusId: 1,
        LanguageId: "fr-BE",
        Name: "",
        PrivateEmail: "",
        selected: "",
      },
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

      let apiToken =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlhdCI6MTYxMjMzOTQ3Mn0.eyJzZXJ2aWNlQ29uc3VtZXJJZCI6MjMzLCJ0eXBlSWQiOjQsImNsaWVudElkIjo0NjY4fQ.gDNwAXok3Fr4AR4kuJ12vVcytlmr0--bInx65euVxos";
      const config = {
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
      };
      axios
        .post("https://api.whise.eu/v1/admin/clients/token", authCredentials, config)
        .then((response) => {
          let token = response.data.token;
          const config = {
            headers: {
              Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlhdCI6MTYxMjMzOTA2Mn0.eyJzZXJ2aWNlQ29uc3VtZXJJZCI6MjMzLCJ0eXBlSWQiOjQsImNsaWVudElkIjo0NjY4fQ.mXvm76zTWTrgba9mGU8ny_I4ZZvmXGaRfnpO7mfMhBo`,
              "Content-Type": "application/json",
            },
          };

          axios
            .post("https://api.whise.eu/v1/contacts/titles/list", authCredentials, config)
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

      let apiToken =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlhdCI6MTYxMjMzOTQ3Mn0.eyJzZXJ2aWNlQ29uc3VtZXJJZCI6MjMzLCJ0eXBlSWQiOjQsImNsaWVudElkIjo0NjY4fQ.gDNwAXok3Fr4AR4kuJ12vVcytlmr0--bInx65euVxos";

      const config = {
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
      };

      axios
        .post("https://api.whise.eu/v1/admin/clients/token", authCredentials, config)
        .then((response) => {
          let token = response.data.token;
          console.log(token);
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
            Number: this.contact.PrivateTel,
            Box: "",
            Zip: this.contact.Zip,
            City: this.contact.City,
            CountryId: this.selected,
            PrivateTel: this.contact.PrivateTel,
            ContactTitleId: [],
            ContactTypeIds: [178477],
            Comments:
              this.contact.TransactionType +
              ", " +
              this.contact.PropertyType +
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
            .post("https://api.whise.eu/v1/contacts/create", contact, config)
            .then((response) => {
              console.log(this.selected);
              console.log(response);
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
    },
  },

  mounted() {
    this.getGenders();
  },
};
</script>

<style>
select:required:invalid:disabled {
  color: gray;
}
select, option {
  color:black;
}
select, option [diasbled]{
  color: #7f8c9b;
}
#mySelect .v-select .dropdown-toggle {
  border: none;
}
.v-select__selection,
.v-select__selection--comma,
.v-select.v-text-field input {
  color: blue !important;
}
#vs1__combobox {
  border: none;
}
.vs__selected-options .vs__search {
  color: #7f8c9b;
}
.vs__actions .vs__clear {
  color: black;
}
.select .placeholder {
  color: gray;
}
</style>
