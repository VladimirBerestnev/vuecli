<template>
    <div>
        <section class="news center">

            <div class="news__title">
                <h2 class="news__title__heading">Articles & News</h2>
                <p class="news__title__text">It is a long established fact that a reader will be distracted by the of
                    readable content of a page when lookings at its layouts the points of using.</p>
            </div>
            <div class="news__box">
                {{ getArticles }}
                <div v-for="(item, index) in arrayArticles" :key="index">
                    <article class="news__box__item">
                        <router-link to="/blog" class="news__box__item__link">
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
                        </router-link>
                    </article>
                </div>
            </div>

        </section>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'MainArticles',
    data() {
        return {
            arrayArticles: [],

        }
    },
    methods: {
        setArticles() {
            for (let i = 0; i < 3; i++) {
                this.arrayArticles.push(this.dataEl[i]);
            }
        },
    },
    computed: {
        ...mapState(['dataEl']),
        getArticles() {
            return this.setArticles();

        }
    }


}
</script>
<style lang="scss"></style>