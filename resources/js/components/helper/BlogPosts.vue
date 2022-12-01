<template>
  <section id="blog">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Blog Silicone Center</h2>
        </div>
      </div>
      <div class="row d-md-none">
        <div class="col-md-12">
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
              <div class="cardPost">
                <img src="img/site/post1.jpg" alt="Post Blog Silicone Center TPM: como driblar os sintomas?">
                <h3>TPM: como driblar os sintomas?</h3>
                <a href="https://siliconecenter.com.br/blog" target="_blank" rel="noopener noreferrer">
                  Leia o artigo
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11"><g><g><path fill="none" stroke="#57c0bc" stroke-linecap="round" stroke-miterlimit="20" stroke-width="2" d="M1.752 1.557v0L5.676 5.48v0L1.752 9.403v0"/></g></g></svg>
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="cardPost">
                <img src="img/site/post2.jpg" alt="Post Blog Silicone Center Como Lidar com As Dificuldades na Amamentação">
                <h3>Como Lidar com As Dificuldades na Amamentação</h3>
                <a href="https://siliconecenter.com.br/blog" target="_blank" rel="noopener noreferrer">
                  Leia o artigo
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11"><g><g><path fill="none" stroke="#57c0bc" stroke-linecap="round" stroke-miterlimit="20" stroke-width="2" d="M1.752 1.557v0L5.676 5.48v0L1.752 9.403v0"/></g></g></svg>
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="cardPost">
                <img src="img/site/post3.jpg" alt="Post Blog Silicone Center Revestimento da prótese de silicone">
                <h3>Revestimento da prótese de silicone</h3>
                <a href="https://siliconecenter.com.br/blog" target="_blank" rel="noopener noreferrer">
                  Leia o artigo
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11"><g><g><path fill="none" stroke="#57c0bc" stroke-linecap="round" stroke-miterlimit="20" stroke-width="2" d="M1.752 1.557v0L5.676 5.48v0L1.752 9.403v0"/></g></g></svg>
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="cardPost">
                <img src="img/site/post4.jpg" alt="Post Blog Silicone Center Cirurgia para aumento dos lábios: você já conhece este procedimento?">
                <h3>Cirurgia para aumento dos lábios: você já conhece este procedimento?</h3>
                <a href="https://siliconecenter.com.br/blog" target="_blank" rel="noopener noreferrer">
                  Leia o artigo
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11"><g><g><path fill="none" stroke="#57c0bc" stroke-linecap="round" stroke-miterlimit="20" stroke-width="2" d="M1.752 1.557v0L5.676 5.48v0L1.752 9.403v0"/></g></g></svg>
                </a>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="row d-none d-md-flex">
        <div class="col-md-3">
          <div class="cardPost">
            <div>
              <img src="img/site/post1.jpg" alt="Post Blog Silicone Center TPM: como driblar os sintomas?">
              <h3>TPM: como driblar os sintomas?</h3>
            </div>
            <a href="https://siliconecenter.com.br/blog" target="_blank" rel="noopener noreferrer">
              Leia o artigo
              <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11"><g><g><path fill="none" stroke="#57c0bc" stroke-linecap="round" stroke-miterlimit="20" stroke-width="2" d="M1.752 1.557v0L5.676 5.48v0L1.752 9.403v0"/></g></g></svg>
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="cardPost">
            <div>
              <img src="img/site/post2.jpg" alt="Post Blog Silicone Center Como Lidar com As Dificuldades na Amamentação">
              <h3>Como Lidar com As Dificuldades na Amamentação</h3>
            </div>
            <a href="https://siliconecenter.com.br/blog" target="_blank" rel="noopener noreferrer">
              Leia o artigo
              <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11"><g><g><path fill="none" stroke="#57c0bc" stroke-linecap="round" stroke-miterlimit="20" stroke-width="2" d="M1.752 1.557v0L5.676 5.48v0L1.752 9.403v0"/></g></g></svg>
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="cardPost">
            <div>
              <img src="img/site/post3.jpg" alt="Post Blog Silicone Center Revestimento da prótese de silicone">
              <h3>Revestimento da prótese de silicone</h3>
            </div>
            <a href="https://siliconecenter.com.br/blog" target="_blank" rel="noopener noreferrer">
              Leia o artigo
              <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11"><g><g><path fill="none" stroke="#57c0bc" stroke-linecap="round" stroke-miterlimit="20" stroke-width="2" d="M1.752 1.557v0L5.676 5.48v0L1.752 9.403v0"/></g></g></svg>
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="cardPost">
            <div>
              <img src="img/site/post4.jpg" alt="Post Blog Silicone Center Cirurgia para aumento dos lábios: você já conhece este procedimento?">
              <h3>Cirurgia para aumento dos lábios: você já conhece este procedimento?</h3>
            </div>
            <a href="https://siliconecenter.com.br/blog" target="_blank" rel="noopener noreferrer">
              Leia o artigo
              <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11"><g><g><path fill="none" stroke="#57c0bc" stroke-linecap="round" stroke-miterlimit="20" stroke-width="2" d="M1.752 1.557v0L5.676 5.48v0L1.752 9.403v0"/></g></g></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <a href="#" class="ctaBlog">CONHEÇA O BLOG</a>
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
import { Navigation} from 'swiper'
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
        modules: [Navigation],
    };
  },
};
</script>