<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    description: string
    type?: 'success' | 'info' | 'warning' | 'error'
    showIcon?: boolean
    customClass?: string
}>()

const alertType = props.type ?? 'info'
const iconVisible = props.showIcon ?? true
</script>

<template>
    <a-alert :description="description" :type="alertType" :show-icon="iconVisible" :class="props.customClass" />
</template>


<style lang="scss">
.ant-alert {
    padding-inline: 18px;
    padding-block: 13px;

    .anticon {
        font-size: 20px;
    }
    &-content {
        .ant-alert-description {
            font-size: 13px;
        }
    }

}
</style>