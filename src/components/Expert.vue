<template>
     <div>
        <div style="text-align:center;font-size:1.5rem;font-weight:bold ;margin-top:50px;margin-bottom:50px">
           <h1 style="font-size:2rem">OUR EXPERT</h1>
        </div>
        <div class="caroussel_footer px-20 " style="text-align:center;">
            <div class="owl-carousel owl-theme footer_owl">
                            <div>
                            <div class="owl-item" id="ibp">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    
                                    style="margin-bottom:20px"
                                    href="https://www.ibp.be/en/List/Abroad/27 "
                                    >
                                    <img class="m-auto mb-4" style="width:30%;margin-bottom:45px" src="../assets/img/ibp.png" />
                                    </a>
                                    <h4 class="text-xl font-bold"> BELGIUM | IBP</h4>
                            </div>
                            </div>
                        
                            <div>
                            <div class="owl-item" id="pixart">
                                <img class="m-auto mb-4" style="width:30%;margin-bottom:30px;" src="../assets/img/favicone.png" />
                                <h4 class="text-xl font-bold"> Luxembourg | Pixart</h4>
                            </div>
                            </div>
                            <div>
                            <div class="owl-item" id="dubai">
                                <img class="m-auto mb-4" style="width:20%;margin-bottom:45px" src="../assets/img/dubai.png" />
                                <h4 class="text-xl font-bold">Dubai - UAE</h4>
                            </div>
                            </div>
                            <div>
                            <div class="owl-item" id="manalies">
                                <img class="m-auto mb-4" style="width:40%;margin-bottom:45px" src="../assets/img/logo_footer.png" />
                                <h4 class="text-xl font-bold"> MANELIS<br>
                                 Luxury Properties</h4>
                            </div>
                            </div>
                            <div>
                            <div class="owl-item" id="greece">
                                <img class="m-auto mb-4" style="width:20%;margin-bottom:44px" src="../assets/img/ibpGr.jpg" />
                                <h4 class="text-xl font-bold"> GREECE</h4>
                            </div>
                            </div>
                        
                            
                </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "expert",
mounted(){
     this.$nextTick(() => {
        $(".footer_owl").owlCarousel({
          loop: true,
          center: true,
          dotsEach: false,
          dots:false,
          margin: 20,
          nav: false,
         autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 3
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
 #manalies{
    margin-left: 18%;
  }
 
  #pixart{
    margin-left: 31%;
  }
 
  @media only screen and (max-width: 1024px){
   #manalies ,  #ibp  ,  #dubai {
     margin-left: 0;
     
   }
   #pixart{
     margin-left: 33px;
   }
   #manalies h4{
     font-size:0.9rem;
   }
    #ibp h4{
     font-size:0.9rem;
   }
    #pixart h4{
     font-size:0.9rem;
   }
    #dubai h4{
     font-size:0.9rem;
   }
   #greece h4{
     font-size:0.9rem;
   }
  }
  @media only screen and (max-width: 1050px){
    #pixart{
    margin-left: 21%;
  }
  #manalies{
    margin-left:32px;
  }
  }
</style>