<template>
  <div class="home">
    <div class="slide md:h-screen p-4 lg:px-16 relative">
      <div class="text-white xl:text-6xl text-center mt-4">
        <p>Real estate advisor & property investment</p>
        <p>Development & consulting</p>
        <p>Expert investment</p>
      </div>
      <div class="filters md:px-40">

      <div class="flex xl:w-11/12 block m-4">
        <button
          class="border-2 px-7 p-1 text-black bg-white"
          @click="togglePurpose()"
          :class="{
            'bg-yellow-500 border-yellow-500': filters.purpose == 'for sale',
          }"
        >
          Buy
        </button>
        <button
          class="border-2 px-5 p-1 text-black bg-white"
          @click="togglePurpose()"
          :class="{
            'bg-yellow-500 border-yellow-500': filters.purpose == 'for rent',
          }"
        >
          Rental
        </button>
      </div>
      <div class="grid md:grid-cols-8  xl:grid-cols- xl:gap-4 gap-8">

        <div class="flex xl:col-span-2  border-grey-light bg-white border  ">
          <button>
            <span class="w-auto xl:col-span-2 flex justify-end items-center text-grey p-2">
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
            placeholder="Search..."
            v-model="filters.keyword"
          />
        </div>
          <div class="xl:col-span-2">
            <multiselect
              placeholder="Categories"
              label="name"
              track-by="name"
              :multiple="true"
              value="id"
              v-model="filters.categories"
              :options="categories"
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
              placeholder="Countries"
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
                  <span v-if="isCountrySelected(props.option.id)" class="text-right text-sm"></span>
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
                Search
              </button>
            </div>
          </div>
        </div>
     </div>
    </div>

    <!-- Services -->
    <div class="services text-center p-16">
      <h2 class="text-2xl text-black my-2">OUR SERVICES FOR YOU</h2>
      <p class="text-lg my-8">
        Highlight the best of your properties by using the list category shortcake. You can list
        categories, types, cities, areas and states of your choice.
      </p>
      <div class="grid lg:grid-cols-3 gap-10">
        <div class="text-center bg-white p-8 m-2">
          <img class="m-auto mb-4" src="../assets/img/icon1.png" />
          <h3 class="m-auto text-xl text-black">
            Investment Consulting Development
          </h3>
          <p class="m-auto mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aperiam maiores
            quibusdam exercitationem, aliquam voluptate sint dolores iure non at quo, soluta facilis
            recusandae autem aut adipisci veniam cum ab!
          </p>
        </div>

        <div class="text-center bg-white p-8 m-2">
          <img class="m-auto mb-4" src="../assets/img/icon2.png" />
          <h3 class="m-auto text-xl text-black">Relocation</h3>
          <p class="m-auto mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aperiam maiores
            quibusdam exercitationem, aliquam voluptate sint dolores iure non at quo, soluta facilis
            recusandae autem aut adipisci veniam cum ab!
          </p>
        </div>

        <div class="text-center bg-white p-8 m-2">
          <img class="m-auto mb-4" src="../assets/img/icon3.png" />
          <h3 class="m-auto text-xl text-black">Maison de vacance au soleil</h3>
          <p class="m-auto mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aperiam maiores
            quibusdam exercitationem, aliquam voluptate sint dolores iure non at quo, soluta facilis
            recusandae autem aut adipisci veniam cum ab!
          </p>
        </div>
      </div>
    </div>
    <!-- Services -->
    <!-- New Estates -->   <div class="text-center p-8">
         <h2 class="text-2xl  text-uppercase">THE NEWEST LISTING ON THE MARKET</h2>
        </div>     

    <div class="mt-8 m-4 p-4 md:grid-cols-3 gap-4">
      <div :class="activeMap ? 'grid md:grid-cols-2' : ''">     
        <EstatesSlider v-if="displaydivestaeslider" :activeMap="activeMap" :estates="estates" :estatesPerRow="estatesPerRow" @paginateForSlider="paginateForSlider($event)" />
    
      </div>
    </div>

    <!-- New Estates -->
 
    <!-- about section -->
    <div class="grid lg:grid-cols-2 gap-10 px-16 py-8">
      <div>
        <h1 class="text-4xl md:text-2xl mb-6">PIXART REAL ESTAT</h1>
        <p class="text-sm lg:text-2xl md:text-lg mb-4 leading-loose">
          With Over $2 Billion In Sales, Sam Davis Is The Industry’s Top Luxury Producer With Over
          27 Years Of Experience In Marketing South Florida’s Most Prestigious Waterfront
          Properties. Due To His Unparalleled Results, Expertise And Dedication, Sam Ranks Amongst
          The Top 6 Agents In Florida And Is An Elite Member To Corcoran’s Presidents Council.
        </p>
        <button class="bg-yellow-500 px-8 py-4 text-xl text-white">
          Read More
        </button>
      </div>
      <div>
        <img class="w-full" src="../assets/img/welcom.png" alt="" />
      </div>
    </div>

    <!-- about section -->

    <Footer />
  </div>
