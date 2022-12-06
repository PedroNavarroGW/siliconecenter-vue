<template>
  <section id="unidades">
    <swiper
      :slides-per-view="1"
      :space-between="30"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="default-slider"
      :navigation="true"
      :modules="modules"
    >
      <swiper-slide>
          <picture>
            <source type="image/jpg" media="(min-width: 768px)" srcset="img/site/fachadaDesktop1.jpg">
            <source type="image/jpg" media="(max-width: 768px)" srcset="img/site/fachada1.jpg">
            <img src="img/site/fachada1.jpg" alt="Fachada Silicone Center São Paulo">
          </picture>
      </swiper-slide>
      <swiper-slide>
          <picture>
            <source type="image/jpg" media="(min-width: 768px)" srcset="img/site/fachadaDesktop1.jpg">
            <source type="image/jpg" media="(max-width: 768px)" srcset="img/site/fachada1.jpg">
            <img src="img/site/fachada1.jpg" alt="Fachada Silicone Center São Paulo">
          </picture>
      </swiper-slide>
      <swiper-slide>
          <picture>
            <source type="image/jpg" media="(min-width: 768px)" srcset="img/site/fachadaDesktop1.jpg">
            <source type="image/jpg" media="(max-width: 768px)" srcset="img/site/fachada1.jpg">
            <img src="img/site/fachada1.jpg" alt="Fachada Silicone Center São Paulo">
          </picture>
      </swiper-slide>
    </swiper>
  </section>
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
import { Navigation } from 'swiper'
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";

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
        modules: [Navigation],
    };
  },
};
</script>