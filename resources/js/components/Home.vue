<script>
    import FormHome from './helper/FormHome.vue'
    import SliderProteses from './helper/sliders/SliderProteses.vue'
    import SliderUnidades from './helper/sliders/SliderUnidades.vue'
    import SliderCirurgia from './helper/sliders/SliderCirurgia.vue'
    import SliderClinica from './helper/sliders/SliderClinica.vue'
    import BlogPosts from './helper/BlogPosts.vue'
    import PerguntasFrequentes from './helper/PerguntasFrequentes.vue'
    
    export default {
        mount() {
            
        },
        components: {
            FormHome,
            SliderProteses,
            SliderUnidades,
            SliderCirurgia,
            SliderClinica,
            BlogPosts,
            PerguntasFrequentes
        }
    }
</script>

<template>
    <section id="banner">
        <picture>
            <source type="image/webp" media="(max-width: 768px)" srcset="img/site/banner-mob.webp">
            <source type="image/webp" media="(min-width: 768px)" srcset="img/site/banner.webp">

            <source type="image/jpg" media="(max-width: 768px)" srcset="img/site/banner-mob.jpg">
            <source type="image/jpg" media="(min-width: 768px)" srcset="img/site/banner.jpg">
            
            <img src="img/site/banner-mob.jpg" alt="Modelos Silicone Center">
        </picture>
        <div class="absolute">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h2>AUMENTE SEUS SEIOS</h2>
                        <h1>CLÍNICA ESPECIALIZADA EM <strong>CIRURGIA DE PRÓTESE DE SILICONE</strong></h1>
                        <p class="complementText">NO SILICONE CENTER, VOCÊ QUER, VOCÊ PODE!</p>
                    </div>
                    <div class="col-md-3 offset-md-5">
                        <FormHome/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="proteses">
        <div class="container">
            <div class="row">
                <h2>Tipos de próteses mamárias</h2>
            </div>
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <SliderProteses/>
                </div>
            </div>
        </div>
    </section>
    <section id="proteseSilicone">
        <div class="container">
            <div class="row">
                <div class="col-md-6 texto">
                    <h2>Próteses de silicone</h2>
                    <p> 
                        <strong>Transformar seu sonho em realidade se tornou possível por meio do Silicone Center.</strong>
                    </p>
                    <p> 
                        Colocar próteses de silicone parece um sonho distante a muitas mulheres pelas condições financeiras que possuem, mas este desejo não precisa ser esquecido.
                    </p>
                    <p> 
                        Conhecendo esta realidade e entendendo a demanda por uma autoestima renovada, uma equipe de profissionais se uniu na clínica de cirurgia plástica Silicone Center para tornar possível a cirurgia de inserção de próteses de silicone a você.
                    </p>
                    <a href="#" style="display: none;">QUERO AUMENTAR OS MEUS SEIOS</a>
                </div>
                <div class="col-md-5 imagem">
                    <img src="img/site/modeloProteseSilicone.png" alt="Modelo segurando Prótese de Silicone">
                    <a href="#">QUERO AUMENTAR OS MEUS SEIOS</a>
                </div>
            </div>
        </div>
    </section>
    <SliderUnidades/>
    <!-- <section id="cirurgia">
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <h2>Cirurgia de silicone acessível, com segurança</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <SliderCirurgia/>
                </div>
            </div>
        </div>
    </section> -->
    <section id="sobreHome">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <SliderClinica/>
                </div>
                <div class="col-md-5 texto">
                    <h2>Sobre a Silicone Center</h2>
                    <p>Com localização estratégica nas principais cidades do estado de São Paulo, o Silicone Center conta com 140 profissionais, sendo 25 cirurgiões experientes, além de possuir instalações amplas e modernas, contando com toda a infraestrutura necessária para realizar cirurgias de colocação de próteses de silicone acessíveis e com total segurança. Por isso mais de 12 mil mulheres encontraram em nossas clínicas a melhor oportunidade para realizar seus sonhos.</p>
                    <a href="#">AGENDAR UMA CONSULTA</a>
                </div>
            </div>
        </div>
    </section>
    <BlogPosts/>
    <PerguntasFrequentes/>
</template>
