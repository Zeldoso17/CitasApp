<template>
    <div>
        <input class="btn btn-primary" :disabled="disabled" :type="type" :value="value">
    </div>
</template>

<script>
export default {
    props: {
        type: String,
        value: String,
        disabled: Boolean,
    },
}
</script>

<style lang="css" scoped>
    input{
        margin-left: 40px;
    }
</style>