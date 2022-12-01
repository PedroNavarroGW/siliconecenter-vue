<template>
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
            <source type="image/webp" srcset="img/site/protese1.webp">
            <source type="image/jpg" srcset="img/site/protese1.jpg">
            <img src="img/site/protese1.jpg" alt="Prótese Redonda de perfil Super Alto">
        </picture>
        <p class="textoProteseSlider">Prótese redonda de perfil super alto</p>
    </swiper-slide>
    <swiper-slide>
        <picture>
            <source type="image/webp" srcset="img/site/protese1.webp">
            <source type="image/jpg" srcset="img/site/protese1.jpg">
            <img src="img/site/protese1.jpg" alt="Prótese Redonda de perfil Super Alto">
        </picture>
        <p class="textoProteseSlider">Prótese redonda de perfil super alto</p>
    </swiper-slide>
    <swiper-slide>
        <picture>
            <source type="image/webp" srcset="img/site/protese1.webp">
            <source type="image/jpg" srcset="img/site/protese1.jpg">
            <img src="img/site/protese1.jpg" alt="Prótese Redonda de perfil Super Alto">
        </picture>
        <p class="textoProteseSlider">Prótese redonda de perfil super alto</p>
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