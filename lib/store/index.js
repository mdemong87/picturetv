import { create } from 'zustand';


export const useStore = create((set, get) => ({

    //auth user
    authUser: {},
    setauthUser: (text) => set({ authUser: text }),


    searchText: "",  // Define the initial state for searchText
    setSearchText: (text) => set({ searchText: text }),  // Action to update searchText
    userData: false,  // Define the initial state for userData
    setUserData: (user) => set({ userData: user }),  // Action to update userData



    //for shoping cart management
    mycart: [],
    setmycart: (cart) => set({ mycart: cart }),

    //for booking page
    rander: 1,
    setrander: (state) => set({ rander: state }),
    ispersonal: false,
    setispersonal: (state) => set({ ispersonal: state }),
    shootType: "",
    setshootType: (state) => set({ shootType: state }),
    selectedprice: 1,
    setselectedprice: (state) => set({ selectedprice: state }),






}));
