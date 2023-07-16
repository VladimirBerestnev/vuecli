<template>
    <footer class="footer center">
        <div class="footer__item">
            <div class="logo"><img src="img/logo.png" alt="logo"><span class="header__title">Interno</span>
                <p class="footer__item__text">It is a long established fact that a reader will be distracted lookings.
                </p>
            </div>
        </div>
        <div class="footer__item footer__contacts">
            <h3 class="footer__item__heading">Pages</h3>
            <ul class="footer__item__list">
                <li class="footer__item__list__li"><router-link to="/">Home</router-link></li>
                <li class="footer__item__list__li"><router-link to="/project">Project</router-link></li>
                <li class="footer__item__list__li"><router-link to="/blog">Blog</router-link></li>
            </ul>
        </div>
        <div class="footer__item footer__contacts">
            <h3 class="footer__item__heading">Contact</h3>
            <p class="footer__item__text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
            <p class="footer__item__text">contact@interno.com</p>
            <p class="footer__item__text">(123) 456 - 7890</p>
        </div>

    </footer>
</template>


<script>
export default {
    name: "FooterComp"
}
</script>


<style lang="scss">
$colorParagraph: #4D5053;
$colorHeading: #292F36;

.footer {
    margin-top: 96px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 134px;

    &__item {
        max-width: 393px;

        &__text {
            color: $colorParagraph;
            font-size: 22px;
            line-height: 150%;
            letter-spacing: 0.22px;
            margin-top: 18px;
        }

        &__heading {
            color: $colorHeading;
            font-size: 25px;
            line-height: 125%;
            margin-bottom: 10px;
        }

        &__list__li {
            color: $colorParagraph;
            font-size: 22px;
            line-height: 300%;
            letter-spacing: 0.22px;
            list-style-type: none;
        }
    }

    &__contacts {
        width: 258px;
    }
}
</style>