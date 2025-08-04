// App.jsx
import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Header } from './component/Navbar';
import { Footer } from './component/Footer';
import { Hero } from './pages/Home';

function App() {
  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);

  return (
    <div className="bg-[#FFE0F7] text-gray-900">
      <Header/>
      <main>
        <Hero/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
