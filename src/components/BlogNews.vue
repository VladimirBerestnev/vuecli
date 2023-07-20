<template>
    <div>
        <section class="news center">

            <h2 class="news__title__blog">Articles & News</h2>

            <div class="news__box" id="app">

                <div v-for="(item, index) in dataEl" :key="index">
                    <article class="news__box__item">
                        <a :href="item.link" class="news__box__item__link">
                            <div class="news__box__item__imgbox">
                                <img class="news__box__item__img" :src="item.img" alt="">
                                <p class="news__box__item__desc">{{ item.desc }}</p>
                            </div>
                            <h3 class="news__box__item__title">{{ item.title }}</h3>
                            <div class="news__box__item__databox">
                                <p class="news__box__item__databox__text">{{ item.dataTime }} </p>
                                <div class="news__circle">
                                    <svg width="52" height="53" viewBox="0 0 52 53" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="26" cy="26.2671" r="26" fill="#F4F0EC" />
                                        <path d="M23.7715 32.9529L29.7144 26.2672L23.7715 19.5815" stroke="#292F36"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>


                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            </div>

            <div class="news__pagination">
                <a href="#" class="news__pagination__item">01</a>
                <a href="#" class="news__pagination__item">02</a>
                <a href="#" class="news__pagination__item">03</a>
                <a href="#" class="news__pagination__item">></a>
            </div>

        </section>
    </div>
</template>



<script>
import { mapState } from 'vuex';
export default {
    name: 'BlogNews',
    computed: {
        ...mapState(['dataEl']),
    }
}
</script>
<style lang="scss"></style>