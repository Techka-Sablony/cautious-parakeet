<template>
    <router-link :to="productLink" class="preview">
        <img :src="productImage" alt="">
        <div class="title">
            <h4>{{ productTitle }}</h4>
        </div>
        <p class="preview-description">{{ productDescription }}</p>
    </router-link>
</template>

<script>
    export default {
        props: [
            'productImage',
            'productLink',
            'productTitle',
            'productDescription',
            'badge',
        ]
    }
</script>

<style lang="scss" scoped>

.preview {
    h4, p {
        margin: 8px 0;
        color: black;
    }
    p {
        opacity: .64;
        font-size: 14px;
        margin-top: 0px;
    }
    .title {
        display: flex;
        align-items: center;
    }
}

</style>

