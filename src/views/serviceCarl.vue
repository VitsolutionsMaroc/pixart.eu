<template>


        <div class="testimonial md:container md:mx-auto">
            <div class="owl-carousel owl-theme box-slide">
              <div>
                  <div class="item">
                      <img class="m-auto mb-4" src="../assets/img/icon10.png" />
                      <h4 class="text-xl font-bold"> REALTY ASSESSMENT-PROPERTY CONSULTANCY</h4>
                      <p class="m-auto mt-8">
                      Pixart Real Estate offers you an evaluation service based on the reality of
                        the local market.  This service is free, and without obligation to sell, carried
                        out within 48 hours by a senior real estate expert. A detailed report will be drawn
                        up by one of our experts allowing you to safely take your real estate decisions for
                        a successful sale. The ‘fair’ price for your property is undoubtedly the most essential criterion for
                      a quick and realistic sale. For more information click here (-) estimate request and realty analysis.
                      </p>
                  </div>
              </div>
              <div>
                     <div class="item" style=" overflow:auto;">
                        <img class="m-auto mb-4" src="../assets/img/icon5.png" />
                        <h4 class="text-xl font-bold"> REALTY ANALYSIS</h4>
                        <p class="m-auto mt-8">
                          Pixart Real Estate analyzes your real estate portfolio, with reference to
                          its proven expertise, and in-depth knowledge of the market in which your real
                          estate is located. Depending on the objective pursued, we advise you to renovate
                          the property somewhat to gain real added value during the sale, to introduce 
                           <span v-if="readMore1==true">
                         a regularization permit or a building permit to maximize the sale, to negotiate with the
                          municipal, town planning or regional authorities in order to constitute a complete file
                          for the various stakeholders, to ‘cut up’ the property, by selling it to the cut up in order
                          to extract the best price for the selling owner, to negotiate hard with the buyer and seller,
                            to analyze the existing plans and
                          documents… rolling out its service so that the sale is carried out in the most optimal way possible.
                           </span><br>
                           <span v-if="readMore1==false" @click="readMoreEvent(1)" style="color:orange;curser:pointer">Read More</span>
                           <span  v-if="readMore1==true" @click="readMoreEvent(1)" style="color:orange;curser:pointer">Read Less</span>
                        </p>
                    </div>
              </div>
              <div>
                <div class="item">
                    <img class="m-auto mb-4" src="../assets/img/icon8.png" />
                    <h4 class="text-xl font-bold"> RELOCATION</h4>
                    <p class="m-auto mt-8">
                      A relocation service has also emerged, with full
                      support for expatriates through the relocation service in Belgium, but also in Greece, Luxembourg and Dubai !

                    </p>
                    <div>
                          <router-link
                    to="/lookingfor"
                    class="lookingFor  p-2 md:p-4 lg:mx-4 mx-2 text-yellow-500"
                    >More Info</router-link>
                        </div>
                 </div>
              </div>
              <div>
                <div class="item">
                      <img class="m-auto mb-4" src="../assets/img/icon4.png" />
                      <h4 class="text-xl font-bold"> REAL ESTATE STRATEGY</h4>
                      <p class="m-auto mt-8">
                      Pixart Real Estate has become one of the references in real estate strategy, in building real estate
                      portfolios, in Belgium, Grand Duchy of Luxembourg, and more recently in Dubai !  Pixart Real Estate
                      meets the targeted expectations of its clients, by advising and supporting them throughout the process
                      of selling residential buildings, offices, hotels, plots, etc….or investment buildings generating a
                        return on investment and profitability guaranteed by the rental department of Pixart Real Estate.
                      </p>
                      <div>
                            <router-link
                              to="/strategy"
                              class="strategy  p-2 md:p-4 lg:mx-4 mx-2 text-yellow-500"
                              >Read More</router-link>
                          </div>
                </div>
              </div>
              <div>
                <div class="item">
                    <img class="m-auto mb-4" src="../assets/img/icon6.png" />
                    <h4 class="text-xl font-bold"> OFF MARKET PROPERTY SALES</h4>
                    <p class="m-auto mt-8">
                      Every year, we promote several sales of properties in ‘confidential’ mode, i.e without any
                      publication on social networks, or real estate platforms. We contact our portfolio of buyers
                      and investors, and present them in complete confidentiality, and in priority, exceptional properties,
                      rare, with high added value, or extremely coveted by their top location and urban profile.
                    </p>
                </div>
              </div>
              <div>
                <div class="item">
                    <img class="m-auto mb-4" src="../assets/img/icon7.png" />
                    <h4 class="text-xl font-bold">RENOVATION WORKS</h4>
                    <p class="m-auto mt-8">
                    We support buyers and investors in all their efforts to renovate, bring up to date
                      or embellish property acquired through us.  We challenge the offers of several contractors
                      and partners in order to guarantee our customers the best quality/price ratio.
                        We can take charge and supervise, as owner, all the work to be undertaken regarding
                        the acquired properties. Our teams and partners are made up of contractors,
                          skilled workers, architects, interior designers, stability
                    engineers, civil engineers in construction, carpenters, electricians, painters, etc.
                    </p>
                 </div>
              </div>
              <div>
                <div class="item">
                    <img class="m-auto mb-4" src="../assets/img/icon9.png" />
                    <h4 class="text-xl font-bold"> CORPORATE REAL ESTATE (Offices – Retail – Warehouses – Workshops – Hotels - Logistics)</h4>
                    <p class="m-auto mt-8">
                    We are empowered in the search for ‘corporate’ or ‘industrial’ properties, and in the
                    management of your real estate portfolio. We are looking for real estate sites to rehabilitate,
                    building lands for our customers and we actively participate in
                      the development of ‘new’ real estate projects (profitability study & feasibility study)

                    </p>
                    <div>
                          <router-link
                    to="/corporate"
                    class="Corporate  p-2 md:p-4 lg:mx-4 mx-2 text-yellow-500"
                    >Read More</router-link>
                    </div>
                 </div>
              </div>
              <div>
                  <div class="item">
                    <img class="m-auto mb-4" src="../assets/img/icon2.png" />
                    <h4 class="text-xl font-bold"> RESIDENTIAL REAL ESTATE</h4>
                    <p class="m-auto mt-8">
                    If you are looking for a safe, defensive, and sustainable investment, Pixart Real Estate
                    assists you in all steps of the sale process or acquisition process of the desired property.
                    Residential real estate is more than ever, in our time, in post-Covid period, a safe haven for many
                    investors or ‘buyers beware’. We negotiate the best price for you and assure you an upward residential yield.
                    The growth of the residential real estate market will never tend to decline over the coming years.
                    
                    </p>
                </div>
              </div>
              <div>
                 <div class="item">
                      <img class="m-auto mb-4" src="../assets/img/icon3.png" />
                      <h4 class="text-xl font-bold"> NEW PROJECTS</h4>
                      <p class="m-auto mt-8">
                        Pixart Real Estate introduces a ‘legitimate’ and dynamic approach to the promotion
                        and marketing of new properties, real estate projects and challenges. We offer a varied offer, corresponding
                        to all budgets, justified by well-crafted and transparent sales files.
                      </p>
                  </div>
              </div>
               <div>
                 <div class="item" style=" overflow:auto;">
                   <router-link
                              to="/Golden"
                              class="golden text-yellow-500"
                              > <img class="m-auto mb-4" src="../assets/img/icon11.png" /></router-link>
                     
                      <h4 class="text-xl font-bold"> GOLDEN VISA</h4>
                      <h6>Benefits of obtaining a Greek Golden Visa</h6>
                      <p class="m-auto mt-8" style="text-align:justify;">
                       • One of the lowest thresholds for real estate investment in Europe<br>
                        • A wide range of persons acquiring the right to a residence permit along with the owner of the object<br>
                        • Possibility of purchasing several residential or commercial real estate<br>
                        • Possibility of commercial use and leasing of real estate upon acquisition<br>
                        <span v-if="readMore2 == true">
                        • The right to reside in Greece all year round<br>
                        • The right to unimpeded access to countries - members of the Schengen area<br>
                        • Unlimited extension of the residence permit, subject to confirmation of the ownership of the property<br>
                        • No obligation to reside in Greece in order to extend the residence permit<br>
                        • After 7 years from the date of obtaining a residence permit, subject to a number of additional conditions,<br>
                        the investor acquires the right to apply for the citizenship of the Hellenic Republic<br>
                        • Possibility of establishing a joint stock company and doing business<br>
                        </span>
                         
                      </p>
                     <br>
                           <span v-if="readMore2==false" @click="readMoreEvent(2)" style="color:orange;curser:pointer">Read More</span>
                      <span  v-if="readMore2==true" @click="readMoreEvent(2)" style="color:brown;curser:pointer">Read Less</span>
                  </div>
              </div>
              <div>
                  <div class="item" style=" overflow:auto;">
                     <router-link
                              to="/Assurance"
                              class="assurance text-yellow-500"
                              ><img class="m-auto mb-4" src="../assets/img/icon12.png" /></router-link>
                    
                    <h4 class="text-xl font-bold"> We assist all your needs by providing insurances for</h4>
                    <p class="m-auto mt-8" style="text-align:justify">
                       • Legal Protection is provided to apartment, shop and plot owners to resolve disputes, including with their tenants,arising from rent adjustment, non-payment of rent, damage to the apartment or shop, eviction lawsuit.<br>
                        Protection of your home against all dangers.<br>
                        • Civil Liability Insurance.<br>
                        <span  v-if="readMore3==true">
                        • Moreover we protect our little friends with Pet insurance.<br>
                        • Ofcourse we protect your car  with  Car insurance solution, which covers every need with unique flexibility.<br>
                        • We secure full coverage in all the sectors of Hospital Care, Out of Hospital Care and Prevention.<br>
                      </span>
                         
                    </p>
                 
                          <span v-if="readMore3==false" @click="readMoreEvent(3)" style="color:orange;curser:pointer">Read More</span>
                      <span  v-if="readMore3==true" @click="readMoreEvent(3)" style="color:brown;curser:pointer;text-align:justify">Read Less</span>
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
  readMore3:false
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
}

},
  mounted(){
     this.$nextTick(() => {
        $(".box-slide").owlCarousel({
     loop: false,
        stagePadding: 50,
        nav: true,
        navText: [
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>"
        ],
        items: 3,
        center: false,
        dots: false,
        margin: 60,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          600: {
            items: 3,
            nav: true
          },
          500: {
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

/* width */
::-webkit-scrollbar {
  width: 5px;
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

}
</style>