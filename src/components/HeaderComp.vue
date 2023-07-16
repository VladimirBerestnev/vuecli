<template>
    <header class="header center">
        <div class="logo"><a href="index.html"><img src="img/logo.png" alt="logo">
                <span class="header__title">Interno</span></a></div>
        <nav class="header__nav">
            <router-link to="/" class="header__link">Home</router-link>
            <router-link to="/blog" class="header__link">Blog</router-link>
            <router-link to="/project" class="header__link">Project</router-link>
        </nav>
    </header>
</template>


<script>
export default {
    name: "HeaderComp"
}
</script>


<style lang="scss">
$colorHeading: #292F36;

.header {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    margin-top: 53px;
    margin-bottom: 57px;

    &__title {
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 125%;
        color: $colorHeading;
        margin-left: 10px;

    }

    &__nav {
        width: 243px;
        display: flex;
        justify-content: space-between;
    }

    &__link {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 125%;
        color: $colorHeading;
    }

}
</style>