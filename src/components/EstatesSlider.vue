<template>
  <section>
    <div
      class="owl-carousel owl-theme box-slide items  mt-8 grid md:grid-cols-2 "
      :class="
        activeMap
          ? ' gap-12 text-xl md:gap-6 h-auto'
          : 'lg:grid-cols-' +
            estatesPerRow +
            ' xl:grid-cols-' +
            estatesPerRow +
            'md:gap-4  lg:gap-10 text-xl'
      "
      id="owlmycar"
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

        <div class=" p-3 relative" style="height:200px">
          <div class="mb-4 truncate">
            <span v-if="estate.Price" class="text-black font-bold text-lg"
              >{{ estate.Price }} {{ estate.Currency }}</span
            >
            <button
              @click="displayDetails(estate)"
              class="float-right px-2 py-1 rounded-full font-bold text-sm block text-white"
              style="background:#fbf0df;color:#df9639"
            >
              Details
            </button>
          </div>
          <div>
            <span style="font-size:0.8rem">Reference ID : {{ estate.EstateID }}</span>
          </div>
          <h2 class="text-black text-sm lg:text-base font-bold block"
          style="font-size:0.7rem">
            <!-- {{ estate.Name }} <span v-if="estate.Name && estate.Name">-</span>
            {{
              estate.categoryName.charAt(0).toUpperCase() +
                estate.categoryName.slice(1)
            }} -->
             <div v-if="estate.Name.length > 40">
            {{ estate.Name.substr(0, 30) }} ...
          </div>
          <div v-else>{{ estate.Name }}</div>
          </h2>
          <section style="width: 15%;">
             <Peb v-bind:EnergyClassName="estate.EnergyClass" />
             </section>
          <!--<span class="">{{ estate.City }} - {{ estate.countryName }}</span>-->
          <div
            class="grid grid-cols-3 gap-2 block text-black text-sm md:text-base mb-2 absolute bottom-0"
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
          <span v-if="estate.purpose === 'for rent'">Rent</span>
          <span v-else-if="estate.purpose === 'for sale'">Sale</span>
        </div>
      </div>
    </div>
    <!-- <div class="owl-nav">
        <div class="owl-prev" style="cursor:pointer;"><span v-on:click="changePage(false)">Previous page</span></div>
        <div class="owl-next" style="cursor:pointer;"><span v-on:click="changePage(true)">Next page</span></div>
    </div>   -->
  </section>
</template>

<script>
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import EstateModal from "@/components/EstateModal.vue";
import EstatePagination from "@/components/EstatePagination.vue";
import Peb from "@/views/Peb.vue";

export default {
  components: {
    EstateModal,
    EstatePagination,
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
  async updated() {
    await this.$nextTick(() => {
      var $owlCar = $("#owlmycar").owlCarousel({
        loop: false,
        stagePadding: 20,
        nav: true,
        items: 4,
        center: false,
        dots: true,
        margin: 60,
        responsiveClass: true,

        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 4
          }
        }
      });

      $owlCar.trigger("destroy.owl.carousel");
      $owlCar.owlCarousel({
        loop: false,
        stagePadding: 20,
        items: 4,
        nav: true,
        center: false,
        dots: true,
        margin: 60,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 3,
            nav: false
          },
          500: {
            items: 4,
            nav: true
          },
          onInitialized: setDots,
          onChanged: setDots
        }
      });
    });
  },
  async mounted() {
    this.count = this.estatesPerRow;
    this.$nextTick(() => {
      $("#owlmycar").owlCarousel({
        loop: false,
        stagePadding: 50,
        nav: true,
        navText: [
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>"
        ],
        items: 3,
        center: false,
        dots: true,
        margin: 60,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          600: {
            items: 4,
            nav: true
          },
          500: {
            items: 4,
            nav: true
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
    },
    changePage(eventname) {
      this.$emit("paginateForSlider", eventname);
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

<style>
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
.owl-theme .owl-nav .owl-prev,
.owl-next {
  position: absolute !important;
}
.owl-theme .owl-nav .owl-next {
  right: -35px !important;
  top: 190px !important;
}
.owl-theme .owl-nav .owl-prev {
  left: -35px !important;
  top: 190px !important;
}
</style>
