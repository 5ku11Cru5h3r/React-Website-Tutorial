import Logo from '../assets/react.svg';
export default function Navbar(){
    return(
        <>
        <header>
            <nav>
                <img src={Logo} alt="logo" />
                <span>React Facts</span>
            </nav>
        </header>

        </>
    );
}