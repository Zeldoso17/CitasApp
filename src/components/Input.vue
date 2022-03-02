<template>
    <div>
        <input :disabled="disabled" :type="tipo" :placeholder="placeholder" v-model="inputModel" >
    </div>
</template>

<script>
import { computed, methods } from '@vue/runtime-core';
    export default {
        name: 'Input',
        props: {
            tipo: String,
            placeholder: String,
            modelValue: String,
        },
        setup(props, {emit}){
            const inputModel = computed({
                get(){
                    return props.modelValue
                },
                set(newValue){
                    emit('update:modelValue', newValue)
                }
            })
            return {inputModel}
        }
    };
</script>

<style lang="css" scoped>
    input{
        width: 400px;
        border-radius: 10px;
        font-size: 20px;
        padding: 10px;
        margin-left: 40px;
    }
</style>