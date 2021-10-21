<template>
  <div>
    <div class="slide  lg:h-screen flex justify-center items-center">
      <div
        class="textHeader text-white text-lg md:text-4xl lg:text-6xl text-center "
      >
        <p style="font-size:2rem;padding:30px 20px;">
          <section v-html="$t('About.titleAbout')"></section>
        </p>
      </div>
    </div>
    <!-- Vision section -->
    <div class="text-center py-4 px-4 md:px-32 mt-20 mb-20">
      <h2 class="text-xl md:text-4xl font-bold my-2 mb-10">{{ $t("About.OURTEAM")}}</h2>
      <p class="text-sm  md:text-center" style="font-size:1.3rem;line-height: 1.6;text-align: initial;">
      {{ $t("About.Team") }}
      </p>
    </div>
    <!-- Vision section -->
    <!-- fees -->
      <div class="text-center py-4 px-4 md:px-32 mt-20 mb-20" style="background:rgb(207 206 206)">
        <div>
          <h2 class="text-xl md:text-4xl font-bold my-2 mb-10">{{ $t("About.OURFEES") }}</h2>
        <p>{{ $t("About.FeesText") }}</p>
        </div>
         
    <!-- about section -->
    <div class="grid lg:grid-cols-2 gap-10 px-16 py-8 mt-10">
      <div>
        <h1 class="text-4xl md:text-2xl mb-6" >{{ $t("About.Investyourmoney") }}</h1>
        <p  style="text-align: initial;">
         {{ $t("About.MoneyText") }}
        </p>
      </div>
      <div>
        <img class="w-full" src="../assets/img/invest.jpg" alt="<a href='https://fr.freepik.com/photos/ville'>Ville photo créé par jcomp - fr.freepik.com</a>" />
      </div>
    </div>
    <div class="grid lg:grid-cols-2 gap-10 px-16 py-8 mt-10">
      <div>
        <img class="w-full" src="../assets/img/investers.jpg" alt="<a href='https://fr.freepik.com/photos/carte-visite'>Carte de visite photo créé par rawpixel.com - fr.freepik.com</a>" />
      </div>
      <div>
        <h1 class="text-4xl md:text-2xl mb-6" style="text-align: justify;">{{ $t("About.Greese") }}</h1>
        <p  style="text-align: initial;">
          {{ $t("About.GreesetEXT") }}
        </p>
      </div>
      
    </div>
    <!-- about section -->
     
      </div>

    <!-- end_fees -->
    <div class="grid lg:grid-cols-2 gap-10 px-16 py-8 mt-10">
      
      <div>
        <h1 class="text-4xl md:text-2xl mb-6" >{{ $t("About.iBPGreese") }}</h1>
        <p style="text-align: initial;">
            {{ $t("About.IBPText") }}
        </p>
      </div>
      <div>
        <img class="w-full" src="../assets/img/main1.jpg" alt="<a href='https://www.freepik.com/photos/house'>House photo created by freepik - www.freepik.com</a>"/>
      </div>
    </div>
    <!-- Services -->
   
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import axios from "axios";
import Multiselect from "vue-multiselect";
import _ from "lodash";

export default {
  name: "About",
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
.slide {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
    url("../assets/img/background2.jpg");
  background-size: cover;
}
@media (min-width: 1024px) {
  .textHeader {
    line-height: 6.5rem;
  }
}
</style>
