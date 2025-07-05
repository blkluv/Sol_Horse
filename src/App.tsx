import React from 'react';
import { motion } from 'framer-motion';

// Type definitions
interface HorseNFT {
  id: string;
  name: string;
  // add more fields as needed
}

interface Player {
  username: string;
  stats: {
    totalEarnings: number;
    reputation: number;
    wins: number;
  };
  assets: {
    turfBalance: number;
  };
}

interface Race {
  id: string;
  name: string;
  // add more fields as needed
}

const StableView: React.FC<{ horses: HorseNFT[]; player: Player }> = ({ horses, player }) => {
  const { currentView } = useGameStore(); // Assuming this is valid in your project

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome back, {player?.username}! 🏇
            </h1>
          </div>

          <motion.p
            className="text-2xl font-bold text-gray-800"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            {(player.stats.totalEarnings / 1000).toFixed(1)}K
          </motion.p>

          <div className="text-center">
            <motion.p
              className="text-2xl font-bold text-green-600"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {player.assets.turfBalance.toLocaleString()} $TURF
            </motion.p>
            <p className="text-sm text-gray-600">Available Balance</p>
          </div>
        </div>
      </div>

      {/* Add more stable content below */}
    </div>
  );
};

const RacingView: React.FC<{ races: Race[]; horses: HorseNFT[]; player: Player }> = ({
  races,
  horses,
  player,
}) => {
  return (
    <div className="space-y-8">
      {/* Example Racing Stats */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-around text-center">
          <div>
            <p className="text-sm text-gray-600">🏅 Reputation</p>
            <motion.p
              className="text-2xl font-bold text-gray-800"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              {player.stats.reputation}
            </motion.p>
          </div>

          <div>
            <p className="text-sm text-gray-600">🥇 Wins</p>
            <motion.p
              className="text-2xl font-bold text-gray-800"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {player.stats.wins}
            </motion.p>
          </div>

          <div>
            <p className="text-sm text-gray-600">🐴 Horses</p>
            <motion.p
              className="text-2xl font-bold text-gray-800"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              {horses.length}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Add race list or leaderboard, etc. */}
    </div>
  );
};

export { StableView, RacingView };
