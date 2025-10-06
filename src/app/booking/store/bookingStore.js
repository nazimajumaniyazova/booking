import { create } from "zustand";

export const useBookingStore = create((set) => ({
  consultationType: "",
  service: "",
  specialist: null,
  date: null,
  time: null,
  user: { firstName: "", lastName: "", phone: "", email: "", comment: "" },
  isVerified: false,
  payment: { method: "visa", status: "pending" },
  bookingNumber: null,

  setField: (key, value) => set((s) => ({ ...s, [key]: value })),
  setUser: (patch) => set((s) => ({ user: { ...s.user, ...patch } })),
  reset: () =>
    set({
      consultationType: "",
      service: "",
      specialist: null,
      date: null,
      time: null,
      user: { firstName: "", lastName: "", phone: "", email: "", comment: "" },
      isVerified: false,
      payment: { method: "visa", status: "pending" },
      bookingNumber: null,
    }),
}));
