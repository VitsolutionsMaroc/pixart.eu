<template>
 <div class="fond_greece">
    <div class="greece  p-4 lg:px-16 relative">
      <div class="text-white xl:text-6xl text-center mt-4 pt-20 pb-20">
       <p class="" style="font-size:2rem;">           
            {{ $t("GoldenVisa.Title") }}
       </p>
       
       </div>
      </div>
 
   <div class="text-center py-4 px-4 md:px-32 mt-10 mb-10">
      <h2 class="text-xl md:text-4xl font-bold my-2 mb-10">{{ $t("GoldenVisa.Golden") }}</h2>
      <p class="text-sm text-justify md:text-center" style="font-size:1.3rem;line-height: 1.6">
       {{ $t("GoldenVisa.TextGolden") }}
         
      </p>
         <button class="Creat  p-2 md:p-4 lg:mx-4 mx-2 ">

            <router-link
            to="/contact"
            >{{ $t("GoldenVisa.CreateVisa") }}</router-link
          >
         </button>
    </div>
    <!-- exemple_models -->
<div class="video text-center">
       <h1 class="text-xl md:text-4xl font-bold my-2 mb-10 mt-10">{{ $t("GoldenVisa.TitleYoutube") }}</h1>
     </div>
    <iframe class="xl:w-3/6" src="https://www.youtube.com/embed/F4Ueia1vfj8" title="YouTube video player" frameborder="0"  style="margin:0 auto;padding-bottom:50px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <!-- <Model /> -->
   
    
    <!-- end_exemple_models -->
    <div class="grid lg:grid-cols-2 gap-10 px-16 py-8 mb-10 info">
      <div>
        <img class="w-full" src="../assets/img/investers.jpg" alt="<a href='https://fr.freepik.com/photos/carte-visite'>Carte de visite photo créé par rawpixel.com - fr.freepik.com</a>" />
      </div>
      <div class="grid lg:grid-cols-3 gap-3 gap-y-2 pl-16 py-8 mt-10 benefits">
        <div class="inline-flex space-x-4 ">
         <i class="fas fa-check-circle mt-2"></i><p> {{ $t("GoldenVisa.Validity") }}</p>
        </div>
        <div class="inline-flex space-x-4 ">
        <i class="fas fa-check-circle mt-2"></i><p>{{ $t("GoldenVisa.Property") }}</p>
        </div>
        <div class="inline-flex space-x-4 ">
         <i class="fas fa-check-circle mt-2"></i><p>{{ $t("GoldenVisa.Spouse") }}</p>
        </div>
        <div class="inline-flex space-x-4 ">
         <i class="fas fa-check-circle mt-2"></i><p>{{ $t("GoldenVisa.Children") }}</p>
        </div>
        <div class="inline-flex space-x-4 ">
         <i class="fas fa-check-circle mt-2"></i><p>{{ $t("GoldenVisa.Parents") }}</p>
        </div>
        <div class="inline-flex space-x-4 ">
         <i class="fas fa-check-circle mt-2"></i><p>{{ $t("GoldenVisa.Parentsofthespouse") }}</p>
        </div>
           
      </div>
    </div>
    <div style="text-align:center;font-size:1.5rem;font-weight:bold">
      <h1>{{ $t("GoldenVisa.DOCUMENTS") }}</h1>
    </div>
    <div class="grid lg:grid-cols-4 gap-10 px-16 py-8 mt-10 info">
      
      <div>
        <h1>{{ $t("GoldenVisa.Propertyowner") }}</h1>
        <p>
       <section v-html="$t('GoldenVisa.OwnerText')"></section>
        </p>
      </div>
      <div>
        <h1>{{ $t("GoldenVisa.Spouse") }}</h1>
        <p>
        <section v-html="$t('GoldenVisa.SpouseGolden')"></section>
        </p>
      </div>
      <div>
         <h1>{{ $t("GoldenVisa.Children") }}</h1>
        <p>
        <section v-html="$t('GoldenVisa.ChildrenGolden')"></section>
        </p>
      </div>
      <div>
         <h1> {{ $t("GoldenVisa.Parents") }}</h1>
        <p>
         <section v-html="$t('GoldenVisa.ParentsGolden')"></section>
        </p>
      </div>
    </div>
<div class="grid lg:grid-cols-2 gap-10 px-16 py-8 mt-10 needs">
      <div class=" mt-20">
        <h1 class="text-4xl md:text-2xl mb-6" style="text-align: justify;">{{ $t("GoldenVisa.RESIDENCE") }}</h1>
         <div class="inline-flex space-x-4 ">
         <i class="fas fa-check-double"></i><p><section v-html="$t('GoldenVisa.Appointment')"></section></p>
        </div>
        <div class="inline-flex space-x-4 ">
         <i class="fas fa-check-double"></i> <p><section v-html="$t('GoldenVisa.Submission')"></section></p>
        </div><br>
        <div class="inline-flex space-x-4 ">
         <i class="fas fa-check-double"></i><p><section v-html="$t('GoldenVisa.Reviewing')"></section></p>
        </div>
        <div class="inline-flex space-x-4 ">
          <i class="fas fa-check-double"></i><p><section v-html="$t('GoldenVisa.Issuance')"></section></p>
        </div><br>
          <span><section v-html="$t('GoldenVisa.Thepresence')"></section></span>
      </div>
      <div>
        <img class="w-full" src="../assets/img/residance.jpg" alt="<a href='https://fr.freepik.com/photos/affaires'>Affaires photo créé par tirachardz - fr.freepik.com</a>" />
      </div>
    </div>
    
     <div class="video text-center">
       <h1 class="text-xl md:text-4xl font-bold my-2 mb-10 mt-10">{{ $t("GoldenVisa.GREECE365") }}</h1>
     </div>
    <iframe class="xl:w-3/6" src="https://www.youtube.com/embed/fL3Cy7VJEHU" title="YouTube video player" frameborder="0" style="margin:0 auto;padding-bottom:50px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "Golden",
  components: {
    Footer,
  }, 
};
</script>
<style scoped>
.slide {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),
    url("../assets/img/background2.jpg");
  background-size: cover;
}
span{
    color:orange;
    font-weight:bold;
}
.document span{
color:orange;
}
.greece {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
    url("../assets/img/fond_greec.jpg");
  background-size: cover;
  background-position:center;
  height:400px;
}
.info h1{
  color:orange;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}

.benefits i{
  color:orange;
  font-size:2rem;
}
.needs i{
 color:orange;
  font-size:1rem;
}
.needs span{
  font-size:0.8rem;
  color:gray;
 padding-top: 15px;
}
.needs p{
  font-size: 1rem;
}
.Creat{
  color:orange;
  font-weight:bold;
   margin-top:20px;
  font-size: 1.25rem;
}
@media (min-width: 1024px) {
  .textHeader {
    line-height: 6.5rem;
  }
  iframe{
    height:360px;
  }
}
</style>
