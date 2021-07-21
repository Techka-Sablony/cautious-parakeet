<template>
    <div class="selection">
        <input :name="name" type="radio" :id="id" :value="value" @change="() => onChange(value)">
        <label :for="forID">
            <div class="image-wrapper">
                <img :src="img" alt="">{{title}}
            </div>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'Selection',
        props: ['name', 'id', 'value', 'model', 'forID', 'title', 'heroPanel', 'onChange', 'img'],
        methods: {
            log: console.log
        }
    }
</script>

<style lang="scss" scoped>


// input[type="radio"] {
//     display: none;
// }

// input[type="radio"]:checked+img{
//     max-width: 120px;
// }
.selection, label, .image-wrapper {
    display: flex;
    flex-flow: column;
    box-sizing: border-box;
}

.image-wrapper {
    justify-content: center;
    align-items: center;
}

.selection:last-child label {
    background: none;
}

.selection input[type="radio"] {
  display: none;
}

.selection label {
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    padding: 4px 11px;
    font-family: Arial;
    font-size: 16px;
    cursor: pointer;
    min-width: 100px;
    min-height: 100px;
    max-width: 160px;
    height: 100%;
    margin-right: 24px;
    padding: 16px;
    border: 1px solid rgba($color: #1e1e1e, $alpha: .08);
    background: rgba($color: #1e1e1e, $alpha: .02);
    border-radius: 16px;
    .image-wrapper {
        box-sizing: border-box;
        max-width: 100%;
        margin-top: 0px;
        img {
            max-width: 100%;
            margin: 8px 0 !important;
        }
    }
    &:hover {
        background: rgba($color: #0097E6, $alpha: .08);
        border: 1px solid rgba($color: #0097e6, $alpha: .4);
    }
}

.selection input[type="radio"]:checked+label {
  background-color: rgba($color: #0097E6, $alpha: .08);
  border: 2px solid #0097E6;
}

</style>