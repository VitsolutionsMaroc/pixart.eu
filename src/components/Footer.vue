<template>
  <div>
     <div style="text-align:center;font-size:1.5rem;font-weight:bold ;margin-top:50px;margin-bottom:50px">
      <h1 style="font-size:2rem">OUR EXPERT</h1>
    </div>
    <div class="caroussel_footer px-20 " style="text-align:center;">
       <div class="owl-carousel owl-theme footer_owl">
            
                    <div>
                      <div class="owl-item">
                         <img class="m-auto mb-4" style="width:20%;margin-bottom:20px" src="../assets/img/dubai.png" />
                         <h4 class="text-xl font-bold">Dubai - UAE</h4>
                      </div>
                    </div>
                     <div>
                      <div class="owl-item">
                         <img class="m-auto mb-4" style="width:20%;margin-bottom:20px" src="../assets/img/ibp.png" />
                         <h4 class="text-xl font-bold"> BELGIUM | IBP</h4>
                      </div>
                    </div>
                     <div>
                      <div class="owl-item">
                         <img class="m-auto mb-4" style="width:20%" src="../assets/img/ibpGr.jpg" />
                         <h4 class="text-xl font-bold"> GREECE</h4>
                      </div>
                    </div>
                     <div>
                      <div class="owl-item">
                         <img class="m-auto mb-4" style="width:30%;margin-bottom:20px" src="../assets/img/favicone.png" />
                         <h4 class="text-xl font-bold"> Luxembourg | Pixart</h4>
                      </div>
                    </div>
                     <div>
                      <div class="owl-item">
                         <img class="m-auto mb-4" style="width:35%;margin-bottom:45px" src="../assets/img/logo_footer.png" />
                         <h4 class="text-xl font-bold"> MANELIS luxury Properties</h4>
                      </div>
                    </div>
                   
                    
        </div>
    </div>
    <div class="bg-gray-900 p-10 text-white" style="position:relative;z-index:99999;">
     <div class="grid md:grid-cols-3 bg-gray-900 p-10 text-white">
       <div class="logo">
         <div  class="mt-10 mb-20"> <img class="" src="../assets/img/logo.png"  style="width:20%;"/></div>
       </div>
       <div>
         <ul
        class=" mt-2 md:mt-0 bg-gray-900"
        id="menu"
      >
        <li class="mb-2 md:mb-0">
          <router-link to="/" class=" other lg:mx-4 mx-2 ">HOME</router-link>
        </li>
        <li class="mb-2 md:mb-0 ">
          <router-link to="/about" class=" other lg:mx-4 mx-2">ABOUT</router-link>
        </li>
        <li class="mb-6 md:mb-0">
          <router-link to="/properties" class=" other lg:mx-4 mx-2"
            >PROPERTIES
          </router-link>
        </li>
        <li class="mb-6 md:mb-0">
          <router-link to="/evaluation" class=" other lg:mx-4 mx-2"
            >EVALUATION
          </router-link>
        </li>
         <li class="mb-6 md:mb-0">
          <router-link to="/golden" class=" other lg:mx-4 mx-2"
            >GOLDEN VISA
          </router-link>
        </li>
        <li class="mb-6 md:mb-0">
          <router-link to="/contact" class=" other lg:mx-4 mx-2 font-thin"
            >CONTACT
          </router-link>
        </li>
        
      </ul>
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
  </div>
  </div>
</template>
<script>
export default {
  name: "footer",
mounted(){
     this.$nextTick(() => {
        $(".footer_owl").owlCarousel({
          loop: true,
          center: true,
          dotsEach: true,
          margin: 20,
          nav: false,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            },
            1000: {
              items: 3
            }
          }
        });
        
      });
 
    
  },
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

#menu{
  line-height: 2;
  overflow: hidden;
}
#menu ul li:hover{
  color:orange;
}
.caroussel_footer .footer_owl .owl-carousel .owl-item img{display:block;width:15%!important;}
.owl-theme .owl-nav owl-prev, owl-next{
  display:none!important;
}

</style>
