(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-120650b8"],{"2c89":function(t,e,a){},"56fc":function(t,e,a){t.exports=a.p+"img/avatar.1383d81f.svg"},"7a06":function(t,e,a){"use strict";a("2c89")},"9f52":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"xl:px-48"},[t.estate?s("div",{staticClass:"grid md:grid-cols-3 xl:gap-10"},[s("div",{staticClass:"md:order-last p-4 md:p-0 "},[s("div",{staticClass:"shadow-md xl:p-8 xl:px-10 p-2"},[null!=t.estate.RepresentativeID?s("div",{staticClass:"flex items-center"},[s("img",{staticClass:"rounded-full h-12 w-12 mr-6 xl:h-24 xl:w-24 lg:h-20 lg:w-20 md:h-16 md:w-16  lg:mr-12 md:mr-4",attrs:{src:t.estate.representativePicture.Url}}),s("div",{staticClass:"text-gray-400 xl:text-xl md:text-sm"},[t._v(" "+t._s(t.estate.representativeName)+" "+t._s(t.estate.representativeLastName)+" ")])]):s("div",{staticClass:"flex items-center"},[s("img",{staticClass:"rounded-full h-12 w-12 mr-6 xl:h-24 xl:w-24 lg:h-20 lg:w-20 md:h-16 md:w-16  lg:mr-12 md:mr-4",attrs:{src:a("56fc")}}),s("span",{staticClass:"text-gray-400 xl:text-xl md:text-base"},[t._v(" Pixart User ")])]),s("button",{staticClass:"mt-6 text-center m-auto text-white p-2 py-4 w-full text-lg font-bold",staticStyle:{background:"#fbf0df",color:"#df9639"},on:{click:t.displayContactModal}},[t._v(" Contact us ")])]),s("v-modal",{attrs:{height:"auto",adaptive:!0,"min-width":100,scrollable:!0,name:"contact"}},[s("contact-modal")],1),s("div",{staticClass:"mt-20"},[s("hr"),s("div",{staticClass:"p-10"},[s("ul",[s("li",[s("a",{attrs:{target:"_blank",href:"https://www.facebook.com/sharer.php?u="+t.getURL(),rel:"nofollow",onclick:"javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;"}},[s("i",{staticClass:"fa fa-facebook-square mr-5"}),t._v(" Share on Facebook ")])]),s("li",[s("i",{staticClass:"fas fa-envelope  mr-5"}),s("a",{attrs:{href:"mailto:?body="+t.getURL()}},[t._v("Send To a Friend")])]),s("li",{staticClass:"curser_print",attrs:{onclick:"window.print()"}},[s("i",{staticClass:"fas fa-print  mr-5"}),t._v("Print")])])]),s("hr")])],1),s("div",{staticClass:"shadow-md md:col-span-2 p-2"},[s("div",{staticClass:"sliderDetails"},[s("carousel",{staticClass:"bg-green",attrs:{navigationEnabled:!0,paginationEnabled:!1,perPage:1}},[t._l(t.estate.pictures,(function(t){return s("slide",{key:t.PictureID,staticClass:"slideDetails flex"},[s("img",{staticClass:"mx-auto w-auto h-48 md:h-auto cursor-pointer",attrs:{src:t.Url}})])})),t.estate.pictures&&0!=t.estate.pictures?t._e():s("slide",[s("img",{staticClass:"mx-auto md:w-auto  cursor-pointer",attrs:{src:a("c570")}})])],2)],1),s("div",{staticClass:"section-right p-4"},[s("div",{staticClass:"font-bold text-xl py-2 mb-8"},[t.estate.Price?s("span",{},[t._v(" Price : "+t._s(t.estate.Price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,","))+" "+t._s(t.estate.Currency)+" ")]):t._e(),s("span",{staticClass:"float-right capitalize",staticStyle:{color:"#39D47A"}},[t._v(t._s(t.estate.purpose))])]),s("div",{staticClass:"ref"},[s("span",[t._v("Reference : "+t._s(t.estate.EstateID))])]),s("span",{staticClass:"my-2 block text-black font-bold text-xl"},[t._v(t._s(t.estate.Name)+" ")]),s("div",{staticClass:"peb_details"},[s("Peb",{attrs:{EnergyClassName:t.estate.EnergyClass}})],1),s("span",{staticClass:"my-2 block"},[t._v(" "+t._s(t.estate.CategoryName)+" ")]),s("span",{staticClass:"block my-2 text-gray-400"},[t._v(t._s(t.estate.Address1))]),s("div",{staticClass:"grid grid-cols-3"},[t.estate.Rooms?s("span",[s("i",{staticClass:"fas fa-sink mr-2 text-yellow-500"}),t._v(" "+t._s(t.estate.Rooms)+" ")]):t._e(),t.estate.Bathrooms?s("span",[s("i",{staticClass:"fas fa-bed mr-2 text-yellow-500"}),t._v(" "+t._s(t.estate.Bathrooms)+" ")]):t._e(),t.estate.Area?s("span",[s("i",{staticClass:"fas fa-ruler-combined mr-2 text-yellow-500"}),t._v(" "+t._s(t.estate.Area)+" m² "),s("i",{staticClass:"fas fa-rectangle-wide"})]):t._e()]),s("h2",{staticClass:"block text-black font-bold md:text-xl my-4"},[t._v(" Property details ")]),s("div",{staticClass:"grid grid-cols-2 md:grid-cols-4 mb-2"},[s("div",[s("span",{staticClass:"text-gray-600 font-bold mb-1 block"},[t._v("Parking")]),t.estate.Parking?s("span",[t._v("Yes")]):s("span",[t._v("No")])]),s("div",[s("span",{staticClass:"text-gray-600 font-bold mb-1 block"},[t._v("Garage")]),t.estate.Garage?s("span",[t._v("Yes")]):s("span",[t._v("No")])]),s("div",[s("span",{staticClass:"text-gray-600 font-bold mb-1 block"},[t._v("Terrace")]),t.estate.Terrace?s("span",[t._v("Yes")]):s("span",[t._v("No")])]),s("div",[s("span",{staticClass:"text-gray-600 font-bold mb-1 block"},[t._v("Furnished")]),t.estate.Furnished?s("span",[t._v("Yes")]):s("span",[t._v("No")])])]),s("div",{staticClass:"grid grid-cols-2"},[s("span",{staticClass:"text-gray-600 font-bold mb-1"},[t._v("Ground Area")]),s("span",{staticClass:"text-gray-600 font-bold mb-1"},[t._v("Garden Area")]),s("div",{staticClass:"mb-2"},[t._v(" "+t._s(t.estate.GroundArea)),t.estate.GroundArea?s("span",[t._v(" m²")]):t._e()]),s("div",{staticClass:"mb-2"},[t._v(" "+t._s(t.estate.GardenArea)+" "),t.estate.GroundArea?s("span",[t._v(" m²")]):t._e()])]),t.estate.Description?s("h2",{staticClass:"my-2 font-bold text-lg"},[t._v(" Description ")]):t._e(),s("p",[t._v(" "+t._s(t.estate.Description)+" ")])]),s("div",{staticStyle:{"text-align":"center","font-size":"1.5rem","font-weight":"bold","margin-top":"50px","margin-bottom":"50px"}},[s("h1",{staticStyle:{"font-size":"2rem"}},[t._v("You Will Like Also")])]),s("div",{staticClass:"grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"},t._l(t.relatedEstates,(function(e,i){return s("router-link",{key:e.EstateID+"-"+i,staticClass:"relative",attrs:{to:{name:"properties.details",params:{estateId:e.EstateID}}}},[s("carousel",{attrs:{paginationEnabled:!1,perPage:1}},[t._l(e.pictures,(function(t){return s("slide",{key:t.PictureID},[s("img",{staticClass:"w-full h-56 object-cover cursor-pointer",attrs:{src:t.Url}})])})),e.pictures&&0!=e.pictures?t._e():s("slide",[s("img",{staticClass:"w-full h-56 object-cover cursor-pointer",attrs:{src:a("c570")}})])],2),s("div",{staticClass:"bg-gray-200 text-green-700 text-xs font-bold rounded-full p-2 absolute top-0 ml-2 mt-2"},[s("span",[t._v(t._s(e.purpose))])]),s("div",{staticClass:"mt-4 mb-2 truncate"},[e.Price?s("span",{staticClass:"text-black font-bold text-lg"},[t._v(t._s(e.Price)+" "+t._s(e.Currency))]):t._e(),s("button",{staticClass:"float-right px-2 py-1 rounded-full font-bold text-sm block text-white",staticStyle:{background:"#fbf0df",color:"#df9639"}},[t._v(" Details ")])]),s("h2",{staticClass:"text-black text-sm font-bold mb-4 block"},[e.Name.length>40?s("div",[t._v(" "+t._s(e.Name.substr(0,30))+" ... ")]):s("div",[t._v(t._s(e.Name))])]),s("div",[s("Peb",{attrs:{EnergyClassName:e.EnergyClass}})],1),s("span",{staticClass:"block text-black text-sm md:text-base my-2"},[e.Rooms?s("span",{staticClass:"lg:mr-2 xl:mr-2 md:mr-10"},[s("i",{staticClass:"fas fa-bed  text-yellow-500"}),t._v(" "+t._s(e.Rooms)+" ")]):t._e(),e.Bathrooms?s("span",{staticClass:"lg:mr-2 xl:mr-2 md:mr-10"},[s("i",{staticClass:"fas fa-sink   text-yellow-500"}),t._v(" "+t._s(e.Bathrooms)+" ")]):t._e(),e.Area?s("span",{staticClass:"lg:mr-2 xl:mr-2 md:mr-10"},[s("i",{staticClass:"fas fa-ruler-combined  text-yellow-500"}),t._v(" "+t._s(e.Area)+" ")]):t._e()])],1)})),1),s("loader",{directives:[{name:"show",rawName:"v-show",value:t.loadingRelatedEstates,expression:"loadingRelatedEstates"}],staticClass:"py-10"}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.relatedEstateApiUrl&&!t.loadingRelatedEstates,expression:"relatedEstateApiUrl && !loadingRelatedEstates"}],staticClass:"font-bold mx-auto text-sm md:text-lg text-center my-4 cursor-pointer py-2 w-2/4 md:w-2/6 rounded-full",staticStyle:{background:"#fbf0df",color:"#df9639"},on:{click:function(e){return t.loadRelatedEstates()}}},[t._v(" More related Estates ")])],1)]):s("loader",{staticClass:"py-10"})],1)},i=[],l=a("2909"),r=a("0543"),o=a("e6b4"),n=a("7267"),c=a("f0ca"),d=a.n(c),p=(a("6f3c"),a("22b3")),m=a("cf66"),u=a("6d3b"),f=(a("bbe3"),a("bc3a")),v=a.n(f),g=a("0a63"),h=a("71d6"),b={components:{VueEnglishdatepicker:r["a"],DatePick:d.a,Loader:p["a"],Peb:m["a"],Carousel:g["Carousel"],Slide:g["Slide"],ToorModal:o["a"],ContactModal:n["a"]},data:function(){return{estateId:this.$route.params.estateId,estate:null,loadingRelatedEstates:!1,relatedEstates:[],relatedEstateApiUrl:h.VitExportApi.Url+"estates/".concat(this.$route.params.estateId,"/related-estates"),bookTour:!1,date:"2019-01-01",picSwiper:null,relatedEstatesOpen:!1,contact:{Address1:"",Address2:"",Number:"",Box:"",Zip:"",EstateIds:[3515113],OfficeIds:[4381],CountryId:1,StatusId:1,LanguageId:"fr-BE",Name:"New contact",PrivateEmail:"test_contact@whise.mail"}}},methods:{getURL:function(){return window.location.href},displayToor:function(){this.$modal.show("toor")},displayContactModal:function(){this.$modal.show("contact")},displayCreateContact:function(){this.$modal.show("createContact")},prevSlide:function(){this.picSwiper.slidePrev()},nextSlide:function(){this.picSwiper.slideNext()},addContact:function(){var t=this,e={ClientId:4668,OfficeId:6644},a={headers:{Authorization:"Bearer "+h.Whise.AuthToken,"Content-Type":"application/json"}};v.a.post(h.Whise.Url+"admin/clients/token",e,a).then((function(e){e.data.token;var a={headers:{Authorization:"Bearer "+h.Whise.AuthToken,"Content-Type":"application/json"}},s={Name:t.contact.Name,FirstName:t.contact.FirstName,PrivateMobile:t.contact.PrivateMobile,OfficeIds:[6644],StatusId:1,CountryId:1,LanguageId:"fr-BE",Comments:t.contact.Comments,PrivateEmail:t.contact.PrivateEmail,AgreementEmail:t.contact.Newsletter,AgreementSms:t.contact.Newsletter,EstateIds:[t.$route.params.estateId]};v.a.post(h.VitExportApi.Url+"contacts/create",s,a).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)}))},loadEstate:function(){var t=this,e=this.$route.params.estateId;v.a.get(h.VitExportApi.Url+"estates/".concat(e)).then((function(e){t.estate=e.data})).catch((function(t){console.log(t)}))},loadRelatedEstates:function(){var t=this;console.log("loadRelatedEstates"),console.log("loadRelatedEstates"),this.loadingRelatedEstates=!0,v.a.get(this.relatedEstateApiUrl).then((function(e){var a;t.relatedEstateApiUrl=e.data.next_page_url,(a=t.relatedEstates).push.apply(a,Object(l["a"])(e.data.data)),t.loadingRelatedEstates=!1})).catch((function(e){t.loadingRelatedEstates=!1,console.log(e)}))},displayRelatedEstateDetails:function(t){this.$parent.$parent.displayDetails(t)},initSwiper:function(){this.picSwiper=new u["a"](this.$refs.swiperContainer,{cssMode:!0,navigation:{nextEl:this.$refs.swiperButtonNext,prevEl:this.$refs.swiperButtonPrev},pagination:{el:this.$refs.swiperPagination},mousewheel:!0,keyboard:!0})}},watch:{"$route.params":{handler:function(t){this.loadEstate(),this.relatedEstateApiUrl=h.VitExportApi.Url+"estates/".concat(t.estateId,"/related-estates"),this.relatedEstates=[],this.loadRelatedEstates()},immediate:!0}},mounted:function(){this.initSwiper()}},_=b,C=(a("7a06"),a("2877")),x=Object(C["a"])(_,s,i,!1,null,"91dd608c",null);e["default"]=x.exports}}]);
//# sourceMappingURL=chunk-120650b8.8119518f.js.map