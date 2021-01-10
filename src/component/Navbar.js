import react from 'react';
import Logo from '../assets/Logo.png'

const Navbar = () => {
    return (
        <nav>
            <div class="container mx-auto px-6 py-2 flex justify-between items-center">
                <a class="font-bold text-2xl lg:text-4xl" href="#">
                   <img src={Logo} alt="logo" /> 
                </a>
                <div class="">
                    <ul class="inline-flex">
                        <li><a class="px-4 font-bold" href="/">Home</a></li>
                        <li><a class="px-4 hover:text-gray-800" href="#">About</a></li>
                        <li><a class="px-4 hover:text-gray-800" href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;