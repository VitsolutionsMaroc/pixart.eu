<template>
  <div
    class="items mt-8 grid md:grid-cols-2 "
    :class="
      activeMap
        ? ' gap-12 text-xl md:gap-6 h-auto'
        : 'lg:grid-cols-' +
          estatesPerRow +
          ' xl:grid-cols-' +
          estatesPerRow +
          'md:gap-4  lg:gap-10 text-xl'
    "
    style=""
  >
    <div
      v-for="estate in estates"
      :key="estate.EstateID"
      class="estateCard relative mb-6 md:mb-4 overflow-hidden shadow-md"
    >
      <div @click="displayDetails(estate)" v-if="estate.pictures[0]">
        <img
          :src="estate.pictures[0].Url"
          class="w-full h-52 sm:h-48 object-cover"
        />
      </div>
      <div @click="displayDetails(estate)" v-else>
        <img
          src="../assets/img/notavailable.png"
          class="w-full h-52 sm:h-48 object-cover"
        />
      </div>

      <div class="p-3 relative" style="height:250px">
        <div class="mb-4 truncate">
          <span v-if="estate.Price" class="text-black font-bold text-lg"
            >{{ estate.Price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") }} {{ estate.Currency }}</span
          >
          <button
            @click="displayDetails(estate)"
            class="float-right px-2 py-1 rounded-full font-bold text-sm block text-white"
            style="background:#fbf0df;color:#df9639"
          >
            {{ $t("Details.Details") }}
          </button>
        </div>
        <!-- <div class="p-3 relative">
          <img :src="estate.EnergyClass" alt="" style=" width:30px;">
       
        </div> -->
          <div>
            <span style="font-size:0.77rem"> {{ estate.City }}  - {{ estate.countryName }}</span>
          </div>
        <!-- <h2
          class="text-black text-sm lg:text-base font-bold block"
          style="font-size:0.7rem"
        >
          <div v-if="estate.Name.length > 40">
            {{ estate.Name.substr(0, 30) }} ...
          </div>
          <div v-else>{{ estate.Name }}</div> -->

          <!-- {{ estate.Name }} <span v-if="estate.Name && estate.Name">-</span>
          {{ estate.categoryName.slice(1) + estate.categoryName.slice(1) }} -->
        <!-- </h2> -->
        <section v-if="estate.Description!= null || estate.Description!= undefined ">
          <div v-if="estate.Description.length > 110" >
            <p  class="des-cole"> {{ estate.Description.substr(0, 70) }} ...</p>
          </div>
          <div class="des-cole" v-else>{{ estate.Description }}</div>
        </section>
       
       <div class="peb_slide">
          <Peb v-bind:EnergyClassName="estate.EnergyClass" />
       </div>
        <!--<span class="">{{ estate.City }} - {{ estate.countryName }}</span>-->
        <div
          class="grid grid-cols-3 gap-2 block text-black text-sm md:text-base mb-2 absolute bottom-0 ms:mt-20"
        >
          <span v-if="estate.Rooms" class="">
            <i class="fas fa-bed  text-yellow-500 mr-2"></i>
            {{ estate.Rooms }}
          </span>
          <span v-if="estate.Bathrooms" class="">
            <i class="fas fa-sink   text-yellow-500 mr-2"></i>
            {{ estate.Bathrooms }}
          </span>
          <span v-if="estate.Area" class="">
            <i class="fas fa-ruler-combined  text-yellow-500 mr-2"></i>
            {{ estate.Area }}
          </span>
        </div>
      </div>
      <div
        class="bg-gray-200 text-green-700 text-xs font-bold rounded-full absolute top-0 ml-2 mt-2 px-2 py-1 text-base"
      >
        <span v-if="estate.purpose === 'for rent'">{{ $t("FilterHome.Buy") }}</span>
        <span v-else-if="estate.purpose === 'for sale'">{{ $t("FilterHome.Rentale") }}</span>
      </div>
    </div>

    <!-- Estate Modal -->
    <v-modal
      height="auto"
      :adaptive="true"
      :min-width="870"
      :scrollable="true"
      name="estate-details"
    >
      <estate-modal
        :estate="selectedEstate"
        :key="'modal-key-' + selectedEstate.EstateID"
      />
    </v-modal>
  </div>
</template>

<script>
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import EstateModal from "@/components/EstateModal.vue";
import Peb from "@/views/Peb.vue";
export default {
  components: {
    EstateModal,
    Peb
  },
  data: function() {
    return {
      selectedEstate: {
        estate: null,
        relatedEstates: null,
        count: 4
      }
    };
  },
  mounted() {
    this.count = this.estatesPerRow;
    this.$nextTick(() => {
      $(".box-slide").owlCarousel({
        loop: true,
        nav: true,
        center: true,
        dots: true,
        margin: 110,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 3
          }
        }
      });
    });
  },
  computed: {
    defaultEstatePicure() {
      return {
        backgroundImage: `url${require("../assets/img/notavailable.png")}`
      };
    }
  },
  methods: {
    displayDetails(estate) {
      //this.$modal.hide("estate-details");
      // this.selectedEstate = estate;
      // this.$modal.show("estate-details");
      // this.$router.push()
      this.$router.push({
        name: "properties.details",
        params: { estateId: estate.EstateID }
      });
    },
    displayName() {
      this.estate.Name.substring(1, 2);
    }
  },
  props: {
    estates: null,
    activeMap: false,
    estatesPerRow: {
      type: Number,
      default: 4
    }
  },
  name: "estateBlog"
};
</script>

<style scoped>
html {
  font-family: serif;
}
h2 {
  color: #676360;
}
/*.bgImage {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}*/
.peb_slide{
  position: absolute;
  bottom: 33px;
  margin: 10px 0;
}
.peb_slide img {
  width: 66px!important;
}
.des-cole{
font-size:0.8rem!important;
}
.multiselect__option--highlight {
  background: #df9523 !important;
}
.multiselect__tag {
  background: #df9523 !important;
}

.multiselect__tag:hover {
  background: #df9523 !important;
}
.multiselect__option--highlight:after {
  background: #f59e0b !important;
}
.estateCard {
  transition: 0.8s ease;
  cursor: pointer;
}
.estateCard:hover {
  transform: scale(1.01);
  box-shadow: 5px 5px 5px #ddd;
}
.noImage {
  background-image: url("../assets/img/avatar.svg");
}
</style>
