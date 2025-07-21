// src/stores/bottomButtonStore.js
import { defineStore } from "pinia";

export const useBottomButtonStore = defineStore("bottomButton", {
  state: () => ({
    label: "",
    routeTo: "",
    visible: true,
  }),
  actions: {
    set(label, routeTo) {
      this.label = label; // 버튼에 들어갈 이름 지정
      this.routeTo = routeTo; // 버튼 눌렀을때 이동할 페이지
    },
    visited(visible) {
      this.visible = visible;
    },
    hide() {
      this.visible = false;
    },
    reset() {
      this.label = "";
      this.routeTo = "";
      this.visible = false;
    },
  },
});
