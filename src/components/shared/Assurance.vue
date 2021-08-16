<template>
  <div>
   
     <div style="text-align:center;font-size:1.5rem;font-weight:bold ;margin-top:50px">
      <h1 style="font-size:2rem">We assist all your needs by providing insurances for</h1>
    </div>
    <div class="grid lg:grid-cols-3 gap-10 px-16 py-8 mt-10 infos">
       <div>
        <i class="fas fa-concierge-bell"></i>
         <h1>ADDITIONAL SERVICES</h1>
        <p>
          
            <!-- • WARRANTY SECURITY <br>
            • PUBLIC TENDER SECURITY<br>
            • LEGAL PROTECTION<br>
            • CIVIL LIABILITY OF DIVING SCHOOLS<br>
            • TRANSPORT<br> -->
           <section v-html="$t('ComponantAssurance.ADDITIONAL')"></section>

        

        </p>
      </div>

      <div>
        <i class="fas fa-user-shield"></i>
        <h1>SELF-EMPLOYED</h1>
        <p>
        
      • WARRANTY SECURITY<br>
      • GROUP HEALTH PROGRAMS<br>
      • PROFESSIONAL LIABILITY INSURANCE FOR HAIRDRESSERS<br>
      • LIABILITY<br>
      • LEGAL PROTECTION<br>
      • LEGAL INTERNET USER PROTECTION ARAG CYBER PROTECTION<br>

        
        </p>
      </div>
      
      <div>
        <i class="fas fa-house-user"></i>
         <h1> GREEN HOUSE</h1>
        <p>
         
            • WARRANTY SECURITY<br>
            • PHOTOVOLTAICS<br>
            • ENERGY<br>
            • ΒΙΟΜΑΖΑ<br>
            • ENERGY SAVING<br>
            • FREE ALTERNATIVE HEATING<br>
            • POLLUTANTS EXCHANGE<br>
            • HOUSEHOLD GENERATORS<br>

         
        </p>
      </div>
      <div>
        <i class="fas fa-building"></i>
         <h1>SMALL AND MEDIUM ENTERPRISES</h1>
        <p>
       
          • WARRANTY SECURITY<br>
          • CYBER INSURANCE<br>
          • LIABILITY<br>
          • LEGAL PROTECTION<br>
          • LEGAL PROTECTION OF HEALTH PROFESSIONS<br>
          • LEGAL PROTECTION OF PHOTOVOLTAICAL OWNERS<br>
          • LEGAL PROTECTION OF MANAGERS<br>
          • LEGAL PROTECTION OF CIVIL SERVANTS<br>
          • LEGAL PROTECTION OF PRIVATE EMPLOYEES<br>
          • LEGAL PROTECTION OF ACCOUNTANTS<br>

       
        </p>
      </div>
      <div>
        <i class="fas fa-city"></i>
        <h1>BIG COMPANIES</h1>
        <p>    
        • WARRANTY SECURITY<br>
        • CYBER INSURANCE<br>
        • GROUP HEALTH PROGRAMS<br>
        • LIABILITY<br>
        • LEGAL PROTECTION<br>
        • TRAVEL INSURANCE<br>
        • ENVIRONMENTAL RISKS - WASTE TRANSPORT<br>
        • PHARMACEUTICAL - PARAPARMACEUTICAL PRODUCTS - CLINICAL STUDIES<br>
        • SHIP INSURANCE<br>


    
        </p>
      </div>
      <div>
        <i class="fas fa-briefcase"></i>
        <h1>BUSINESS</h1>
        <p>    
          • WARRANTY SECURITY<br>
          • GROUP HEALTH PROGRAMS<br>
          • MEDICINE<br>
          • HOTELS<br>
          • AIRBNB RENTAL INSURANCE<br>
          • INSURANCE OF RENTED ROOMS<br>
          • industries<br>
          • CONSTRUCTION<br>
          • TRAVEL INSURANCE<br>
          • GROUP INSURANCE<br>
          • GROUP TRAVEL INSURANCE<br>

        </p>
      </div>
       <div style="overflow:auto;height:330px">
        <i class="fas fa-paw"></i>
         <h1>PET INSURANCE</h1>
        <p>
         
           • PETFirst PRODUCT<br>
           • PRIVATE BIRTH INSURANCE<br>
           • GROUP INSURANCE<br>
           • WISE ACT<br>
           • WISE DENTAL<br>
           • WISE DAEDALUS<br>
           • A 'AESTHETIC<br>
           • KIOSK SECURITY<br>
           • CYBER INSURANCE<br>
           • Pet Insurance (in the car)<br>
           • Pet Insurance (in a home or business)<br>
           • CIVIL VETERINARY LIABILITY<br>
           • LIMITED LIABILITY OF PET OWNER<br>
           • LEGAL PROTECTION OF A PET OWNER<br>
           • LOVE ME BACK<br>
           • STAND BY ME<br>
           • HORSE INSURANCE - BLOODSTOCK<br>
           • HOOLIE ANIMAL COVER<br>
           • EUROPEAN PET PASSPORT<br>
           • LIMITED LIABILITY OF PET OWNER<br>
         
        </p>
      </div>
        <div style="overflow:auto;height:330px">
        <i class="fas fa-heartbeat"></i>
        <h1>HEALTH</h1>
        <p>    
          • health card<br>
          • GROUP HEALTH PROGRAMS<br>
          • AIRCRAFT COVER DUE TO COVID-19<br>
          • Health Insurance<br>
          • PRIMARY CARE<br>
          • LIFE INSURANCE<br>
          • SECURITY OF ABROAD STUDENTS (ERASMUS)<br>
          • GROUP INSURANCE FOR AMATEUR ATHLETES<br>
          • TRAVEL SAFETY<br>
          • SAFETY OF FOREIGNERS<br>
          • General Liability Program "SCHOOL COVER"<br>
          • ESTATE<br>
          • WARRANTY SECURITY<br>
          • insurance<br>
          • TOURISM AND INTERRUPT BUS INSURANCE<br>
          • BICYCLE SAFETY<br>
          • E-SCOOTER SECURITY<br>
          • LEATHER BOAT INSURANCE<br>
          • ART SAFETY<br>
          • ELECTRIC CAR SAFETY<br>
          • SECURITY DRONE<br>
          • SAVINGS & INVESTMENTS<br>
          • PENSION<br>
          • INVESTMENT PROGRAMS<br>
          • INCOME INSURANCE<br>
          • ADDITIONAL SERVICES<br>
          • PERSONAL ACCIDENT INSURANCE<br>
          • LEGAL PROTECTION DRONE<br>
          • LEGAL FAMILY PROTECTION<br>
          • LEGAL PROTECTION OF PROPERTY OWNER<br>
          • INDIVIDUAL LEGAL PROTECTION<br>
          • CONSUMER LEGAL PROTECTION<br>
          • LEGAL PROTECTION OF A BUILDING MANAGER<br>
          • LEGAL PROTECTION OF ORDERS<br>
          • LEGAL INTERNET USER PROTECTION ARAG CYBER PROTECTION<br>

    
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
  name: "Strategy",
  components: {
    Multiselect,
    Footer,
  },
  
};
</script>
<style scoped>

span{
    color:orange;
    font-weight:bold;
}
i{
  color:orange;
  text-align: center!important;
  display:block;
  font-size: 2rem;
  margin-bottom:20px
}
.infos h1{
  text-align: center;
  margin-bottom: 20px;
  font-weight:bold;
}
@media (min-width: 1024px) {
  .textHeader {
    line-height: 6.5rem;
  }
}
</style>
