<template>
    <header class="header center">
        <div class="logo"><a href="index.html"><img src="img/logo.png" alt="logo">
                <span class="header__title">Interno</span></a></div>
        <nav class="header__nav">
            <a href="index.html" class="header__link">Home</a>
            <a href="#" class="header__link">Project</a>
            <a href="#" class="header__link">Blog</a>
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