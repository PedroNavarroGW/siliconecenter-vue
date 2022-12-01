<template>
  <swiper
    :slides-per-view="1"
    :space-between="30"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="default-slider"
    :navigation="true"
    :modules="modules"
    :pagination="true"
  >
    <swiper-slide>
      <img src="img/site/clinica1.jpg" alt="Clínica Silicone Center">
    </swiper-slide>
    <swiper-slide>
      <img src="img/site/clinica1.jpg" alt="Clínica Silicone Center">
    </swiper-slide>
    <swiper-slide>
      <img src="img/site/clinica1.jpg" alt="Clínica Silicone Center">
    </swiper-slide>
    <swiper-slide>
      <img src="img/site/clinica1.jpg" alt="Clínica Silicone Center">
    </swiper-slide>
    <swiper-slide>
      <img src="img/site/clinica1.jpg" alt="Clínica Silicone Center">
    </swiper-slide>
    <swiper-slide>
      <img src="img/site/clinica1.jpg" alt="Clínica Silicone Center">
    </swiper-slide>
    <swiper-slide>
      <img src="img/site/clinica1.jpg" alt="Clínica Silicone Center">
    </swiper-slide>
    <swiper-slide>
      <img src="img/site/clinica1.jpg" alt="Clínica Silicone Center">
    </swiper-slide>
    <swiper-slide>
      <img src="img/site/clinica1.jpg" alt="Clínica Silicone Center">
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.default-slider .swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from 'swiper'
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper: function () {
      console.log("onSwiper called");
    },
    onSlideChange: function () {
      console.log("Slide change");
    },
  },
  setup(){
    return{
        slidesPerView: 1,
        modules: [Navigation, Pagination],
    };
  },
};
</script>