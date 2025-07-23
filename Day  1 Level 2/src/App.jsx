
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Dark Mode is {darkMode ? "ON" : "OFF"}</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-6 py-2 bg-primary text-white rounded hover:bg-secondary transition-all"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default App;
