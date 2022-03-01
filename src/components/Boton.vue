<template>
    <div>
        <input :type="type" :value="value">
    </div>
</template>

<script>
export default {
    props: {
        type: String,
        value: String
    },
}
</script>

<style lang="scss" scoped>

</style>