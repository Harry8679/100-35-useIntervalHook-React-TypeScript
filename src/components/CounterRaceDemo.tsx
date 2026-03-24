import { useState } from 'react';
import { useInterval } from '../hooks';
import type { Racer } from '../types';

export const CounterRaceDemo = () => {
  const [racers, setRacers] = useState<Racer[]>([
    { id: '1', name: 'Flash', position: 0, speed: 150, color: 'bg-red-500' },
    { id: '2', name: 'Sonic', position: 0, speed: 120, color: 'bg-blue-500' },
    { id: '3', name: 'Mario', position: 0, speed: 100, color: 'bg-green-500' },
  ]);
  const [isRacing, setIsRacing] = useState(false);
  const [winner, setWinner] = useState<Racer | null>(null);

  useInterval(
    () => {
      setRacers((currentRacers) => {
        const updated = currentRacers.map((racer) => ({
          ...racer,
          position: Math.min(racer.position + 1, 100),
        }));

        // Vérifier s'il y a un gagnant
        const finisher = updated.find((r) => r.position >= 100);
        if (finisher && !winner) {
          setWinner(finisher);
          setIsRacing(false);
        }

        return updated;
      });
    },
    isRacing ? 50 : null
  );

  const handleStart = () => {
    setIsRacing(true);
    setWinner(null);
  };

  const handleReset = () => {
    setRacers((racers) =>
      racers.map((racer) => ({
        ...racer,
        position: 0,
      }))
    );
    setIsRacing(false);
    setWinner(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Course de Compteurs
      </h3>

      <div className="space-y-6">
        {/* Race Track */}
        <div className="space-y-4">
          {racers.map((racer) => (
            <div key={racer.id}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-800 dark:text-white">
                  {racer.name}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {Math.round(racer.position)}%
                </span>
              </div>
              <div className="relative h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`absolute h-full ${racer.color} transition-all duration-100 flex items-center justify-end pr-2`}
                  style={{ width: `${racer.position}%` }}
                >
                  {racer.position > 10 && (
                    <span className="text-2xl">🏃‍♂️</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Winner Announcement */}
        {winner && (
          <div className="p-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl text-center animate-scale-in">
            <div className="text-5xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-white mb-2">
              {winner.name} a gagné !
            </div>
            <div className="text-white/90">
              Félicitations ! 🎉
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleStart}
            disabled={isRacing || winner !== null}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            🚀 Démarrer la course
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
          >
            ⏹ Reset
          </button>
        </div>

        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-400">
            💡 Chaque coureur a une vitesse différente. Qui gagnera ?
          </p>
        </div>
      </div>
    </div>
  );
};