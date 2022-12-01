<template>
  <section id="unidades">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h2>Conheça toda as nossas unidades</h2>  
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 offset-md-2">
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
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17"><g><g><path fill="#fff" d="M9.062 6.513a2.37 2.37 0 0 1-2.368 2.368 2.37 2.37 0 0 1-2.367-2.368 2.37 2.37 0 0 1 2.367-2.366 2.37 2.37 0 0 1 2.368 2.366zm-2.368 10.62l5.093-6.365c2.118-2.647 1.944-6.487-.403-8.933C10.276.682 8.834.013 7.216-.097a7.725 7.725 0 0 0-1.042 0C3.745.068 1.7 1.519.707 3.785c-1.027 2.334-.684 5.01.895 6.983l5.09 6.365h.002z"/><path fill="none" stroke="#000" stroke-miterlimit="20" d="M9.062 6.513a2.37 2.37 0 0 1-2.368 2.368 2.37 2.37 0 0 1-2.367-2.368 2.37 2.37 0 0 1 2.367-2.366 2.37 2.37 0 0 1 2.368 2.366zm-2.368 10.62l5.093-6.365c2.118-2.647 1.944-6.487-.403-8.933C10.276.682 8.834.013 7.216-.097a7.725 7.725 0 0 0-1.042 0C3.745.068 1.7 1.519.707 3.785c-1.027 2.334-.684 5.01.895 6.983l5.09 6.365h.002z"/></g></g></svg>
            CONHEÇA A UNIDADE SÃO PAULO
          </a>
        </div>
      </div>
    </div>
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