<template>
    <div class="details__article">
        <h1 class="details__article__heading">{{ blogart.title }}</h1>
        <img :src="blogart.img" class="details__article__img" alt="">
        <div class="details__article__databox">
            <div class="details__article__databox__data">{{ blogart.datatime }} </div>
            <div class="details__article__databox__link">Interior / Home / Decore</div>
        </div>
        <p class="details__article__paragraph">{{ blogart.text }}</p>
        <div class=details__article__tagbox>
            <div class="details__article__tag" v-for="(tag, index) in blogart.tags" :key="index">{{ tag }}</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BlogArt',
    props: ['blogart'],

}
</script>


<style lang="scss">
$colorHeading: #292F36;
$colorParagraph: #4D5053;
$colorHoverAndBG: #F4F0EC;


.details {

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 50px;

    &__article {
        width: 800px;
        margin-bottom: 35px;

        &__img {
            border-radius: 50px;
        }

        &__heading {
            color: $colorHeading;
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 1px;
            margin-bottom: 11px;
        }

        &__paragraph {
            color: $colorParagraph;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.22px;
        }

        &__tagbox {
            display: flex;
            gap: 20px;
            margin-top: 15px;
        }

        &__tag {
            color: $colorHeading;
            text-align: center;
            font-size: 18px;
            font-family: Jost;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.36px;
            border-radius: 10px;
            background: $colorHoverAndBG;
            padding: 13px 22px;
        }

        &__databox {
            margin-top: 46px;
            margin-bottom: 48px;
            display: flex;
            justify-content: space-between;
            color: $colorParagraph;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.16px;
            text-transform: capitalize;

            &__link {
                width: 250px;
            }
        }
    }

    &__tags {
        width: 345px;

        &__heading {
            color: $colorHeading;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.5px;
            margin-bottom: 24px;
        }

        &__box {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        &__label {
            cursor: pointer;
            color: $colorParagraph;
            text-align: center;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.36px;
            border-radius: 10px;
            background-color: $colorHoverAndBG;
            padding: 9px 30px;
            box-sizing: border-box;
        }


    }
}
</style>