<script setup>
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue'
import TrippyLogo from '@/assets/svg/trippy-logo.svg'
</script>

<template>
  <div class="bg-white h-[100px] w-full absolute fixed top-0">
    <div class='h-[56px] px-4 mt-11 flex align-center'>
      <TrippyLogo class='w-[62px] h-auto' />
      <RouterLink to="/notifications">
        <div class='text-gray-400 flex flex-col items-center hover:text-gray-600'>
          <Icon icon="material-symbols:notifications-rounded" class='w-[28px] h-auto' />
        </div>
      </RouterLink>
    </div>
  </div>
</template>
