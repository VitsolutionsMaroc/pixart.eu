<template>
  <div class="grid md:grid-cols-3 bg-gray-900 p-10 text-white">
    <div class="logo">
     <div  class="mt-10 mb-20"> <img class="" src="../assets/img/ibp.png"  style="width:20%;"/></div>
     <div  class="mt-19 mb-20"> <img src="../assets/img/ibpGr.jpg"  style="width:20%;"/></div>
     <div  class="mt-20 mb-10"> <img class="" src="../assets/img/dubai.png"  style="width:20%;padding-top: 14px;"/></div>
      <div  class="mt-20 mb-10"> <img class="" src="../assets/img/logo.png"  style="width:15%;"/></div>
    </div>
    <div class="info_footer" style="font-size:1.3rem;line-height:2">
      <h3 class="text-xl mb-5" style="font-size:1.2rem;font-weight:bold">Our Addresses</h3>
     <p>BELGIUM <br>
    277 Av. d’Auderghem – 1040 Brussels – Belgium<br>
    <span><i class="fas fa-mobile" style="color:orange; margin-right:10px"></i> +3227430380</span>
    </p>
    <div>
          <a target="_blank" rel="noopener noreferrer" class="p-2 md:p-4 text-base-2 text-yellow-500" style="font-size:0.8rem"  href="https://www.ibp.be/">www.ibp.be</a>
    </div>
    <br>
    <p>GREECE  <br> 
      Kolokotroni 9 –Kifisia 14562 &  Agiou Alexandrou 7 –Paleo Faliro 17561– Greece,
      Kολοκοτρώνη 9 -Kηφισιά 14562 &  Αγίου Αλεξάνδρου 7, 175 61 Παλαιό Φάληρο<br>
        <span><i class="fas fa-mobile" style="color:orange; margin-right:10px"></i> +30 2106918330</span>
      </p><br>
      <p>
     ICON TOWER - Office 1003<br>
      AL Thanyah First<br>
      Dubai - UAE
      </p><br>
      <p style="margin-bottom:10px">
        Luxembourg <br>
        8  Grand Rue Clervaux   -   L -9711 Luxembourg<br>
        <span><i class="fas fa-mobile" style="color:orange; margin-right:10px"></i>+352661373707</span>

      </p>
    </div>
    <div class="mr-5 pr-12 mt-15S">
      <input type="text" placeholder="Search..." class="px-3 py-2 border mr-5" />
      <button class="bg-yellow-500 p-3 py-2" style="outline: none;">Submit</button>
      <p class="mt-5" style="line-height:1.6">
        PIXART is committed to delivering a high level of expertise, customer
        Service, and attention to details to the marketing and sales of luxury
        real Estate, and rental properties.
      </p>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "footer"
};
</script>
<style >
.input{
  height:60px !important;
}
.info_footer p{
  font-size:1rem;
  padding: 0 20px;
}
.info_footer h3{
  padding: 0 20px;
}
.logo img{
  margin: 0 auto;
  } 
@media only screen and (min-width: 261px)and (max-width:600px) {
 .logo img{
  margin: 0 100px;
  }
}
</style>
