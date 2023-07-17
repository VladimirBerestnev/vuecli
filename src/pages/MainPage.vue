<template>
    <div>
        <MainStarted />
        <MainProjects />
        <MainNumbers />
        <MainArticles />

    </div>
</template>
<script>
import MainStarted from '@/components/MainStarted.vue';
import MainProjects from '@/components/MainProjects.vue';
import MainNumbers from '@/components/MainNumbers.vue';
import MainArticles from '@/components/MainArticles.vue';
import { mapState } from 'vuex';

export default {
    name: 'MainPage',
    components: { MainStarted, MainProjects, MainNumbers, MainArticles },
    computed: {
        ...mapState(['dataEl'])
    }

}
</script>
<style lang="scss"></style>