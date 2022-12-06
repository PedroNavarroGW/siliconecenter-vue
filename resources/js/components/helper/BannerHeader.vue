<template>
    <div class="bannerHeader">
        <div class="absolute">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 box">
                        <div class="breadcrumb">
                            <router-link to="/">Home</router-link>
                            <router-link :to="{ pagePath }">{{ breadcrumbPages[0] }}</router-link>
                        </div>
                        <h1>{{ title }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        breadcrumbPages: [String, Array],
        pagePath: Function
    },
}
</script>

<style scoped>
    .absolute{
        position: initial;
    }

    .container{
        height: calc(100% - 3px);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .row{
        position: relative;
    }

    @media (min-width: 768px){
        .absolute{
            position: absolute;
        }
    }
</style>