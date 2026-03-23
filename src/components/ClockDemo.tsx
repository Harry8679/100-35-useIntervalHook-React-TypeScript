import { useState } from 'react';
import { useInterval } from '../hooks';

export const ClockDemo = () => {
  const [time, setTime] = useState(new Date());

  useInterval(() => {
    setTime(new Date());
  }, 1000);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const day = time.toLocaleDateString('fr-FR', { weekday: 'long' });
  const date = time.toLocaleDateString('fr-FR', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Horloge en Temps Réel
      </h3>

      <div className="space-y-6">
        {/* Digital Clock */}
        <div className="p-12 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="px-6 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="text-6xl font-bold text-purple-600 dark:text-purple-400">
                {hours}
              </div>
            </div>
            <div className="text-6xl font-bold text-purple-600 dark:text-purple-400 animate-pulse">
              :
            </div>
            <div className="px-6 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="text-6xl font-bold text-purple-600 dark:text-purple-400">
                {minutes}
              </div>
            </div>
            <div className="text-6xl font-bold text-purple-600 dark:text-purple-400 animate-pulse">
              :
            </div>
            <div className="px-6 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="text-6xl font-bold text-purple-600 dark:text-purple-400">
                {seconds}
              </div>
            </div>
          </div>

          <div className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize">
            {day}
          </div>
          <div className="text-lg text-gray-600 dark:text-gray-400 capitalize">
            {date}
          </div>
        </div>

        {/* Analog Clock Visual */}
        <div className="p-8 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                Heures
              </div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {hours}
              </div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                Minutes
              </div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {minutes}
              </div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                Secondes
              </div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {seconds}
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
          <p className="text-sm text-purple-700 dark:text-purple-400">
            ⏰ Horloge mise à jour chaque seconde automatiquement.
          </p>
        </div>
      </div>
    </div>
  );
};