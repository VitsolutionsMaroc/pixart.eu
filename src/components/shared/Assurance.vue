<template>
  <div>
   
     <div style="text-align:center;font-size:1.5rem;font-weight:bold ;margin-top:50px">
      <h1 style="font-size:2rem">We assist all your needs by providing insurances for</h1>
    </div>
    <div class="grid lg:grid-cols-3 gap-10 px-16 py-8 mt-10 infos">
       <div>
        <i class="fas fa-concierge-bell"></i>
         <h1>{{ $t("ComponantAssurance.ADDITIONALSERVICES") }}</h1>
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
        <h1><h1>{{ $t("ComponantAssurance.Self") }}</h1></h1>
        <p>
        
      <section v-html="$t('ComponantAssurance.SELFEMPLOYED')"></section>
        
        </p>
      </div>
     
      <div>
        <i class="fas fa-house-user"></i>
         <h1> {{ $t("ComponantAssurance.GREENHOUSE") }}</h1>
        <p>
         
         <section v-html="$t('ComponantAssurance.GreenHouseText')"></section>

         
        </p>
      </div>
      <div>
        <i class="fas fa-building"></i>
         <h1>{{ $t("ComponantAssurance.Small") }}</h1>
        <p>
       <section v-html="$t('ComponantAssurance.SmallText')"></section>
        </p>
      </div>
      <div>
        <i class="fas fa-city"></i>
        <h1>{{ $t("ComponantAssurance.Big") }}</h1>
        <p>    
       <section v-html="$t('ComponantAssurance.BigText')"></section>


    
        </p>
      </div>
      <div>
        <i class="fas fa-briefcase"></i>
        <h1> {{ $t("ComponantAssurance.BUSINESS") }}</h1>
        <p>    
          <section v-html="$t('ComponantAssurance.BusnessText')"></section>

        </p>
      </div>
       <div style="overflow:auto;height:330px">
        <i class="fas fa-paw"></i>
         <h1>{{ $t("ComponantAssurance.PETINSURANCE") }}</h1>
        <p>
         <section v-html="$t('ComponantAssurance.PetText')"></section>
         
        </p>
      </div>
        <div style="overflow:auto;height:330px">
        <i class="fas fa-heartbeat"></i>
        <h1>{{ $t("ComponantAssurance.HEALTH") }}</h1>
        <p>    
          <section v-html="$t('ComponantAssurance.HEALTHText')"></section>
    
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
