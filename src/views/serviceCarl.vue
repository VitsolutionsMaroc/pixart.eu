<template>


        <div class="testimonial md:container md:mx-auto">
            <div class="owl-carousel owl-theme box-slide">
              <div>
                  <div class="item">
                      <img class="m-auto mb-4" src="../assets/img/icon10.png" />
                      <h4 class="text-xl font-bold">{{$t("Home.ASSESSMENT")}}</h4>
                      <p class="m-auto mt-8">
                     {{$t("Home.assessmentText")}}
                      </p>
                  </div>
              </div>
               
              <div>
                     <div class="item" style=" overflow:auto;">
                        <img class="m-auto mb-4" src="../assets/img/icon5.png" />
                        <h4 class="text-xl font-bold">  {{ $t("Home.REALTYANALYSIS") }}</h4>
                        <p class="m-auto mt-8">
                           <section v-html="$t('Home.TextRealityAnalise')"></section>
                           <span v-if="readMore1==true">
                           <section v-html="$t('Home.TextRealityAnalise2')"></section>
                           </span><br>
                           <span v-if="readMore1==false" @click="readMoreEvent(1)" style="color:orange;curser:pointer">{{ $t("Home.ReadMore") }}</span>
                           <span  v-if="readMore1==true" @click="readMoreEvent(1)" style="color:orange;curser:pointer">{{ $t("Home.ReadLess") }}</span>
                        </p>
                    </div>
              </div>
                <div>
                     <div class="item" style=" overflow:auto;">
                      <router-link
                              to="/lookingfor"
                              class="golden text-yellow-500"
                              > <img class="m-auto mb-4" src="../assets/img/icon8.png" /></router-link>
                        <h4 class="text-xl font-bold">  {{ $t("Home.RELOCATION") }}</h4>
                        <p class="m-auto mt-8">
                           <section v-html="$t('Home.TextRELOCATION1')"></section>
                           <span v-if="readMore5==true">
                           <section v-html="$t('Home.TextRELOCATION2')"></section>
                           </span><br>
                           <span v-if="readMore5==false" @click="readMoreEvent(5)" style="color:orange;curser:pointer">{{ $t("Home.ReadMore") }}</span>
                           <span  v-if="readMore5==true" @click="readMoreEvent(5)" style="color:orange;curser:pointer">{{ $t("Home.ReadLess") }}</span>
                        </p>
                    </div>
              </div>
              <!-- <div>
                <div class="item">
                    <img class="m-auto mb-4" src="../assets/img/icon8.png" />
                    <h4 class="text-xl font-bold">{{ $t("Home.RELOCATION") }} </h4>
                    <p class="m-auto mt-8">

                     {{ $t("Home.TextRELOCATION") }}
                    </p>
                    <div class="mt-5">
                          <router-link
                    to="/lookingfor"
                    class="lookingFor  p-2 md:p-4 lg:mx-4 mx-2 text-yellow-500"
                    >{{$t("Home.MoreInfo")}}</router-link>
                        </div>
                 </div>
              </div> -->
              <div>
                <div class="item">
                      <img class="m-auto mb-4" src="../assets/img/icon4.png" />
                      <h4 class="text-xl font-bold"> {{ $t("Home.STRATEGY") }}</h4>
                      <p class="m-auto mt-8">
                      {{$t("Home.STRATEGYText")}}
                      </p>
                      <div>
                            <router-link
                              to="/strategy"
                              class="strategy  p-2 md:p-4 lg:mx-4 mx-2 text-yellow-500"
                              >{{ $t("Home.ReadMore") }}</router-link>
                          </div>
                </div>
              </div>
              <div>
                <div class="item">
                    <img class="m-auto mb-4" src="../assets/img/icon6.png" />
                    <h4 class="text-xl font-bold">{{ $t("Home.PROPERTYSALES") }}</h4>
                    <p class="m-auto mt-8">
                      {{ $t("Home.PROPERTYSALESText") }}
                    </p>
                </div>
              </div>
              <div>
                <div class="item">
                    <img class="m-auto mb-4" src="../assets/img/icon7.png" />
                    <h4 class="text-xl font-bold">{{ $t("Home.RENOVATION") }}</h4>
                    <p class="m-auto mt-8">
                   {{ $t("Home.RENOVATIOnText") }}
                    </p>
                 </div>
              </div>
              <div>
                <div class="item">
                    <img class="m-auto mb-4" src="../assets/img/icon9.png" />
                    <h4 class="text-xl font-bold">{{ $t("Home.CORPORATE") }}</h4>
                    <p class="m-auto mt-8">
                   {{ $t("Home.CorporateText") }}

                    </p>
                    <div>
                          <router-link
                    to="/corporate"
                    class="Corporate  p-2 md:p-4 lg:mx-4 mx-2 text-yellow-500"
                    >{{ $t("Home.ReadMore") }}</router-link>
                    </div>
                 </div>
              </div>
              <div>
                  <div class="item">
                    <img class="m-auto mb-4" src="../assets/img/icon2.png" />
                    <h4 class="text-xl font-bold"> {{ $t("Home.RESIDENTIAL") }}</h4>
                    <p class="m-auto mt-8">
                    {{ $t("Home.ResidentialText") }}
                    </p>
                </div>
              </div>
              <div>
                 <div class="item">
                      <img class="m-auto mb-4" src="../assets/img/icon3.png" />
                      <h4 class="text-xl font-bold">{{ $t("Home.NEWPROJECTS") }}</h4>
                      <p class="m-auto mt-8">
                         {{ $t("Home.ProjectText") }}
                      </p>
                  </div>
              </div>
               <div>
                 <div class="item" style=" overflow:auto;">
                   <router-link
                              to="/Golden"
                              class="golden text-yellow-500"
                              > <img class="m-auto mb-4" src="../assets/img/icon11.png" /></router-link>
                     
                      <h4 class="text-xl font-bold"> {{$t("Home.GOLDEn")}}</h4>
                      <h6>{{$t("Home.GOLDEnt")}}</h6>
                      <p class="m-auto mt-8" style="text-align:justify;">
                        <section v-html="$t('Home.GoldenText')"></section>
                        <span v-if="readMore2 == true">
                          <section v-html="$t('Home.GoldenText2')"></section>
                       
                        </span>
                         
                      </p>
                     <br>
                           <span v-if="readMore2==false" @click="readMoreEvent(2)" style="color:orange;curser:pointer">{{ $t("Home.ReadMore") }}</span>
                      <span  v-if="readMore2==true" @click="readMoreEvent(2)" style="color:brown;curser:pointer">{{ $t("Home.ReadLess") }}</span>
                  </div>
              </div>
              <div>
                  <div class="item" style=" overflow:auto;">
                     <router-link
                              to="/Assurance"
                              class="assurance text-yellow-500"
                              ><img class="m-auto mb-4" src="../assets/img/icon12.png" /></router-link>
                    
                    <h4 class="text-xl font-bold"> {{$t("Home.insurances")}}</h4>
                    <p class="m-auto mt-8" style="text-align:justify">
                       <section v-html="$t('Home.insurancesText')"></section>
                      
                        <span  v-if="readMore3==true">
                           <section v-html="$t('Home.insurancesText2')"></section>
                       
                      </span>
                         
                    </p>
                 
                          <span v-if="readMore3==false" @click="readMoreEvent(3)" style="color:orange;curser:pointer">{{ $t("Home.ReadMore") }}</span>
                      <span  v-if="readMore3==true" @click="readMoreEvent(3)" style="color:brown;curser:pointer;text-align:justify">{{ $t("Home.ReadLess") }}</span>
                </div>
              </div>
               <div>
                     <div class="item" style=" overflow:auto;">
                        <img class="m-auto mb-4" src="../assets/img/icon13.png" />
                        <h4 class="text-xl font-bold">  {{ $t("Home.Recrutement") }}</h4>
                        <p class="m-auto mt-8">
                           <section v-html="$t('Home.RecrutementText1')"></section>
                           <span v-if="readMore4==true">
                           <section v-html="$t('Home.RecrutementText2')"></section>
                           </span><br>
                           <span v-if="readMore4==false" @click="readMoreEvent(4)" style="color:orange;curser:pointer">{{ $t("Home.ReadMore") }}</span>
                           <span  v-if="readMore4==true" @click="readMoreEvent(4)" style="color:orange;curser:pointer">{{ $t("Home.ReadLess") }}</span>
                        </p>
                    </div>
              </div>

            </div>


        </div>
