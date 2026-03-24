import { useState } from 'react';
import { useInterval } from '../hooks/useInterval';

export const ProgressBarDemo = () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(100);

  const { clear } = useInterval(
    () => {
      setProgress((p) => {
        if (p >= 100) {
          setIsRunning(false);
          return 100;
        }
        return p + 1;
      });
    },
    isRunning ? speed : null
  );

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
    clear();
  };

  const handleReset = () => {
    setProgress(0);
    setIsRunning(false);
    clear();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Barre de Progression
      </h3>

      <div className="space-y-6">
        {/* Progress Display */}
        <div className="p-8 bg-linear-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl">
          <div className="text-center mb-6">
            <div className="text-6xl font-bold text-orange-600 dark:text-orange-400">
              {progress}%
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`absolute h-full transition-all duration-200 ${
                progress === 100
                  ? 'bg-green-500'
                  : 'bg-linear-to-r from-orange-500 to-red-500'
              }`}
              style={{ width: `${progress}%` }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
              {progress === 100 ? '✓ Terminé !' : `${progress}%`}
            </div>
          </div>
        </div>

        {/* Speed Control */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Vitesse : {speed}ms par %
          </label>
          <input
            type="range"
            min="50"
            max="500"
            step="50"
            value={speed}
            onChange={(e) => setSpeed(parseInt(e.target.value))}
            disabled={isRunning}
            className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>Rapide</span>
            <span>Normal</span>
            <span>Lent</span>
          </div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={handleStart}
            disabled={isRunning || progress === 100}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ▶ Start
          </button>
          <button
            onClick={handlePause}
            disabled={!isRunning}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ⏸ Pause
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
          >
            ⏹ Reset
          </button>
        </div>

        {/* Status */}
        {progress === 100 && (
          <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg text-center animate-scale-in">
            <div className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">
              🎉 Opération terminée !
            </div>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors"
            >
              Recommencer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};