<template>
  <div class="home">
    <div class="slide md:h-screen p-4 lg:px-16 ">
      <div class="info_line text-white xl:text-6xl text-center mt-4">
        <p class="mt-20 mb-20" style="line-height: 1.6; padding:0 15px;">
         
          <section v-html="$t('Home.TitleHome')"></section>
        </p>
      </div>
      <div class="filters md:px-40">
        <div class="flex xl:w-11/12 block m-4">
          <button
            class="border-2 px-7 p-1 text-black bg-white"
            @click="togglePurpose()"
            :class="{
              'bg-yellow-500 border-yellow-500': filters.purpose == 'for sale'
            }"
          >
            {{ $t("FilterHome.Buy") }}
          </button>
          <button
            class="border-2 px-5 p-1 text-black bg-white"
            @click="togglePurpose()"
            :class="{
              'bg-yellow-500 border-yellow-500': filters.purpose == 'for rent'
            }"
          >
          {{ $t("FilterHome.Rentale") }}
          </button>
        </div>
        <div class="grid xl:grid-cols-8  xl:grid-cols- xl:gap-4 gap-8">
          <div class="flex xl:col-span-2  border-grey-light bg-white border  ">
            <button>
              <span
                class="w-auto xl:col-span-2 flex justify-end items-center text-grey p-2"
              >
                <svg
                  class="w-6 h-6 bg-yelleow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </span>
            </button>
            <input
              class="w-full rounded mr-4 "
              type="text"
              :placeholder="$t('FilterHome.Search')"
              v-model="filters.keyword"
            />
          </div>
          <div class="xl:col-span-2">
            <multiselect
              :placeholder="$t('FilterHome.Categories')"
              label="name"
              track-by="name"
              :multiple="true"
              value="id"
              v-model="filters.categories"
              :options="$t('categories')"
              :close-on-select="true"
              :show-labels="false"
              :clear-on-select="false"
            >
              <div
                class="selection-count"
                slot="selection"
                slot-scope="{ values, search, isOpen, remove }"
              >
                <template v-if="!isOpen && values.length">
                  {{ values.length }}
                  {{ values.length > 1 ? "categories" : "category" }} selected
                </template>
              </div>
              <template slot="option" slot-scope="props">
                <div class="flex justify-between items-center">
                  <span>{{ props.option.name }}</span>
                  <span
                    v-if="isCategorySelected(props.option.id)"
                    class="text-right text-sm"
                  ></span>
                </div>
              </template>
            </multiselect>
          </div>
          <div class="xl:col-span-2">
            <multiselect
              :placeholder="$t('FilterHome.Countries')"
              label="name"
              track-by="name"
              :multiple="true"
              value="id"
              v-model="filters.countries"
              :options="countries"
              :close-on-select="true"
              :show-labels="false"
              :clear-on-select="false"
            >
              <div
                class="selection-count"
                slot="selection"
                slot-scope="{ values, search, isOpen, remove }"
              >
                <template v-if="!isOpen && values.length">
                  {{ values.length }}
                  {{ values.length > 1 ? "categories" : "category" }} selected
                </template>
              </div>
              <template slot="option" slot-scope="props">
                <div class="flex justify-between items-center">
                  <span>{{ props.option.name }}</span>
                  <span
                    v-if="isCountrySelected(props.option.id)"
                    class="text-right text-sm"
                  ></span>
                </div>
              </template>
            </multiselect>
          </div>
          <div class="xl:col-span-2">
            <div class="text-center">
              <button
                @click="search()"
                class="text-center px-28 py-2  font-semibold bg-yellow-500 text-white transition duration-500 ease-in-out  hover:bg-yellow-600 "
              >
                {{ $t("FilterHome.Search") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- carousel_service -->
    <div class="services text-center p-16">
      <div class="info_carousel mb-20">
        <h2
          class="text-2xl text-center text-black my-2 mt-15 mb-10"
          style="font-size:2rem;font-weight:bold"
        >
         {{ $t("Home.Services") }}
        </h2>
        <p>
           {{ $t("Home.serviceDescription") }}
        </p>
      </div>
      <ServiceOwl />
    </div>
    <!-- end_carousel_service -->

    <!-- Services -->
    <!-- New Estates -->
    <div class="text-center p-8">
      <h2 class="text-2xl  text-uppercase">{{$t("Home.titleHiglighte")}}</h2>
    </div>

    <div class="mt-8 m-4 p-4 md:grid-cols-3 gap-4">
      <div :class="activeMap ? 'grid md:grid-cols-2' : ''">
        <EstatesSlider
          v-if="displaydivestaeslider"
          :activeMap="activeMap"
          :estates="estates"
          :estatesPerRow="estatesPerRow"
          @paginateForSlider="paginateForSlider($event)"
        />
      </div>
    </div>

    <!-- New Estates -->

    <!-- about section -->
    <div class="grid lg:grid-cols-2 gap-10 px-16 py-8">
      <div>
        <h1 class="text-4xl md:text-2xl mb-6">{{$t("Home.investement")}}</h1>
        <p>
           <section v-html="$t('Home.investmentText')"></section>
        </p>
      </div>
      <div>
        <img
          class="w-full"
          src="../assets/img/handshake.jpg"
          alt="<a href='https://fr.freepik.com/photos/affaires'>Affaires photo créé par pressfoto - fr.freepik.com</a>"
        />
      </div>
    </div>

    <!-- about section -->
    <Expert />
    <FooterCompt />
  </div>
</template>

<script>
import EstatesSlider from "@/components/EstatesSlider.vue";
import EstatePagination from "@/components/EstatePagination.vue";
import { Carousel, Slide } from "vue-carousel";
import utils from "@/helpers/utils";
import FooterCompt from "@/components/Footer.vue";
import Expert from "@/components/Expert.vue";
import ServiceOwl from "@/views/serviceCarl.vue";
import axios from "axios";
import Multiselect from "vue-multiselect";
//import 'vueperslides/dist/vueperslides.css';
import _ from "lodash";

export default {
  name: "Home",
  components: {
    Multiselect,
    ServiceOwl,
    EstatePagination,
    FooterCompt,
    Expert,
    EstatesSlider,
    Carousel,
    Slide
  },
  data() {
    return {
      estatesPerRow: 4,
      sortBy: "date",
      filters: {
        keyword: "",
        purpose: "for sale",
        minPrice: "",
        maxPrice: "",
        countries: [],
        categories: [],
        zipcode: "",
        subcategories: [],
        zipCodes: [],
        minArea: "",
        maxArea: "",
        rooms: "",
        bathrooms: "",
        parkingValue: "",
        garden: false,
        furnished: false,
        terrace: false,
        parking: false,
        desc: false,
        sortByPrice: "asc",
        sortByDate: "desc"
      },
      estates: [],
      totalEstates: 0,
      pagination: null,
      page: 1,
      countries: [],
      categories: [],
      popup: false,
      messagePopup: false,
      activeMap: false,
      parking: null,
      displaydivestaeslider: false,
      slides: [
        {
          title: "Slide #1",
          content: "Slide content."
        }
      ]
    };
  },
  computed: {},
  methods: {
    togglePurpose() {
      this.filters.purpose =
        this.filters.purpose == "for rent" ? "for sale" : "for rent";
    },
    getCategories() {
      axios
        .get(`https://xvm-104-87.dc0.ghst.net:8084/api/categories`)
        .then(response => {
          this.categories = response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getCountries() {
      axios
        .get(`https://xvm-104-87.dc0.ghst.net:8084/api/countries`)
        .then(response => {
          this.countries = response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    isCountrySelected(currentCountry) {
      return (
        this.filters.countries.filter(country => country.id === currentCountry)
          .length > 0
      );
    },
    isCategorySelected(currentCategory) {
      return (
        this.filters.categories.filter(
          category => category.id === currentCategory
        ).length > 0
      );
    },
    search() {
      let filterParams = {
        keyword: this.filters.keyword,
        countries: _.map(this.filters.countries, "id"),
        categories: _.map(this.filters.categories, "id")
      };
      this.$router.push({ name: "properties", query: filterParams });
    },
    paginateForSlider(isnext) {
      let totalpages = this.pagination.last_page;
      let Currentpages = this.pagination.current_page;
      if (Currentpages <= totalpages) {
        if (Currentpages == totalpages && totalpages > 1 && !isnext) {
          this.page = Currentpages - 1;
          this.displaydivestaeslider = false;
          this.getEstates();
        } else if (Currentpages == 1 && !isnext) this.page = 1;
        else {
          this.page = isnext ? Currentpages + 1 : Currentpages - 1;
          this.displaydivestaeslider = false;
          this.getEstates();
        }
      }
    },
    paginate(page) {
      this.page = page;
      this.getEstates();
    },
    getEstates() {
      var sortByDate = this.filters.sortByDate;
      this.filterFromQueryString();
      this.loading = true;
      let countries = _.map(this.filters.countries, "id");
      let categories = _.map(this.filters.categories, "id");
      let subcategories = _.map(this.filters.subcategories, "id");
      let zipCodes = _.map(this.filters.zipCodes, "Zip");
      let countriesQueryString = utils.arrayToQueryString(
        countries,
        "countries"
      );
      let categoriesQueryString = utils.arrayToQueryString(
        categories,
        "categories"
      );
      let subcategoriesQueryString = utils.arrayToQueryString(
        subcategories,
        "subcategories"
      );
      let zipCodesQueryString = utils.arrayToQueryString(zipCodes, "zipCodes");
      let filtersQueryString = `page=${this.page}&keyword=${
        this.filters.keyword
      }&purpose=${
        this.filters.purpose
      }&estatesOfTheMonth=${(this.filters.estatesOfTheMonth = 3)}
      &sort_by_date= desc
      &${countriesQueryString}&${categoriesQueryString}&${subcategoriesQueryString}&${zipCodesQueryString}`;
      let _self_ = this;
      axios
        .get(
          `https://xvm-104-87.dc0.ghst.net:8084/api/estatesOfTheMonth?${filtersQueryString}`
        )
        .then(response => {
          _self_.estates = response.data.data;
          _self_.pagination = {
            current_page: response.data.current_page,
            first_page_url: response.data.first_page_url,
            from: response.data.from,
            to: response.data.to,
            last_page: response.data.last_page
          };
          _self_.totalEstates = response.data.total;
          _self_.loading = false;
          _self_.displaydivestaeslider = true;
        })
        .catch(error => {
          _self_.loading = false;
          console.log(error);
        });
    },
    filterFromQueryString() {
      let params = this.$route.query;
      if (params.keyword) {
        this.filters.keyword = params.keyword;
      }
      if (params.countries) {
        this.filters.countries = _.isArray(params.countries)
          ? _.filter(this.countries, item =>
              utils.inArray(params.countries, item.id)
            )
          : _.filter(this.countries, item => item.id == params.countries);
      }
      if (params.categories) {
        this.filters.categories = _.isArray(params.categories)
          ? _.filter(this.categories, item =>
              utils.inArray(params.categories, item.id)
            )
          : _.filter(this.categories, item => item.id == params.categories);
      }
      if (params.purpose) {
        console.log(this.filters.purpose);
        console.log(params.purpose);
      }
    }
  },
  async mounted() {
    await this.getCountries();
    await this.getCategories();
    this.getEstates();
    // $(".owl-carousel").owlCarousel({
    //       loop: false,
    //       nav: true,
    //       center: true,
    //       dots: false,
    //       margin: 110,
    //       responsive: { }
    //     });
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
.slide {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
    url("../assets/img/background.jpg");
  background-size: cover;
}
.title {
  display: table-cell;
  vertical-align: middle;
}

.services {
  background: #efeaea;
}
input:focus,
.input:active,
.input.active,
.input:focus:active {
  outline: 0;
  box-shadow: none;
}
.item p {
  font-size: 0.8rem;
}
.services .owl-carousel .owl-item .item {
  min-height: 1px;
  float: left;
  -webkit-backface-visibility: hidden;
  -webkit-touch-callout: none;
  background-color: white;
  padding: 20px;
  height: 500px;
}
.services .owl-carousel .owl-item img {
  display: block;
  width: auto;
}
.filters button {
  outline: none;
}
.info_line p {
  font-size: 3rem;
}
@media only screen and (min-width: 261px) and (max-width: 600px) {
  .info_line p {
    font-size: 1.5rem;
  }
}
</style>
