<script setup lang="ts">
import { ref } from 'vue'
import { VueDraggableNext as draggable } from 'vue-draggable-next'

interface RegistrationRow {
    id: number
    name: string
    quantity: number
    fee: string
    visible: boolean
}

const registrationList = ref<RegistrationRow[]>([
    { id: 1, name: 'Early Bird', quantity: 100, fee: '50.00', visible: true },
    { id: 2, name: 'Regular', quantity: 80, fee: '75.00', visible: false },
    { id: 3, name: 'VIP', quantity: 30, fee: '150.00', visible: true }
])

const removeRow = (id: number) => {
    registrationList.value = registrationList.value.filter(r => r.id !== id)
}

const addRow = () => {
    registrationList.value.push({
        id: Date.now(),
        name: '',
        quantity: 0,
        fee: '',
        visible: true
    })
}
</script>

<template>
    <div class="lists-container">
        <div class="list-column registration-table border rounded-md overflow-hidden">
            <div
                class="grid grid-cols-12 items-center rounded-t-sm px-3 py-3 text-sm font-semibold text-gray-700 bg-gray-100 mb-4">
                <div class="col-span-4">Registration Types</div>
                <div class="col-span-2">Quantity</div>
                <div class="col-span-2">Fee</div>
                <div class="col-span-1">Visibility</div>
                <div class="col-span-3 text-right pr-2"></div>
            </div>
            <draggable v-model="registrationList" group="rows" :animation="150" handle=".drag-handle">
                <div v-for="element in registrationList" :key="element.id"
                    class="grid grid-cols-12 items-center border-t px-3 py-3 bg-white hover:bg-gray-50 transition content mb-3 gap-4 rounded-md">
                    <div class="col-span-4 flex items-center registration-types-field-container">
                        <span class="drag-handle cursor-move text-gray-400 hover:text-gray-600 mr-2">⋮⋮</span>
                        <a-input v-model:value="element.name" placeholder="Enter registration name" size="small" />
                    </div>
                    <div class="col-span-2 flex items-center gap-1 quantity-field-container">
                        <a-button type="default" size="small"
                            @click="element.quantity > 0 && element.quantity--">−</a-button>
                        <a-input-number v-model:value="element.quantity" :min="0" size="small" class="w-20 text-center"
                            :controls="false" />
                        <a-button type="default" size="small" @click="element.quantity++">+</a-button>
                    </div>
                    <div class="col-span-2 fee-field-container">
                        <a-input v-model:value="element.fee" placeholder="Enter fee" size="small" prefix="$" />
                    </div>
                    <div class="col-span-1">
                        <a-switch v-model:checked="element.visible" size="small" />
                    </div>
                    <div class="col-span-3 flex justify-end items-center gap-2 actions-field-container">
                        <a-button size="small" type="primary" ghost>More</a-button>
                        <a-popover trigger="click" placement="left">
                            <template #content>
                                <div class="flex flex-col items-start gap-2">
                                    <div class="flex gap-2">
                                        <a-button size="small" danger @click="removeRow(element.id)">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
                                                class="mh-icon mh-icon-ui-delete" data-v-2c8ee3b8="">
                                                <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M3.63234 4.96762H6.77769C6.77766 3.23043 8.18585 1.82227 9.92301 1.82227C11.6602 1.82227 13.0684 3.23043 13.0684 4.96762H16.2137C16.6481 4.96762 17 5.31959 17 5.75394C17 6.18829 16.648 6.54026 16.2137 6.54026H15.8991V16.1335C15.8973 17.2621 14.9832 18.1761 13.8547 18.178H5.99133C4.86279 18.1761 3.94875 17.2621 3.94687 16.1335V6.54026H3.63234C3.19795 6.54026 2.84601 6.18829 2.84601 5.75394C2.84601 5.31959 3.19795 4.96762 3.63234 4.96762ZM9.92301 3.39494C9.05459 3.39494 8.35033 4.0992 8.35033 4.96762H11.4957C11.4957 4.09916 10.7914 3.39494 9.92301 3.39494ZM5.51954 16.1335C5.51954 16.394 5.73092 16.6053 5.99133 16.6053H13.8547C14.1151 16.6053 14.3265 16.394 14.3265 16.1335V6.54026H5.51954V16.1335ZM11.6529 13.9318C12.0873 13.9318 12.4393 13.5798 12.4393 13.1455V10.0001C12.4393 9.56575 12.0873 9.21381 11.6529 9.21381C11.2186 9.21381 10.8666 9.56578 10.8666 10.0001V13.1455C10.8666 13.5798 11.2185 13.9318 11.6529 13.9318ZM8.9794 13.1455C8.9794 13.5798 8.62746 13.9318 8.19307 13.9318C7.75872 13.9318 7.40675 13.5798 7.40675 13.1455V10.0001C7.40675 9.56577 7.75869 9.2138 8.19307 9.2138C8.62743 9.2138 8.9794 9.56574 8.9794 10.0001V13.1455Z">
                                                </path>
                                            </svg>
                                            <span>Remove</span></a-button>
                                    </div>
                                </div>
                            </template>
                            <a-button size="small" danger>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
                                    class="w-4 h-4 text-gray-700">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M3 8C4.10457 8 5 8.89543 5 10C5 11.1046 4.10457 12 3 12C1.89543 12 1 11.1046 1 10C1 8.89543 1.89543 8 3 8ZM10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8ZM19 10C19 8.89543 18.1046 8 17 8C15.8954 8 15 8.89543 15 10C15 11.1046 15.8954 12 17 12C18.1046 12 19 11.1046 19 10Z">
                                    </path>
                                </svg>
                            </a-button>
                        </a-popover>
                    </div>
                </div>
            </draggable>
        </div>
        <button @click="addRow" type="button"
            class="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-4 py-2 font-semibold text-blue-600 bg-transparent hover:bg-gray-50 transition-colors duration-200 h-11 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M10 3c-.69 0-1.25.56-1.25 1.25v4.5h-4.5A1.25 1.25 0 0 0 3 10c0 .69.56 1.25 1.25 1.25h4.5v4.5c0 .69.56 1.25 1.25 1.25.69 0 1.25-.56 1.25-1.25v-4.5h4.5c.69 0 1.25-.56 1.25-1.25 0-.69-.56-1.25-1.25-1.25h-4.5v-4.5C11.25 3.56 10.69 3 10 3z" />
            </svg>
            Add New Registration Type
        </button>
    </div>
