import { FaBolt, FaTrophy } from 'react-icons/fa';

const MatchCard = ({ match }) => {
  return (
    <div
      className="bg-gray-900 rounded-2xl p-5 flex flex-col gap-3 shadow-md hover:shadow-xl hover:bg-gray-800 transition-all duration-200 border border-gray-700"
      whileHover={{ scale: 1.03 }}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-blue-400">{match.teams}</h3>
        <span className="text-sm text-gray-400">{match.tournament}</span>
      </div>

      {/* Status */}
      <p className="text-sm text-gray-300">Status: {match.status}</p>

      {/* Score */}
      <div className="flex justify-between text-sm font-medium text-white">
        <span>{match.scoreA}</span>
        <span>{match.scoreB}</span>
      </div>

      {/* Odds and Prediction */}
      <div className="mt-1 bg-gray-800 p-2 rounded-lg text-sm">
        <div className="flex justify-between text-gray-300 mb-1">
          <span>Odds</span>
          <span className="text-green-400 font-semibold">{match.odds || '1.8x'}</span>
        </div>
        <div className="w-full bg-gray-700 rounded h-2 overflow-hidden">
          <div
            className="bg-yellow-400 h-2 transition-all duration-300"
            style={{ width: match.predictionPercent || '60%' }}
          ></div>
        </div>
        <p className="text-xs text-gray-400 mt-1">Prediction: {match.prediction || 'Team A favored'}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-3">
        <button
          className="flex-1 flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-lg"
          onClick={() => alert(`Bet placed on ${match.teams.split('vs')[0].trim()}`)}
        >
          <FaBolt /> Bet on {match.teams.split('vs')[0].trim()}
        </button>
        <button
          className="flex-1 flex items-center justify-center gap-1 bg-red-600 hover:bg-red-700 text-white text-sm py-2 rounded-lg"
          onClick={() => alert(`Bet placed on ${match.teams.split('vs')[1].trim()}`)}
        >
          <FaTrophy /> Bet on {match.teams.split('vs')[1].trim()}
        </button>
      </div>
    </div>
  );
};

export default MatchCard;
