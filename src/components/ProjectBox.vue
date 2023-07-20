<template>
    <div>
        <section class="projbox center">

            <div>
                <BlogArt v-for="(blogart, index) in blogarts" :blogart="blogart" :key="index">
                </BlogArt>
            </div>
            {{ returnBlogart }}
            <div class="projbox__tags">

                <div class="projbox__tags__box">

                    <label class="projbox__tags__label"><input @click="sorttag('bedroom')" type="radio"
                            name="tag">Bedroom</label>
                    <label class="projbox__tags__label"><input @click="sorttag('kitchan')" type="radio"
                            name="tag">Kitchan</label>
                    <label class="projbox__tags__label"><input @click="sorttag('bathroom')" type="radio"
                            name="tag">Bathroom</label>
                    <label class="projbox__tags__label"><input @click="sorttag('architectura')" type="radio"
                            name="tag">Architectura</label>
                </div>
            </div>

        </section>
    </div>
</template>
<script>

import BlogArt from './BlogArt.vue';
import { mapState } from 'vuex';

export default {
    name: 'ProjectBox',
    components: {
        BlogArt
    },
    data() {
        return { blogarts: [] }
    },
    computed: {
        ...mapState(['dataEl']),


    },
    beforeMount() {
        this.blogarts = this.dataEl;
    },
    methods: {

        sorttag(tag) {

            return this.blogarts = this.dataEl.filter(item => {
                if (item.tags.includes(tag)) return item;

            });
        }
    },

}
</script>
<style lang="scss">
$colorParagraph: #4D5053;
$colorHoverAndBG: #F4F0EC;

.projbox {
    display: flex;
    justify-content: space-between;

    &__tags {
        margin-bottom: 61px;
        max-width: 345px;

        &__box {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

        }

        &__label input {
            visibility: hidden;
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
            padding: 9px 20px 9px 10px;
            box-sizing: border-box;
        }


    }

}
</style>