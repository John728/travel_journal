import globe from '../icons/globe.svg';
import '../styles/Header.css';
import '../styles/general.css';

export default function Header() {
    return (
        <Text/>
    );
}


function Text() {
    return (
        <div className='header__container'>
            <img src={globe} alt='' className='header__container__img'></img>
            <p className='header__container__text'>Travel Journal</p>
        </div>
    );
}