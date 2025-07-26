import { useEffect, useState } from 'react';
import { add } from '../Redux/Cartslice';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES, fetchproducts } from '../Redux/ProductSlice';
import { FaEye, FaShoppingCart, FaSearch, FaTimes, FaHeart, FaStar, FaArrowRight, FaBolt, FaFire, FaGem } from 'react-icons/fa';
import close from "../assets/close.png"
import "../../src/App.css";
import Footer from '../component/Footer';

const Home = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    const cartItems = useSelector((state) => state.cart);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showNavbar, setShowNavbar] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);
    const itemsPerPage = 3;

    useEffect(() => {
        dispatch(fetchproducts());
    }, [dispatch]);

    useEffect(() => {
        setFilteredProducts(
            products.filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (category ? product.category === category : true)
            )
        );
    }, [searchTerm, products, category]);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginatedProducts = category === '' 
        ? filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) 
        : filteredProducts;

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    if (status === STATUSES.Loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-500 flex items-center justify-center relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
                </div>
                
                <div className="relative z-10 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-8">
                        <div className="absolute inset-0 border-4 border-cyan-300/30 rounded-full"></div>
                        <div className="absolute inset-2 border-4 border-cyan-400/50 rounded-full animate-spin"></div>
                        <div className="absolute inset-4 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin animation-delay-300"></div>
                        <div className="absolute inset-6 border-4 border-cyan-600 border-r-transparent rounded-full animate-spin animation-delay-600"></div>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4 animate-pulse">Loading...</h2>
                    <div className="flex space-x-2 justify-center">
                        <div className="w-3 h-3 bg-cyan-300 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce animation-delay-200"></div>
                        <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce animation-delay-400"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float-delayed"></div>
                <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-float-slow"></div>
            </div>

            {/* AMAZING CODED BANNER */}
            <div className="relative h-screen mt-20 overflow-hidden banner-container">
                {/* Dynamic Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/30 via-transparent to-cyan-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-800/20 to-purple-900/40"></div>
                
                {/* Animated Geometric Shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Large rotating hexagons */}
                    <div className="absolute top-20 left-20 w-64 h-64 border-4 border-cyan-400/20 transform rotate-45 animate-spin-slow"></div>
                    <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-purple-400/20 transform -rotate-45 animate-spin-reverse"></div>
                    <div className="absolute top-1/2 left-1/3 w-32 h-32 border-4 border-pink-400/30 transform rotate-12 animate-pulse-geometric"></div>
                    
                    {/* Floating diamonds */}
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 transform rotate-45 animate-float-diamond"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${4 + Math.random() * 6}s`
                            }}
                        ></div>
                    ))}
                    
                    {/* Glowing orbs */}
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={`orb-${i}`}
                            className="absolute w-6 h-6 bg-gradient-radial from-cyan-300 via-blue-400 to-transparent rounded-full animate-float-orb opacity-60"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 4}s`,
                                animationDuration: `${6 + Math.random() * 4}s`
                            }}
                        ></div>
                    ))}
                </div>
                
                {/* Lightning Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-lightning opacity-30"></div>
                    <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-lightning-delayed opacity-30"></div>
                </div>
                
                {/* Main Banner Content */}
                <div className="relative z-20 h-full flex items-center justify-center text-center px-6 pt-16">
                    <div className="max-w-6xl mx-auto space-y-8">
                        {/* Animated Icons */}
                        <div className="flex justify-center space-x-8 mb-8">
                            <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-cyan-400/30 animate-bounce">
                                <FaBolt className="text-4xl text-cyan-400 animate-pulse" />
                            </div>
                            <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl backdrop-blur-sm border border-purple-400/30 animate-bounce animation-delay-300">
                                <FaFire className="text-4xl text-purple-400 animate-pulse" />
                            </div>
                            <div className="p-4 bg-gradient-to-br from-pink-500/20 to-cyan-600/20 rounded-2xl backdrop-blur-sm border border-pink-400/30 animate-bounce animation-delay-600">
                                <FaGem className="text-4xl text-pink-400 animate-pulse" />
                            </div>
                        </div>
                        
                        {/* Main Headline */}
                        <div className="space-y-6">
                            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-none">
                                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-shift">
                                    WINTER
                                </span>
                                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-500 bg-clip-text text-transparent animate-gradient-shift-reverse">
                                    COLLECTION
                                </span>
                            </h1>
                            
                            <div className="text-2xl md:text-3xl text-cyan-100 font-light tracking-wider animate-fade-in-up animation-delay-500">
                                Experience the extraordinary
                            </div>
                        </div>
                        
                        {/* Animated Stats */}
                        <div className="flex flex-wrap justify-center gap-8 mt-12">
                            <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-110">
                                <div className="text-3xl font-bold text-cyan-400 animate-count-up">50%</div>
                                <div className="text-cyan-200 text-sm">OFF SALE</div>
                            </div>
                            <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-110 animation-delay-200">
                                <div className="text-3xl font-bold text-purple-400 animate-count-up">1000+</div>
                                <div className="text-purple-200 text-sm">PRODUCTS</div>
                            </div>
                            <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-pink-400/50 transition-all duration-500 transform hover:scale-110 animation-delay-400">
                                <div className="text-3xl font-bold text-pink-400 animate-count-up">24/7</div>
                                <div className="text-pink-200 text-sm">SUPPORT</div>
                            </div>
                        </div>
                        
                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center gap-6 mt-12">
                            <button className="group px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold text-xl rounded-2xl hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-cyan-500/50 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-full group-hover:translate-x-0"></div>
                                <span className="relative z-10 flex items-center space-x-3">
                                    <span>Shop Now</span>
                                    <FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
                                </span>
                            </button>
                            
                            <button className="group px-12 py-6 bg-white/10 backdrop-blur-xl text-white font-bold text-xl rounded-2xl border-2 border-white/30 hover:border-cyan-400/70 hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10">Explore Collection</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll-indicator"></div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 bg-gradient-to-br from-slate-900/95 via-cyan-900/95 to-blue-900/95 backdrop-blur-sm p-6 mx-auto">
                {!selectedProduct && (
                    <div className="searchWrapper mt-12 mb-16 flex flex-col items-center space-y-8 animate-fade-in-up">
                        {/* Ultra-Enhanced Search Bar */}
                        <div className="relative w-full max-w-xl group">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500 animate-pulse-slow"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
                            
                            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
                                <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-cyan-300 z-10 text-xl" />
                                <input
                                    type="text"
                                    placeholder="Discover amazing products..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-16 pr-6 py-5 bg-transparent text-white text-lg rounded-3xl border-0 focus:outline-none focus:ring-4 focus:ring-cyan-400/30 transition-all duration-300 placeholder-cyan-200/70 font-medium relative z-10"
                                />
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>

                        {/* Premium Category Buttons */}
                        <div className="categoryButtons flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => setCategory('')}
                                className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 ${
                                    category === '' 
                                        ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 text-white shadow-2xl shadow-cyan-500/50' 
                                        : 'bg-white/10 backdrop-blur-xl text-cyan-100 border border-white/20 hover:bg-white/20 hover:border-cyan-400/50'
                                }`}
                            >
                                <span className="relative z-10">✨ All Products</span>
                                {category === '' && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 rounded-2xl blur opacity-70 animate-pulse-slow"></div>
                                )}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            
                            {['men\'s clothing', 'women\'s clothing', 'electronics', 'jewelery'].map((cat, index) => {
                                const icons = ['👔', '👗', '📱', '💎'];
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => setCategory(cat)}
                                        className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 ${
                                            category === cat 
                                                ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 text-white shadow-2xl shadow-cyan-500/50' 
                                                : 'bg-white/10 backdrop-blur-xl text-cyan-100 border border-white/20 hover:bg-white/20 hover:border-cyan-400/50'
                                        }`}
                                    >
                                        <span className="relative z-10">{icons[index]} {cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
                                        {category === cat && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 rounded-2xl blur opacity-70 animate-pulse-slow"></div>
                                        )}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Fixed Scrollable Single Product View */}
                {selectedProduct ? (
                    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-lg animate-fade-in overflow-y-auto">
                        <div className="min-h-screen flex items-center justify-center p-4 py-8">
                            <div className="relative max-w-4xl w-full mx-4 transform animate-modal-in">
                                {/* Background Effects */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-cyan-600/20 rounded-3xl blur-2xl"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-xl border border-white/20"></div>
                                
                                <div className="p-6 md:p-10 text-white max-h-[90vh] overflow-y-auto custom-scrollbar">
                                    <div className="flex justify-end mb-6">
                                        <button
                                            className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-110 hover:rotate-90 z-20"
                                            onClick={() => setSelectedProduct(null)}
                                        >
                                            <FaTimes className="w-5 h-5" />
                                        </button>
                                    </div>
                                    
                                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                                        <div className="sticky top-20">
                                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-3xl blur-xl"></div>
                                            <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 group">
                                                <img 
                                                    src={selectedProduct.image} 
                                                    alt={selectedProduct.title} 
                                                    className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                            
                                            {/* Rating Stars */}
                                            <div className="flex justify-center space-x-1 mt-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar 
                                                        key={i} 
                                                        className="text-yellow-400 text-lg animate-twinkle" 
                                                        style={{ animationDelay: `${i * 100}ms` }}
                                                    />
                                                ))}
                                                <span className="text-cyan-200 ml-2 font-semibold">(4.8)</span>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-6">
                                            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold shadow-lg">
                                                <FaStar className="mr-2" />
                                                {selectedProduct.category}
                                            </div>
                                            
                                            <h4 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
                                                {selectedProduct.title}
                                            </h4>
                                            
                                            <div className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                                                ${selectedProduct.price}
                                            </div>
                                            
                                            {/* Product Features */}
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                                                    <div className="text-cyan-300 font-semibold">✅ Free Shipping</div>
                                                    <div className="text-cyan-100 text-sm">On orders over $50</div>
                                                </div>
                                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                                                    <div className="text-cyan-300 font-semibold">🔄 Easy Returns</div>
                                                    <div className="text-cyan-100 text-sm">30-day return policy</div>
                                                </div>
                                            </div>
                                            
                                            {/* Description */}
                                            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                                <h5 className="text-xl font-bold text-cyan-200 mb-3">Product Description</h5>
                                                <p className="text-cyan-100 leading-relaxed text-lg">{selectedProduct.description}</p>
                                            </div>
                                            
                                            {/* Quantity Selector */}
                                            <div className="flex items-center space-x-4">
                                                <span className="text-cyan-200 font-semibold">Quantity:</span>
                                                <div className="flex items-center bg-white/10 rounded-2xl border border-white/20">
                                                    <button className="px-4 py-2 text-cyan-300 hover:text-white transition-colors">-</button>
                                                    <span className="px-6 py-2 text-white font-bold">1</span>
                                                    <button className="px-4 py-2 text-cyan-300 hover:text-white transition-colors">+</button>
                                                </div>
                                            </div>
                                            
                                            {/* Action Buttons */}
                                            <div className="space-y-4">
                                                <button
                                                    className="group w-full py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 text-white font-bold text-xl rounded-2xl hover:from-cyan-400 hover:via-blue-400 hover:to-cyan-500 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/50 flex items-center justify-center space-x-3 relative overflow-hidden"
                                                    onClick={() => handleAdd(selectedProduct)}
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-full group-hover:translate-x-0"></div>
                                                    <FaShoppingCart className="relative z-10" />
                                                    <span className="relative z-10">Add to Cart</span>
                                                    <FaArrowRight className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
                                                </button>
                                                
                                                <button className="w-full py-4 bg-white/10 backdrop-blur-sm text-cyan-200 font-bold text-lg rounded-2xl border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                                                    <FaHeart />
                                                    <span>Add to Wishlist</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Spectacular Product Cards */}
                        <div className="productsWrapper grid grid-cols-1 custom:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
                            {paginatedProducts.map((product, index) => (
                                <div
                                    className="card relative p-0 rounded-3xl transition-all duration-700 transform hover:-translate-y-6 hover:rotate-1 group animate-fade-in-up cursor-pointer"
                                    key={product.id}
                                    style={{ animationDelay: `${index * 150}ms` }}
                                    onMouseEnter={() => setHoveredCard(product.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    {/* Card Background Effects */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 group-hover:border-cyan-400/50 transition-all duration-500"></div>
                                    
                                    <div className="relative overflow-hidden rounded-3xl">
                                        {/* Image Container */}
                                        <div className="relative overflow-hidden rounded-t-3xl">
                                            <img 
                                                src={product.image} 
                                                alt={product.title} 
                                                className="w-full h-64 object-cover transform group-hover:scale-125 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            
                                            {/* Floating Heart */}
                                            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                                                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                                                    <FaHeart className="text-red-400 text-sm" />
                                                </div>
                                            </div>
                                            
                                            {/* Premium Action Buttons */}
                                            <div className="absolute top-4 right-4 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-8 group-hover:translate-x-0">
                                                <button
                                                    className="w-14 h-14 bg-white/20 backdrop-blur-xl text-cyan-200 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-white/30 hover:bg-cyan-400/30"
                                                    onClick={() => setSelectedProduct(product)}
                                                >
                                                    <FaEye className="w-5 h-5" />
                                                </button>
                                                <button
                                                    className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110 hover:rotate-12 text-2xl font-bold relative overflow-hidden group/btn"
                                                    onClick={() => handleAdd(product)}
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                                    <span className="relative z-10">+</span>
                                                </button>
                                            </div>
                                            
                                            {/* Animated Rating Stars */}
                                            <div className="absolute bottom-4 left-4 flex space-x-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar 
                                                        key={i} 
                                                        className="text-yellow-400 text-sm animate-twinkle" 
                                                        style={{ animationDelay: `${i * 100}ms` }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        
                                        {/* Content Area */}
                                        <div className="relative p-6 space-y-4 bg-gradient-to-br from-white/5 to-transparent">
                                            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cyan-400/80 to-blue-500/80 text-white rounded-full text-xs font-bold backdrop-blur-sm">
                                                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                                                {product.category}
                                            </div>
                                            
                                            <h4 className="text-xl font-bold text-white leading-tight line-clamp-2 group-hover:text-cyan-200 transition-colors duration-300">
                                                {product.title}
                                            </h4>
                                            
                                            <div className="flex items-center justify-between">
                                                <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                                                    ${product.price}
                                                </div>
                                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                                    <FaArrowRight className="text-cyan-300 text-xl" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Spectacular Pagination */}
                        {category === '' && (
                            <div className="pagination flex flex-wrap justify-center items-center space-x-4 mb-12">
                                {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }, (_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handlePageChange(index + 1)}
                                        className={`relative w-16 h-16 rounded-2xl  font-bold text-lg transition-all duration-500 transform hover:scale-125 hover:-translate-y-1 ${
                                            currentPage === index + 1 
                                                ? 'bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-600 text-white shadow-2xl shadow-cyan-500/50' 
                                                : 'bg-white/10 backdrop-blur-xl text-cyan-200 border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 shadow-xl '
                                        }`}
                                    >
                                        <span className="relative z-10">{index + 1}</span>
                                        {currentPage === index + 1 && (
                                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-400 to-cyan-500 rounded-2xl blur opacity-70 animate-pulse-slow"></div>
                                        )}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </>
                )}
                
                <div>
                    <Footer/>
                </div>
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
                
                @keyframes float-diamond {
                    0%, 100% { transform: translateY(0px) rotate(45deg) scale(1); opacity: 0.3; }
                    25% { transform: translateY(-50px) rotate(135deg) scale(1.2); opacity: 0.8; }
                    50% { transform: translateY(-100px) rotate(225deg) scale(0.8); opacity: 1; }
                    75% { transform: translateY(-50px) rotate(315deg) scale(1.1); opacity: 0.6; }
                }
                
                @keyframes float-orb {
                    0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.4; }
                    33% { transform: translateY(-80px) translateX(40px) scale(1.3); opacity: 0.8; }
                    66% { transform: translateY(-40px) translateX(-30px) scale(0.7); opacity: 1; }
                }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                @keyframes spin-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                
                @keyframes pulse-geometric {
                    0%, 100% { transform: scale(1) rotate(12deg); opacity: 0.3; }
                    50% { transform: scale(1.2) rotate(22deg); opacity: 0.8; }
                }
                
                @keyframes lightning {
                    0%, 90%, 100% { opacity: 0; }
                    5%, 85% { opacity: 1; }
                    10%, 80% { opacity: 0; }
                    15%, 75% { opacity: 1; }
                }
                
                @keyframes lightning-delayed {
                    0%, 85%, 100% { opacity: 0; }
                    10%, 80% { opacity: 1; }
                    15%, 75% { opacity: 0; }
                    20%, 70% { opacity: 1; }
                }
                
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                @keyframes gradient-shift-reverse {
                    0% { background-position: 100% 50%; }
                    50% { background-position: 0% 50%; }
                    100% { background-position: 100% 50%; }
                }
                
                @keyframes count-up {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes scroll-indicator {
                    0% { transform: translateY(0); opacity: 1; }
                    50% { transform: translateY(15px); opacity: 0.5; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(60px) scale(0.9); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                
                @keyframes modal-in {
                    from { opacity: 0; transform: scale(0.8) translateY(40px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
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
                
                .animate-float-diamond {
                    animation: float-diamond 8s ease-in-out infinite;
                }
                
                .animate-float-orb {
                    animation: float-orb 7s ease-in-out infinite;
                }
                
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
                
                .animate-spin-reverse {
                    animation: spin-reverse 15s linear infinite;
                }
                
                .animate-pulse-geometric {
                    animation: pulse-geometric 4s ease-in-out infinite;
                }
                
                .animate-lightning {
                    animation: lightning 4s linear infinite;
                }
                
                .animate-lightning-delayed {
                    animation: lightning-delayed 4s linear infinite 2s;
                }
                
                .animate-gradient-shift {
                    background-size: 400% 400%;
                    animation: gradient-shift 3s ease infinite;
                }
                
                .animate-gradient-shift-reverse {
                    background-size: 400% 400%;
                    animation: gradient-shift-reverse 3s ease infinite;
                }
                
                .animate-count-up {
                    animation: count-up 1s ease-out;
                }
                
                .animate-scroll-indicator {
                    animation: scroll-indicator 2s ease-in-out infinite;
                }
                
                .animate-fade-in {
                    animation: fade-in-up 0.8s ease-out;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out both;
                }
                
                .animate-modal-in {
                    animation: modal-in 0.5s ease-out;
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }
                
                .animate-twinkle {
                    animation: twinkle 2s ease-in-out infinite;
                }
                
                .animation-delay-200 { animation-delay: 200ms; }
                .animation-delay-300 { animation-delay: 300ms; }
                .animation-delay-400 { animation-delay: 400ms; }
                .animation-delay-500 { animation-delay: 500ms; }
                .animation-delay-600 { animation-delay: 600ms; }
                .animation-delay-1000 { animation-delay: 1000ms; }
                
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                .bg-gradient-radial {
                    background: radial-gradient(circle, var(--tw-gradient-stops));
                }
                
                .banner-container {
                    background-attachment: fixed;
                }
                
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(6, 182, 212, 0.5) rgba(255, 255, 255, 0.1);
                }
                
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(to bottom, #06b6d4, #3b82f6);
                    border-radius: 10px;
                    border: 2px solid rgba(255, 255, 255, 0.1);
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(to bottom, #0891b2, #2563eb);
                }
            `}</style>
        </div>
    );
};

export default Home;