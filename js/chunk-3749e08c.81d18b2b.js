(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3749e08c"],{"0c11":function(t,e,a){},2923:function(t,e,a){},"44bf":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticClass:"text-center flex justify-center\t"},[t.showMsg?a("p",{staticClass:"font-bold text-l md:text-xl text-center\tm-0 mt-10 text-center bg-green-200\tbg-opacity-70 p-4 w-70 flex"},[t._v(" "+t._s(t.$t("Contact.SuccessMessage"))+" ")]):t._e()]),a("h2",{staticClass:"font-bold text-xl md:text-4xl text-center p-10 py-10 md:py-16"},[t._v(" EVALUATION ")]),t._m(0),a("form",{staticClass:"px-4 md:px-16 lg:px-36 my-4 text-sm",on:{submit:function(e){return e.preventDefault(),t.addContact()}}},[a("h2",{staticClass:"text-center font-bold text-xl my-4"},[t._v("Contact")]),a("div",{staticClass:"grid grid-cols-2 gap-4"},[a("div",[a("label",{staticClass:"my-2"},[t._v("Gender")]),a("multiselect",{staticClass:"mt-2 mb-3",attrs:{required:"",label:"shortDescription","track-by":"shortDescription","item-value":"id","show-labels":!1,searchable:!1,options:t.genders,placeholder:"Mrs / Mr","close-on-select":!0},model:{value:t.ContactTitleId,callback:function(e){t.ContactTitleId=e},expression:"ContactTitleId"}})],1),a("div",[a("label",{staticClass:"my-2"},[t._v("Full Name *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.Name,expression:"contact.Name"}],staticClass:"px-3 py-2 my-2 border block w-full",attrs:{type:"text",placeholder:"Your Full name ..",required:""},domProps:{value:t.contact.Name},on:{input:function(e){e.target.composing||t.$set(t.contact,"Name",e.target.value)}}})]),a("div",[a("label",{staticClass:"my-2"},[t._v("Email *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.PrivateEmail,expression:"contact.PrivateEmail"}],staticClass:"px-3 py-2 my-2 border block w-full",attrs:{type:"email",placeholder:"Your Email address ..",required:""},domProps:{value:t.contact.PrivateEmail},on:{input:function(e){e.target.composing||t.$set(t.contact,"PrivateEmail",e.target.value)}}})]),a("div",[a("label",{staticClass:"my-2"},[t._v("Phone Number *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.PrivateMobile,expression:"contact.PrivateMobile"}],staticClass:"px-3 py-2 my-2 border block w-full",attrs:{type:"text",placeholder:"Your Phone Number ..",required:""},domProps:{value:t.contact.PrivateMobile},on:{input:function(e){e.target.composing||t.$set(t.contact,"PrivateMobile",e.target.value)}}})])]),a("h2",{staticClass:"text-center font-bold text-xl my-4"},[t._v("Address")]),a("div",{staticClass:"grid grid-cols-2 gap-4"},[a("div",[a("label",{staticClass:"my-2"},[t._v("Address *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.Address1,expression:"contact.Address1"}],staticClass:"px-3 py-2 my-2 border block w-full",attrs:{type:"text",placeholder:"Street",required:""},domProps:{value:t.contact.Address1},on:{input:function(e){e.target.composing||t.$set(t.contact,"Address1",e.target.value)}}})]),a("div",{},[a("label",{staticClass:"my-2"},[t._v("Number *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.Number,expression:"contact.Number"}],staticClass:"px-3 py-2 my-2 border block w-full ",attrs:{type:"number",placeholder:"Number ..",required:""},domProps:{value:t.contact.Number},on:{input:function(e){e.target.composing||t.$set(t.contact,"Number",e.target.value)}}})]),a("div",[a("label",{staticClass:"my-2"},[t._v("City *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.City,expression:"contact.City"}],staticClass:"px-3 py-2 my-2 border block w-full",attrs:{type:"text",placeholder:"City ..",required:""},domProps:{value:t.contact.City},on:{input:function(e){e.target.composing||t.$set(t.contact,"City",e.target.value)}}})]),a("div",[a("label",{staticClass:"my-2"},[t._v("PostCode *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.Zip,expression:"contact.Zip"}],staticClass:"px-3 py-2 my-2 border block w-full",attrs:{type:"text",placeholder:"Postcode ..",required:""},domProps:{value:t.contact.Zip},on:{input:function(e){e.target.composing||t.$set(t.contact,"Zip",e.target.value)}}})])]),a("h2",{staticClass:"text-center font-bold text-xl my-4 gap-4"},[t._v(" Property description ")]),a("div",{staticClass:"grid grid-cols-2 gap-2"},[a("div",[a("label",{staticClass:"my-2"},[t._v("Transaction type")]),a("multiselect",{staticClass:"mt-2 mb-3",attrs:{required:"",label:"name","track-by":"name","item-value":"id","show-labels":!1,searchable:!1,options:t.$t("transactions"),placeholder:"For Sale / For Rent","close-on-select":!0},model:{value:t.contact.TransactionType,callback:function(e){t.$set(t.contact,"TransactionType",e)},expression:"contact.TransactionType"}})],1),a("div",[a("label",{staticClass:"my-2"},[t._v("Property type")]),a("multiselect",{staticClass:"mt-2 mb-3",attrs:{required:"",label:"name","track-by":"name","item-value":"id","show-labels":!1,searchable:!1,options:t.$t("categories"),placeholder:"Your Property type","close-on-select":!0},model:{value:t.contact.PropertyType,callback:function(e){t.$set(t.contact,"PropertyType",e)},expression:"contact.PropertyType"}})],1),a("div",[a("label",{staticClass:"my-2"},[t._v("Construction Year")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.ConstructionYear,expression:"contact.ConstructionYear"}],staticClass:"px-3 py-2 my-2 border block w-full",attrs:{type:"text",placeholder:"Year"},domProps:{value:t.contact.ConstructionYear},on:{input:function(e){e.target.composing||t.$set(t.contact,"ConstructionYear",e.target.value)}}})]),a("div",[a("label",{staticClass:"my-2"},[t._v("Surface")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.Surface,expression:"contact.Surface"}],staticClass:"px-3 py-2 my-2 border block w-full",attrs:{type:"text",placeholder:"m²"},domProps:{value:t.contact.Surface},on:{input:function(e){e.target.composing||t.$set(t.contact,"Surface",e.target.value)}}})]),a("div",[a("label",{staticClass:"my-2"},[t._v("Country")]),a("multiselect",{staticClass:"mt-2 mb-3",attrs:{required:"",label:"name","track-by":"name","item-value":"id","show-labels":!1,options:t.$t("countries"),placeholder:"Countries...","close-on-select":!0,"open-direction":"bottom"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),a("div",{staticClass:"col-span-2 my-2"},[a("label",[t._v("Comments")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.Comments,expression:"Comments"}],staticClass:"w-full border border-2 h-32 px-3 py-2 mt-3",domProps:{value:t.Comments},on:{input:function(e){e.target.composing||(t.Comments=e.target.value)}}})])]),t._m(1)]),a("Footer")],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"px-4 md:px-16 lg:px-36 text-base lg:text-lg"},[a("p",[t._v("Do you want to sell your property ?")]),a("p",[t._v(" Our experts provide an accurate evaluation based on the market trends and their experience ")]),a("p",[t._v("Fill out the form below and we will contact you promptly")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center mt-4 mb-12"},[a("button",{staticClass:"text-center px-24 py-2 font-semibold bg-yellow-500 text-white transition duration-500 ease-in-out  hover:bg-yellow-600 transform hover:-translate-y-1  ..."},[t._v(" Submit ")])])}],n=(a("b0c0"),a("fd2d")),s=a("bc3a"),i=a.n(s),r=a("8e5f"),l=a.n(r),d=(a("2ef0"),a("71d6")),m={name:"Evaluation",components:{Multiselect:l.a,Footer:n["a"]},data:function(){return{filters:{keyword:"",countries:[]},styleOption:{color:"black"},showMsg:!1,contact:{Name:"",FirstName:"",Address1:"",Address2:"",Number:"",Box:"",Zip:"",City:"",CountryId:"",PrivateTel:"",ContactTypeIds:[178477],AgreementEmail:!0,AgreementSms:!0,AgreementMailingCampaign:!0,PrivateMobile:"",OfficeIds:[6644],StatusId:1,LanguageId:"fr-BE",PrivateEmail:"",selected:""},ContactTitleId:"",Comments:"",selected:"",options:[],transactions:[],categories:[],genders:[],countries:[]}},methods:{getGenders:function(){var t=this,e={ClientId:4668,OfficeId:6644},a={headers:{Authorization:"Bearer "+d.Whise.AuthToken,"Content-Type":"application/json"}};i.a.post(d.Whise.Url+"admin/clients/token",e,a).then((function(o){o.data.token;i.a.post(d.Whise.Url+"contacts/titles/list",e,a).then((function(e){t.genders=e.data.contactTitles})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)}))},addContact:function(){var t=this,e={ClientId:4668,OfficeId:6644},a={headers:{Authorization:"Bearer "+d.Whise.AuthToken,"Content-Type":"application/json"}};i.a.post(d.Whise.Url+"admin/clients/token",e,a).then((function(e){e.data.token;var a={headers:{Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlhdCI6MTYxMjMzOTA2Mn0.eyJzZXJ2aWNlQ29uc3VtZXJJZCI6MjMzLCJ0eXBlSWQiOjQsImNsaWVudElkIjo0NjY4fQ.mXvm76zTWTrgba9mGU8ny_I4ZZvmXGaRfnpO7mfMhBo","Content-Type":"application/json"}},o={Name:t.contact.Name,FirstName:t.contact.FirstName,Address1:t.contact.Address1,Address2:"",Number:t.contact.Number,Box:"",Zip:t.contact.Zip,City:t.contact.City,PrivateTel:t.contact.PrivateTel,ContactTitleId:t.ContactTitleId.id,ContactTypeIds:[178477],Comments:t.contact.TransactionType.name+", "+t.contact.PropertyType.name+", "+t.contact.ConstructionYear+", "+t.contact.Surface+"m²",PrivateMobile:t.contact.PrivateMobile,OfficeIds:[6644],CountryId:t.selected.id,StatusId:1,LanguageId:"fr-BE",PrivateEmail:t.contact.PrivateEmail,AgreementEmail:!0,AgreementSms:!0,AgreementMailingCampaign:!0};console.log(o),i.a.post(d.Whise.Url+"contacts/create",o,a).then((function(e){t.showMsg=!0,t.contact.ContactTitleId="",t.contact.ContactTypeIds="",t.selected="",t.contact.Name="",t.contact.PrivateEmail="",t.contact.PrivateMobile="",t.contact.FirstName="",t.contact.Address1="",t.contact.PrivateTel="",t.contact.City="",t.contact.Zip="",t.contact.Comments="",t.contact.TransactionType="",t.contact.PropertyType="",t.contact.Year="",t.contact.Surface=""})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)})),window.scrollTo(0,0)}},mounted:function(){this.getGenders()}},u=m,p=(a("60bc"),a("d36d"),a("5a6d"),a("2877")),v=Object(p["a"])(u,o,c,!1,null,"a10db19e",null);e["default"]=v.exports},"5a6d":function(t,e,a){"use strict";a("2923")},d36d:function(t,e,a){"use strict";a("0c11")}}]);
//# sourceMappingURL=chunk-3749e08c.81d18b2b.js.map