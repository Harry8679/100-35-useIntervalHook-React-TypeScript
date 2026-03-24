import { BasicIntervalDemo } from './BasicIntervalDemo';
import { ClockDemo } from './ClockDemo';
import { StopwatchDemo } from './StopwatchDemo';
import { ProgressBarDemo } from './ProgressBarDemo';
import { PollingDemo } from './PollingDemo';
import { CounterRaceDemo } from './CounterRaceDemo';

export const IntervalDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            🔁 useInterval Hook
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
            Projet 35/100 • Interval Management
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Gestion des intervalles répétés avec nettoyage automatique
          </p>
        </div>

        {/* Demos */}
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <BasicIntervalDemo />
            <ClockDemo />
          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <StopwatchDemo />
            <ProgressBarDemo />
          </div>

          {/* Row 3 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <PollingDemo />
            <AnimationDemo />
          </div>

          {/* Row 4 */}
          <CounterRaceDemo />

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              ✨ Fonctionnalités
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Répétitif</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Exécution répétée
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Auto-Cleanup</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Nettoyage automatique
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Dynamic Delay</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Délais dynamiques
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Start/Stop</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Contrôle total
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Clock</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Horloge temps réel
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Stopwatch</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Chronomètre précis
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Polling</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Récupération de données
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Type-Safe</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    100% TypeScript
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              💻 Exemples d'utilisation
            </h2>

            <div className="space-y-6">
              {/* Basic Usage */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Utilisation basique :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`import { useInterval } from './hooks';
import { AnimationDemo } from '../../../33-use-previous-hook/src/components/AnimationDemo';

const [count, setCount] = useState(0);

const { clear } = useInterval(
  () => {
    setCount((c) => c + 1);
  },
  1000  // Incrémente toutes les secondes
);

// L'intervalle s'exécute automatiquement
// Il se nettoie automatiquement au démontage`}
                </pre>
              </div>

              {/* Conditional Interval */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Intervalle conditionnel :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [isRunning, setIsRunning] = useState(false);

const { clear } = useInterval(
  () => {
    console.log('Tick !');
  },
  isRunning ? 1000 : null  // null arrête l'intervalle
);

// Démarrer
const start = () => setIsRunning(true);

// Arrêter
const stop = () => {
  setIsRunning(false);
  clear();
};`}
                </pre>
              </div>

              {/* Clock */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Horloge :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [time, setTime] = useState(new Date());

useInterval(
  () => {
    setTime(new Date());
  },
  1000
);

return (
  <div>
    {time.toLocaleTimeString('fr-FR')}
  </div>
);`}
                </pre>
              </div>

              {/* Stopwatch */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Chronomètre :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [milliseconds, setMilliseconds] = useState(0);
const [isRunning, setIsRunning] = useState(false);

const { clear } = useInterval(
  () => {
    setMilliseconds((ms) => ms + 10);
  },
  isRunning ? 10 : null
);

const formatTime = (ms: number) => {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const centiseconds = Math.floor((ms % 1000) / 10);
  
  return \`\${minutes}:\${remainingSeconds.toString().padStart(2, '0')}.\${centiseconds.toString().padStart(2, '0')}\`;
};`}
                </pre>
              </div>

              {/* Progress Bar */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Barre de progression :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [progress, setProgress] = useState(0);
const [isRunning, setIsRunning] = useState(false);

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
  isRunning ? 100 : null
);

return (
  <div className="progress-bar">
    <div style={{ width: \`\${progress}%\` }} />
  </div>
);`}
                </pre>
              </div>

              {/* Data Polling */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Polling de données :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [data, setData] = useState([]);
const [isPolling, setIsPolling] = useState(false);

const fetchData = async () => {
  const response = await fetch('/api/data');
  const newData = await response.json();
  setData(newData);
};

useInterval(
  () => {
    fetchData();
  },
  isPolling ? 5000 : null  // Poll toutes les 5 secondes
);

// Démarrer le polling
const startPolling = () => {
  setIsPolling(true);
  fetchData();  // Fetch immédiatement
};`}
                </pre>
              </div>

              {/* Animation */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Animation continue :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [position, setPosition] = useState(0);
const [direction, setDirection] = useState(1);
const [isAnimating, setIsAnimating] = useState(false);

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
  isAnimating ? 50 : null
);`}
                </pre>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">🎯 Cas d'usage courants</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>⏰</span> Temps réel
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Horloges digitales</li>
                  <li>• Chronomètres</li>
                  <li>• Timers de compte à rebours</li>
                  <li>• Affichage de l'heure</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>📊</span> Data Polling
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Récupération périodique de données</li>
                  <li>• Mise à jour de dashboards</li>
                  <li>• Monitoring en temps réel</li>
                  <li>• Live updates</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>🎨</span> Animations
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Animations continues</li>
                  <li>• Transitions automatiques</li>
                  <li>• Effets visuels répétitifs</li>
                  <li>• Carrousels automatiques</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>📈</span> Progress
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Barres de progression</li>
                  <li>• Loading indicators</li>
                  <li>• Simulation de processus</li>
                  <li>• Taux de complétion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};