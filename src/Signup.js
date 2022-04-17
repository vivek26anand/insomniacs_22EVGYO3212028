import { BsGoogle } from "react-icons/bs";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import {useNavigate} from 'react-router-dom';
import logo from './logo.png';
const provider = new GoogleAuthProvider();
export default function Example() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
    return (
      <>
        <div className="min-h-full flex">
          <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <img
                  className="h-12 w-auto"
                  src={logo}
                  alt="rentLinq"
                />
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign up</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Or{' '}
                  <a href="/sign-in" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
  
              <div className="mt-8">
                <div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Sign up with</p>
  
                    <div className="mt-1">  
                      <div>
                        <button
                          href="#"
                          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          onClick={(e)=>{
                            signInWithPopup(auth, provider)
                                .then((result) => {
                                  navigate('/dashboard');
                                }).catch((error) => {
                                  setError(error.message);
                                });
                          }}
                        >
                          <span className="sr-only">Sign up with Google</span>
                          <BsGoogle className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
  
                  <div className="mt-6 relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>
                </div>
  
                <div className="mt-6">
                  <form action="#" method="POST" className="space-y-6" onSubmit={(e)=>{
                    e.preventDefault();
                    const loginData = {
                      name: e.target.name.value,
                      email: e.target.email.value,
                      password: e.target.password.value,
                      password2: e.target.password2.value
                    }
                    if(loginData.password !== loginData.password2){
                      setError('Passwords do not match')
                    } else {
                      createUserWithEmailAndPassword(auth, loginData.email, loginData.password)
                        .then((userCredential) => {
                          // Signed in 
                          updateProfile(auth.currentUser, {
                            displayName: loginData.name
                          }).then(() => {
                            navigate('/dashboard');
                          }).catch((error) => {
                            setError(error.message)
                          });
                          // ...
                        })
                        .catch((error) => {
                          const errorMessage = error.message;
                          setError(errorMessage)
                        });
                    }
                  }}>
                  <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <div className="mt-1">
                        <input
                          id="name"
                          type="text"
                          autoComplete="name"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          type="password"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Repeat Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password2"
                          type="password"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={(e)=>{
                          e.target.innerText = 'Signing up...'
                        }}
                      >
                        Sign Up
                      </button>
                    </div>
                    <div>
                      <p className="text-red-500 text-sm text-center">{error}</p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative w-0 flex-1">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
              alt=""
            />
          </div>
        </div>
      </>
    )
  }
  