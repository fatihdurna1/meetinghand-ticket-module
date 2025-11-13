<script setup lang="ts">
import { defineModel, defineProps } from 'vue'

const modelValue = defineModel<boolean>()
const { label } = defineProps<{ label?: string }>()
</script>

<template>
    <div class="flex items-center gap-3 select-toggle">
        <label v-if="label" class="font-inter font-bold text-[16px] text-black">
            {{ label }}
        </label>
        <a-switch v-model:checked="modelValue" />
    </div>
</template>

<style scoped lang="scss">
.select-toggle {
    .ant-switch {
        background-color: #d1d5db;
        &.ant-switch-checked {
            background-color: #3b82f6;
        }
    }
}
</style>
