<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div
      class="max-w-sm w-full bg-white shadow-xl rounded-2xl p-6 text-center border border-gray-200 hover:shadow-2xl transition-all duration-300">
      <div class="flex mb-4">
        <div class="bg-blue-100 text-blue-600 p-4 rounded-full shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15 5h3a2 2 0 012 2v1a2 2 0 110 4v1a2 2 0 01-2 2h-3m-6 0H6a2 2 0 01-2-2v-1a2 2 0 110-4V7a2 2 0 012-2h3m6 0v14m-6-14v14" />
          </svg>
        </div>
      </div>

      <h2 class="text-2xl font-semibold text-gray-800 mb-2 text-left">Ticket</h2>

      <p class="text-gray-500 mb-6 text-left">
        Manage your event tickets effortlessly. You can review details,
        update information, and confirm your seat in just a few clicks.<br />
        <a href="#" @click.prevent="$router.push('/ticket-flow')" style="color: #2196f3;"
          class="text-sm font-medium text-blue-600 rounded-lg transition-all hover:underline hover:opacity-90">
          Learn More
        </a>
      </p>

      <div class="flex justify-start">
        <button @click.prevent="$router.push('/ticket-flow')" style="background-color: #2196f3;"
          class="flex items-center gap-2 px-4 py-3 text-sm font-bold text-white rounded-lg transition-all cursor-pointer hover:opacity-90">
          Continue
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
