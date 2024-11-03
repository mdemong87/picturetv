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


    //booking form state
    fristName: "",
    setfristName: (state) => ({ fristName: state }),
    lastName: "",
    setlastName: (state) => ({ lastName: state }),
    companyName: "",
    setcompanyName: (state) => ({ companyName: state }),
    email: "",
    setemail: (state) => ({ email: state }),
    officeNumber: "",
    setofficeNumber: (state) => ({ officeNumber: state }),
    mobileNumber: "",
    setmobileNumber: (state) => ({ mobileNumber: state }),
    assignmentTitle: "",
    setassignmentTitle: (state) => ({ assignmentTitle: state }),
    assignmentDate: "",
    setassignmentDate: (state) => ({ assignmentDate: state }),
    callTime: "",
    setcallTime: (state) => ({ callTime: state }),
    endTime: "",
    setendTime: (state) => ({ endTime: state }),
    vanueName: "",
    setvanueName: (state) => ({ vanueName: state }),
    vanueAddress: "",
    setvanueAddress: (state) => ({ vanueAddress: state }),
    numberOfGuest: "",
    setnumberOfGuest: (state) => ({ numberOfGuest: state }),
    dressAttire: "",
    setdressAttire: (state) => ({ dressAttire: state }),
    onsiteContactNumber: "",
    setonsiteContactNumber: (state) => ({ onsiteContactNumber: state }),
    postImagetopictureTv: true,
    setpostImagetopictureTv: (state) => ({ postImagetopictureTv: state }),
    specialRequest: "",
    setspecialRequest: (state) => ({ specialRequest: state }),
    bookFor: "",
    setbookFor: (state) => ({ bookFor: state }),
    agreeToTerms: "",
    setagreeToTerms: (state) => ({ agreeToTerms: state }),
    subscribe: "",
    setsubscribe: (state) => ({ subscribe: state }),












}));
