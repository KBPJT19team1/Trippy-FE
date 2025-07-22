<script setup>
import { ref, onMounted } from "vue";
import { computed } from "vue";

//수출입은행 현재환율api 인증키
const authkey = "수출입은행 현재환율 api 인증키 부분";

// yyyymmdd 형식 만들어주는 부분
// api에 날짜 넣어야 하므로 format 만들어줌.
const formatDate = (date) => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0"); // 0~11
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}${mm}${dd}`;
};

// 환율 api 사용할 때 (개발용)
// 어제 날짜 조회 => 어제꺼랑 비교해서 계산하니까
const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

const yesterdayForm = formatDate(yesterday);
const todayForm = formatDate(today);

// console.log(yesterdayForm);
// console.log(todayForm);

// 국기 표시를 위한 국가별 통화코드 함수
const getCountryCode = (curUnitRaw) => {
  // 괄호가 포함된 경우 제거: "JPY(100)" → "JPY"
  const curUnit = curUnitRaw.replace(/\(.*\)/, "").trim();

  const map = {
    USD: "us", // 미국 달러
    JPY: "jp", // 일본 엔
    EUR: "eu", // 유로
    CNY: "cn", // 중국 위안
    HKD: "hk", // 홍콩 달러
    TWD: "tw", // 대만 달러
    GBP: "gb", // 영국 파운드
    AUD: "au", // 호주 달러
    CAD: "ca", // 캐나다 달러
    CHF: "ch", // 스위스 프랑
    SEK: "se", // 스웨덴 크로나
    NZD: "nz", // 뉴질랜드 달러
    THB: "th", // 태국 바트
    SGD: "sg", // 싱가포르 달러
    RUB: "ru", // 러시아 루블
    INR: "in", // 인도 루피
    MXN: "mx", // 멕시코 페소
    PHP: "ph", // 필리핀 페소
    ZAR: "za", // 남아프리카공화국 랜드
    TRY: "tr", // 터키 리라
    BRL: "br", // 브라질 레알
    MYR: "my", // 말레이시아 링깃
    IDR: "id", // 인도네시아 루피아
    SAR: "sa", // 사우디아라비아 리얄
    AED: "ae", // 아랍에미리트 디르함
    BHD: "bh", // 바레인 디나르
    VND: "vn", // 베트남 동
    KZT: "kz", // 카자흐스탄 텡게
    QAR: "qa", // 카타르 리얄
    EGP: "eg", // 이집트 파운드
    KWD: "kw", // 쿠웨이트 디나르
    BND: "bn", // 브루나이 달러
    PKR: "pk", // 파키스탄 루피
    JOD: "jo", // 요르단 디나르
    CZK: "cz", // 체코 코루나
    HUF: "hu", // 헝가리 포린트
    PLN: "pl", // 폴란드 즈워티
    DKK: "dk", // 덴마크 크로네
    NOK: "no", // 노르웨이 크로네
    BGN: "bg", // 불가리아 레프
    RON: "ro", // 루마니아 레우
    HRK: "hr", // 크로아티아 쿠나 (→ EUR로 전환되었으나 여전히 있을 수 있음)
    UAH: "ua", // 우크라이나 흐리우냐
    ARS: "ar", // 아르헨티나 페소
    CLP: "cl", // 칠레 페소
    COP: "co", // 콜롬비아 페소
    PEN: "pe", // 페루 솔
    ISK: "is", // 아이슬란드 크로나
    KRW: "kr", // 대한민국 원
    LKR: "lk", // 스리랑카 루피
    NGN: "ng", // 나이지리아 나이라
    MAD: "ma", // 모로코 디르함
    ILS: "il", // 이스라엘 셰켈
    TND: "tn", // 튀니지 디나르
    XOF: "sn", // 세네갈 프랑 (프랑계 서아프리카 CFA)
    XAF: "cm", // 중앙아프리카 CFA 프랑
    BSD: "bs", // 바하마 달러
    DOP: "do", // 도미니카 페소
  };

  return map[curUnit] || "un"; // 기본값: 'un' (unknown)
};

const exchangeRates = ref([]);
const loading = ref(true);
const error = ref("");

const todayRates = computed(() =>
  exchangeRates.value.filter((item) => item.deal_ymd === todayForm),
);

const yesterdayRates = computed(() =>
  exchangeRates.value.filter((item) => item.deal_ymd === yesterdayForm),
);

// 오늘 통화코드(cur_unit)에 해당하는 어제 환율 찾는 함수
const getYesterdayRate = (curUnit) => {
  const found = yesterdayRates.value.find((item) => item.cur_unit === curUnit);
  return found?.deal_bas_r || null;
};

onMounted(async () => {
  try {
    // 어제 환율 url
    // const urlYest =
    // "https://oapi.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${authkey}&searchdate=${yesterdayForm}&data=AP01";

    // 오늘 환율 url
    // const urlToday =
    // "https://oapi.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${authkey}&searchdate=${todayForm}&data=AP01";

    // const response = await axios.get('http://localhost:8080/api/exchange');
    // exchangeRates.value = response.data;

    const res = await fetch("/exchange_dummy.json");
    const data = await res.json();
    exchangeRates.value = data;

    // ------------
  } catch (e) {
    error.value = "환율 데이터를 불러오는 데 실패했습니다.";
    console.error(e);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="exchange-list w-11/12 flex flex-col h-full">
    <h3 class="font-semibold text-xl">오늘의 환율 정보</h3>
    <br />

    <div v-if="loading">데이터 불러오는 중...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>

    <ul v-else class="divide-y divide-gray-200 flex-1 overflow-scroll">
      <li
        v-for="item in todayRates"
        :key="item.cur_unit"
        class="flex items-center justify-between py-4"
      >
        <div class="flex">
          <span class="w-10">
            <!-- 국기 표현 부분 -->
            <img
              :src="`https://flagcdn.com/w40/${getCountryCode(item.cur_unit)}.png`"
              :alt="item.cur_nm"
              class="w-[10vw] h-[6vw] rounded"
            />
          </span>
          <span class="font-semibold text-sm text-gray-900 px-4">{{ item.cur_nm }}</span>
        </div>
        <div class="flex flex-col text-right text-m">
          <span class="text-sm font-semibold">{{ item.deal_bas_r }}원</span>
          <li
            :class="{
              'text-red':
                parseFloat(item.deal_bas_r) - parseFloat(getYesterdayRate(item.cur_unit)) >= 0,
              'text-blue-400':
                parseFloat(item.deal_bas_r) - parseFloat(getYesterdayRate(item.cur_unit)) < 0,
            }"
          >
            <span class="text-xs text-right">
              {{
                (parseFloat(item.deal_bas_r) - parseFloat(getYesterdayRate(item.cur_unit))).toFixed(
                  2,
                )
              }}원
            </span>
            <span class="text-xs">{{
              "(" +
              (
                (parseFloat(item.deal_bas_r) - parseFloat(getYesterdayRate(item.cur_unit))) /
                parseFloat(getYesterdayRate(item.cur_unit))
              ).toFixed(2) +
              "%)"
            }}</span>
          </li>
        </div>
      </li>
    </ul>
    <!--  현재 환전하기 버튼 임시로 만듦. 버튼 컴포넌트 삽입해야 함. -->
    <button class="w-[100%] h-[2rem] bg-main-gradient text-white font-bold rounded">
      환전하기
    </button>
  </div>
</template>

<style scoped></style>
