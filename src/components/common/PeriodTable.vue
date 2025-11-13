<script setup>
import { computed } from "vue";

const props = defineProps({
    modelValue: {
        type: Array,
        default: () => ([
            { name: "Early", deadline: "12.12.2025", visible: true },
            { name: "Normal", deadline: "01.11.2026", visible: true },
            { name: "Late", deadline: "02.13.2026", visible: true },
        ])
    },
    autoUpdate: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["update:modelValue", "update:autoUpdate"]);

const periods = computed({
    get: () => props.modelValue,
    set: (v) => emit("update:modelValue", v)
});

</script>

<template>
    <div class="w-150 rounded-xl period-table ">
        <div class="grid grid-cols-12 items-center rounded-sm px-3 py-3 text-sm font-semibold text-gray-700 header">
            <div class="col-span-6">Period Name</div>
            <div class="col-span-4 flex items-center gap-2">
                <span>Payment Deadline</span>
            </div>
            <div class="col-span-2 text-right pr-2">Visibility</div>
        </div>

        <div class="divide-y mt-4">
            <div v-for="(row, i) in periods" :key="i"
                class="grid grid-cols-12 items-center gap-3 py-2 px-3 content mb-3 rounded-sm">
                <div class="col-span-6">
                    <a-input v-model:value="row.name" placeholder="Early" @input="emit('update:modelValue', periods)" />
                </div>

                <div class="col-span-4">
                    <div class="relative">
                        <a-date-picker format="YYYY-MM-DD" placeholder="Select date" @change="(date) => {
                            row.deadline = formatDate(date);
                            emit('update:modelValue', periods)
                        }" style="width: 100%" />
                    </div>
                </div>

                <div class="col-span-2 flex justify-end pr-2">
                    <a-switch v-model:checked="row.visible" @change="() => emit('update:modelValue', periods)" />
                </div>
            </div>
        </div>
        <a-checkbox v-model:checked="autoUpdateFees" class="mt-4">
            <span class="text-gray-800">
                Update the fees automatically, if not paid until the deadline.
            </span>
        </a-checkbox>
    </div>
</template>

<style lang="scss">
.period-table {
    .grid {
        &.header {
            background-color: #f1f1f1;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }

        &.content {
            background-color: #f9f9f9;

            .ant-input {
                padding: 11px 12px !important;
                font-size: 14px;
                background-color: transparent;
            }

            .ant-picker {
                padding: 11px 12px !important;
                background-color: transparent;
            }
        }
    }
}
</style>