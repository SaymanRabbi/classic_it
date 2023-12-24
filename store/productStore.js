import zustand from "zustand";

export const useProductStore = zustand((set) => ({
    products: [],
    isLoading:false,
    error:null,
    getProducts: async() => {
        try {
            set({isLoading:true});
            const url = `https://classic-it.onrender.com/api/v1/get_product`;
            const resp = await fetch(url);
            const data = await resp.json();
            set({products:data, isLoading:false});
        } catch (error) {
           
             set({error:error.message});
        }
    }
}));

export const useCartStore = zustand((set) => ({
    cartItems: JSON.parse(localStorage.getItem("cart") || "[]"),
 
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
        set((state) => {
          const existingProduct = state.cartItems.find((x) => x._id === product._id);
    
          if (existingProduct && existingProduct.quantity > 1) {
            return {
              cartItems: state.cartItems.map((x) =>
                x._id === product._id ? { ...x, quantity: x.quantity - 1 } : x
              ),
            };
          } else {
            // Remove the product from the cart if quantity is 0 or 1
            return {
              cartItems: state.cartItems.filter((x) => x._id !== product._id),
            };
          }
        });
      },
}));
    