</template>

<script>
import EstatesSlider from "@/components/EstatesSlider.vue";
import EstatePagination from "@/components/EstatePagination.vue";
import { Carousel, Slide } from "vue-carousel";
import utils from "@/helpers/utils";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import Multiselect from "vue-multiselect";
import _ from "lodash";


export default {
  name: "Home",
  components: {
    Multiselect,
    EstatePagination,
    Footer,
    EstatesSlider,
    Carousel,
    Slide,

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
        sortByDate: "desc",
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
      displaydivestaeslider:false,
    };
  },
  computed: {
  
  },
  methods: {
    togglePurpose() {
      this.filters.purpose = this.filters.purpose == "for rent" ? "for sale" : "for rent";
    },
    getCategories() {
      axios
        .get(`https://apivitexport.azurewebsites.net/api/categories`)
        .then((response) => {
          this.categories = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCountries() {
      axios
        .get(`https://apivitexport.azurewebsites.net/api/countries`)
        .then((response) => {
          this.countries = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    isCountrySelected(currentCountry) {
      return this.filters.countries.filter((country) => country.id === currentCountry).length > 0;
    },
    isCategorySelected(currentCategory) {
      return (
        this.filters.categories.filter((category) => category.id === currentCategory).length > 0
      );
    },
    search() {
      let filterParams = {
        keyword: this.filters.keyword,
        countries: _.map(this.filters.countries, "id"),
        categories: _.map(this.filters.categories, "id"),
      };
      this.$router.push({ name: "properties", query: filterParams });
    },
    paginateForSlider(isnext) {
      
      let totalpages = this.pagination.last_page;
      let Currentpages = this.pagination.current_page;
      if(Currentpages<=totalpages){
        if(Currentpages==totalpages && totalpages>1 && !isnext)
         {
            this.page = Currentpages-1;
            this.displaydivestaeslider=false;
            this.getEstates();
         }
        else if(Currentpages==1 && !isnext)
           this.page =1;
        else
        {
            this.page = (isnext) ? Currentpages+1 : Currentpages-1;
            this.displaydivestaeslider=false;
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
      let countriesQueryString = utils.arrayToQueryString(countries, "countries");
      let categoriesQueryString = utils.arrayToQueryString(categories, "categories");
      let subcategoriesQueryString = utils.arrayToQueryString(subcategories, "subcategories");
      let zipCodesQueryString = utils.arrayToQueryString(zipCodes, "zipCodes");
      let filtersQueryString = `page=${this.page}&keyword=${this.filters.keyword}&purpose=${
        this.filters.purpose
      }&estatesOfTheMonth=${(this.filters.estatesOfTheMonth = 3)}
      &sort_by_date= desc
      &${countriesQueryString}&${categoriesQueryString}&${subcategoriesQueryString}&${zipCodesQueryString}`;
      let _self_ = this;
      axios
        .get(`https://apivitexport.azurewebsites.net/api/estatesOfTheMonth?${filtersQueryString}`)
        .then((response) => {
          _self_.estates = response.data.data;
           _self_.pagination = {
            current_page: response.data.current_page,
            first_page_url: response.data.first_page_url,
            from: response.data.from,
            to: response.data.to,
            last_page: response.data.last_page,
          };
          _self_.totalEstates = response.data.total;
          _self_.loading = false;
          _self_.displaydivestaeslider=true;
        })
        .catch((error) => {
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
          ? _.filter(this.countries, (item) => utils.inArray(params.countries, item.id))
          : _.filter(this.countries, (item) => item.id == params.countries);
      }
      if (params.categories) {
        this.filters.categories = _.isArray(params.categories)
          ? _.filter(this.categories, (item) => utils.inArray(params.categories, item.id))
          : _.filter(this.categories, (item) => item.id == params.categories);
      }
      if (params.purpose) {
        console.log(this.filters.purpose);
        console.log(params.purpose);
      }
    },
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
  },
  
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
</style>
