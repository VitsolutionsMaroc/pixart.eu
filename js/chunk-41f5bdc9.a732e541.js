(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41f5bdc9"],{"2bc7":function(t,e,a){"use strict";a("51b1")},"51b1":function(t,e,a){},"56fc":function(t,e,a){t.exports=a.p+"img/avatar.1383d81f.svg"},"9f52":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"xl:px-48"},[t.estate?s("div",{staticClass:"grid md:grid-cols-3 xl:gap-10"},[s("div",{staticClass:"md:order-last p-4 md:p-0 "},[s("div",{staticClass:"shadow-md xl:p-8 xl:px-10 p-2"},[null!=t.estate.RepresentativeID?s("div",{staticClass:"flex items-center"},[s("img",{staticClass:"rounded-full h-12 w-12 mr-6 xl:h-24 xl:w-24 lg:h-20 lg:w-20 md:h-16 md:w-16  lg:mr-12 md:mr-4",attrs:{src:t.estate.representativePicture.Url}}),s("div",{staticClass:"text-gray-400 xl:text-xl md:text-sm"},[t._v(" "+t._s(t.estate.representativeName)+" "+t._s(t.estate.representativeLastName)+" ")])]):s("div",{staticClass:"flex items-center"},[s("img",{staticClass:"rounded-full h-12 w-12 mr-6 xl:h-24 xl:w-24 lg:h-20 lg:w-20 md:h-16 md:w-16  lg:mr-12 md:mr-4",attrs:{src:a("56fc")}}),s("span",{staticClass:"text-gray-400 xl:text-xl md:text-base"},[t._v(" Pixart User ")])]),s("button",{staticClass:"mt-6 text-center m-auto text-white p-2 py-4 w-full text-lg font-bold",staticStyle:{background:"#fbf0df",color:"#df9639"},on:{click:t.displayContactModal}},[t._v(" Contact us ")])]),s("v-modal",{attrs:{height:"auto",adaptive:!0,"min-width":100,scrollable:!0,name:"contact"}},[s("contact-modal")],1)],1),s("div",{staticClass:"shadow-md md:col-span-2 p-2"},[s("div",{staticClass:"sliderDetails"},[s("carousel",{staticClass:"bg-green",attrs:{navigationEnabled:!0,paginationEnabled:!1,perPage:1}},[t._l(t.estate.pictures,(function(t){return s("slide",{key:t.PictureID,staticClass:"slideDetails flex"},[s("img",{staticClass:"mx-auto w-auto h-48 md:h-auto cursor-pointer",attrs:{src:t.Url}})])})),t.estate.pictures&&0!=t.estate.pictures?t._e():s("slide",[s("img",{staticClass:"mx-auto md:w-auto  cursor-pointer",attrs:{src:a("c570")}})])],2)],1),s("div",{staticClass:"section-right p-4"},[s("div",{staticClass:"font-bold text-xl py-2 mb-8"},[t.estate.Price?s("span",{},[t._v(" Price : "+t._s(t.estate.Price)+" "+t._s(t.estate.Currency)+" ")]):t._e(),s("span",{staticClass:"float-right capitalize",staticStyle:{color:"#39D47A"}},[t._v(t._s(t.estate.purpose))])]),s("span",{staticClass:"my-2 block text-black font-bold text-xl"},[t._v(t._s(t.estate.Name)+" ")]),s("span",{staticClass:"my-2 block"},[t._v(" "+t._s(t.estate.CategoryName)+" ")]),s("span",{staticClass:"block my-2 text-gray-400"},[t._v(t._s(t.estate.Address1))]),s("div",{staticClass:"grid grid-cols-3"},[t.estate.Rooms?s("span",[s("i",{staticClass:"fas fa-sink mr-2 text-yellow-500"}),t._v(" "+t._s(t.estate.Rooms)+" ")]):t._e(),t.estate.Bathrooms?s("span",[s("i",{staticClass:"fas fa-bed mr-2 text-yellow-500"}),t._v(" "+t._s(t.estate.Bathrooms)+" ")]):t._e(),t.estate.Area?s("span",[s("i",{staticClass:"fas fa-ruler-combined mr-2 text-yellow-500"}),t._v(" "+t._s(t.estate.Area)+" m² "),s("i",{staticClass:"fas fa-rectangle-wide"})]):t._e()]),s("h2",{staticClass:"block text-black font-bold md:text-xl my-4"},[t._v(" Property details ")]),s("div",{staticClass:"grid grid-cols-2 md:grid-cols-4 mb-2"},[s("div",[s("span",{staticClass:"text-gray-600 font-bold mb-1 block"},[t._v("Parking")]),t.estate.Parking?s("span",[t._v("Yes")]):s("span",[t._v("No")])]),s("div",[s("span",{staticClass:"text-gray-600 font-bold mb-1 block"},[t._v("Garage")]),t.estate.Garage?s("span",[t._v("Yes")]):s("span",[t._v("No")])]),s("div",[s("span",{staticClass:"text-gray-600 font-bold mb-1 block"},[t._v("Terrace")]),t.estate.Terrace?s("span",[t._v("Yes")]):s("span",[t._v("No")])]),s("div",[s("span",{staticClass:"text-gray-600 font-bold mb-1 block"},[t._v("Furnished")]),t.estate.Furnished?s("span",[t._v("Yes")]):s("span",[t._v("No")])])]),s("div",{staticClass:"grid grid-cols-2"},[s("span",{staticClass:"text-gray-600 font-bold mb-1"},[t._v("Ground Area")]),s("span",{staticClass:"text-gray-600 font-bold mb-1"},[t._v("Garden Area")]),s("div",{staticClass:"mb-2"},[t._v(" "+t._s(t.estate.GroundArea)),t.estate.GroundArea?s("span",[t._v(" m²")]):t._e()]),s("div",{staticClass:"mb-2"},[t._v(" "+t._s(t.estate.GardenArea)+" "),t.estate.GroundArea?s("span",[t._v(" m²")]):t._e()])]),t.estate.Description?s("h2",{staticClass:"my-2 font-bold text-lg"},[t._v(" Description ")]):t._e(),s("p",[t._v(" "+t._s(t.estate.Description)+" ")])]),s("div",{staticClass:"grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"},t._l(t.relatedEstates,(function(e,i){return s("router-link",{key:e.EstateID+"-"+i,staticClass:"relative",attrs:{to:{name:"properties.details",params:{estateId:e.EstateID}}}},[s("carousel",{attrs:{paginationEnabled:!1,perPage:1}},[t._l(e.pictures,(function(t){return s("slide",{key:t.PictureID},[s("img",{staticClass:"w-full h-56 object-cover cursor-pointer",attrs:{src:t.Url}})])})),e.pictures&&0!=e.pictures?t._e():s("slide",[s("img",{staticClass:"w-full h-56 object-cover cursor-pointer",attrs:{src:a("c570")}})])],2),s("div",{staticClass:"bg-gray-200 text-green-700 text-xs font-bold rounded-full p-2 absolute top-0 ml-2 mt-2"},[s("span",[t._v(t._s(e.purpose))])]),s("div",{staticClass:"mt-4 mb-2 truncate"},[e.Price?s("span",{staticClass:"text-black font-bold text-lg"},[t._v(t._s(e.Price)+" "+t._s(e.Currency))]):t._e(),s("button",{staticClass:"float-right px-2 py-1 rounded-full font-bold text-sm block text-white",staticStyle:{background:"#fbf0df",color:"#df9639"}},[t._v(" Details ")])]),s("h2",{staticClass:"text-black text-sm font-bold mb-4 block"},[t._v(" "+t._s(t.estate.Name)+" "),t.estate.Name&&t.estate.Name?s("span",[t._v("-")]):t._e(),t._v(" "+t._s(t.estate.categoryName.charAt(0).toUpperCase()+t.estate.categoryName.slice(1))+" ")]),s("span",{staticClass:"block text-black text-sm md:text-base my-2"},[t.estate.Rooms?s("span",{staticClass:"lg:mr-2 xl:mr-2 md:mr-10"},[s("i",{staticClass:"fas fa-bed  text-yellow-500"}),t._v(" "+t._s(t.estate.Rooms)+" ")]):t._e(),t.estate.Bathrooms?s("span",{staticClass:"lg:mr-2 xl:mr-2 md:mr-10"},[s("i",{staticClass:"fas fa-sink   text-yellow-500"}),t._v(" "+t._s(t.estate.Bathrooms)+" ")]):t._e(),t.estate.Area?s("span",{staticClass:"lg:mr-2 xl:mr-2 md:mr-10"},[s("i",{staticClass:"fas fa-ruler-combined  text-yellow-500"}),t._v(" "+t._s(t.estate.Area)+" ")]):t._e()])],1)})),1),s("loader",{directives:[{name:"show",rawName:"v-show",value:t.loadingRelatedEstates,expression:"loadingRelatedEstates"}],staticClass:"py-10"}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.relatedEstateApiUrl&&!t.loadingRelatedEstates,expression:"relatedEstateApiUrl && !loadingRelatedEstates"}],staticClass:"font-bold mx-auto text-sm md:text-lg text-center my-4 cursor-pointer py-2 w-2/4 md:w-2/6 rounded-full",staticStyle:{background:"#fbf0df",color:"#df9639"},on:{click:function(e){return t.loadRelatedEstates()}}},[t._v(" More related Estates ")])],1)]):s("loader",{staticClass:"py-10"})],1)},i=[],l=a("2909"),o=a("0543"),r=a("e6b4"),n=a("7267"),c=a("f0ca"),d=a.n(c),p=(a("6f3c"),a("22b3")),m=a("6d3b"),u=(a("bbe3"),a("bc3a")),f=a.n(u),v=a("0a63"),g={components:{VueEnglishdatepicker:o["a"],DatePick:d.a,Loader:p["a"],Carousel:v["Carousel"],Slide:v["Slide"],ToorModal:r["a"],ContactModal:n["a"]},data:function(){return{estateId:this.$route.params.estateId,estate:null,loadingRelatedEstates:!1,relatedEstates:[],relatedEstateApiUrl:"https://xvm-104-87.dc0.ghst.net:8084/api/estates/".concat(this.$route.params.estateId,"/related-estates"),bookTour:!1,date:"2019-01-01",picSwiper:null,relatedEstatesOpen:!1,contact:{Address1:"",Address2:"",Number:"",Box:"",Zip:"",EstateIds:[3515113],OfficeIds:[4381],CountryId:1,StatusId:1,LanguageId:"fr-BE",Name:"New contact",PrivateEmail:"test_contact@whise.mail"}}},methods:{displayToor:function(){this.$modal.show("toor")},displayContactModal:function(){this.$modal.show("contact")},displayCreateContact:function(){this.$modal.show("createContact")},prevSlide:function(){this.picSwiper.slidePrev()},nextSlide:function(){this.picSwiper.slideNext()},addContact:function(){var t=this,e={ClientId:4668,OfficeId:6644},a="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlhdCI6MTYxMjMzOTQ3Mn0.eyJzZXJ2aWNlQ29uc3VtZXJJZCI6MjMzLCJ0eXBlSWQiOjQsImNsaWVudElkIjo0NjY4fQ.gDNwAXok3Fr4AR4kuJ12vVcytlmr0--bInx65euVxos",s={headers:{Authorization:"Bearer ".concat(a),"Content-Type":"application/json"}};f.a.post("https://api.whise.eu/v1/admin/clients/token",e,s).then((function(e){e.data.token;var a={headers:{Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlhdCI6MTYxMjMzOTA2Mn0.eyJzZXJ2aWNlQ29uc3VtZXJJZCI6MjMzLCJ0eXBlSWQiOjQsImNsaWVudElkIjo0NjY4fQ.mXvm76zTWTrgba9mGU8ny_I4ZZvmXGaRfnpO7mfMhBo","Content-Type":"application/json"}},s={Name:t.contact.Name,FirstName:t.contact.FirstName,PrivateMobile:t.contact.PrivateMobile,OfficeIds:[6644],StatusId:1,CountryId:1,LanguageId:"fr-BE",Comments:t.contact.Comments,PrivateEmail:t.contact.PrivateEmail,AgreementEmail:t.contact.Newsletter,AgreementSms:t.contact.Newsletter,EstateIds:[t.$route.params.estateId]};f.a.post("https://api.whise.eu/v1/contacts/create",s,a).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)}))},loadEstate:function(){var t=this,e=this.$route.params.estateId;f.a.get("https://xvm-104-87.dc0.ghst.net:8084/api/estates/".concat(e)).then((function(e){t.estate=e.data})).catch((function(t){console.log(t)}))},loadRelatedEstates:function(){var t=this;console.log("loadRelatedEstates"),console.log("loadRelatedEstates"),this.loadingRelatedEstates=!0,f.a.get(this.relatedEstateApiUrl).then((function(e){var a;t.relatedEstateApiUrl=e.data.next_page_url,(a=t.relatedEstates).push.apply(a,Object(l["a"])(e.data.data)),t.loadingRelatedEstates=!1})).catch((function(e){t.loadingRelatedEstates=!1,console.log(e)}))},displayRelatedEstateDetails:function(t){this.$parent.$parent.displayDetails(t)},initSwiper:function(){this.picSwiper=new m["a"](this.$refs.swiperContainer,{cssMode:!0,navigation:{nextEl:this.$refs.swiperButtonNext,prevEl:this.$refs.swiperButtonPrev},pagination:{el:this.$refs.swiperPagination},mousewheel:!0,keyboard:!0})}},watch:{"$route.params":{handler:function(t){this.loadEstate(),this.relatedEstateApiUrl="https://xvm-104-87.dc0.ghst.net:8084/api/estates/".concat(t.estateId,"/related-estates"),this.relatedEstates=[],this.loadRelatedEstates()},immediate:!0}},mounted:function(){this.initSwiper()}},h=g,b=(a("2bc7"),a("2877")),C=Object(b["a"])(h,s,i,!1,null,"1739512b",null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-41f5bdc9.a732e541.js.map