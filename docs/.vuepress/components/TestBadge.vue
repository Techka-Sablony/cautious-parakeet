<template>
    <div class="test-badge">
        {{badge}}
    </div>
</template>

<script>
    export default {
        props: [
            'badge'
        ]
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

</style>