<template>
  <div id="app">
    <Header-Comp />
    <router-view />
  </div>
</template>
<script>
import HeaderComp from "@/components/Header.vue";
export default {
  name: "App",
  data: function() {
    return{
      
    }
  },
  components: {
    'Header-Comp':HeaderComp
    },
};
</script>

