<template>
  <div>
   
    <div class="grid lg:grid-cols-2 gap-10 px-16 py-8 mt-10">
      <div>
        <h1 class="text-4xl md:text-2xl mb-6" style="text-align: justify;">ASSET PROPERTY MANAGEMENT</h1>
        <p style="text-align: justify;">
             Pixart Real Estate has become one of the references in real estate strategy, in building real estate 
             portfolios, in Belgium, Grand Duchy of Luxembourg, and more recently in Dubai !  Pixart Real Estate 
             meets the targeted expectations of its clients, by advising and supporting them throughout the process 
             of selling residential buildings, offices, hotels, plots, etc….or investment buildings generating a
              return on investment and profitability guaranteed by the rental department of Pixart Real Estate.<br>
                            
                Adapting to constant market demands, Pixart Real Estate offers its large portfolio of 
                foreign and expatriate investors valuable advice inherent in building up a portfolio of 
                varied and reliable real estate assets on the European markets. The sales and purchase
                processes of real estate and asset companies,
                as well as real estate portfolios, are now a growing segment of their core business 




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
