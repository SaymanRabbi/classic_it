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

export const useCartStore = zustand((set) => ({
    cartItems: [],
    addToCart: (product) => {
        set((state) =>{
            if (state.cartItems.find((x) => x._id === product._id)) {
                return {
                    cartItems: state.cartItems.map((x) =>
                        x._id === product._id ? { ...x, quantity: x.quantity + 1 } : x
                    )
                };
            } else {
                return { cartItems: [...state.cartItems, product] };
            }
        });
    },
    removeFromCart: (product) => {
       set((state)=>{
        if (state.cartItems.find((x) => x._id === product._id)) {
            return {
                cartItems: state.cartItems.map((x) =>
                    {
                        if(x._id === product._id && x.quantity >= 1){
                            return { ...x, quantity: x.quantity - 1 }
                        }
                        else if(x._id === product._id && x.quantity === 0){
                            return { ...x, quantity: x.quantity }
                        }
                        else{
                            return x;
                        }
                    }
                )
            };
        } else {
            return { cartItems: [...state.cartItems] };
        }
       })
    },

}));
    
