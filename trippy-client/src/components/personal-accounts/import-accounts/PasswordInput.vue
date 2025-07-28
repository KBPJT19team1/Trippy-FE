<script setup>

</script>

<template>
  <!-- Todo: 이 화면 들어오면 바로 키보드 입력창 뜨도록 하기-->
  <div class="flex flex-col h-full items-center justify-center gap-8">
    <div class="flex flex-col gap-2 items-center">
      <h1 class="title3">비밀번호 입력</h1>
      <p class="body2">Trippy 비밀번호를 입력해 주세요.</p>
    </div>
    <div class="flex gap-2">
      <div v-for="n in 6" class="size-4 bg-gray-200 rounded-full"></div>
    </div>
  </div>
</template>
