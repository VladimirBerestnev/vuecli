<template>
    <div>
        <section class="blogbanner center">
            <div class="blogbanner__heading">
                <h1 class="blogbanner__title">Articles & News</h1>
                <div class="blogbanner__breadcrumbs">
                    <a href="index.html" class="blogbanner__breadcrumbs__link">Home</a>
                    <a href="blog.html" class="blogbanner__breadcrumbs__link">Blog</a>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'BlogBanner'
}
</script>
<style lang="scss">
$colorHeading: #292F36;
$colorParagraph: #4D5053;

.blogbanner {
    height: 356px;
    background-image: url(../assets/img/blog-main.jpg);
    margin-bottom: 200px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    &__heading {
        padding: 41px 78px;
        background-color: #fff;
        text-align: center;
        border-radius: 37px 37px 0px 0px;
    }

    &__title {
        font-size: 50px;
        line-height: 125%;
        color: $colorHeading;
    }

    &__breadcrumbs__link {
        font-size: 22px;
        font-family: Jost;
        line-height: 150%;
        letter-spacing: 0.22px;
        color: $colorParagraph;
    }

    &__breadcrumbs__link::after {
        margin-left: 8px;
        margin-right: 5px;
        content: '/';
    }

    &__breadcrumbs__link:last-child::after {
        content: none;
    }
}
</style>