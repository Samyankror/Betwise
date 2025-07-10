import { FaBolt, FaClock } from 'react-icons/fa';

const LiveMatchPanel = () => {
  const featuredMatch = { teams: 'India vs England', status: 'LIVE • 7th Over', score: 'India: 56/2', odds: '1.6x', prediction: 'India 70%', startTime: '18:30 IST',
  };

  return (
  <div
  className="cursor-pointer hover:scale-[1.01] transition-transform duration-300 bg-gradient-to-r from-slate-700 to-slate-900 text-white py-4 px-6 shadow-lg flex justify-between items-center"
  onClick={() => alert('Opening full match page...')}
>


      <div>
        <h2 className="text-lg font-bold text-yellow-400 animate-pulse">{featuredMatch.status}</h2>
        <p className="text-xl font-semibold">{featuredMatch.teams}</p>
        <p className="text-sm text-gray-200">{featuredMatch.score}</p>
      </div>

      <div className="text-sm text-right">
        <p>Odds: <span className="text-green-400 font-semibold">{featuredMatch.odds}</span></p>
        <p>Prediction: <span className="text-yellow-400">{featuredMatch.prediction}</span></p>
        <p className="flex items-center justify-end text-gray-300"><FaClock className="mr-1" /> Start: {featuredMatch.startTime}</p>
        <button
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-lg text-sm flex items-center gap-1"
          onClick={() => alert('Redirecting to bet...')}
        >
          <FaBolt /> Bet Now
        </button>
      </div>
    </div>
  );
};

export default LiveMatchPanel;
