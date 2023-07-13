<template>
    <div>
        <section class="numbers">
            <div class="numbers__box  center">
                <div class="numbers__item">
                    <h1 class="numbers__item__title">12</h1>
                    <p class="numbers__item__text">Years Of Experiance</p>
                </div>
                <div class="numbers__item">
                    <h1 class="numbers__item__title">85</h1>
                    <p class="numbers__item__text">Success Project</p>
                </div>
                <div class="numbers__item">
                    <h1 class="numbers__item__title">15</h1>
                    <p class="numbers__item__text">Active Project</p>
                </div>
                <div class="numbers__item">
                    <h1 class="numbers__item__title">95</h1>
                    <p class="numbers__item__text">Happy CUstomers</p>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
export default {
    name: 'MainNumbers'
}
</script>


<style lang="scss">
$colorHeading: #292F36;
$colorParagraph: #4D5053;
$colorHoverAndBG: #F4F0EC;
$goldColor: #CDA274;

.numbers {
    background-color: $colorHoverAndBG;
    margin: 96px 0;

    &__box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        padding-top: 151px;
        padding-bottom: 151px;
    }

    &__item {

        border-right: 1px solid $goldColor;
        width: 300px;

        &__title {
            font-size: 85px;
            font-family: DM Serif Display;
            line-height: 125%;
            letter-spacing: 1.7px;
            color: $goldColor;
        }

        &__text {
            color: $colorParagraph;
            font-size: 22px;
            font-family: Jost;
            line-height: 150%;
            letter-spacing: 0.22px;
        }
    }

    &__item:last-child {
        border-right: none;
    }
}
</style>