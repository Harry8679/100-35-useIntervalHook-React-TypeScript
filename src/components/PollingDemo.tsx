import { useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import type { DataPoint } from '../types';

export const PollingDemo = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [isPolling, setIsPolling] = useState(false);
  const [pollInterval, setPollInterval] = useState(2000);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const fetchData = () => {
    // Simuler un appel API
    const newDataPoint: DataPoint = {
      id: Date.now().toString(),
      timestamp: new Date(),
      value: Math.floor(Math.random() * 100),
    };

    setData((prev) => [...prev.slice(-9), newDataPoint]); // Garder les 10 derniers
    setLastUpdate(new Date());
  };

  useInterval(
    () => {
      fetchData();
    },
    isPolling ? pollInterval : null
  );

  const handleStart = () => {
    setIsPolling(true);
    fetchData(); // Fetch immédiatement
  };

  const handleStop = () => {
    setIsPolling(false);
  };

  const handleClear = () => {
    setData([]);
    setLastUpdate(null);
  };

  const average = data.length > 0
    ? (data.reduce((sum, d) => sum + d.value, 0) / data.length).toFixed(1)
    : 0;

  const max = data.length > 0 ? Math.max(...data.map((d) => d.value)) : 0;
  const min = data.length > 0 ? Math.min(...data.map((d) => d.value)) : 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Live Data Polling
      </h3>

      <div className="space-y-6">
        {/* Last Update */}
        <div className="flex items-center justify-between p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
            Dernière mise à jour :
          </span>
          <span className="text-sm text-blue-600 dark:text-blue-300 font-mono">
            {lastUpdate ? lastUpdate.toLocaleTimeString('fr-FR') : 'Aucune'}
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg text-center">
            <div className="text-xs text-green-700 dark:text-green-400 mb-1">
              Moyenne
            </div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-300">
              {average}
            </div>
          </div>
          <div className="p-4 bg-orange-100 dark:bg-orange-900/20 rounded-lg text-center">
            <div className="text-xs text-orange-700 dark:text-orange-400 mb-1">
              Max
            </div>
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-300">
              {max}
            </div>
          </div>
          <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg text-center">
            <div className="text-xs text-purple-700 dark:text-purple-400 mb-1">
              Min
            </div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-300">
              {min}
            </div>
          </div>
        </div>

        {/* Data Visualization */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <div className="h-32 flex items-end justify-around gap-1">
            {data.length > 0 ? (
              data.map((point) => (
                <div
                  key={point.id}
                  className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t transition-all duration-300 hover:from-blue-600 hover:to-purple-600"
                  style={{ height: `${point.value}%` }}
                  title={`Valeur: ${point.value}`}
                />
              ))
            ) : (
              <div className="flex-1 text-center text-gray-400 dark:text-gray-500">
                Aucune donnée
              </div>
            )}
          </div>
        </div>

        {/* Data List */}
        {data.length > 0 && (
          <div className="max-h-48 overflow-y-auto space-y-2">
            {data.slice().reverse().map((point) => (
              <div
                key={point.id}
                className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex items-center justify-between"
              >
                <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                  {point.timestamp.toLocaleTimeString('fr-FR')}
                </span>
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {point.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Poll Interval Control */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Intervalle de polling : {pollInterval / 1000}s
          </label>
          <input
            type="range"
            min="1000"
            max="5000"
            step="1000"
            value={pollInterval}
            onChange={(e) => setPollInterval(parseInt(e.target.value))}
            disabled={isPolling}
            className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {/* Controls */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={handleStart}
            disabled={isPolling}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ▶ Start
          </button>
          <button
            onClick={handleStop}
            disabled={!isPolling}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ⏸ Stop
          </button>
          <button
            onClick={handleClear}
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
          >
            🗑 Clear
          </button>
        </div>

        {/* Status */}
        <div className={`p-4 rounded-lg ${
          isPolling
            ? 'bg-green-100 dark:bg-green-900/20'
            : 'bg-gray-100 dark:bg-gray-700/20'
        }`}>
          <div className="flex items-center justify-between">
            <span className={`font-semibold ${
              isPolling
                ? 'text-green-700 dark:text-green-400'
                : 'text-gray-700 dark:text-gray-400'
            }`}>
              Polling :
            </span>
            <span className={`px-4 py-2 rounded-full font-bold ${
              isPolling
                ? 'bg-green-500 text-white animate-pulse'
                : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
            }`}>
              {isPolling ? 'Actif' : 'Inactif'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};