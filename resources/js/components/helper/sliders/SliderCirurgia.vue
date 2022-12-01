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
      <div class="slideContent">
        <img src="img/site/sliderCirurgia1.png" alt="Fachada Silicone Center São Paulo">
        <h3>Técnicas modernas</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur metus. Aenean tempor, justo nec egestas tincidunt, nunc ex tincidunt neque, sit amet eleifend ex erat sit amet eros.</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slideContent">
        <img src="img/site/sliderCirurgia2.png" alt="Fachada Silicone Center São Paulo">
        <h3>Técnicas modernas</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur metus. Aenean tempor, justo nec egestas tincidunt, nunc ex tincidunt neque, sit amet eleifend ex erat sit amet eros.</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slideContent">
        <img src="img/site/sliderCirurgia3.png" alt="Fachada Silicone Center São Paulo">
        <h3>Técnicas modernas</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur metus. Aenean tempor, justo nec egestas tincidunt, nunc ex tincidunt neque, sit amet eleifend ex erat sit amet eros.</p>
      </div>
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