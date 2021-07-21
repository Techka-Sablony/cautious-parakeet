<template>
    <div class="tooltip">
        <div class="trigger">
            <img src="https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/Info_Square_cVdjp_c7b.svg" alt="">
        </div>
        <div class="container">
            <img :src="img" alt="">
            <p>{{content}}</p>
            <div v-if="msg !== ''" class="msg"><strong>{{msgType}}</strong><br> {{msg}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Tooltip',
        props: ['img', 'content', 'msgType', 'msg']
    }
</script>

<style lang="scss" scoped>

img {
    margin: 0px 0;
}

.tooltip {
    margin-left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .trigger {
        margin-top: 3px;
    }
    .trigger:hover+.container {
        top: -16px;
        opacity: 1;
        z-index: 100;
    }
    .container {
        opacity: 0;
        top: 0;
        left: 24px;
        min-width: 240px;
        position: absolute;
        padding: 32px;
        border: 1px solid rgba($color: #1e1e1e, $alpha: .16);
        background-color: white;
        z-index: -1;
        border-radius: 8px;
        box-shadow: 0 16px 16px -8px rgba($color: #000000, $alpha: .4);
        transition: .2s ease-in;
        .msg {
            border-radius: 8px;
            padding: 8px 16px;
            font-size: 13px;
            background-color: rgba($color: #F59300, $alpha: .08);
            color: #F59300;
            line-height: 20px;
        }
    }
    @media (max-width: 767px) {
        display: none;
    }
}

</style>