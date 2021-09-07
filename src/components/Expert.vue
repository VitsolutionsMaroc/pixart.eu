<template>
     <div>
        <div style="text-align:center;font-size:1.5rem;font-weight:bold ;margin-top:50px;margin-bottom:50px">
           <h1 style="font-size:2rem">{{ $t("expertComponant.Expert")}}</h1>
        </div>
        <div>
          <div class="item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.ibp.be/en/List/Abroad/27 "
            >
              <img
                class="m-auto mb-4"
                style="margin-bottom:35px"
                src="../assets/img/ibpGr.jpg"
            /></a>
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
  width: 150px !important;
}
#ideal img {
  width: 150px !important;
}
</style>
