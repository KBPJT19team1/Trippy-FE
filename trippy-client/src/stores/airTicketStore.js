import { defineStore } from "pinia";

export const useAirTicketStore = defineStore("airTicket", {
  state: () => ({
    tickets: [],
  }),

  getters: {
    usedTickets: (state) => state.tickets.filter((ticket) => ticket.used === true),
    unusedTickets: (state) => state.tickets.filter((ticket) => ticket.used === false),
  },

  actions: {
    setTickets(tickets) {
      this.tickets = tickets;
    },

    updateTicketStatus(id, used) {
      const ticket = this.tickets.find((t) => t.id === id);
      if (ticket) {
        ticket.used = used;
      }
    },
  },
});