</template>

<style lang="scss">
.registration-table {
    .grid {
        font-size: 14px;

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

            .registration-types-field-container {
                .drag-handle {
                    font-size: 25px;
                    font-weight: bold;
                }
            }

            .quantity-field-container {
                height: 100%;
                padding: 5px;
                border-radius: 4px;
                border: 1px solid #979797;

                .ant-input-number {
                    border: none;
                    background-color: inherit;

                    &.ant-input-number-focused {
                        box-shadow: inherit !important;
                    }

                    .ant-input-number-input {
                        text-align: center;
                    }
                }

                .ant-btn {
                    border: none;
                    box-shadow: none;
                    background-color: inherit;

                    span {
                        color: #979797;
                    }

                    &:hover {
                        span {
                            color: #979797 !important;
                        }
                    }
                }
            }

            .fee-field-container {
                .ant-input-affix-wrapper {
                    background-color: inherit !important;
                    border-color: #979797 !important;

                    .ant-input {
                        text-align: center;
                    }
                }

            }

            .actions-field-container {
                .ant-btn-primary {
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    justify-content: center;
                    border: 1px solid rgba(0, 0, 0, .08);
                    box-sizing: border-box;
                    border-radius: 6px;
                    padding: 12px 16px;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 20px;
                    color: #2196f3;
                    background-color: transparent;
                    height: 44px;
                }

                .ant-btn-default {
                    height: 44px;
                    width: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-color: rgba(0, 0, 0, .08);
                    background-color: inherit !important;

                    svg {
                        width: 20px;
                        height: 20px;
                        fill: #979797;
                    }
                }
            }
        }
    }
}

.ant-popover {
    button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: none !important;
        box-shadow: none !important;

        svg {
            width: 20px;
            height: 20px;
            margin-right: 5px;
            fill: red;
        }

        span {
            margin-left: 10px;
            font-weight: 600;
            color: black;
        }
    }
}

.drag-handle {
    user-select: none;
}
</style>
