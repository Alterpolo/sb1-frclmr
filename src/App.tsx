import React, { useState, useEffect } from 'react';
import { Zap, Sparkles, BookOpen, Globe } from 'lucide-react';

function App() {
  const [showSparkle, setShowSparkle] = useState(false);
  const [buttonFlash, setButtonFlash] = useState(false);

  useEffect(() => {
    const sparkleInterval = setInterval(() => {
      setShowSparkle((prev) => !prev);
    }, 1000);

    const flashInterval = setInterval(() => {
      setButtonFlash((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(sparkleInterval);
      clearInterval(flashInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex flex-col items-center justify-center text-white p-4">
      <div className="relative">
        <h1 className="text-6xl font-bold mb-8 text-center relative z-10">
          Neodromes traduction
        </h1>
        <Zap className="absolute -top-8 -left-8 w-12 h-12 text-yellow-300 animate-pulse" />
        <Zap className="absolute -bottom-8 -right-8 w-12 h-12 text-yellow-300 animate-pulse" />
        <Zap className="absolute top-1/2 -translate-y-1/2 -left-12 w-8 h-8 text-blue-300 animate-bounce" />
        <Zap className="absolute top-1/2 -translate-y-1/2 -right-12 w-8 h-8 text-blue-300 animate-bounce" />
      </div>
      
      <div className="text-3xl mb-12 relative">
        <Sparkles className={`absolute -top-8 -left-8 w-8 h-8 text-yellow-200 ${showSparkle ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} />
        <Sparkles className={`absolute -bottom-8 -right-8 w-8 h-8 text-yellow-200 ${!showSparkle ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 animate-pulse">
          Traductions magiques et professionnelles
        </span>
      </div>
      
      <div className="flex items-center justify-center space-x-8 mb-12">
        <div className="flex flex-col items-center">
          <BookOpen className="w-16 h-16 text-cyan-300 mb-2 animate-float" />
          <span className="text-lg">Précision</span>
        </div>
        <div className="flex flex-col items-center">
          <Globe className="w-16 h-16 text-pink-300 mb-2 animate-float" />
          <span className="text-lg">Expertise</span>
        </div>
      </div>
      
      <div className="text-center mb-8">
        <p className="text-2xl mb-6 animate-fadeIn">Vous voulez des traductions certifiées et professionnelles ?</p>
        <button className={`bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold py-4 px-8 rounded-full text-2xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 ${buttonFlash ? 'animate-magical-flash' : ''}`}>
          Cliquez ici
        </button>
      </div>
    </div>
  );
}

export default App;