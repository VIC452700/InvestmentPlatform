
import React, { useState } from 'react';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import { ReactComponent as MenuIcon } from '../images/menu.svg';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyWallet = () => {
    const [isDeposit, setIsDeposit] = useState(true);
    const [isSideBarShown, setIsSideBarShown] = useState(false);

    const handleDepositClick = () => {
        setIsDeposit(true);
    };

    const handleWithdrawClick = () => {
        setIsDeposit(false);
    };

    const handleSideBarClick = () => {
        setIsSideBarShown(!isSideBarShown);
    }
  
    return(
        <>
        <div className="min-h-screen bg-custom-blue text-white">
            <Header handleSideBarClick={handleSideBarClick}/>
            <div className="w-full mt-4 px-4 py-60 sm:py-60 md:py-80 lg:py-80 border-2 rounded-tl-3xl rounded-tr-3xl bg-white text-black">
            </div>
            <Footer />                
                
            {/* <div className="w-full my-2 py-5 border-2 rounded-2xl bg-[#0c4e74] text-white columns-2 gap-0 text-center text-3xl">
                <div
                    className="border-r-2 border-gray-400"
                    onClick={handleDepositClick}
                >
                    Deposit
                </div>
                <div
                    onClick={handleWithdrawClick}
                >
                    Withdraw
                </div>
            </div> */}
            
            {/* {isDeposit?
                <Deposit /> : <Withdraw />
            } */}
            <SideBar isVisible={isSideBarShown}/> 
        </div>
        
        </>
    );
};
export default MyWallet;