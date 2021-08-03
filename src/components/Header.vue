<template>
    <div id="nav" class=" stroke bg-gray-900 md:flex justify-between mb-4">
      <div class="flex justify-between items-center">
        <img src="../assets/img/logo.png" />

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
         <li class="mb-6 md:mb-0">
          <router-link to="/golden" class=" other lg:mx-4 mx-2"> 
          {{ $t("Header.GoldenVisa") }}
          </router-link>
        </li>
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
          <select name="language" id="language" v-model="languageId" @change="switchLanguage()">
            <option value="en"> English </option>
            <option value="fr"> Français </option>
          </select>
        </li>
      </ul>
    </div>
</template>
<script>

export default {
  name: "HeaderComp",
  data: function() {
    return{
      languageId:null
    }
  },
  created(){
    if(this.languageId == null)
        this.languageId="en";
  },
  methods: {
      switchLanguage() {
      let locale = this.languageId.toLowerCase();
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
    },
  }
};
</script>
<style lang="scss">
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
</style>

