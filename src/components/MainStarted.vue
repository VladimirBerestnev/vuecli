<template>
    <div>
        <section class="started center">
            <div class="started__block">
                <div class="started__block__text">
                    <h1 class="started__block__h1">Let Your Home Be Unique</h1>
                    <p class="started__block__p">There are many variations of the passages of lorem Ipsum fromavailable,
                        majority.</p>
                    <router-link to="/project" class="started__block__link">Get Started <svg width="19" height="17"
                            viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                                stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                        </svg>
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>


<script>

export default {
    name: 'MainStarted'
}
</script>


<style lang="scss">
.started {

    &__block {
        background-image: url(../assets/img/getstarted.jpg);
        background-repeat: no-repeat;
        padding-top: 208px;
        padding-bottom: 208px;

        &__text {
            width: 434px;
            margin-left: 52px;
        }


        &__h1 {
            font-style: normal;
            font-weight: 400;
            font-size: 65px;
            line-height: 125%;
            color: #292F36;
        }

        &__p {
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 150%;
            letter-spacing: 0.01em;
            color: #4D5053;
            margin-top: 18px;
            margin-bottom: 21px;
        }

        &__link {
            width: 225px;
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

}
</style>