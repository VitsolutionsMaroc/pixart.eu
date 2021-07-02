<template>
  <div class="bg-gray-900 p-10 text-white">
    <div>
      <ul class="flex grid md:grid-cols-3">
        <li>
          <div class="mt-10 mb-10">
            <img class="" src="../assets/img/ibp.png" style="width:20%;" />
          </div>
          <p>
            BELGIUM <br />
            277 Av. d’Auderghem – 1040 Brussels – Belgium<br />
            <span
              ><i
                class="fas fa-mobile"
                style="color:orange; margin-right:10px"
              ></i>
              +3227430380</span
            >
          </p>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 md:p-4 text-base-2 text-yellow-500"
              style="font-size:0.8rem"
              href="https://www.ibp.be/"
              >www.ibp.be</a
            >
          </div>
        </li>
        <li>
          <div class="mt-19 mb-10">
            <img src="../assets/img/dubai.png" style="width:20%;" />
          </div>
          <p>
            Dubai - UAE<br />
            ICON TOWER - Office 1003<br />
            AL Thanyah First<br />
          </p>
        </li>
        <li>
          <div class="mt-19 mb-10">
            <img src="../assets/img/ibpGr.jpg" style="width:20%;" />
          </div>
          <p>
            GREECE <br />
            Kolokotroni 9 –Kifisia 14562 & Agiou Alexandrou 7 –Paleo Faliro
            17561– Greece, Kολοκοτρώνη 9 -Kηφισιά 14562 & Αγίου Αλεξάνδρου 7,
            175 61 Παλαιό Φάληρο<br />
            <span
              ><i
                class="fas fa-mobile"
                style="color:orange; margin-right:10px"
              ></i>
              +30 2106918330</span
            >
          </p>
        </li>
        <li>
          <div class="mt-20 mb-10">
            <img class="" src="../assets/img/logo.png" style="width:15%;" />
          </div>
          <p style="margin-bottom:10px">
            Luxembourg <br />
            8 Grand Rue Clervaux - L -9711 Luxembourg<br />
            <span
              ><i
                class="fas fa-mobile"
                style="color:orange; margin-right:10px"
              ></i
              >+352661373707</span
            >
          </p>
        </li>
        <li>
          <div class="mt-20 mb-10">
            <img
              class=""
              src="../assets/img/logo_footer.png"
              style="width:28%;"
            />
          </div>
          <p style="margin-bottom:10px">
            MANELIS luxury Properties<br />
            Grece Psychiko / Ψυχικό<br />
            <span
              ><i
                class="fas fa-mobile"
                style="color:orange; margin-right:10px"
              ></i>
              +30 698 419 4332</span
            >
          </p>
        </li>
        <li>
          <div class="mr-5 mt-20 pr-12 mt-15S grid justify-items-center ...">
            <div class="flex">
              <input
                type="text"
                placeholder="Search..."
                class="px-3 py-2 border "
              />
              <button class="bg-yellow-500 p-3 py-2" style="outline: none;">
                Submit
              </button>
            </div>
            <p class="mt-5" style="line-height:1.6">
              PIXART is committed to delivering a high level of expertise,
              customer Service, and attention to details to the marketing and
              sales of luxury real Estate, and rental properties.
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: "footer"
};
</script>
<style>
.input {
  height: 60px !important;
}
.info_footer p {
  font-size: 1rem;
  padding: 0 20px;
}
.info_footer h3 {
  padding: 0 20px;
}
.logo img {
  margin: 0 auto;
}
@media only screen and (min-width: 261px) and (max-width: 600px) {
  .logo img {
    margin: 0 100px;
  }
}
</style>
