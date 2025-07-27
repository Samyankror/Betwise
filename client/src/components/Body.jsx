import { FaChartLine, FaSearch, FaTrophy } from 'react-icons/fa';

import MatchCard from './MatchCard';

const liveMatches = [
  {id: 1, teams: 'India vs Australia', tournament: 'T20 World Cup', status: '3rd Over', scoreA: 'India: 24/1', scoreB: 'Australia: Yet to bat', odds: '1.7x', prediction: 'India 65%', predictionPercent: '65%',
 },
 {id: 2, teams: 'India vs Australia', tournament: 'T20 World Cup', status: '3rd Over', scoreA: 'India: 24/1', scoreB: 'Australia: Yet to bat', odds: '1.7x', prediction: 'India 65%', predictionPercent: '65%',
 },
  {id: 3, teams: 'India vs Australia', tournament: 'T20 World Cup', status: '3rd Over', scoreA: 'India: 24/1', scoreB: 'Australia: Yet to bat', odds: '1.7x', prediction: 'India 65%', predictionPercent: '65%',
 },
  {id: 4, teams: 'India vs Australia', tournament: 'T20 World Cup', status: '3rd Over', scoreA: 'India: 24/1', scoreB: 'Australia: Yet to bat', odds: '1.7x', prediction: 'India 65%', predictionPercent: '65%',
 },
];

const Body = () => {
  return (
    
    <main className="flex flex-col gap-8 items-center py-10 px-4 md:px-12 bg-slate-800 text-white">

    {/* Welcome banner */}
    <section className="w-full text-center">
        <h1 className="text-4xl font-bold text-blue-300 mb-2">Welcome to BetWise</h1>
        <p className="text-gray-300">Track, bet, and win on live cricket matches.</p>
    </section>

      {/* Search bar */}
    <div className="w-full max-w-xl flex items-center bg-gray-700 rounded-lg px-4 py-2 shadow">
        <FaSearch className="text-gray-400 mr-2" />
        <input
            type="text"
            placeholder="Search matches, teams..."
            className="w-full bg-transparent outline-none text-white placeholder-gray-400"
        />
    </div>

    {/* Stats section */}
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="bg-gray-900 p-6 rounded-xl shadow flex flex-col items-center">
            <FaTrophy className="text-yellow-400 text-3xl mb-2" />
            <h3 className="text-xl font-bold">Total Wins</h3>
            <p className="text-blue-400 text-lg">34</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow flex flex-col items-center">
            <FaChartLine className="text-green-400 text-3xl mb-2" />
            <h3 className="text-xl font-bold">Active Bets</h3>
            <p className="text-blue-400 text-lg">5</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow flex flex-col items-center">
            <FaTrophy className="text-red-400 text-3xl mb-2 rotate-45" />
            <h3 className="text-xl font-bold">Matches Today</h3>
            <p className="text-blue-400 text-lg">12</p>
        </div>
    </section>

    {/* Live Matches Section */}
    <section className="w-full max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4 text-left">Live Matches</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {liveMatches.map(match => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>


    </main>
);
};

export default Body;
