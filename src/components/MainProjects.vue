<template>
    <div>
        <section class="projects center">
            <div class="projects__heading">
                <h1 class="projects__heading__h1">Follow Our Projects</h1>
                <p class="projects__heading__p">It is a long established fact that a reader will be distracted by the of
                    readable content of page lookings at its layouts points.</p>
            </div>

            <div class="projects__items">
                <div class="projects__items__block">
                    <img class="projects__items__img projects__items__img-1" src="img/projects-1.jpg" alt="">
                    <div class="projects__items__titlebox">
                        <div class="projects__items__textbox">
                            <h3 class="projects__items__heading">Modern Kitchan</h3>
                            <p class="projects__items_text">Decor / Artchitecture</p>
                        </div>

                        <router-link to="/project" class="projects_items_circle">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="&#62;">
                                    <circle id="Ellipse 4" cx="35" cy="35.0001" r="35" fill="#F4F0EC" />
                                    <path id="Vector" d="M32 44.0001L40 35.0001L32 26.0001" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>

                        </router-link>
                    </div>
                </div>
                <div class="projects__items__block">
                    <img src="img/projects-2.jpg" class="projects__items__img projects__items__img-2" alt="">
                    <div class="projects__items__titlebox">
                        <div class="projects__items__textbox">
                            <h3 class="projects__items__heading">Modern Kitchan</h3>
                            <p class="projects__items_text">Decor / Artchitecture</p>
                        </div>

                        <router-link to="/project" class="projects_items_circle">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="&#62;">
                                    <circle id="Ellipse 4" cx="35" cy="35.0001" r="35" fill="#F4F0EC" />
                                    <path id="Vector" d="M32 44.0001L40 35.0001L32 26.0001" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>

                        </router-link>
                    </div>
                </div>
                <div class="projects__items__block">
                    <img src="img/projects-3.jpg" class="projects__items__img projects__items__img-3" alt="">
                    <div class="projects__items__titlebox">
                        <div class="projects__items__textbox">
                            <h3 class="projects__items__heading">Modern Kitchan</h3>
                            <p class="projects__items_text">Decor / Artchitecture</p>
                        </div>

                        <router-link to="/project" class="projects_items_circle">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="&#62;">
                                    <circle id="Ellipse 4" cx="35" cy="35.0001" r="35" fill="#F4F0EC" />
                                    <path id="Vector" d="M32 44.0001L40 35.0001L32 26.0001" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>

                        </router-link>
                    </div>
                </div>
                <div class="projects__items__block">
                    <img src="img/projects-4.jpg" class="projects__items__img projects__items__img-4" alt="">
                    <div class="projects__items__titlebox">
                        <div class="projects__items__textbox">
                            <h3 class="projects__items__heading">Modern Kitchan</h3>
                            <p class="projects__items__text">Decor / Artchitecture</p>
                        </div>

                        <router-link to="/project" class="projects__circle">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="&#62;">
                                    <circle id="Ellipse 4" cx="35" cy="35.0001" r="35" fill="#F4F0EC" />
                                    <path id="Vector" d="M32 44.0001L40 35.0001L32 26.0001" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>

                        </router-link>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'MainProjects'
}
</script>

<style lang="scss">
$colorHeading: #292F36;
$colorParagraph: #4D5053;

.projects {

    &__heading {
        margin-top: 96px;
        margin-bottom: 93px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;

        &__h1 {
            font-style: normal;
            font-weight: 400;
            font-size: 50px;
            line-height: 125%;
            letter-spacing: 0.02em;
            color: $colorHeading;
        }

        &__p {
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 150%;
            letter-spacing: 0.01em;
            color: $colorParagraph;
            max-width: 737px;
        }
    }

    &__items {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 100px;
        flex-wrap: wrap;

        &__img {
            max-width: 525px;
        }

        &__img-1 {
            border-radius: 0px 80px 0px 0px;
        }

        &__img-2 {
            border-radius: 80px 0px 0px 0px;
        }

        &__img-3 {
            border-radius: 0px 0px 80px 00px;
        }

        &__img-4 {
            border-radius: 0px 0px 0px 80px;
        }

        &__titlebox {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 24px;
        }

        &__heading {
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 125%;
            letter-spacing: 0.02em;
            color: $colorHeading;
        }

        &__text {
            font-weight: 400;
            font-size: 22px;
            line-height: 150%;
            letter-spacing: 0.01em;
            color: $colorParagraph;
        }

        &__block {
            width: 525px;
        }
    }
}
</style>
