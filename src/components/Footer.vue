<template>
  <div>
    <div class="bg-gray-900 p-10 text-white footer_main" style="position:relative;z-index:99999;">
     <div class="grid md:grid-cols-3 bg-gray-900 p-10 text-white">
       <div class="logo">
         <div  class="mt-10 mb-20"> <img class="" src="../assets/img/logo.png"  style="width:100%;"/></div>
       </div>
       <div  class=" mt-2 md:mt-0 bg-gray-900"
        id="menue">
         
        <span class="mb-2 md:mb-0">
          <router-link to="/" class=" other lg:mx-4 mx-2 ">HOME</router-link>
        </span>
        <span class="mb-2 md:mb-0 ">
          <router-link to="/about" class=" other lg:mx-4 mx-2">ABOUT</router-link>
        </span>
        <span class="mb-6 md:mb-0">
          <router-link to="/properties" class=" other lg:mx-4 mx-2"
            >PROPERTIES
          </router-link>
        </span>
        <span class="mb-6 md:mb-0">
          <router-link to="/evaluation" class=" other lg:mx-4 mx-2"
            >EVALUATION
          </router-link>
        </span>
         <span class="mb-6 md:mb-0">
          <router-link to="/golden" class=" other lg:mx-4 mx-2"
            >GOLDEN VISA
          </router-link>
        </span>
        <span class="mb-6 md:mb-0">
          <router-link to="/contact" class=" other lg:mx-4 mx-2 font-thin"
            >CONTACT
          </router-link>
        </span>
        
 
       </div>
       <div class="form_footer">
          <input type="text" placeholder="Search..." class="px-3 py-2 border mr-5" />
          <button class="bg-yellow-500 p-3 py-2" style="outline: none;">Submit</button>
          <p class="mt-5" style="line-height:1.6">
            PIXART is committed to delivering a high level of expertise, customer
            Service, and attention to details to the marketing and sales of luxury
            real Estate, and rental properties.
          </p>
       </div>
     </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "footer",

};
</script>
<style>
.input {
  height: 60px !important;
}
.info_footer p {
  font-size: 1rem;
  padding: 0 20px;
}
.info_footer h3 {
  padding: 0 20px;
}
.logo{
  width:20%;
}
#menue{
  line-height: 2;
  overflow: hidden;
  display: flex;
  flex-direction: column;
 box-sizing: border-box;
width: 39%;
border: none;
padding: 0; 
}
#menue ul li:hover{
  color:orange;
}
.form_footer{
  width:66%;
}

</style>
