import { createStore } from 'vuex'

export interface FormState {
  currentStep: number
  formData: {
    isPaid: boolean,
    currency: string,
    isPriceDifferentiation: boolean
  }
}

export interface RootState {
  currentStep: number
  formData: FormData
}

export default createStore<FormState>({
  state: {
    currentStep: 1,
    formData: {
      isPaid: true,
      currency: '',
      isPriceDifferentiation: false,
    }
  },
  mutations: {
    nextStep(state: RootState) {
      if (state.currentStep < 3) state.currentStep++
    },
    prevStep(state: RootState) {
      if (state.currentStep > 1) state.currentStep--
    },
    updateFormData(state: RootState, payload: Partial<FormState['formData']>) {
      state.formData = { ...state.formData, ...payload }
    },
    isPaid(state: any, payload: boolean) {
      state.formData.isPaid = payload
    },
    setCurrency(state: any, payload: string) {
      state.formData.currency = payload
    },
    setPriceDifferentiation(state: any, value: any) {
      state.formData.isPriceDifferentiation = value
    },
  },
  getters: {
    currentStep: (state: RootState) => state.currentStep,
    formData: (state: RootState) => state.formData
  },
  actions: {}
})