</template>
<script>
export default {
  name:"services",
data(){
return {
  readMore1:false,
  readMore2:false,
  readMore3:false,
  readMore4:false,
  readMore5:false
}
},
methods:{
readMoreEvent(nbr){
if(nbr==1)
this.readMore1=!this.readMore1;
if(nbr==2)
this.readMore2=!this.readMore2;
if(nbr==3)
this.readMore3=!this.readMore3;
if(nbr==4)
this.readMore4=!this.readMore4;
if(nbr==5)
this.readMore5=!this.readMore5;
}

},
  mounted(){
     this.$nextTick(() => {
        $(".box-slide").owlCarousel({
     loop: false,
        stagePadding: 50,
        nav: false,
        navText: [
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>"
        ],
        items: 3,
        
        dots: false,
        margin: 60,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots:true,
            stagePadding: 0,
          },
          600: {
            items: 1,
            nav: true
          },
          1000: {
            items: 3,
            nav: true
          }
        }
        });

      });


  },
}

</script>
<style>
.testimonial .owl-carousel .owl-item .item{min-height:1px;float:left;-webkit-backface-visibility:hidden;-webkit-touch-callout:none;background-color:white;padding: 20px;height:500px;padding-bottom: 30px;font-size: 0.9rem;}
.testimonial .owl-carousel .owl-item img{display:block;width:auto}
.owl-theme .owl-nav {
    margin-top: 10px;
   }
    .owl-theme .owl-nav [class*='owl-'] {
      color: #9e8c7165!important;
      font-size:3rem!important;
      background-color: rgba(0, 0, 0, 0)!important;

      cursor: pointer;
      border-radius: 3px; }
      .owl-theme .owl-nav [class*='owl-']:hover {
         background-color: rgba(0, 0, 0, 0)!important;
        color: #df94234b!important;
}
        .owl-theme .owl-nav .owl-prev, .owl-next{
          position: absolute!important;
        }
   
.owl-theme .owl-dots .owl-dot span {
      width: 10px;
      height: 10px;
      margin: 5px 7px;

     background-color: #9e8c71!important;
      border-radius: 50%;
      display: block;
      -webkit-backface-visibility: visible;
      transition: opacity 200ms ease;
      border-radius: 30px; }
.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
      background: #f59e0b !important; }
.golden img:hover{

 transform: scale(1.3);
}
.assurance img:hover{

 transform: scale(1.3);
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #f59f0bb2;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ecd6ae;
}
@media only screen and (min-width: 261px) and (max-width: 900px) {

.testimonial .owl-carousel .owl-item .item{min-height:1px;float:left;-webkit-backface-visibility:hidden;-webkit-touch-callout:none;background-color:white;padding: 20px;height:400px;padding-bottom: 30px;font-size: 0.9rem;overflow-x:auto}
.owl-carousel .owl-dots.disabled, .owl-carousel .owl-nav.disabled {
  display:none;
}
}
</style>