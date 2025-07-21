<script setup>
import { onMounted, ref } from "vue";

const mapElement = ref(null);
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function loadGoogleMapsScript(apiKey) {
  return new Promise((resolve, reject) => {
    if (window.google) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = (err) => reject(err);

    document.head.appendChild(script);
  });
}

onMounted(async () => {
  try {
    await loadGoogleMapsScript(apiKey);
    new window.google.maps.Map(mapElement.value, {
      center: { lat: 37.5665, lng: 126.978 },
      zoom: 12,
    });
  } catch (err) {
    console.error("Google Maps 로딩 실패:", err);
  }
});
</script>

<template>
  <div class="w-full h-screen">
    <div ref="mapElement" class="w-full h-full" />
  </div>
</template>
