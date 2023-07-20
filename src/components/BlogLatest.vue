<template>
    <div>
        <section class="latest center">
            <h1 class="blogbanner__title">Latest Post</h1>
            <div class="latest__box">

                <img class="latest__box__img" src="img/latestpost.jpg" alt="Latest Post">
                <div class="latest__box__text">
                    <h2 class="latest__box__heading">Low Cost Latest Invented Interior Designing Ideas</h2>
                    <p class="latest__box__paragraph">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
                        dignissim maximus.posuere in.Contrary to popular belief.</p>
                    <p class="latest__box__paragraph">
                        Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>

                    <div class="news__box__item__databox">
                        <p class="news__box__item__databox__text">26 December,2022</p>
                        <div class="news__circle"><a href="#">
                                <svg width="52" height="53" viewBox="0 0 52 53" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="26" cy="26.2671" r="26" fill="#F4F0EC" />
                                    <path d="M23.7715 32.9529L29.7144 26.2672L23.7715 19.5815" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'BlogLatest'
}
</script>
<style lang="scss">
$colorHeading: #292F36;
$colorParagraph: #4D5053;

.latest {

    &__box {
        display: flex;
        align-items: center;
        gap: 65px;
        border-radius: 62px;
        border: 1px solid #E7E7E7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
        padding: 22px;
        box-sizing: border-box;
        margin-top: 27px;
        margin-bottom: 156px;

        &__img {
            width: 569px;
            height: 478px;
            border-radius: 50px;
        }

        &__heading {
            color: $colorHeading;
            font-size: 25px;
            line-height: 125%;
            letter-spacing: 0.5px;
            margin-bottom: 22px;
        }

        &__paragraph {
            color: $colorParagraph;
            font-size: 22px;
            line-height: 150%;
            letter-spacing: 0.22px;
            margin-bottom: 41px;
        }

        &__text {
            max-width: 470px;
        }
    }
}
</style>