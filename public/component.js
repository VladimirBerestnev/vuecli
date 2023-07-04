Vue.component('blogart', {
    props: ['title', 'datatime', 'img',
        'link', 'tags', 'text'],
    data() {
        return {
        }
    },


    template: `
<div class="details__article">
    <h1 class="details__article__heading">{{title}}</h1>
    <img :src="img" class="details__article__img" alt="">
    <div class="details__article__databox">
    <div class="details__article__databox__data">{{datatime}} </div>
    <div class="details__article__databox__link">Interior / Home / Decore</div></div>
    <p class="details__article__paragraph">{{text}}</p>
    <div class=details__article__tagbox>
    <div class="details__article__tag" v-for="tag in tags">{{tag}}</div></div>
</div>
`
})