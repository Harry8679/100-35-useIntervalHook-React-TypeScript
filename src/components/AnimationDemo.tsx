import { useState } from 'react';
import { useInterval } from '../hooks/useInterval';

export const AnimationDemo = () => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [speed, setSpeed] = useState(50);

  useInterval(
    () => {
      setPosition((pos) => {
        const newPos = pos + direction * 2;
        
        // Rebondir sur les bords
        if (newPos >= 100) {
          setDirection(-1);
          return 100;
        } else if (newPos <= 0) {
          setDirection(1);
          return 0;
        }
        
        return newPos;
      });
    },
    isAnimating ? speed : null
  );

  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500'];
  const [colorIndex, setColorIndex] = useState(0);

  useInterval(
    () => {
      setColorIndex((i) => (i + 1) % colors.length);
    },
    isAnimating ? 500 : null
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Animation Continue
      </h3>

      <div className="space-y-6">
        {/* Animation Container */}
        <div className="p-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl">
          <div className="relative h-32 bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
            <div
              className={`absolute top-1/2 -translate-y-1/2 w-16 h-16 ${colors[colorIndex]} rounded-full shadow-lg transition-all duration-100`}
              style={{ left: `calc(${position}% - 32px)` }}
            />
          </div>
        </div>

        {/* Position Display */}
        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
              Position :
            </span>
            <span className="text-lg font-bold text-blue-600 dark:text-blue-300">
              {Math.round(position)}%
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
              Direction :
            </span>
            <span className="text-lg font-bold text-blue-600 dark:text-blue-300">
              {direction > 0 ? '→ Droite' : '← Gauche'}
            </span>
          </div>
        </div>

        {/* Speed Control */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Vitesse : {speed}ms
          </label>
          <input
            type="range"
            min="10"
            max="100"
            step="10"
            value={speed}
            onChange={(e) => setSpeed(parseInt(e.target.value))}
            className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>Rapide</span>
            <span>Normal</span>
            <span>Lent</span>
          </div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              isAnimating
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {isAnimating ? '⏸ Pause' : '▶ Démarrer'}
          </button>
          <button
            onClick={() => {
              setPosition(0);
              setDirection(1);
            }}
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
          >
            ⏹ Reset
          </button>
        </div>
      </div>
    </div>
  );
};