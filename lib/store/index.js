import { create } from 'zustand';

export const useStore = create((set) => ({
    Session: '',
    UpdateSession: () => set((state) => ({ Session: state })),
}))


