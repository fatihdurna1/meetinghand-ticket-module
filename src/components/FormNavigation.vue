<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

interface Props {
  maxStep: number
}

const props = defineProps<Props>()
const store = useStore()

const currentStep = computed(() => store.getters.currentStep)

function nextStep() {
  if (currentStep.value < props.maxStep) {
    store.commit('nextStep')
  }
}

function prevStep() {
  if (currentStep.value > 1) {
    store.commit('prevStep')
  }
}
</script>

<template>
  <div :class="currentStep > 1 ? 'flex justify-between' : 'flex justify-end'">
    <button class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition cursor-pointer" @click="prevStep" v-if="currentStep > 1">
      <span class="text-lg">←</span>
      Previous
    </button>
    <button
      class="flex items-center gap-2 px-4 py-2 rounded text-white transition bg-[#2196f3] hover:bg-[#1976d2] cursor-pointer"
      @click="nextStep" :disabled="currentStep === props.maxStep" :class="{
        'opacity-60 cursor-not-allowed': currentStep === props.maxStep
      }">
      Next Step
      <span class="text-lg">→</span>
    </button>
  </div>
</template>

<style scoped></style>
