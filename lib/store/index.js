import { create } from 'zustand';

export const useStore = create((set, get) => ({
    searchText: "",  // Define the initial state for searchText
    setSearchText: (text) => set({ searchText: text }),  // Action to update searchText
    userData: false,  // Define the initial state for userData
    setUserData: (user) => set({ userData: user }),  // Action to update userData



    //for shoping cart management
    mycart: [],
    setmycart: (cart) => set({ mycart: cart })



}));
