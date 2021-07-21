<template>
    <router-link :to="productLink" class="preview">
        <i v-if="!isHomePage"></i>
        <img :src="productImage" alt="">
        <div class="title">
            <h4>{{ productTitle }}</h4>
            <TestBadge class="blue"
                :badge="badge"
            />
        </div>
        <p>{{ productDescription }}</p>
    </router-link>
</template>

<script>
    export default {
        data () {
            return {
                // badge: 'Nový'
            }
        },
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
    }
    .title {
        display: flex;
        align-items: center;
    }
}

.coming-soon {
    &:first-child {
        h4, p, img {
            opacity: .24;
        }
        pointer-events: none;
    }
}

</style>

