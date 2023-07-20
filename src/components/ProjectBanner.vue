<template>
    <div>
        <section class="projectbanner center">
            <div class="blogbanner__heading">
                <h1 class="blogbanner__title">Our Project</h1>
                <div class="blogbanner__breadcrumbs">
                    <router-link to="/" class="blogbanner__breadcrumbs__link">Home</router-link>
                    <router-link to="/project" class="blogbanner__breadcrumbs__link">Project</router-link>
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