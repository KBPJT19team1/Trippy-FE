import { defineStore } from "pinia";

export const useAccommodationStore = defineStore("accommodation", {
  state: () => ({
    accommodations: [],
    selectedAccommodation: null,
  }),
  actions: {
    setAccommodations(data) {
      this.accommodations = data;
    },
    selectAccommodation(item) {
      this.selectedAccommodation = item;
    },
    findAccommodationById(id) {
      return this.accommodations.find((a) => a.id === id);
    },
  },
});
