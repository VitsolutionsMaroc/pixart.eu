<template>
  <div>
   <div class="grid lg:grid-cols-2 gap-10 px-16 py-8 mt-10">
      <div>
        <h1 class="text-4xl md:text-2xl mb-6" style="text-align: justify;">REAL ESTATE STRATEGY</h1>
        <p style="text-align: justify;">
            Pixart Real Estate controls sales through direct acquisition of assets, 
            land (asset deal) and share deal (acquisition of the company that owns the assets). 
            We analyze the profile of the company in the event of 
            a share deal, and set up contractual mechanisms to control all aspect.


        </p>
      </div>
      <div>
        <img class="w-full" src="../../assets/img/managment.jpg" alt="<a href='https://fr.freepik.com/photos/ordinateur'>Ordinateur photo créé par pch.vector - fr.freepik.com</a>" />
      </div>
    </div>
    <div class="grid lg:grid-cols-2 gap-10 px-16 py-8 mt-10">
        <div>
        <img class="w-full" src="../../assets/img/residance.jpg" alt="<a href='https://fr.freepik.com/photos/ordinateur'>Ordinateur photo créé par pch.vector - fr.freepik.com</a>" />
      </div>
      <div>
        <h1 class="text-4xl md:text-2xl mb-6" style="text-align: justify;">ASSET PROPERTY MANAGEMENT</h1>
        <p style="text-align: justify;">
            Pixart Real Estate supports you in the management of your real estate management
             limiting real estate unemployment, analyzes all rental leases, negotiates contracts
              with suppliers, external stakeholders, takes protective measures
             when they are necessary, replaces you in all your obligations inherent to the lessor. 


        </p>
      </div>
      
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import axios from "axios";
import Multiselect from "vue-multiselect";
import _ from "lodash";

export default {
  name: "Corporate",
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
            .post("https://api.whise.eu/v1/contacts/create", contact, config)
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
<style scoped>

span{
    color:orange;
    font-weight:bold;
}
@media (min-width: 1024px) {
  .textHeader {
    line-height: 6.5rem;
  }
}
</style>
