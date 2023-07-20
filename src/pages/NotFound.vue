<template>
    <div class="notfound">
        <div class="notfound__box">
            <h1 class="notfound__title">404</h1>
            <p class="notfound__text">We are sorry, but the page
                you requested was not found</p>
            <router-link to="/" class="notfound__link">Back To Home <svg width="19" height="17" viewBox="0 0 19 17"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274"
                        stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                </svg>
            </router-link>
        </div>
        <div class="notfound__img"><img src="../assets/img/img404.jpg" alt=""></div>

    </div>
</template>
<script>
export default {
    name: 'NotFound'
}
</script>
<style lang="scss">
.notfound {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &__title {
        color: #CDA274;
        font-size: 250px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
    }

    &__text {
        max-width: 560px;
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.35px;
        margin-bottom: 23px;
    }

    &__img {
        max-width: 800px;
    }

    &__link {
        width: 255px;
        height: 75px;
        background: #292F36;
        box-shadow: 0px 10px 20px rgba(192, 192, 192, 0.35);
        border-radius: 18px;
        padding: 26px 49px 26px 48px;
        box-sizing: border-box;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 125%;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        letter-spacing: 0.02em;
    }
}
</style>
