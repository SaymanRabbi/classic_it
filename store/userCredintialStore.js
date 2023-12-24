import {create} from 'zustand';
export const useUserStore = create((set) => ({
    user: null,
    loginuser: null,
    isLoading:false,
    serverError:null,
    createUser: async (user) => {
        try {
            set({isLoading:true});
            const url = `http://localhost:5000/api/v1/create_user`;
            const resp = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const data = await resp.json();
            if(data){
                set({user:data, isLoading:false});
            }
        } catch (error) {
            set({serverError:error});
        }
    },
    getUser: async (user) => {
        try {
            set({isLoading:true});
            const url = `http://localhost:5000/api/v1/get_user`;
            const resp = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const data = await resp.json();
            if(data){
                set({loginuser:data, isLoading:false});
            }
        } catch (error) {
            set({serverError:error});
        }
    },
    logout: () => set({user:null})
}));