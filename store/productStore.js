import zustand from "zustand";

export const useProductStore = zustand((set) => ({
    products: [],
    isLoading:false,
    error:null,
    getProducts: async() => {
        try {
            set({isLoading:true});
            const url = `http://localhost:5000/api/v1/get_product`;
            const resp = await fetch(url);
            const data = await resp.json();
            set({products:data, isLoading:false});
        } catch (error) {
             set({error:error.message});
        }
    }
}));