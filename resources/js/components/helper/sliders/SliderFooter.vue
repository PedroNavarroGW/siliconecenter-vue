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
      <div class="cardEndereco">
        <div class="cardHeader">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="46" viewBox="0 0 40 46"><g><g><path fill="#fff" d="M23.353 20.139A3.356 3.356 0 0 1 20 23.49a3.355 3.355 0 0 1-3.35-3.352 3.354 3.354 0 0 1 3.35-3.35 3.355 3.355 0 0 1 3.353 3.35zM20 35.175l7.21-9.013c2.999-3.746 2.753-9.183-.57-12.647-1.569-1.633-3.61-2.58-5.9-2.736a10.939 10.939 0 0 0-1.477 0c-3.439.234-6.333 2.288-7.742 5.496-1.453 3.306-.967 7.094 1.268 9.887L20 35.175z"/><path fill="none" stroke="#000" stroke-miterlimit="20" d="M23.353 20.139A3.356 3.356 0 0 1 20 23.49a3.355 3.355 0 0 1-3.35-3.352 3.354 3.354 0 0 1 3.35-3.35 3.355 3.355 0 0 1 3.353 3.35zM20 35.175l7.21-9.013c2.999-3.746 2.753-9.183-.57-12.647-1.569-1.633-3.61-2.58-5.9-2.736a10.939 10.939 0 0 0-1.477 0c-3.439.234-6.333 2.288-7.742 5.496-1.453 3.306-.967 7.094 1.268 9.887L20 35.175h0z"/></g></g></svg>
          <p>São Paulo - SP</p>
        </div>
        <div class="cardBody">
          <p>Rua Apeninos, 927 - Paraíso
          São Paulo - SP, CEP 04104-020</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="cardEndereco">
        <div class="cardHeader">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="46" viewBox="0 0 40 46"><g><g><path fill="#fff" d="M23.353 20.139A3.356 3.356 0 0 1 20 23.49a3.355 3.355 0 0 1-3.35-3.352 3.354 3.354 0 0 1 3.35-3.35 3.355 3.355 0 0 1 3.353 3.35zM20 35.175l7.21-9.013c2.999-3.746 2.753-9.183-.57-12.647-1.569-1.633-3.61-2.58-5.9-2.736a10.939 10.939 0 0 0-1.477 0c-3.439.234-6.333 2.288-7.742 5.496-1.453 3.306-.967 7.094 1.268 9.887L20 35.175z"/><path fill="none" stroke="#000" stroke-miterlimit="20" d="M23.353 20.139A3.356 3.356 0 0 1 20 23.49a3.355 3.355 0 0 1-3.35-3.352 3.354 3.354 0 0 1 3.35-3.35 3.355 3.355 0 0 1 3.353 3.35zM20 35.175l7.21-9.013c2.999-3.746 2.753-9.183-.57-12.647-1.569-1.633-3.61-2.58-5.9-2.736a10.939 10.939 0 0 0-1.477 0c-3.439.234-6.333 2.288-7.742 5.496-1.453 3.306-.967 7.094 1.268 9.887L20 35.175h0z"/></g></g></svg>
          <p>São Paulo - SP</p>
        </div>
        <div class="cardBody">
          <p>Rua Apeninos, 927 - Paraíso <br>
          São Paulo - SP, CEP 04104-020</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="cardEndereco">
        <div class="cardHeader">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="46" viewBox="0 0 40 46"><g><g><path fill="#fff" d="M23.353 20.139A3.356 3.356 0 0 1 20 23.49a3.355 3.355 0 0 1-3.35-3.352 3.354 3.354 0 0 1 3.35-3.35 3.355 3.355 0 0 1 3.353 3.35zM20 35.175l7.21-9.013c2.999-3.746 2.753-9.183-.57-12.647-1.569-1.633-3.61-2.58-5.9-2.736a10.939 10.939 0 0 0-1.477 0c-3.439.234-6.333 2.288-7.742 5.496-1.453 3.306-.967 7.094 1.268 9.887L20 35.175z"/><path fill="none" stroke="#000" stroke-miterlimit="20" d="M23.353 20.139A3.356 3.356 0 0 1 20 23.49a3.355 3.355 0 0 1-3.35-3.352 3.354 3.354 0 0 1 3.35-3.35 3.355 3.355 0 0 1 3.353 3.35zM20 35.175l7.21-9.013c2.999-3.746 2.753-9.183-.57-12.647-1.569-1.633-3.61-2.58-5.9-2.736a10.939 10.939 0 0 0-1.477 0c-3.439.234-6.333 2.288-7.742 5.496-1.453 3.306-.967 7.094 1.268 9.887L20 35.175h0z"/></g></g></svg>
          <p>São Paulo - SP</p>
        </div>
        <div class="cardBody">
          <p>Rua Apeninos, 927 - Paraíso <br>
          São Paulo - SP, CEP 04104-020</p>
        </div>
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