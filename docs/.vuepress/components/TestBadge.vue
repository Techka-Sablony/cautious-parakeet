<template>
    <div v-if="badge !== null" class="test-badge">
        {{badge}}
    </div>
</template>

<script>
    export default {
        props: [
            'badge'
        ],
        data() {
            return {
            }
        },
    }
</script>

<style lang="scss" scoped>

.test-badge {
    padding: 4px 8px;
    background-color: rgba($color: #44BD32, $alpha: .08);
    color: #44BD32;
    font-size: 12px;
    border-radius: 4px;
    margin-left: 16px;
    font-weight: 700;
}

.orange {
    background-color: rgba($color: #F59300, $alpha: .08);
    color: #F59300;
}

.blue {
    background-color: rgba($color: #0097E6, $alpha: .08);
    color: #0097E6;
}

.no-badge {
    .test-badge {
        display: none !important;
    }
}

</style>