import React from 'react';
import InputBox from '../components/InputBox';
import InputPassword from '../components/InputPassword';
import Button from '../components/Button';

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="#">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <InputBox placeHolder="Enter your Email"/>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <InputPassword placeHolder="Enter your Password"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Referral Code
              </label>
              <InputBox placeHolder="Enter your Referral Code"/>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              {/* <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div> */}
            </div>
            <div>
              <Button name="Register" handleClick={console.log("register")} />
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-100 text-gray-500">Or</span>
              </div>
            </div>
            <div className="mt-6 gap-3">
              <p className="mt-2 text-center text-sm text-gray-600 max-w">
                Already have an account? 
                <a href="../login" className="font-medium text-blue-600 hover:text-blue-500 pl-3">
                  log in
                </a>
              </p>
            </div>
            {/* <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg" alt="" />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <img className="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg" alt="" />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <img className="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg" alt="" />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;