import { ReactComponent as MenuIcon } from '../images/menu.svg';
import { ReactComponent as BackIcon } from '../images/back.svg';

const Header = (props: any) => {
    return (
         <div>
            <div className='absolute top-8 left-4'>
                <button onClick={props.handleBackClick}>
                    <BackIcon />
                </button>
            </div>
            <div className='absolute top-8 right-4'>
                <button onClick={props.handleSideBarClick}>
                    <MenuIcon />
                </button>
            </div>
            <div className='pt-36 pl-8 text-3xl sm:text-3xl md:text-3xl lg:text-4xl'>
                USER
            </div>
        </div>
    );
};

export default Header;

