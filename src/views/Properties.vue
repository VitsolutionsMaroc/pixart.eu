<template>
  <div class="" style="background:#F7F7F7">
    <div class="main  px-10 py-2">
      <div class="filters md:px-40">
        <div class="RentBuy flex justify-start mb-2">
          <button
            class="border-2 px-7 p-1 text-black"
            @click="togglePurpose('Vente')"
            :class="{
              'bg-yellow-500 border-yellow-500': filters.purpose == 'Vente'
            }"
          >
            {{ $t("FilterHome.Buy") }}
          </button>
          <button
            class="border-2 px-5 p-1 text-black"
            @click="togglePurpose('Location')"
            :class="{
              'bg-yellow-500 border-yellow-500': filters.purpose == 'Location'
            }"
          >
            {{ $t("FilterHome.Rentale") }}
          </button>
        </div>
        <!-- search input -->

        <div
          class="flex xl:w-11/12 border-grey-light border mb-2 bg-white block"
        >
          <button>
            <span class="w-auto flex justify-end items-center text-grey p-2">
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
            class="w-full rounded mr-4"
            type="text"
            :placeholder="$t('FilterHome.Search')"
            v-model="filters.keyword"
            @keyup="getEstates()"
          />
        </div>
        <!-- search input -->
        <!-- dropdowns -->
        <div class="flex items-center space-x-3 mb-4 ">
          <div class="grid md:grid-cols-2  xl:grid-cols-7 xl:gap-3 gap-2">
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
            <div class="grid grid-cols-2 xl:col-span-2">
              <input
                type="text"
                v-model="filters.minPrice"
                :placeholder="$t('EsatateFilter.MinPrice')"
                class="px-3 py-2 mr-1 border"
              />

              <input
                type="text"
                v-model="filters.maxPrice"
                :placeholder="$t('EsatateFilter.MaxPrice')"
                class="px-3 py-2 mr-1 border"
              />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <button
                @click="getEstates()"
                class="py-2 border-yellow-500 text-white bg-yellow-500 font-bold"
              >
                {{ $t("EsatateFilter.Apply") }}
              </button>
              <button
                @click="messagePopup = !messagePopup"
                class=" py-2 border-yellow-500 text-white bg-yellow-500 font-bold"
              >
                <!--<i class="far fa-plus-circle font-bold text-4xl text-yellow-500"></i>-->
                {{ $t("EsatateFilter.More") }}
              </button>
            </div>
          </div>
          <!--<extra-filters v-if="popup" @close="popup = false" />-->

          <!-- modal Extra filters -->
          <div v-if="messagePopup" class="modal-mask w-full">
            <div class="modal-wrapper">
              <div class="modal-container md:w-1/2 h-auto">
                <button
                  class="modal-default-button float-right"
                  @click="messagePopup = !messagePopup"
                >
                  <i class="ml-2 fas fa-times"></i>
                </button>
                <div class="grid grid-cols-2 gap-8 my-8">
                  <!-- <input
                  type="text"
                  v-model="filters.zipcode"
                  placeholder="Zip Code"
                  class="px-3 py-2 border"
                /> -->
                  <multiselect
                    :placeholder="$t('EsatateFilter.zipCodes')"
                    label="Zip"
                    track-by="Zip"
                    :multiple="true"
                    value="ZipID"
                    v-model="filters.zipCodes"
                    :options="zipCodes"
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
                        {{ values.length > 1 ? "zipCodes" : "zipCode" }}
                        selected
                      </template>
                    </div>
                    <template slot="option" slot-scope="props">
                      <div class="flex justify-between items-center">
                        <span>{{ props.option.Zip }}</span>
                        <span
                          v-if="isZipCodeSelected(props.option.ZipID)"
                          class="text-right text-sm"
                        ></span>
                      </div>
                    </template>
                  </multiselect>
                  <!--<input type="text" placeholder="SubCategory" class="px-3 py-2 border" />-->
                  <multiselect
                    :placeholder="$t('EsatateFilter.Subcategories')"
                    label="name"
                    track-by="name"
                    :multiple="true"
                    value="id"
                    v-model="filters.subcategories"
                    :options="subcategories"
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
                        {{
                          values.length > 1 ? "subcategories" : "subcategory"
                        }}
                        selected
                      </template>
                    </div>
                    <template slot="option" slot-scope="props">
                      <div class="flex justify-between items-center">
                        <span>{{ props.option.name }}</span>
                        <span
                          v-if="isSubCategorySelected(props.option.id)"
                          class="text-right text-sm"
                        ></span>
                      </div>
                    </template>
                  </multiselect>
                  <input
                    type="text"
                    v-model="filters.minArea"
                    :placeholder="$t('EsatateFilter.MinArea')"
                    class="px-3 py-2 border"
                  />
                  <input
                    type="text"
                    v-model="filters.maxArea"
                    :placeholder="$t('EsatateFilter.MaxArea')"
                    class="px-3 py-2 border"
                  />
                  <input
                    type="text"
                    v-model="filters.rooms"
                    :placeholder="$t('EsatateFilter.Numberrooms')"
                    class="px-3 py-2 border"
                  />
                  <input
                    type="text"
                    v-model="filters.bathrooms"
                    :placeholder="$t('EsatateFilter.Numberbathrooms')"
                    class="px-3 py-2 border"
                  />
                </div>
                <div class="grid md:grid-cols-4 mb-12">
                  <span
                    ><label class="m-2">
                      {{ $t("EsatateFilter.Parking") }}</label
                    >
                    <input
                      type="checkbox"
                      value="1"
                      v-model="filters.parking"
                      class="px-3 py-2 border"
                  /></span>
                  <span
                    ><label class="m-2">
                      {{ $t("EsatateFilter.Terrace") }}</label
                    >
                    <input
                      type="checkbox"
                      value="1"
                      v-model="filters.terrace"
                      class="px-3 py-2 border"
                  /></span>
                  <span
                    ><label class="m-2">
                      {{ $t("EsatateFilter.Furnished") }}</label
                    >
                    <input
                      type="checkbox"
                      value="1"
                      v-model="filters.furnished"
                      class="px-3 py-2 border"
                  /></span>
                  <span
                    ><label class="m-2">
                      {{ $t("EsatateFilter.Garden") }}</label
                    >
                    <input
                      type="checkbox"
                      value="1"
                      v-model="filters.garden"
                      class="px-3 py-2 border"
                  /></span>
                </div>
                <div class="flex justify-end">
                  <button
                    @click="messagePopup = false"
                    class="bg-gray-300 px-6 py-2 text-center cursor-pointer mr-2 rounded"
                  >
                    {{ $t("EsatateFilter.Cancel") }}
                  </button>
                  <button
                    @click="applyExtraFilters()"
                    class="bg-yellow-500 px-8 py-2 text-center cursor-pointer rounded"
                  >
                    {{ $t("EsatateFilter.Apply") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- modal Extra filters -->
        </div>
        <!-- dropdowns -->
      </div>

      <!-- filters -->
      <div class="flex flex-wrap space-x-3 mb-4 md:px-40">
        <div
          v-for="category in filters.categories"
          @click="clearFilter('categories', 'id', category.id)"
          :key="category.name"
          class="bg-green-500 text-white py-3 px-5 cursor-pointer"
        >
          <span>{{ category.name }}</span> <i class="ml-2 fas fa-times"></i>
        </div>
        <div
          v-for="subcategory in filters.subcategories"
          @click="clearFilter('subcategories', 'id', subcategory.id)"
          :key="subcategory.name"
          class="bg-green-500 text-white py-3 px-5 cursor-pointer"
        >
          <span>{{ subcategory.name }}</span> <i class="ml-2 fas fa-times"></i>
        </div>
        <div
          v-for="zipCode in filters.zipCodes"
          @click="clearFilter('zipCodes', 'ZipID', zipCode.ZipID)"
          :key="zipCode.ZipID"
          class="bg-green-500 text-white py-3 px-5 cursor-pointer"
        >
          <span>{{ zipCode.Zip }}</span> <i class="ml-2 fas fa-times"></i>
        </div>
        <div
          class="bg-green-500 text-white py-3 px-5 cursor-pointer"
          @click="clearFilter('minPrice', 'minPrice', null)"
          :key="filters.minPrice"
          v-if="filters.minPrice != 0"
        >
          <span>MinPrice {{ filters.minPrice }} &euro; </span>
          <i class="ml-2 fas fa-times"></i>
        </div>
        <div
          class="bg-green-500 text-white py-3 px-5 cursor-pointer"
          @click="clearFilter('maxPrice', 'maxPrice', null)"
          :key="filters.maxPrice"
          v-if="filters.maxPrice != 0"
        >
          <span>MaxPrice {{ filters.maxPrice }} &euro; </span>
          <i class="ml-2 fas fa-times"></i>
        </div>
        <div
          class="bg-green-500 text-white py-3 px-5 cursor-pointer"
          v-for="country in filters.countries"
          @click="clearFilter('countries', 'id', country.id)"
          :key="country.name"
        >
          <span>{{ country.name }} </span> <i class="ml-2 fas fa-times"></i>
        </div>
        <div
          class="bg-green-500 text-white py-3 px-5 cursor-pointer"
          @click="clearFilter('minArea', 'minArea', null)"
          :key="filters.minArea"
          v-if="filters.minArea != 0"
        >
          <span>MinArea {{ filters.minArea }} m² </span>
          <i class="ml-2 fas fa-times"></i>
        </div>
        <div
          class="bg-green-500 text-white py-3 px-5 cursor-pointer"
          @click="clearFilter('maxArea', 'maxArea', null)"
          :key="filters.maxArea"
          v-if="filters.maxArea != 0"
        >
          <span>MaxArea {{ filters.maxArea }} m² </span>
          <i class="ml-2 fas fa-times"></i>
        </div>
        <div
          class="bg-green-500 text-white py-3 px-5 cursor-pointer"
          @click="clearFilter('rooms', 'rooms', null)"
          :key="filters.rooms"
          v-if="filters.rooms != 0"
        >
          <span>{{ filters.rooms }} rooms </span>
          <i class="ml-2 fas fa-times"></i>
        </div>
        <div
          class="bg-green-500 text-white py-3 px-5 cursor-pointer"
          @click="clearFilter('bathrooms', 'bathrooms', null)"
          :key="filters.bathrooms"
          v-if="filters.bathrooms != 0"
        >
          <span>{{ filters.bathrooms }} bathrooms </span>
          <i class="ml-2 fas fa-times"></i>
        </div>
        <div
          class="bg-green-500 text-white py-3 px-5 cursor-pointer"
          @click="clearFilter('parking', 'parking', null)"
          :key="filters.parking"
          v-if="filters.parking != false"
        >
          <span> Parking </span> <i class="ml-2 fas fa-times"></i>
        </div>
        <div
          class="bg-green-500 text-white py-3 px-5 cursor-pointer"
          @click="clearFilter('terrace', 'terrace', null)"
          :key="filters.terrace"
          v-if="filters.terrace != false"
        >
          <span> Terrace </span> <i class="ml-2 fas fa-times"></i>
        </div>
        <div
          class="bg-green-500 text-white py-3 px-5 cursor-pointer"
          @click="clearFilter('garden', 'garden', null)"
          :key="filters.garden"
          v-if="filters.garden != false"
        >
          <span> Garden </span> <i class="ml-2 fas fa-times"></i>
        </div>
        <div
          class="bg-green-500 text-white py-3 px-5 cursor-pointer"
          @click="clearFilter('furnished', 'furnished', null)"
          :key="filters.furnished"
          v-if="filters.furnished != false"
        >
          <span> Furnished </span> <i class="ml-2 fas fa-times"></i>
        </div>
        <div
          class="bg-green-500 text-white py-3 px-5 cursor-pointer"
          @click="clearFilter('zipcode', 'zipcode', null)"
          :key="filters.zipcode"
          v-if="filters.zipcode != 0"
        >
          <span> {{ filters.zipcode }} </span> <i class="ml-2 fas fa-times"></i>
        </div>
      </div>
      <!-- Filters -->

      <div class="p-2">
        <div class="w-full md:grid grid-cols-2">
          <div class="sm:mb-0 mb-2 xl:text-xl">
            {{ $t("EsatateFilter.Results") }} ({{ totalEstates }})
          </div>
          <div class="flex md:justify-end sm:mt-2">
            <!--<span class="mr-6 cursor-pointer xl:text-xl"
              ><i class="fas fa-check-double text-yellow-500"></i> Select</span
            >-->
            <button
              class="mr-4 md:mr-6 cursor-pointer sm:text-sm md:text-base xl:text-xl"
              @click="togglesOrderByPrice()"
            >
              <span
                class="text-sm sm:text-base xl:text-xl"
                v-if="filters.sortByPrice == 'asc'"
                >{{ $t("EsatateFilter.Price") }}
                <i class="fas fa-arrow-down text-yellow-500 "></i
              ></span>
              <span
                class="text-sm sm:text-base xl:text-xl"
                v-if="filters.sortByPrice == 'desc'"
                >{{ $t("EsatateFilter.Price") }}
                <i class="fas fa-arrow-up text-yellow-500"></i
              ></span>
            </button>
            <!--<div class="dropdown">-->
            <button
              @click="togglesOrderByUpdateDate()"
              class="mr-3 md:mr-6 cursor-pointer text-sm md:text-base xl:text-xl"
            >
              <span
                class="text-sm sm:text-base xl:text-xl"
                v-if="filters.sortByDate == 'asc'"
              >
                <i class="far fa-clock text-yellow-500"></i>
                {{ $t("EsatateFilter.Update") }}</span
              >
              <span
                class="text-sm sm:text-base xl:text-xl"
                v-if="filters.sortByDate == 'desc'"
              >
                <i class="far fa-clock text-yellow-500"></i>
                {{ $t("EsatateFilter.Update") }}</span
              >
            </button>

            <!-- <button
              @click="activeMap = !activeMap"
              class="md:mr-4 cursor-pointer sm:text-sm md:text-base xl:text-xl text-yellow-500"
            >
              Map view
            </button>
            <div class="panel panel-default md:text-base">
              <div class="panel-body">
                <label class="switch">
                  <input type="checkbox" @click="toggleCheckbox" />
                  <div class="slider round"></div>
                </label>
              </div>
            </div> -->
            <!-- test -->
          </div>
        </div>

        <!-- Estate list -->
        <loader class="px-2 py-10" v-show="loading" />
        <div :class="activeMap ? 'grid md:grid-cols-2' : ''">
          <div v-if="activeMap">
            <BaseMap />
          </div>
          <Estates
            :activeMap="activeMap"
            :estates="estates"
            :estatesPerRow="estatesPerRow"
          />
        </div>
      </div>

      <!-- ./EstateList -->
      <estate-pagination
        class="mt-3"
        v-if="pagination"
        :pagination="pagination"
        @paginate="paginate($event)"
        :offset="4"
      />
    </div>
  </div>
</template>

<script>
import Estates from "@/components/Estates.vue";
import EstatePagination from "@/components/EstatePagination.vue";
import Loader from "@/components/shared/Loader.vue";
import Multiselect from "vue-multiselect";
import ExtraFilters from "@/components/ExtraFilters.vue";
import Map from "@/components/Map.vue";
import axios from "axios";
import _ from "lodash";
import utils from "@/helpers/utils";
import BaseMap from "@/components/BaseMap.vue";
import { Carousel, Slide } from "vue-carousel";
let DefaultdataJson = require("../config/default.json");

export default {
  name: "properties",
  components: {
    Loader,
    Estates,
    EstatePagination,
    Multiselect,
    ExtraFilters,
    Map,
    BaseMap,
    Carousel,
    Slide
  },
  data() {
    return {
      estatesPerRow: 5,
      loading: false,
      checkbox: false,
      message: false,
      show: true,
      grid: "",
      sortBy: "date",
      filters: {
        keyword: "",
        purpose: "Vente",
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
      parking: null
    };
  },

  computed: {
    subcategories() {
      return _.flatten(
        this.filters.categories.map(category => category.subcategories)
      );
    },
    zipCodes() {
      // debugger
      return _.flatten(this.filters.countries.map(country => country.zipCodes));
    }
  },
  methods: {
    toggleCheckbox() {
      this.checkbox = !this.checkbox;
      this.$emit("setCheckboxVal", this.checkbox);
      this.activeMap = !this.activeMap;
    },
    togglePurpose(name) {
      this.filters.purpose = name;
      // this.filters.purpose == "Location" ? "Location" : "Vente";

      this.getEstates();
    },
    togglesOrderByPrice() {
      this.filters.sortByPrice =
        this.filters.sortByPrice == "desc" ? "asc" : "desc";
      this.sortBy = "price";

      this.getEstates();
    },
    togglesOrderByUpdateDate() {
      this.filters.sortByDate =
        this.filters.sortByDate == "desc" ? "asc" : "desc";
      this.sortBy = "date";
      this.getEstates();
    },
    paginate(page) {
      this.page = page;
      this.getEstates();
    },
    getEstates() {
      var sortByPrice = null;
      var sortByDate = null;

      switch (this.sortBy) {
        case "date":
          sortByDate = this.filters.sortByDate;
          break;
        case "price":
          sortByPrice = this.filters.sortByPrice;
          break;
      }
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
      }&purpose=${this.filters.purpose}&parking=${
        this.filters.parking ? 1 : 0
      }&minPrice=${this.filters.minPrice}&maxPrice=${
        this.filters.maxPrice
      }&minArea=${this.filters.minArea}&maxArea=${this.filters.maxArea}&rooms=${
        this.filters.rooms
      }&bathrooms=${this.filters.bathrooms}
      &terrace=${this.filters.terrace ? 1 : 0}
      &furnished=${this.filters.furnished ? 1 : 0}
      &garden=${this.filters.garden ? 1 : 0}
      &sort_by_price=${sortByPrice}
      &sort_by_date=${sortByDate}
      &displaystatus=[2,3,4]
      &${countriesQueryString}&${categoriesQueryString}&${subcategoriesQueryString}&${zipCodesQueryString}`;
      let _self_ = this;
      axios
        .get(
          //  `https://xvm-105-191.dc0.ghst.net:8084/api/estates?${filtersQueryString}`
          DefaultdataJson.VitExportApi.Url + `estates?${filtersQueryString}`
        )
        .then(response => {
          // debugger
          _self_.estates = response.data.data;
          
           _self_.estates.forEach(element =>{
              if(element.estate_description.length > 0){
              let des=element.estate_description.find(x=>x.LanguageID.includes(_self_.$i18n.locale));
              element.Description= (des != null ) ? des.ShortDescription : '';
              }
          });

          _self_.pagination = {
            current_page: response.data.current_page,
            first_page_url: response.data.first_page_url,
            from: response.data.from,
            to: response.data.to,
            last_page: response.data.last_page
          };
          _self_.totalEstates = response.data.total;
          _self_.loading = false;
        })
        .catch(error => {
          _self_.loading = false;
          console.log(error);
        });
    },
    async getCategories() {
      const response = await axios.get(
        DefaultdataJson.VitExportApi.Url + `categories`
      );
      this.categories = response.data.data;
    },
    async getCountries() {
      const response = await axios.get(
        DefaultdataJson.VitExportApi.Url + `countries`
      );
      this.countries = response.data.data;
    },
    applyExtraFilters() {
      this.getEstates();
      this.messagePopup = false;
    },
    clearFilter(field, key, value) {
      switch (field) {
        case "minPrice":
          this.filters.minPrice = 0;
          break;
        case "maxPrice":
          this.filters.maxPrice = 0;
          break;
        case "categories":
          this.filters.categories = this.filters.categories.filter(
            category => category[key] !== value
          );
          break;
        case "subcategories":
          this.filters.subcategories = this.filters.subcategories.filter(
            subcategory => subcategory[key] !== value
          );
          break;
        case "countries":
          this.filters.countries = this.filters.countries.filter(
            country => country[key] !== value
          );
          break;
        case "zipCodes":
          this.filters.zipCodes = this.filters.zipCodes.filter(
            zipCode => zipCode[key] !== value
          );
          break;
        case "minArea":
          this.filters.minArea = 0;
          break;
        case "maxArea":
          this.filters.maxArea = 0;
          break;
        case "rooms":
          this.filters.rooms = 0;
          break;
        case "bathrooms":
          this.filters.bathrooms = 0;
          break;
        case "parking":
          this.filters.parking = 0;
          break;
        case "terrace":
          this.filters.terrace = 0;
          break;
        case "garden":
          this.filters.garden = 0;
          break;
        case "furnished":
          this.filters.furnished = 0;
          break;
        case "zipcode":
          this.filters.zipcode = 0;
          break;
        case "desc":
          this.filters.desc = 0;
          break;
        default:
          break;
      }
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
    isSubCategorySelected(currentSubcategory) {
      return (
        this.filters.subcategories.filter(
          subcategory => subcategory.id === currentSubcategory
        ).length > 0
      );
    },
    isZipCodeSelected(currentZipCode) {
      return (
        this.filters.zipCodes.filter(zipCode => zipCode.id === currentZipCode)
          .length > 0
      );
    },
    hideExtraFilters() {
      this.popup = false;
    },
    displayExtraFilters(estate) {
      this.popup = !this.popup;
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
    },
    openModal() {
      this.$modal.show("example");
    }
  },
  watch: {
    "$i18n.locale": function (value,oldvalue) {
      if(value!=oldvalue){
        this.getEstates();
      }
    },
    "filters.keyword"() {
      console.log("keyword");
      const newQueryString = {
        countries: _.map(this.filters.countries, "id"),
        categories: _.map(this.filters.categories, "id"),
        keyword: this.filters.keyword,
        purpose: this.filters.purpose
      };

      this.$router
        .replace({
          query: newQueryString
        })
        .catch(() => {});
    },
    "filters.purpose": {
      deep: true,
      handler(val) {
        console.log(val);
        console.log("From watcher ");
        const newQueryString = {
          countries: _.map(this.filters.countries, "id"),
          categories: _.map(this.filters.categories, "id"),
          keyword: this.filters.keyword,
          purpose: this.filters.purpose
        };

        this.$router
          .replace({
            query: newQueryString
          })
          .catch(() => {});
      }
    },
    "filters.countries"() {
      console.log("country");
      const newQueryString = {
        countries: _.map(this.filters.countries, "id"),
        categories: _.map(this.filters.categories, "id"),
        keyword: this.filters.keyword,
        purpose: this.filters.purpose
      };

      this.$router
        .replace({
          query: newQueryString
        })
        .catch(() => {});
    },
    "filters.categories"() {
      console.log("cat");
      const newQueryString = {
        countries: _.map(this.filters.countries, "id"),
        categories: _.map(this.filters.categories, "id"),
        keyword: this.filters.keyword,
        purpose: this.filters.purpose
      };

      this.$router
        .replace({
          query: newQueryString
        })
        .catch(() => {});
    }
  },
  async mounted() {
    await this.getCategories();
    await this.getCountries();
    this.getEstates();
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
*:focus {
  outline: none;
}
.bg-green-500 {
  background: #f59e0b;
  font-size: 12px;
  width: auto;
  padding: 5px;
  border-radius: 10px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.switch {
  position: relative;
  display: inline-block;
  width: 55px;
  height: 25px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #d2eade;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #39d47a;
}

input:focus + .slider {
  box-shadow: 0 0 1px #101010;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.dropbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>
