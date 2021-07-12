<template>
     <div>
        <div style="text-align:center;font-size:1.5rem;font-weight:bold ;margin-top:50px;margin-bottom:50px">
           <h1 style="font-size:2rem">OUR EXPERT</h1>
        </div>
        <div class="caroussel_footer px-20 " style="text-align:center;">
            <div class="owl-carousel owl-theme footer_owl">
                            <div>
                            <div class="owl-item" style="margin-left: 15%;">
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
                            <div class="owl-item" style="margin-left: 29%;">
                                <img class="m-auto mb-4" style="width:30%;margin-bottom:30px;" src="../assets/img/favicone.png" />
                                <h4 class="text-xl font-bold"> Luxembourg | Pixart</h4>
                            </div>
                            </div>
                            <div>
                            <div class="owl-item" style="margin-left:5%;">
                                <img class="m-auto mb-4" style="width:20%;margin-bottom:20px" src="../assets/img/dubai.png" />
                                <h4 class="text-xl font-bold">Dubai - UAE</h4>
                            </div>
                            </div>
                            <div>
                            <div class="owl-item" style="margin-left: 18%;">
                                <img class="m-auto mb-4" style="width:40%;margin-bottom:45px" src="../assets/img/logo_footer.png" />
                                <h4 class="text-xl font-bold"> MANELIS luxury Properties</h4>
                            </div>
                            </div>
                            <div>
                            <div class="owl-item">
                                <img class="m-auto mb-4" style="width:20%" src="../assets/img/ibpGr.jpg" />
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
