import { useState } from 'react';
import { useInterval } from '../hooks/useInterval';

export const StopwatchDemo = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);

  const { clear } = useInterval(
    () => {
      setMilliseconds((ms) => ms + 10);
    },
    isRunning ? 10 : null
  );

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    clear();
  };

  const handleReset = () => {
    setMilliseconds(0);
    setIsRunning(false);
    setLaps([]);
    clear();
  };

  const handleLap = () => {
    setLaps([...laps, milliseconds]);
  };

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const centiseconds = Math.floor((ms % 1000) / 10);

    return {
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
      centiseconds: centiseconds.toString().padStart(2, '0'),
    };
  };

  const time = formatTime(milliseconds);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Chronomètre
      </h3>

      <div className="space-y-6">
        {/* Stopwatch Display */}
        <div className="p-12 bg-linear-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="text-7xl font-bold text-green-600 dark:text-green-400">
              {time.minutes}
            </div>
            <div className="text-7xl font-bold text-green-600 dark:text-green-400">
              :
            </div>
            <div className="text-7xl font-bold text-green-600 dark:text-green-400">
              {time.seconds}
            </div>
            <div className="text-5xl font-bold text-green-600 dark:text-green-400 opacity-70">
              .{time.centiseconds}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-3 gap-3">
          {!isRunning ? (
            <button
              onClick={handleStart}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors"
            >
              ▶ Start
            </button>
          ) : (
            <button
              onClick={handleStop}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors"
            >
              ⏸ Stop
            </button>
          )}
          <button
            onClick={handleLap}
            disabled={!isRunning}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ⏱ Tour
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
          >
            ⏹ Reset
          </button>
        </div>

        {/* Laps */}
        {laps.length > 0 && (
          <div>
            <h4 className="font-bold text-gray-800 dark:text-white mb-3">
              Tours ({laps.length})
            </h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {laps.map((lap, index) => {
                const lapTime = formatTime(lap);
                const previousLap = index > 0 ? laps[index - 1] : 0;
                const diff = formatTime(lap - previousLap);
                
                return (
                  <div
                    key={index}
                    className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex items-center justify-between"
                  >
                    <span className="font-semibold text-gray-800 dark:text-white">
                      Tour {index + 1}
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                        +{diff.minutes}:{diff.seconds}.{diff.centiseconds}
                      </span>
                      <span className="font-bold text-green-600 dark:text-green-400 font-mono">
                        {lapTime.minutes}:{lapTime.seconds}.{lapTime.centiseconds}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};