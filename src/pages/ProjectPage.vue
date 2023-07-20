<template>
    <div>
        <ProjectBanner />
        <ProjectBox />
    </div>
</template>
<script>
import ProjectBanner from '@/components/ProjectBanner.vue';
import ProjectBox from '@/components/ProjectBox.vue';

export default {
    name: 'ProjectPage',
    components: {
        ProjectBanner, ProjectBox

    }
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