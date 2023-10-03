
import React, { useState } from 'react';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import { ReactComponent as MenuIcon } from '../images/menu.svg';
import SideBar from '../components/SideBar';

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
            <div className="w-7/10 mx-3 mt-4 px-4 py-20 border-2 rounded-2xl bg-[#0c4e74] text-white">
                <div className='absolute top-8 right-8'>
                    <button onClick={handleSideBarClick}>
                        <MenuIcon />
                    </button>
                </div>
                
                Total Assets

            </div>
            <div className="w-7/10 mx-3 my-2 py-5 border-2 rounded-2xl bg-[#0c4e74] text-white columns-2 gap-0 text-center text-3xl">
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
            </div>
            {isDeposit?
                <Deposit /> : <Withdraw />
            }
            <SideBar isVisible={isSideBarShown}/>
        </>
    );
};
export default MyWallet;