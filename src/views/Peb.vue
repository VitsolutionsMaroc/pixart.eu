<template>
  <section>
    <div class="peb" v-if="EnergyClassName">
      <div v-if="EnergyClassName == 'A'">
        <img src="../assets/img/peb-a.png" alt="" />
      </div>
      <div v-if="EnergyClassName == 'Ap'">
        <img src="../assets/img/peb-aplus.png" alt="" />
      </div>
      <div v-if="EnergyClassName == 'B'">
        <img src="../assets/img/peb-b.png" alt="" />
      </div>
      <div v-if="EnergyClassName == 'C'">
        <img src="../assets/img/peb-c.png" alt="" />
      </div>
      <div v-if="EnergyClassName == 'E'">
        <img src="../assets/img/peb-e.png" alt="" />
      </div>
      <div v-if="EnergyClassName == 'F'">
        <img src="../assets/img/peb-f.png" alt="" />
      </div>
      <div v-if="EnergyClassName == 'G'">
        <img src="../assets/img/peb-g.png" alt="" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Peb",
  props: {
    EnergyClassName: String
  }
};
</script>
<style scoped>
.peb img {
  width: 66px;
  margin-top: 20px;
}
</style>
