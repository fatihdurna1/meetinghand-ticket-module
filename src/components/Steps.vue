<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const steps = [
    { id: 1, label: 'Registration Types & Fees' },
    { id: 2, label: 'Questions' },
    { id: 3, label: 'Payment Processing' }
]

const currentStep = computed(() => store.getters.currentStep)
</script>

<template>
    <div class="w-64">
        <h2 class="text-black mb-8 text-2xl leading-7 font-normal font-sans">
            Steps
        </h2>
        <ul>
            <li v-for="step in steps" :key="step.id" class="mb-1 relative">
                <button type="button" class="w-full text-left  rounded transition-colors
            disabled:opacity-50 disabled:cursor-not-allowed p-3 text-sm
            " :class="{
                'font-semibold text-black bg-[#e7e7e7]': currentStep === step.id,
                'font-normal text-gray-500 hover:bg-[#e7e7e7]': currentStep !== step.id
            }" :disabled="step.id > currentStep">
                    {{ step.label }}
                </button>

                <svg v-if="step.id < currentStep" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    class="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-4 text-[#0ead88]" fill="currentColor">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16.4874 5.48816C17.1709 6.13903 17.1709 7.1943 16.4874 7.84518L9.48744 14.5118C8.80402 15.1627 7.69598 15.1627 7.01256 14.5118L3.51256 11.1785C2.82915 10.5276 2.82915 9.47236 3.51256 8.82149C4.19598 8.17061 5.30402 8.17061 5.98744 8.82149L8.25 10.9763L14.0126 5.48816C14.696 4.83728 15.804 4.83728 16.4874 5.48816Z">
                    </path>
                </svg>

            </li>
        </ul>
    </div>
</template>