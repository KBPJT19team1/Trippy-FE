<script setup>
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";
import TopNavigationBar from "@/components/layouts/TopNavigationBar.vue";
import BottomNavigationBar from "@/components/layouts/BottomNavigationBar.vue";

const route = useRoute();

const bgColor = computed(() => route.meta.bgColor || "");
</script>

<template>
  <div class="font-sans flex justify-center text-black">
    <div :class="['relative w-screen h-screen md:max-w-[365px]', bgColor ? 'bg-white' : 'bg-gray-100']">
      <TopNavigationBar />

      <div class="pt-[100px] flex flex-col items-center h-full">
        <RouterView />
      </div>

      <BottomNavigationBar />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
