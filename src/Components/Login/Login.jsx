import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../store/userCredintialStore';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const getUser = useUserStore(state => state?.getUser);
    const {loginuser,success} = useUserStore(state => state);
    const navigations = useNavigate();
    const [error, setError,] = useState('');
    const HandleSubmit =async (e) => {
        e.preventDefault();
        setLoading(true);
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(!email || !password){
            setLoading(false);
            return toast.error('Please fill all the fields');
        }
        if(password.length < 6){
            setLoading(false);
            toast.error('Password must be at least 6 characters');
            return setError('password must be at least 6 characters');
        }
        try {
            // Wait for createUser to complete
        await getUser({ email, password });
        } catch (error) {
            console.error('Error creating user:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if(loginuser?.success){
            const users ={
                user:loginuser.user,
                token:loginuser.token
            }
            localStorage.setItem('user',JSON.stringify(users));
            toast.success('User login successfully');
            setError('');
            navigations('/');
        }
    }, [loginuser]);
    return (
        <div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8 min-h-[79vh]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://res.cloudinary.com/dnr5u3jpb/image/upload/v1703396445/logo_aqpnci.png"
            alt="Classic_it"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6"
           onSubmit={HandleSubmit}
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  
                  className={`
                  px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                  ${error.includes('email') && 'ring-2 ring-red-500'}
                  `}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                 
                  className={`
                  px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                    ${error.includes('password') && 'ring-2 ring-red-500'}
                  `}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#335dff] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               disabled={loading}
              >
               { loading ? 'Loading...' : 'Sign in'}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to='/register' className="font-semibold leading-6 text-[#335dff] hover:text-indigo-500">
                Sign up now
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Login;