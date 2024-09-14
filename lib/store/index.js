// import { create } from 'zustand';

// export const useStore = create((set) => ({
//     Image_Url: null,
//     updateImage_Url: (newUrl) => set({ Image_Url: newUrl }),
// }))


import { create } from 'zustand';

export const useStore = create((set, get) => {
    // Check if running in the browser
    const isClient = typeof window !== 'undefined';

    // Retrieve the initial value from localStorage if in the browser
    const initialImageUrl = isClient ? localStorage.getItem('Image_Url') || null : null;

    return {
        Image_Url: initialImageUrl,
        updateImage_Url: (newUrl) => {
            if (isClient) {
                localStorage.setItem('Image_Url', newUrl); // Persist new URL to localStorage
            }
            set({ Image_Url: newUrl });
        },
    };
});
