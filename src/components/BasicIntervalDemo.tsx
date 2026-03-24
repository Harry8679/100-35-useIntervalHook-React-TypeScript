import { useState } from 'react';
import { useInterval } from '../hooks/useInterval';

export const BasicIntervalDemo = () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);

  const { clear } = useInterval(
    () => {
      setCount((c) => c + 1);
    },
    isRunning ? delay : null
  );

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    clear();
  };

  const handleReset = () => {
    setCount(0);
    setIsRunning(false);
    clear();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Interval Basique
      </h3>

      <div className="space-y-6">
        {/* Counter Display */}
        <div className="p-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl text-center">
          <div className="text-8xl font-bold text-blue-600 dark:text-blue-400">
            {count}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Compteur incrémenté toutes les {delay / 1000}s
          </div>
        </div>

        {/* Delay Selector */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Vitesse : {delay / 1000}s
          </label>
          <input
            type="range"
            min="100"
            max="2000"
            step="100"
            value={delay}
            onChange={(e) => setDelay(parseInt(e.target.value))}
            disabled={isRunning}
            className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>0.1s (rapide)</span>
            <span>1s</span>
            <span>2s (lent)</span>
          </div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={handleStart}
            disabled={isRunning}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ▶ Start
          </button>
          <button
            onClick={handleStop}
            disabled={!isRunning}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ⏸ Stop
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
          >
            ⏹ Reset
          </button>
        </div>

        {/* Status */}
        <div className={`p-4 rounded-lg ${
          isRunning
            ? 'bg-green-100 dark:bg-green-900/20'
            : 'bg-gray-100 dark:bg-gray-700/20'
        }`}>
          <div className="flex items-center justify-between">
            <span className={`font-semibold ${
              isRunning
                ? 'text-green-700 dark:text-green-400'
                : 'text-gray-700 dark:text-gray-400'
            }`}>
              État :
            </span>
            <span className={`px-4 py-2 rounded-full font-bold ${
              isRunning
                ? 'bg-green-500 text-white animate-pulse'
                : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
            }`}>
              {isRunning ? 'En cours' : 'Arrêté'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};