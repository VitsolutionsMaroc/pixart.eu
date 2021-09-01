<template>
  <div>
   
    <div class="grid lg:grid-cols-2 gap-10 px-16 py-8 mt-10">
      <div>
        <h1 class="text-4xl md:text-2xl mb-6" style="text-align: justify;">{{ $t("StrategyComponant.ASSETPROPERTY") }}</h1>
        <p style="text-align: justify;">
            <section v-html="$t('StrategyComponant.ASSETPROPERTYText')"></section>
        </p>
      </div>
      <div>
        <img class="w-full" src="../../assets/img/strategy.jpg" alt="<a href='https://fr.freepik.com/photos/affaires'>Affaires photo créé par peoplecreations - fr.freepik.com</a>" />
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
@media (min-width: 1024px) {
  .textHeader {
    line-height: 6.5rem;
  }
}
</style>
