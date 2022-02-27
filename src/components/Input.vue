<template>
    <div class="contenedor">
        <input :type="tipo" :placeholder="placeholder" v-model="inputModel" >
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
        font-size: 20px;
    }
</style>