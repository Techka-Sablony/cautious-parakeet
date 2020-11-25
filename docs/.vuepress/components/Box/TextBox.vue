<template>
    <div class="text-box">
        <b>{{ msg }}</b>
    </div>
</template>

<script>
    export default {
        props: [
            'msg'
        ]
    }
</script>

<style lang="scss" scoped>

.text-box {
    padding: 16px;
    background-color: #eaecef;
    margin: 24px 0;
}

</style>