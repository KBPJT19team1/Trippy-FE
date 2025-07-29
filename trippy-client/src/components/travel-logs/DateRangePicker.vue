<!-- components/travel-logs/DateRangePicker.vue -->
<template>
  <div class="bg-white p-4 rounded-lg shadow">
    <vue-cal
      style="height: 400px"
      :time="false"
      :disable-views="['years', 'year', 'week', 'day']"
      :selected-date="selectedDate"
      :on-event-create="onEventCreate"
      @cell-click="handleClick"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

const emit = defineEmits(["update:range"]);
const selectedDate = ref(new Date());

const isSelecting = ref(false);
const startDate = ref(null);
const endDate = ref(null);

function handleClick(date) {
  if (!isSelecting.value) {
    startDate.value = date;
    endDate.value = null;
    isSelecting.value = true;
  } else {
    endDate.value = date;
    isSelecting.value = false;
    emit("update:range", {
      start: new Date(startDate.value).toISOString().slice(0, 10),
      end: new Date(endDate.value).toISOString().slice(0, 10),
    });
  }
}
</script>
