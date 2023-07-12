<template>
    <!--<div v-for="blogart in blogarts" :key="blogart.id" :title="blogart.title" :datatime="blogart.datatime"
        :img="blogart.img" :link="blogart.link" :tags="blogart.tags" :text="blogart.text">


        <div class="details__article">
            <h1 class="details__article__heading">{{ title }}</h1>
            <img :src="img" class="details__article__img" alt="">
            <div class="details__article__databox">
                <div class="details__article__databox__data">{{ datatime }} </div>
                <div class="details__article__databox__link">Interior / Home / Decore</div>
            </div>
            <p class="details__article__paragraph">{{ text }}</p>
            <div class=details__article__tagbox>
                <div class="details__article__tag" v-for="tag in tags">{{ tag }}</div>
            </div>
        </div>
    </div>-->
</template>


<script>

//import dataEl from 'components.js';

export default {
    //  name: 'BlogArt',
    //   props: [title, img, datatime, text, tags],
    data() {
        return {
            //  blogarts: dataEl,
        }
    },
}
</script>


<style lang="scss"></style>