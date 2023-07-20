<template>
    <div>
        <BlogBanner />
        <BlogLatest />
        <BlogNews />
    </div>
</template>
<script>
import BlogBanner from '@/components/BlogBanner.vue';
import BlogLatest from '@/components/BlogLatest.vue';
import BlogNews from '@/components/BlogNews.vue';




export default {
    name: 'BlogPage',
    components: { BlogBanner, BlogLatest, BlogNews }
}
</script>
<style lang="scss"></style>