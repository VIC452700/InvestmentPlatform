import { useState } from 'react';
import { ReactComponent as EyeIcon } from '../images/eye.svg';
import { ReactComponent as EyeSlashIcon } from '../images/eye_slash.svg';

const InputPassword = (props: any) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const handleTogglePassword = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className='mt-1'>
            <div className="flex  bg-[#13263f] inset-y-0 mx-[0.05rem] rounded-md">            
                <input
                  id="password"
                  name="password"
                  type={isPasswordVisible? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md bg-[#13263f] relative block w-full px-3 py-2 placeholder-gray-500 text-gray-50 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={props.placeHolder}
                />
                <button 
                    onClick={handleTogglePassword} 
                    className='text-white pr-3'
                >
                    {isPasswordVisible ? <EyeIcon /> : <EyeSlashIcon />}
                </button>
            </div>
        </div>
    );
};

export default InputPassword;