import { useState } from 'react';
import InputPassword from '../components/InputPassword';
import Button from '../components/Button';
import { ReactComponent as MenuIcon } from '../images/menu.svg';
import SideBar from '../components/SideBar';

const Account = () => {
    const [isSideBarShown, setIsSideBarShown] = useState(false);

    const handleSideBarClick = () => {
        setIsSideBarShown(!isSideBarShown);
    }
    
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className='absolute top-8 right-8'>
                <button onClick={handleSideBarClick}>
                    <MenuIcon />
                </button>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Update your password
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" action="#" method="#">
                    <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Current Password
                    </label>
                    <InputPassword placeHolder="Enter your Password"/>
                    </div>
                    <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        New Password
                    </label>
                    <InputPassword placeHolder="Enter your new Password"/>
                    </div>
                    <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Confirm Password
                    </label>
                    <InputPassword placeHolder="Enter your confirm Password"/>
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
                    <Button name="Update Password" handleClick={console.log("OK")} />
                    </div>
                </form>
                
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
            <SideBar isVisible={isSideBarShown}/>
        </div>
    );
};

export default Account;