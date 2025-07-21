// composables/useExchange.js
import { ref } from "vue";

export function useExchangeRate() {
  const isLoading = ref(false);

  const exchange = async () => {
    isLoading.value = true;
    try {
      // 환전 로직
      console.log("환전 시작");
      await new Promise((r) => setTimeout(r, 1000));
      console.log("환전 완료");
    } catch (err) {
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    exchange,
  };
}
