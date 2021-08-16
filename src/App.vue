<template>
  <div id="app">
    <div id="nav" class=" stroke bg-gray-900 md:flex justify-between mb-4">
      <div class="flex justify-between items-center">
        <img src="./assets/img/logo.png" />

        <div class="px-4 cursor-pointer md:hidden" id="iconOpen">
          <svg
            class="w-8 text-white font-bold"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      <ul
        class="md:flex items-center justify-between hidden md:block z-40 mt-2 md:mt-0 bg-gray-900"
        id="menu"
      >
        <li class="mb-2 md:mb-0">
          <router-link to="/" class=" other lg:mx-4 mx-2 "> {{ $t("Header.Home") }}</router-link>
        </li>
        <li class="mb-2 md:mb-0 ">
          <router-link to="/about" class=" other lg:mx-4 mx-2"> {{ $t("Header.About") }}</router-link>
        </li>
        <li class="mb-6 md:mb-0">
          <router-link to="/properties" class=" other lg:mx-4 mx-2"> 
          {{ $t("Header.Properties") }}
          </router-link>
        </li>
        <li class="mb-6 md:mb-0">
          <router-link to="/evaluation" class=" other lg:mx-4 mx-2"> 
          {{ $t("Header.evaluation") }}
          </router-link>
        </li>
         <!-- <li class="mb-6 md:mb-0">
          <router-link to="/golden" class=" other lg:mx-4 mx-2"> 
          {{ $t("Header.GoldenVisa") }}
          </router-link>
        </li> -->
        <li class="mb-6 md:mb-0">
          <router-link to="/contact" class=" other lg:mx-4 mx-2 font-thin"> 
            {{ $t("Header.Contact") }}
          </router-link>
        </li>
        <li class="mb-2 md:mb-0">
          <router-link to="/lookingfor" class="lookingFor bg-yellow-500 p-2 md:p-4 lg:mx-4 mx-2 ">
          Looking for ?
          </router-link>
        </li>
        <li class="mb-2 md:mb-0">
         <!-- <div>
            <select name="language" id="language" v-model="languageId" @change="switchLanguage()">
              <option class="english" value="en"> En  </option>
              <option value="fr"> Fr </option>
            </select>
         </div> -->
         <div class="text-gray-100">

            <div class="dropdown inline-block relative">
              <button class=" py-2 px-4 rounded inline-flex items-center" style="overflow:auto">
                   <li v-if="languageId=='en'"><img src="./assets/img/united-kingdom.png"  style="width:20px;margin-right:1rem" alt=""></li>
                    <li v-if="languageId=='fr'"><img src="./assets/img/france.png" style="width:20px;margin-right:1rem" alt=""></li>
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
              </button>
                 <ul class="dropdown-menu absolute hidden text-gray-700  pt-1" style="background-color:#111827" >
                    <li class=""><a class=" px-4 py-2  block whitespace-no-wrap inline-flex" href="#" @click="switchLanguage('en')"><img src="./assets/img/united-kingdom.png"  style="width:20px;margin-right:1rem" alt=""><i class="hover:text-gray-100">En</i></a></li>
                    <li class=""><a class="py-2 px-4 block whitespace-no-wrap inline-flex" href="#" @click="switchLanguage('fr')"><img src="./assets/img/france.png" style="width:20px;margin-right:1rem" alt="">
                 <i class="hover:text-gray-100"> Fr</i></a></li>
              </ul>
            </div>

          </div>

         
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>
<script>
import VueRouter from 'vue-router'
export default {
  name: "App",
  data: function() {
    return{
      languageId:"en"
    }
  },
  props: {
  },
  created(){
    if(this.languageId == null)
    this.languageId="en";
  },
  methods: {
      switchLanguage(code) {
        this.languageId=code;
      let locale = this.languageId.toLowerCase();
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
    },
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;
  margin: 0px;

  a {
    font-weight:400;
    color: #fff;
    font-size: 15px;

    &.router-link-exact-active {
      color: #df9523;
      text-decoration: underline solid #df9523;
      text-decoration-thickness: 3px;
      text-underline-position: under;
    }
  }
}
#nav a.lookingFor.routerlink-active,
#nav a.lookingFor.router-link-exact-active{
  color:white;
   text-decoration: underline solid white;
      text-decoration-thickness: 3px;
      text-underline-position: under;
}
#nav a.lookingFor:hover{
  color:white !important;
    text-decoration: underline solid white;
      text-decoration-thickness: 3px;
      text-underline-position: under;

}

#nav a:hover{
        color: #df9523;

}

.navList {
  line-height: 61px;
}
#language{
  
  outline: none;
  border:none;
  background:#111827;
  color:white;
}
#language:focus{
  border: none;
   list-style: none;
   outline: none;
}
#language option{
  width:50px;
  padding:20px
}
  select,
option:focus{
   padding:20px 30px!important;
   border: none!important;;
   list-style: none!important;;
   outline: none!important;;

 

}
.dropdown:hover .dropdown-menu {
  display: block;
}
.dropdown-menu li a:hover{
  background-color:#df9523;
   color:white!important
}

.dropdown button:focus {
    outline: none;
   
}
@media (max-width:767px) {
.dropdown{
  padding-bottom: 81px;
  }
}
</style>
