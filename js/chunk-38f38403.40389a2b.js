(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38f38403"],{"0b70":function(t,e,i){"use strict";i("7929")},1911:function(t,e,i){t.exports=i.p+"img/investers.436403a4.jpg"},7929:function(t,e,i){},bd98:function(t,e,i){t.exports=i.p+"img/invest.8b3011cc.jpg"},f820:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"slide  lg:h-screen flex justify-center items-center"},[i("div",{staticClass:"textHeader text-white text-lg md:text-4xl lg:text-6xl text-center "},[i("p",{staticStyle:{"font-size":"2rem",padding:"30px 20px"}},[i("section",{domProps:{innerHTML:t._s(t.$t("About.titleAbout"))}})])])]),i("div",{staticClass:"text-center py-4 px-4 md:px-32 mt-20 mb-20"},[i("h2",{staticClass:"text-xl md:text-4xl font-bold my-2 mb-10"},[t._v(t._s(t.$t("About.OURTEAM")))]),i("p",{staticClass:"text-sm  md:text-center",staticStyle:{"font-size":"1.3rem","line-height":"1.6","text-align":"initial"}},[t._v(" "+t._s(t.$t("About.Team"))+" ")])]),i("div",{staticClass:"text-center py-4 px-4 md:px-32 mt-20 mb-20",staticStyle:{background:"rgb(207 206 206)"}},[i("div",[i("h2",{staticClass:"text-xl md:text-4xl font-bold my-2 mb-10"},[t._v(t._s(t.$t("About.OURFEES")))]),i("p",[t._v(t._s(t.$t("About.FeesText")))])]),i("div",{staticClass:"grid lg:grid-cols-2 gap-10 px-16 py-8 mt-10"},[i("div",[i("h1",{staticClass:"text-4xl md:text-2xl mb-6"},[t._v(t._s(t.$t("About.Investyourmoney")))]),i("p",{staticStyle:{"text-align":"initial"}},[t._v(" "+t._s(t.$t("About.MoneyText"))+" ")])]),t._m(0)]),i("div",{staticClass:"grid lg:grid-cols-2 gap-10 px-16 py-8 mt-10"},[t._m(1),i("div",[i("h1",{staticClass:"text-4xl md:text-2xl mb-6",staticStyle:{"text-align":"justify"}},[t._v(t._s(t.$t("About.Greese")))]),i("p",{staticStyle:{"text-align":"initial"}},[t._v(" "+t._s(t.$t("About.GreesetEXT"))+" ")])])])]),i("div",{staticClass:"grid lg:grid-cols-2 gap-10 px-16 py-8 mt-10"},[i("div",[i("h1",{staticClass:"text-4xl md:text-2xl mb-6"},[t._v(t._s(t.$t("About.iBPGreese")))]),i("p",{staticStyle:{"text-align":"initial"}},[t._v(" "+t._s(t.$t("About.IBPText"))+" ")])]),t._m(2)]),i("Footer")],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{staticClass:"w-full",attrs:{src:i("bd98"),alt:"<a href='https://fr.freepik.com/photos/ville'>Ville photo créé par jcomp - fr.freepik.com</a>"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{staticClass:"w-full",attrs:{src:i("1911"),alt:"<a href='https://fr.freepik.com/photos/carte-visite'>Carte de visite photo créé par rawpixel.com - fr.freepik.com</a>"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{staticClass:"w-full",attrs:{src:i("fafc"),alt:"<a href='https://www.freepik.com/photos/house'>House photo created by freepik - www.freepik.com</a>"}})])}],n=(i("b0c0"),i("fd2d")),c=i("bc3a"),o=i.n(c),r=i("8e5f"),l=i.n(r),m=(i("2ef0"),{name:"About",components:{Multiselect:l.a,Footer:n["a"]},data:function(){return{filters:{keyword:"",countries:[]},styleOption:{color:"black"},showMsg:!1,contact:{Name:"",FirstName:"",Address1:"",Address2:"",Number:"",Box:"",Zip:"",City:"",CountryId:"",PrivateTel:"",ContactTypeIds:[178477],AgreementEmail:!0,AgreementSms:!0,AgreementMailingCampaign:!0,PrivateMobile:"",OfficeIds:[6644],StatusId:1,LanguageId:"fr-BE",PrivateEmail:"",selected:""},ContactTitleId:"",Comments:"",selected:"",options:[],transactions:[],categories:[],genders:[],countries:[]}},methods:{getGenders:function(){var t=this,e={ClientId:4668,OfficeId:6644},i="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlhdCI6MTYxMjMzOTQ3Mn0.eyJzZXJ2aWNlQ29uc3VtZXJJZCI6MjMzLCJ0eXBlSWQiOjQsImNsaWVudElkIjo0NjY4fQ.gDNwAXok3Fr4AR4kuJ12vVcytlmr0--bInx65euVxos",a={headers:{Authorization:"Bearer ".concat(i),"Content-Type":"application/json"}};o.a.post("https://api.whise.eu/v1/admin/clients/token",e,a).then((function(i){i.data.token;var a={headers:{Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlhdCI6MTYxMjMzOTA2Mn0.eyJzZXJ2aWNlQ29uc3VtZXJJZCI6MjMzLCJ0eXBlSWQiOjQsImNsaWVudElkIjo0NjY4fQ.mXvm76zTWTrgba9mGU8ny_I4ZZvmXGaRfnpO7mfMhBo","Content-Type":"application/json"}};o.a.post("https://api.whise.eu/v1/contacts/titles/list",e,a).then((function(e){t.genders=e.data.contactTitles})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)}))},addContact:function(){var t=this,e={ClientId:4668,OfficeId:6644},i="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlhdCI6MTYxMjMzOTQ3Mn0.eyJzZXJ2aWNlQ29uc3VtZXJJZCI6MjMzLCJ0eXBlSWQiOjQsImNsaWVudElkIjo0NjY4fQ.gDNwAXok3Fr4AR4kuJ12vVcytlmr0--bInx65euVxos",a={headers:{Authorization:"Bearer ".concat(i),"Content-Type":"application/json"}};o.a.post("https://api.whise.eu/v1/admin/clients/token",e,a).then((function(e){e.data.token;var i={headers:{Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlhdCI6MTYxMjMzOTA2Mn0.eyJzZXJ2aWNlQ29uc3VtZXJJZCI6MjMzLCJ0eXBlSWQiOjQsImNsaWVudElkIjo0NjY4fQ.mXvm76zTWTrgba9mGU8ny_I4ZZvmXGaRfnpO7mfMhBo","Content-Type":"application/json"}},a={Name:t.contact.Name,FirstName:t.contact.FirstName,Address1:t.contact.Address1,Address2:"",Number:t.contact.Number,Box:"",Zip:t.contact.Zip,City:t.contact.City,PrivateTel:t.contact.PrivateTel,ContactTitleId:t.ContactTitleId.id,ContactTypeIds:[178477],Comments:t.contact.TransactionType.name+", "+t.contact.PropertyType.name+", "+t.contact.ConstructionYear+", "+t.contact.Surface+"m²",PrivateMobile:t.contact.PrivateMobile,OfficeIds:[6644],CountryId:t.selected.id,StatusId:1,LanguageId:"fr-BE",PrivateEmail:t.contact.PrivateEmail,AgreementEmail:!0,AgreementSms:!0,AgreementMailingCampaign:!0};console.log(a),o.a.post("https://api.whise.eu/v1/contacts/create",a,i).then((function(e){t.showMsg=!0,t.contact.ContactTitleId="",t.contact.ContactTypeIds="",t.selected="",t.contact.Name="",t.contact.PrivateEmail="",t.contact.PrivateMobile="",t.contact.FirstName="",t.contact.Address1="",t.contact.PrivateTel="",t.contact.City="",t.contact.Zip="",t.contact.Comments="",t.contact.TransactionType="",t.contact.PropertyType="",t.contact.Year="",t.contact.Surface=""})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)})),window.scrollTo(0,0)}},mounted:function(){this.getGenders()}}),d=m,p=(i("0b70"),i("2877")),u=Object(p["a"])(d,a,s,!1,null,"60173998",null);e["default"]=u.exports},fafc:function(t,e,i){t.exports=i.p+"img/main1.1a0a75d7.jpg"}}]);
//# sourceMappingURL=chunk-38f38403.40389a2b.js.map