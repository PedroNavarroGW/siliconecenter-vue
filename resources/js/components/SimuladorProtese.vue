<template>
    <section id="banner">
        <BannerHeader title="Quer saber qual é a prótese de silicone ideal para você?" :breadcrumbPages="['Simulador de prótese']" :pagePath="getPagePath()"/>
        <picture>
            <source type="image/webp" media="(max-width: 768px)" srcset="img/site/bannerSimuladorProtese-mob.webp">
            <source type="image/webp" media="(min-width: 768px)" srcset="img/site/bannerSimuladorProtese.webp">

            <source type="image/jpg" media="(max-width: 768px)" srcset="img/site/bannerSimuladorProtese-mob.jpg">
            <source type="image/jpg" media="(min-width: 768px)" srcset="img/site/bannerSimuladorProtese.jpg">
            
            <img src="img/site/bannerSimuladorProtese-mob.jpg" alt="Modelos Simulador de Prótese Silicone Center">
        </picture>
    </section>
    <section id="inicioSimulador">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h2 style="display:none">Colocar silicone não é só aumentar os seios.</h2>
                    <p> A escolha do tamanho da prótese é feita para garantir que você tenha um resultado proporcional, de acordo com outras características do seu corpo.</p>
                    <a href="">VAMOS COMEÇAR?</a>
                    <a href="">SAIBA MAIS</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BannerHeader from './helper/BannerHeader.vue'

export default {
    /*setup () {
        const currentRoute = computed(() => {
            return useRoute().name
        })
    },
    
    props: {
        { currentRoute }
    },

    provide() {
        const { currentRoute } = toRefs(this.$props)
        return { currentRoute }
    },
    */
    methods: {
        getPagePath(){
            const pagePath = window.location.pathname;
            return pagePath;
        }
    },
    components: {
        BannerHeader
    },
}
</script>