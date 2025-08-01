import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FaShoppingCart, FaShoppingBag, FaStar, FaBolt, FaGem } from 'react-icons/fa';
import icon from '../assets/logo.png';
import bags from '../assets/bag.png';
import cart from '../assets/shopping-cart.png';
import "../App.css";

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className={`navbar-container ${isScrolled ? 'scrolled' : 'top'} ${isScrolled ? 'fixed' : 'absolute'} top-0 left-0 right-0 z-50 transition-all duration-500`}>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-float-slow"></div>
                <div className="absolute -top-5 right-20 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-float-delayed"></div>
                <div className="absolute top-0 left-1/2 w-20 h-20 bg-purple-400/10 rounded-full blur-2xl animate-float"></div>
                
                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-300/40 rounded-full animate-float-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 navbar-border-gradient transition-opacity duration-500"></div>

            <div className="relative z-10 max-w-7xl mx-auto flex sm:flex-row justify-between w-full items-center py-4 px-6">
                {/* Enhanced Logo Section */}
                <Link to="/" className="group flex items-center space-x-3 mb-2 sm:mb-0 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                    <div className="relative">
                        {/* Logo Background Effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20 group-hover:border-cyan-400/50 transition-all duration-500">
                            <img src={icon} alt="Logo" className="h-8 sm:h-10 relative z-10" />
                            {/* Animated icons around logo */}
                            <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:animate-bounce">
                                <FaStar className="text-yellow-400 text-xs animate-twinkle" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <span className="text-lg sm:text-xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-shift">
                            ShopNest
                        </span>
                        {/* Animated underline */}
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                    </div>
                </Link>

                {/* Enhanced Cart Section */}
                <div className="flex flex-row items-center space-x-6 ml-auto">
                    {/* Cart Icon with Enhanced Effects */}
                    <Link to="/cart" className="group relative transform transition-all duration-500 hover:scale-125 hover:-translate-y-2">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-3 border border-white/20 group-hover:border-cyan-400/50 transition-all duration-500 shadow-lg hover:shadow-cyan-400/25">
                            <img className='w-6 h-6 relative z-10 group-hover:animate-pulse' src={cart} alt="Cart" />
                            
                            {/* Enhanced Badge */}
                            <span className="absolute -top-2 -right-2 transform bg-gradient-to-r from-red-500 via-pink-500 to-red-600 text-white font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center shadow-lg animate-pulse-slow border-2 border-white/30">
                                {items.length}
                            </span>
                            
                            {/* Floating effect indicators */}
                            <div className="absolute -top-1 -left-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <FaBolt className="text-yellow-400 text-xs animate-bounce" />
                            </div>
                        </div>
                        
                        {/* Ripple effect on hover */}
                        <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                    </Link>

                    {/* Bags Icon with Enhanced Effects */}
                    <Link to="/cart" className="group relative transform transition-all duration-500 hover:scale-125 hover:-translate-y-2">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-3 border border-white/20 group-hover:border-purple-400/50 transition-all duration-500 shadow-lg hover:shadow-purple-400/25">
                            <img className='w-6 h-6 relative z-10 group-hover:animate-pulse' src={bags} alt="Bags" />
                            
                            {/* Enhanced Badge with Animation */}
                            <span className="absolute -top-2 -right-2 transform bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center shadow-lg animate-bounce border-2 border-white/30">
                                {totalQuantity}
                            </span>
                            
                            {/* Floating effect indicators */}
                            <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <FaGem className="text-purple-400 text-xs animate-twinkle" />
                            </div>
                        </div>
                        
                        {/* Ripple effect on hover */}
                        <div className="absolute inset-0 rounded-2xl bg-purple-400/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .navbar-container {
                    background: rgba(15, 23, 42, 0.1);
                    backdrop-filter: blur(20px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .navbar-container.scrolled {
                    background: rgba(6, 182, 212, 0.15);
                    backdrop-filter: blur(30px);
                    border-bottom: 1px solid rgba(6, 182, 212, 0.3);
                    box-shadow: 0 8px 32px rgba(6, 182, 212, 0.1);
                }
                
                .navbar-container.scrolled .navbar-border-gradient {
                    opacity: 1;
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(180deg); }
                }
                
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(-180deg); }
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-8px) rotate(90deg); }
                }
                
                @keyframes float-particle {
                    0%, 100% { transform: translateY(0px) translateX(0px) opacity: 0.3; }
                    50% { transform: translateY(-30px) translateX(20px) opacity: 1; }
                }
                
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.7; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.05); }
                }
                
                @keyframes twinkle {
                    0%, 100% { opacity: 0.5; transform: scale(1) rotate(0deg); }
                    50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
                }
                
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float-delayed 5s ease-in-out infinite;
                }
                
                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }
                
                .animate-float-particle {
                    animation: float-particle 4s linear infinite;
                }
                
                .animate-gradient-shift {
                    background-size: 400% 400%;
                    animation: gradient-shift 3s ease infinite;
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 2s ease-in-out infinite;
                }
                
                .animate-twinkle {
                    animation: twinkle 2s ease-in-out infinite;
                }
                
                /* Mobile Responsiveness */
                @media (max-width: 640px) {
                    .navbar-container {
                        padding: 0 1rem;
                    }
                    
                    .navbar-container .space-x-6 {
                        gap: 1rem;
                    }
                }
                
                /* Smooth transitions for all interactive elements */
                * {
                    transition-property: transform, opacity, background-color, border-color, box-shadow;
                    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                /* Enhanced scroll behavior */
                .navbar-container {
                    transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
                }
                
                /* Glassmorphism effect enhancement */
                .navbar-container::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
                    backdrop-filter: blur(20px);
                    pointer-events: none;
                    opacity: 0;
                    transition: opacity 0.5s ease;
                }
                
                .navbar-container.scrolled::before {
                    opacity: 1;
                }
            `}</style>
        </div>
    );
};

export default Navbar;