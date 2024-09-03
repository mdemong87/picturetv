import { create } from 'zustand';

export const useStore = create((set) => ({
    Session: false,
    UpdateSession: () => set((state) => ({ Session: state })),
}))


