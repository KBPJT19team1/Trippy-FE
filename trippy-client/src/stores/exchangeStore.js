// src/stores/exchangeStore.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import exchangeRatesRaw from "@/../src/_dummy/exchange_dummy.json";

export const useExchangeStore = defineStore("exchange", () => {
  const exchangeRates = ref(exchangeRatesRaw);
  const loading = ref(false);

  // api 연결 시 사용할 함수.
  const formatDate = (date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}${mm}${dd}`;
  };

  // 실제 코드 - 매일 날짜 갱신 됨.
  // const today = new Date();
  // const yesterday = new Date();
  // yesterday.setDate(today.getDate() - 1);

  // const todayForm = formatDate(today);
  // const yesterdayForm = formatDate(yesterday);

  // (개발용) 다음 날짜로 지정해둠
  const todayForm = "20250722";
  const yesterdayForm = "20250721";

  const todayRates = computed(() =>
    exchangeRates.value.filter((item) => item.deal_ymd === todayForm),
  );

  const yesterdayRates = computed(() =>
    exchangeRates.value.filter((item) => item.deal_ymd === yesterdayForm),
  );

  const getYesterdayRate = (curUnit) => {
    const found = yesterdayRates.value.find((item) => item.cur_unit === curUnit);
    return found?.deal_bas_r || null;
  };

  const getCountryCode = (curUnitRaw) => {
    const curUnit = curUnitRaw.replace(/\(.*\)/, "").trim();

    const map = {
      USD: "us",
      JPY: "jp",
      EUR: "eu",
      CNY: "cn",
      HKD: "hk",
      TWD: "tw",
      GBP: "gb",
      AUD: "au",
      CAD: "ca",
      CHF: "ch",
      SEK: "se",
      NZD: "nz",
      THB: "th",
      SGD: "sg",
      RUB: "ru",
      INR: "in",
      MXN: "mx",
      PHP: "ph",
      ZAR: "za",
      TRY: "tr",
      BRL: "br",
      MYR: "my",
      IDR: "id",
      SAR: "sa",
      AED: "ae",
      BHD: "bh",
      VND: "vn",
      KZT: "kz",
      QAR: "qa",
      EGP: "eg",
      KWD: "kw",
      BND: "bn",
      PKR: "pk",
      JOD: "jo",
      CZK: "cz",
      HUF: "hu",
      PLN: "pl",
      DKK: "dk",
      NOK: "no",
      BGN: "bg",
      RON: "ro",
      HRK: "hr",
      UAH: "ua",
      ARS: "ar",
      CLP: "cl",
      COP: "co",
      PEN: "pe",
      ISK: "is",
      KRW: "kr",
      LKR: "lk",
      NGN: "ng",
      MAD: "ma",
      ILS: "il",
      TND: "tn",
      XOF: "sn",
      XAF: "cm",
      BSD: "bs",
      DOP: "do",
    };

    return map[curUnit] || "un";
  };

  return {
    exchangeRates,
    todayRates,
    yesterdayRates,
    getYesterdayRate,
    getCountryCode,
    todayForm,
    yesterdayForm,
    loading,
  };
});
