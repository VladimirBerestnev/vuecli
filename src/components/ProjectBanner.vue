<template>
    <div>
        <section class="projectbanner center">
            <div class="blogbanner__heading">
                <h1 class="blogbanner__title">Our Project</h1>
                <div class="blogbanner__breadcrumbs">
                    <a href="index.html" class="blogbanner__breadcrumbs__link">Home</a>
                    <a href="blog.html" class="blogbanner__breadcrumbs__link">Project</a>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'ProjectBanner'
}
</script>
<style lang="scss">
.projectbanner {
    height: 356px;
    background-image: url(../assets/img/projectbanner.jpg);
    margin-bottom: 200px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
}
</style>