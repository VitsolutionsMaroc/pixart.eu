<template>
  <div>
    <div
      style="text-align:center;font-size:1.5rem;font-weight:bold ;margin-top:50px;margin-bottom:50px"
    >
      <h1 style="font-size:2rem">{{ $t("expertComponant.Expert") }}</h1>
    </div>
    <div class="caroussel_footer md:container md:mx-auto">
      <div class="owl-carousel owl-theme footer_owl">
        <div>
          <div class="item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              style="margin-bottom:20px"
              href="https://www.ibp.be/en/List/Abroad/27 "
            >
              <img
                class="m-auto mb-4"
                style="margin-bottom:55px"
                src="../assets/img/ibp.png"
            /></a>
            <h4 class="text-xl font-bold">BELGIUM | IBP</h4>
          </div>
        </div>
        <div>
          <div class="item">
            <img class="m-auto mb-4" src="../assets/img/favicone.png" />
            <h4 class="text-xl font-bold">Luxembourg | Pixart</h4>
          </div>
        </div>
        <div>
          <div class="item">
            <img
              class="m-auto mb-4"
              style="margin-bottom:33px"
              src="../assets/img/dubai.png"
            />
            <h4 class="text-xl font-bold">Dubai - UAE</h4>
          </div>
        </div>
        <div>
          <div class="item" id="alfa">
            <img
              class="m-auto mb-4"
              style="margin-bottom:58px"
              src="../assets/img/alfa.png"
            />
            <h4 class="text-xl font-bold">ALPHA</h4>
          </div>
        </div>
        <div>
          <div class="item" id="ideal">
            <img
              class="m-auto mb-4"
              style="margin-bottom:58px"
              src="../assets/img/ideal.png"
            />
            <h4 class="text-xl font-bold">IDEAL ASSURANCE<br />REAL ESTATE</h4>
          </div>
        </div>
        <div>
          <div class="item" id="manelis">
            <img
              class="m-auto mb-4"
              style="margin-bottom:27px"
              src="../assets/img/EEA.jpg"
            />
            <h4 class="text-xl font-bold">GREECE</h4>
          </div>
        </div>
        <div>
          <div class="item" id="manelis">
            <img
              class="m-auto mb-4"
              style="margin-bottom:33px"
              src="../assets/img/PHD.png"
            />
            <h4 class="text-xl font-bold">GREECE</h4>
          </div>
        </div>
        <div>
          <div class="item" id="manelis">
            <img
              class="m-auto mb-4"
              style="margin-bottom:45px"
              src="../assets/img/polinoe.png"
            />
            <h4 class="text-xl font-bold">GREECE</h4>
          </div>
        </div>
          <div>
          <div class="item" id="manelis">
            <img
              class="m-auto mb-4"
              style="margin-bottom:45px"
              src="../assets/img/tekton.png"
            />
            <h4 class="text-xl font-bold">GREECE</h4>
          </div>
        </div>
         
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "expert",
  mounted() {
    this.$nextTick(() => {
      $(".footer_owl").owlCarousel({
        loop: true,
        center: true,
        dotsEach: false,
        dots: false,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 3
          }
        }
      });
    });
  }
};
</script>
<style>
.footer_owl .item img {
  width: 80px !important;
}
.footer_owl .item h4 {
  text-align: center;
  font-size: 1rem;
}
.owl-theme .owl-nav .owl-prev,
.owl-next {
  position: absolute !important;
}
.owl-theme .owl-nav .owl-next {
  right: 0 !important;
  top: 190px !important;
}
.owl-theme .owl-nav .owl-prev {
  left: 0 !important;
  top: 190px !important;
}
#manelis img {
  width: 100px !important;
}
#ideal img {
  width: 150px !important;
}
#alfa img {
  width: 150px !important;
}
</style>
