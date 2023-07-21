<template>
    <section class="projdetails center">
        <h2 class="projdetails__title">Minimal Look Bedrooms</h2>
        <p class="projdetails__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis
            dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim.
            Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum
            commodo.

            In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis
            nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit,
            in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>

        <ProjectSlider />
    </section>
</template>
<script>

import ProjectSlider from '@/components/ProjectSlider.vue';

export default {
    name: 'ProjectDetails',
    components: {
        ProjectSlider
    }
}
</script>
<style lang="scss">
.projdetails {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
        width: 658px;
        color: #292F36;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;
        margin-bottom: 11px;
    }

    &__text {
        width: 658px;
        color: #4D5053;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
        margin-bottom: 100px;
    }
}
</style>