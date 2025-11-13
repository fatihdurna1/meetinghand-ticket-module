<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
    modelValue?: string
    options: string[]
    disabled?: boolean
    placeholder?: string
    label?: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

function handleChange(value: string) {
    emit('update:modelValue', value)
}
</script>

<template>
    <div class="select-general">
        <a-form-item :label="props.label || 'Currency'">
            <a-select
                :value="props.modelValue"
                :disabled="props.disabled"
                :placeholder="props.placeholder"
                @change="handleChange"
            >
                <a-select-option
                    v-for="c in props.options"
                    :key="c"
                    :value="c"
                >
                    {{ c }}
                </a-select-option>
            </a-select>
        </a-form-item>
    </div>
</template>

<style lang="scss">
.select-general {
    .ant-form-item {
        margin-bottom: 0 !important;
        &-row {
            flex-direction: column !important;
        }
        &-label {
            text-align: left;
        }
        &-control-input-content {
            .ant-select {
                &-selector {
                    height: 42px;

                    .ant-select-selection-search-input {
                        height: 42px;
                    }

                    .ant-select-selection-placeholder {
                        display: flex;
                        align-items: center;
                    }
                    .ant-select-selection-item {
                        position: relative;
                        top: 5px;
                    }
                }
            }
        }
    }
}
</style>
