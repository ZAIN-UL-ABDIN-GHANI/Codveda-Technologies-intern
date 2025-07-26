import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, updateQuantity, clearCart } from '../Redux/Cartslice';
import { FaTrashAlt, FaCartArrowDown, FaShoppingCart, FaStar, FaPlus, FaMinus, FaFire, FaBolt, FaGem, FaHeart } from 'react-icons/fa';
import "../../src/App.css";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const handleRemove = (id) => {
        dispatch(remove(id));
    };

    const handleQuantityChange = (id, change) => {
        dispatch(updateQuantity({ id, change }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 relative overflow-hidden pt-24 pb-12'>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float-delayed"></div>
                <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-float-slow"></div>
                
                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-cyan-300/30 rounded-full animate-float-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className='relative z-10 max-w-7xl mx-auto px-6'>
                {/* Enhanced Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="flex justify-center space-x-4 mb-6">
                        <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-cyan-400/30 animate-bounce">
                            <FaShoppingCart className="text-4xl text-cyan-400 animate-pulse" />
                        </div>
                        <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl backdrop-blur-sm border border-purple-400/30 animate-bounce animation-delay-300">
                            <FaFire className="text-4xl text-purple-400 animate-pulse" />
                        </div>
                    </div>
                    
                    <h1 className="text-6xl md:text-7xl font-black mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-shift">
                            Shopping Cart
                        </span>
                    </h1>
                    
                    <div className="text-xl text-cyan-100 font-light tracking-wider">
                        {cartItems.length} items in your cart
                    </div>
                </div>

                {cartItems.length === 0 ? (
                    /* Empty Cart State */
                    <div className="text-center py-20 animate-fade-in-up">
                        <div className="mb-8">
                            <div className="inline-block p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-xl border border-white/20">
                                <FaCartArrowDown className="text-8xl text-cyan-300/70 animate-bounce" />
                            </div>
                        </div>
                        <h3 className="text-4xl font-bold text-white mb-4">Your cart is empty</h3>
                        <p className="text-xl text-cyan-200 mb-8">Add some amazing products to get started!</p>
                        <button className="px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold text-xl rounded-2xl hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-cyan-500/50">
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Cart Items - Clean List Layout */}
                        <div className='space-y-6 mb-16'>
                            {cartItems.map((item, index) => (
                                <div 
                                    key={item.id} 
                                    className='group relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-cyan-400/50 transition-all duration-500 animate-fade-in-up overflow-hidden'
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Hover Background Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                    
                                    <div className="relative p-6">
                                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                                            {/* Product Image */}
                                            <div className="relative flex-shrink-0">
                                                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                                                    <img 
                                                        src={item.image} 
                                                        alt="Product" 
                                                        className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700'
                                                    />
                                                </div>
                                                
                                                {/* Category Badge */}
                                                <div className="absolute -top-2 -right-2 px-2 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full text-xs font-bold">
                                                    {item.category}
                                                </div>
                                            </div>
                                            
                                            {/* Product Details */}
                                            <div className="flex-1 text-center lg:text-left space-y-4">
                                                <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300 line-clamp-2">
                                                    {item.title}
                                                </h3>
                                                
                                                <div className="flex items-center justify-center lg:justify-start space-x-2">
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar key={i} className="text-yellow-400 text-sm" />
                                                    ))}
                                                    <span className="text-cyan-200 text-sm ml-2">(4.8)</span>
                                                </div>
                                                
                                                <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                                                    ${item.price.toFixed(2)}
                                                </div>
                                            </div>
                                            
                                            {/* Quantity Control */}
                                            <div className="flex-shrink-0">
                                                <div className="flex flex-col items-center space-y-4">
                                                    <div className="text-sm text-cyan-200 font-semibold">Quantity</div>
                                                    
                                                    <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
                                                        <button 
                                                            onClick={() => handleQuantityChange(item.id, -1)} 
                                                            disabled={item.quantity <= 1}
                                                            className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg flex items-center justify-center font-bold hover:from-red-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                                                        >
                                                            <FaMinus className="w-3 h-3" />
                                                        </button>
                                                        
                                                        <div className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-400/30 min-w-[3rem] text-center">
                                                            <span className="text-xl font-bold text-white">{item.quantity}</span>
                                                        </div>
                                                        
                                                        <button 
                                                            onClick={() => handleQuantityChange(item.id, 1)}
                                                            className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg flex items-center justify-center font-bold hover:from-green-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-110"
                                                        >
                                                            <FaPlus className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Item Total & Remove */}
                                            <div className="flex-shrink-0">
                                                <div className="flex flex-col items-center space-y-4">
                                                    <div className="text-center">
                                                        <div className="text-sm text-cyan-200 mb-2">Total</div>
                                                        <div className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                                                            ${(item.price * item.quantity).toFixed(2)}
                                                        </div>
                                                    </div>
                                                    
                                                    <button
                                                        className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                                                        onClick={() => handleRemove(item.id)}
                                                    >
                                                        <FaTrashAlt className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Enhanced Total Section */}
                        <div className="sticky bottom-6 z-20 animate-fade-in-up animation-delay-500">
                            <div className="relative">
                                {/* Background Effects */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-xl border border-white/20"></div>
                                
                                <div className="relative p-8 text-center space-y-6">
                                    {/* Animated Icons */}
                                    <div className="flex justify-center space-x-4 mb-6">
                                        <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl backdrop-blur-sm border border-green-400/30 animate-pulse">
                                            <FaBolt className="text-2xl text-green-400" />
                                        </div>
                                        <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-2xl backdrop-blur-sm border border-yellow-400/30 animate-pulse animation-delay-300">
                                            <FaGem className="text-2xl text-yellow-400" />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <div className="text-2xl text-cyan-200 font-semibold">Grand Total</div>
                                        <div className="text-7xl font-black bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent animate-gradient-shift">
                                            ${getTotalPrice()}
                                        </div>
                                    </div>
                                    
                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                                        <button className="group px-12 py-6 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white font-bold text-xl rounded-2xl hover:from-green-400 hover:via-emerald-400 hover:to-green-500 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-green-500/50 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-full group-hover:translate-x-0"></div>
                                            <span className="relative z-10 flex items-center space-x-3">
                                                <FaShoppingCart />
                                                <span>Proceed to Checkout</span>
                                            </span>
                                        </button>
                                        
                                        <button 
                                            className="group px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-lg rounded-2xl hover:from-red-400 hover:to-pink-400 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-red-500/50 relative overflow-hidden"
                                            onClick={handleClearCart}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-full group-hover:translate-x-0"></div>
                                            <span className="relative z-10 flex items-center space-x-2">
                                                <FaTrashAlt />
                                                <span>Clear Cart</span>
                                            </span>
                                        </button>
                                    </div>
                                    
                                    {/* Additional Info */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                                        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                                            <div className="text-green-300 font-semibold text-sm">✅ Free Shipping</div>
                                            <div className="text-green-100 text-xs">On orders over $50</div>
                                        </div>
                                        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                                            <div className="text-blue-300 font-semibold text-sm">🔄 Easy Returns</div>
                                            <div className="text-blue-100 text-xs">30-day return policy</div>
                                        </div>
                                        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                                            <div className="text-purple-300 font-semibold text-sm">🔒 Secure Payment</div>
                                            <div className="text-purple-100 text-xs">SSL encrypted checkout</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-30px) rotate(-180deg); }
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(90deg); }
                }
                
                @keyframes float-particle {
                    0%, 100% { transform: translateY(0px) translateX(0px) opacity: 0.3; }
                    50% { transform: translateY(-100px) translateX(50px) opacity: 1; }
                }
                
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(60px) scale(0.9); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                @keyframes twinkle {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.2); }
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float-delayed 8s ease-in-out infinite;
                }
                
                .animate-float-slow {
                    animation: float-slow 10s ease-in-out infinite;
                }
                
                .animate-float-particle {
                    animation: float-particle 6s linear infinite;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out both;
                }
                
                .animate-gradient-shift {
                    background-size: 400% 400%;
                    animation: gradient-shift 3s ease infinite;
                }
                
                .animate-twinkle {
                    animation: twinkle 2s ease-in-out infinite;
                }
                
                .animation-delay-300 { animation-delay: 300ms; }
                .animation-delay-500 { animation-delay: 500ms; }
                
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                /* Mobile Responsiveness */
                @media (max-width: 640px) {
                    .grid-cols-1.lg\\:grid-cols-2.xl\\:grid-cols-3 {
                        grid-template-columns: 1fr;
                    }
                    
                    .text-6xl.md\\:text-7xl {
                        font-size: 3rem;
                    }
                    
                    .px-12 {
                        padding-left: 2rem;
                        padding-right: 2rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Cart;