(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0eab257e"],{"56fc":function(t,e,s){t.exports=s.p+"img/avatar.1383d81f.svg"},"9f52":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"xl:px-48"},[t.estate?a("div",{staticClass:"grid md:grid-cols-3 xl:gap-10"},[a("div",{staticClass:"md:order-last p-4 md:p-0 "},[a("div",{staticClass:"shadow-md xl:p-8 xl:px-10 p-2"},[null!=t.estate.RepresentativeID?a("div",{staticClass:"flex items-center"},[a("img",{staticClass:"rounded-full h-12 w-12 mr-6 xl:h-24 xl:w-24 lg:h-20 lg:w-20 md:h-16 md:w-16  lg:mr-12 md:mr-4",attrs:{src:t.estate.representativePicture.Url}}),a("div",{staticClass:"text-gray-400 xl:text-xl md:text-sm"},[t._v(" "+t._s(t.estate.representativeName)+" "+t._s(t.estate.representativeLastName)+" ")])]):a("div",{staticClass:"flex items-center"},[a("img",{staticClass:"rounded-full h-12 w-12 mr-6 xl:h-24 xl:w-24 lg:h-20 lg:w-20 md:h-16 md:w-16  lg:mr-12 md:mr-4",attrs:{src:s("56fc")}}),a("span",{staticClass:"text-gray-400 xl:text-xl md:text-base"},[t._v(" Pixart User ")])]),a("button",{staticClass:"mt-6 text-center m-auto text-white p-2 py-4 w-full text-lg font-bold",staticStyle:{background:"#fbf0df",color:"#df9639"},on:{click:t.displayContactModal}},[t._v(" "+t._s(t.$t("Contact.ContactUs"))+" ")])]),a("v-modal",{attrs:{height:"auto",adaptive:!0,"min-width":100,scrollable:!0,name:"contact"}},[a("contact-modal")],1),a("div",{staticClass:"mt-20"},[a("hr"),a("div",{staticClass:"p-10"},[a("ul",[a("li",[a("a",{attrs:{target:"_blank",href:"https://www.facebook.com/sharer.php?u="+t.getURL(),rel:"nofollow",onclick:"javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;"}},[a("i",{staticClass:"fa fa-facebook-square mr-5"}),t._v(" "+t._s(t.$t("Details.Share")))])]),a("li",[a("i",{staticClass:"fas fa-envelope  mr-5"}),a("a",{attrs:{href:"mailto:?body="+t.getURL()}},[t._v(t._s(t.$t("Details.SendTo")))])]),a("li",{staticClass:"curser_print",attrs:{onclick:"window.print()"}},[a("i",{staticClass:"fas fa-print  mr-5"}),t._v(t._s(t.$t("Details.Print")))])])]),a("hr")])],1),a("div",{staticClass:"shadow-md md:col-span-2 p-2"},[a("div",{staticClass:"sliderDetails"},[a("carousel",{staticClass:"bg-green",attrs:{navigationEnabled:!0,paginationEnabled:!1,perPage:1}},[t._l(t.estate.pictures,(function(t){return a("slide",{key:t.PictureID,staticClass:"slideDetails flex"},[a("img",{staticClass:"mx-auto w-auto h-48 md:h-auto cursor-pointer",attrs:{src:t.Url}})])})),t.estate.pictures&&0!=t.estate.pictures?t._e():a("slide",[a("img",{staticClass:"mx-auto md:w-auto  cursor-pointer",attrs:{src:s("c570")}})])],2)],1),a("div",{staticClass:"section-right p-4"},[a("div",{staticClass:"font-bold text-xl py-2 mb-8"},[t.estate.Price?a("span",{},[t._v(" "+t._s(t.$t("EsatateFilter.Price"))+" : "+t._s(t.estate.Price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,","))+" "+t._s(t.estate.Currency)+" ")]):t._e(),a("span",{staticClass:"float-right capitalize",staticStyle:{color:"#39D47A"}},[t._v(t._s(t.estate.purpose))])]),a("div",{staticClass:"ref"},[a("span",[t._v(t._s(t.$t("Details.Reference"))+": "+t._s(t.estate.EstateID))])]),a("span",{staticClass:"my-2 block text-black font-bold text-xl"},[t._v(t._s(t.estate.Name)+" ")]),a("div",{staticClass:"peb_details"},[a("Peb",{attrs:{EnergyClassName:t.estate.EnergyClass}})],1),a("span",{staticClass:"my-2 block"},[t._v(" "+t._s(t.estate.CategoryName)+" ")]),a("span",{staticClass:"block my-2 text-gray-400"},[t._v(t._s(t.estate.Address1))]),a("div",{staticClass:"grid grid-cols-3"},[t.estate.Rooms?a("span",[a("i",{staticClass:"fas fa-sink mr-2 text-yellow-500"}),t._v(" "+t._s(t.estate.Rooms)+" ")]):t._e(),t.estate.Bathrooms?a("span",[a("i",{staticClass:"fas fa-bed mr-2 text-yellow-500"}),t._v(" "+t._s(t.estate.Bathrooms)+" ")]):t._e(),t.estate.Area?a("span",[a("i",{staticClass:"fas fa-ruler-combined mr-2 text-yellow-500"}),t._v(" "+t._s(t.estate.Area)+" m² "),a("i",{staticClass:"fas fa-rectangle-wide"})]):t._e()]),a("h2",{staticClass:"block text-black font-bold md:text-xl my-4"},[t._v(" "+t._s(t.$t("Details.propertieDet"))+" ")]),a("div",{staticClass:"grid grid-cols-2 md:grid-cols-4 mb-2"},[a("div",[a("span",{staticClass:"text-gray-600 font-bold mb-1 block"},[t._v(t._s(t.$t("EsatateFilter.Parking")))]),t.estate.Parking?a("span",[t._v(t._s(t.$t("Details.Yes")))]):a("span",[t._v(t._s(t.$t("Details.No")))])]),a("div",[a("span",{staticClass:"text-gray-600 font-bold mb-1 block"},[t._v(t._s(t.$t("EsatateFilter.Garage")))]),t.estate.Garage?a("span",[t._v(t._s(t.$t("Details.Yes")))]):a("span",[t._v(t._s(t.$t("Details.No")))])]),a("div",[a("span",{staticClass:"text-gray-600 font-bold mb-1 block"},[t._v(t._s(t.$t("EsatateFilter.Terrace")))]),t.estate.Terrace?a("span",[t._v(t._s(t.$t("Details.Yes")))]):a("span",[t._v(t._s(t.$t("Details.No")))])]),a("div",[a("span",{staticClass:"text-gray-600 font-bold mb-1 block"},[t._v(t._s(t.$t("EsatateFilter.Furnished")))]),t.estate.Furnished?a("span",[t._v(t._s(t.$t("Details.Yes")))]):a("span",[t._v(t._s(t.$t("Details.No")))])])]),a("div",{staticClass:"grid grid-cols-2"},[a("span",{staticClass:"text-gray-600 font-bold mb-1"},[t._v(t._s(t.$t("Details.GroundArea")))]),a("span",{staticClass:"text-gray-600 font-bold mb-1"},[t._v(t._s(t.$t("Details.GardenArea")))]),a("div",{staticClass:"mb-2"},[t._v(" "+t._s(t.estate.GroundArea)),t.estate.GroundArea?a("span",[t._v(" m²")]):t._e()]),a("div",{staticClass:"mb-2"},[t._v(" "+t._s(t.estate.GardenArea)+" "),t.estate.GroundArea?a("span",[t._v(" m²")]):t._e()])]),t.estate.Description?a("h2",{staticClass:"my-2 font-bold text-lg"},[t._v(" "+t._s(t.$t("Details.Description"))+" ")]):t._e(),a("p",[t._v(" "+t._s(t.estate.Description)+" ")])]),a("div",{staticStyle:{"text-align":"center","font-size":"1.5rem","font-weight":"bold","margin-top":"50px","margin-bottom":"50px"}},[a("h1",{staticStyle:{"font-size":"2rem"}},[t._v(" "+t._s(t.$t("Details.YouWillLike")))])]),a("div",{staticClass:"grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"},t._l(t.relatedEstates,(function(e,i){return a("router-link",{key:e.EstateID+"-"+i,staticClass:"relative",attrs:{to:{name:"properties.details",params:{estateId:e.EstateID}}}},[a("carousel",{attrs:{paginationEnabled:!1,perPage:1}},[t._l(e.pictures,(function(t){return a("slide",{key:t.PictureID},[a("img",{staticClass:"w-full h-56 object-cover cursor-pointer",attrs:{src:t.Url}})])})),e.pictures&&0!=e.pictures?t._e():a("slide",[a("img",{staticClass:"w-full h-56 object-cover cursor-pointer",attrs:{src:s("c570")}})])],2),a("div",{staticClass:"bg-gray-200 text-green-700 text-xs font-bold rounded-full p-2 absolute top-0 ml-2 mt-2"},[a("span",[t._v(t._s(e.purpose))])]),a("div",{staticClass:"mt-4 mb-2 truncate"},[e.Price?a("span",{staticClass:"text-black font-bold text-lg"},[t._v(t._s(e.Price)+" "+t._s(e.Currency))]):t._e(),a("button",{staticClass:"float-right px-2 py-1 rounded-full font-bold text-sm block text-white",staticStyle:{background:"#fbf0df",color:"#df9639"}},[t._v(" "+t._s(t.$t("Details.Details"))+" ")])]),a("h2",{staticClass:"text-black text-sm font-bold mb-4 block"},[e.Name.length>40?a("div",[t._v(" "+t._s(e.Name.substr(0,30))+" ... ")]):a("div",[t._v(t._s(e.Name))])]),a("div",[a("Peb",{attrs:{EnergyClassName:e.EnergyClass}})],1),a("span",{staticClass:"block text-black text-sm md:text-base my-2"},[e.Rooms?a("span",{staticClass:"lg:mr-2 xl:mr-2 md:mr-10"},[a("i",{staticClass:"fas fa-bed  text-yellow-500"}),t._v(" "+t._s(e.Rooms)+" ")]):t._e(),e.Bathrooms?a("span",{staticClass:"lg:mr-2 xl:mr-2 md:mr-10"},[a("i",{staticClass:"fas fa-sink   text-yellow-500"}),t._v(" "+t._s(e.Bathrooms)+" ")]):t._e(),e.Area?a("span",{staticClass:"lg:mr-2 xl:mr-2 md:mr-10"},[a("i",{staticClass:"fas fa-ruler-combined  text-yellow-500"}),t._v(" "+t._s(e.Area)+" ")]):t._e()])],1)})),1),a("loader",{directives:[{name:"show",rawName:"v-show",value:t.loadingRelatedEstates,expression:"loadingRelatedEstates"}],staticClass:"py-10"}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.relatedEstateApiUrl&&!t.loadingRelatedEstates,expression:"relatedEstateApiUrl && !loadingRelatedEstates"}],staticClass:"font-bold mx-auto text-sm md:text-lg text-center my-4 cursor-pointer py-2 w-2/4 md:w-2/6 rounded-full",staticStyle:{background:"#fbf0df",color:"#df9639"},on:{click:function(e){return t.loadRelatedEstates()}}},[t._v(" More related Estates ")])],1)]):a("loader",{staticClass:"py-10"})],1)},i=[],l=s("2909"),r=s("0543"),o=s("e6b4"),n=s("7267"),c=s("f0ca"),d=s.n(c),p=(s("6f3c"),s("22b3")),m=s("cf66"),u=s("6d3b"),f=(s("bbe3"),s("bc3a")),_=s.n(f),v=s("0a63"),g=s("71d6"),h={components:{VueEnglishdatepicker:r["a"],DatePick:d.a,Loader:p["a"],Peb:m["a"],Carousel:v["Carousel"],Slide:v["Slide"],ToorModal:o["a"],ContactModal:n["a"]},data:function(){return{estateId:this.$route.params.estateId,estate:null,loadingRelatedEstates:!1,relatedEstates:[],relatedEstateApiUrl:g.VitExportApi.Url+"estates/".concat(this.$route.params.estateId,"/related-estates"),bookTour:!1,date:"2019-01-01",picSwiper:null,relatedEstatesOpen:!1,contact:{Address1:"",Address2:"",Number:"",Box:"",Zip:"",EstateIds:[3515113],OfficeIds:[4381],CountryId:1,StatusId:1,LanguageId:"fr-BE",Name:"New contact",PrivateEmail:"test_contact@whise.mail"}}},methods:{getURL:function(){return window.location.href},displayToor:function(){this.$modal.show("toor")},displayContactModal:function(){this.$modal.show("contact")},displayCreateContact:function(){this.$modal.show("createContact")},prevSlide:function(){this.picSwiper.slidePrev()},nextSlide:function(){this.picSwiper.slideNext()},addContact:function(){var t=this,e={ClientId:4668,OfficeId:6644},s={headers:{Authorization:"Bearer "+g.Whise.AuthToken,"Content-Type":"application/json"}};_.a.post(g.Whise.Url+"admin/clients/token",e,s).then((function(e){e.data.token;var s={headers:{Authorization:"Bearer "+g.Whise.AuthToken,"Content-Type":"application/json"}},a={Name:t.contact.Name,FirstName:t.contact.FirstName,PrivateMobile:t.contact.PrivateMobile,OfficeIds:[6644],StatusId:1,CountryId:1,LanguageId:"fr-BE",Comments:t.contact.Comments,PrivateEmail:t.contact.PrivateEmail,AgreementEmail:t.contact.Newsletter,AgreementSms:t.contact.Newsletter,EstateIds:[t.$route.params.estateId]};_.a.post(g.VitExportApi.Url+"contacts/create",a,s).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)}))},loadEstate:function(){var t=this,e=this.$route.params.estateId;_.a.get(g.VitExportApi.Url+"estates/".concat(e)).then((function(e){t.estate=e.data})).catch((function(t){console.log(t)}))},loadRelatedEstates:function(){var t=this;console.log("loadRelatedEstates"),console.log("loadRelatedEstates"),this.loadingRelatedEstates=!0,_.a.get(this.relatedEstateApiUrl).then((function(e){var s;t.relatedEstateApiUrl=e.data.next_page_url,(s=t.relatedEstates).push.apply(s,Object(l["a"])(e.data.data)),t.loadingRelatedEstates=!1})).catch((function(e){t.loadingRelatedEstates=!1,console.log(e)}))},displayRelatedEstateDetails:function(t){this.$parent.$parent.displayDetails(t)},initSwiper:function(){this.picSwiper=new u["a"](this.$refs.swiperContainer,{cssMode:!0,navigation:{nextEl:this.$refs.swiperButtonNext,prevEl:this.$refs.swiperButtonPrev},pagination:{el:this.$refs.swiperPagination},mousewheel:!0,keyboard:!0})}},watch:{"$route.params":{handler:function(t){this.loadEstate(),this.relatedEstateApiUrl=g.VitExportApi.Url+"estates/".concat(t.estateId,"/related-estates"),this.relatedEstates=[],this.loadRelatedEstates()},immediate:!0}},mounted:function(){this.initSwiper()}},b=h,C=(s("f06e"),s("2877")),x=Object(C["a"])(b,a,i,!1,null,"6afd9fb4",null);e["default"]=x.exports},f06e:function(t,e,s){"use strict";s("f726")},f726:function(t,e,s){}}]);
//# sourceMappingURL=chunk-0eab257e.a510caab.js.map