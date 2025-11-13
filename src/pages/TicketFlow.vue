<script setup lang="ts">
import Steps from '@/components/Steps.vue'
import FormNavigation from '@/components/FormNavigation.vue'
import CurrencySelect from '@/components/common/CurrencySelect.vue'
import ToggleSwitch from '@/components/common/ToggleSwitch.vue'
import Alert from '@/components/common/Alert.vue'
import PeriodTable from '@/components/common/PeriodTable.vue'
import RegistrationTable from '@/components/common/RegistrationTable.vue'


import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const formData = computed(() => store.getters.formData)
const currentStep = computed(() => store.getters.currentStep)
const isPaid = computed(() => store.state.formData.isPaid)
const currencyOptions = ['USD', 'EUR', 'TRY']

const isPriceDifferentiation = computed({
    get: () => store.state.formData.isPriceDifferentiation,
    set: (value: boolean) => {
        store.commit('setPriceDifferentiation', value)
    }
})

function setCurrency(value: Event) {
    store.commit('setCurrency', value)
}

function setPaid(isPaid: boolean) {
    store.commit('isPaid', isPaid)
    if (!isPaid) {
        store.commit('setCurrency', '')
        store.commit('setPriceDifferentiation', false)
    }
    console.log('formData', formData.value)
}

function nextStep() {
    store.commit('nextStep')
}

function prevStep() {
    store.commit('prevStep')
}
const stepTitle = computed(() => {
    switch (currentStep.value) {
        case 1:
            return 'Registration Types & Fees'
        case 2:
            return 'Questions'
        case 3:
            return 'Payment Processing'
        default:
            return ''
    }
})
</script>

<template>
    <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8">
            <div class="w-full md:w-3/4">
                <h2 class="mh-heading-1 text-black mb-8 text-2xl leading-7 font-normal font-sans">
                    {{ stepTitle }}
                </h2>
                <div v-if="currentStep === 1">
                    <div class="bg-white border border-gray-200 rounded-xl box-border w-full p-8 mb-4 relative">
                        <h2 class="font-inter font-bold text-[18px] leading-6 mb-4 text-black">
                            Will your event be paid or free?
                        </h2>
                        <p class="mb-4 text-[#565656] text-[14px]">
                            Choose your event currency if your event is Paid!
                        </p>
                        <div class="flex justify-between items-center h-20">
                            <div class="flex gap-3">
                                <button @click="setPaid(true)" :class="[
                                    'h-11 px-6 rounded-full font-medium text-sm leading-5 border transition-all duration-150 cursor-pointer',
                                    isPaid
                                        ? 'bg-blue-50 border-[#2196f3] text-[#2196f3]'
                                        : 'border-gray-200 text-black bg-transparent hover:bg-gray-100'
                                ]">
                                    Paid Event
                                </button>

                                <button @click="setPaid(false)" :class="[
                                    'h-11 px-6 rounded-full font-medium text-sm leading-5 border transition-all duration-150 cursor-pointer',
                                    !isPaid
                                        ? 'bg-blue-50 border-[#2196f3] text-[#2196f3]'
                                        : 'border-gray-200 text-black bg-transparent hover:bg-gray-100'
                                ]">
                                    Free Event
                                </button>
                            </div>
                            <div class="w-60" v-if="isPaid">
                                <CurrencySelect :modelValue="formData.value?.currency" :options="currencyOptions"
                                    @update:modelValue="setCurrency" label="Currency" placeholder="Select a currency" />
                            </div>
                        </div>
                    </div>
                    <div v-if="isPaid"
                        class="bg-white border border-gray-200 rounded-xl box-border w-full p-8 mb-4 relative">
                        <div class="flex items-center mb-4">
                            <ToggleSwitch v-model="isPriceDifferentiation"
                                label="Will you apply period-based price differentiation?" />
                        </div>
                        <p class="mb-4 text-[#565656] text-[14px]">
                            Accelerate your event's registrations with period-based price differentiation such as early bird
                            affordable fees.
                        </p>
                        <div class="activate-at-least " v-if="isPriceDifferentiation">
                            <div class="mb-6">
                                <Alert description="Activate at least two periods and make sure the periods do not overlap."
                                    type="info" :show-icon="true" />
                            </div>
                            <PeriodTable />
                        </div>
                    </div>
                    <div class="bg-white border border-gray-200 rounded-xl box-border w-full p-8 mb-4 relative">
                        <h2 class="font-inter font-bold text-[18px] leading-6 mb-4 text-black">
                            What registration types will you offer to attendees?
                        </h2>
                        <p class="mb-4 text-[#565656] text-[14px]">
                            Offer custom registration types that fit your event and attendees' status to maximize your event's engagements.
                        </p>
                        <RegistrationTable />
                    </div>
                </div>

                <div v-if="currentStep === 2">
                    <div class="bg-white rounded-xl mb-5 py-5 px-5 text-black">Step 2</div>
                </div>

                <div v-if="currentStep === 3">
                    <div class="bg-white rounded-xl mb-5 py-5 px-5 text-black">Step 3</div>
                </div>
                <FormNavigation :currentStep="currentStep" :maxStep="3" @next="nextStep" @prev="prevStep" />
            </div>
            <div class="hidden md:block w-64">
                <Steps />
            </div>
        </div>
    </div>
</template>

<style scoped>
.select-currency .ant-form-item {
    margin-bottom: 0px !important;
}
</style>
