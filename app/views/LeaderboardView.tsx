import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLeaderboard } from "../api";

interface Ranking {
  rank: number;
  playerName: string;
  currentElo: number;
}

interface Leaderboard {
  slug: string;
  title: string;
  description: string;
  league: string;
  scoring: string;
  isOfficial: boolean;
  isFeatured: boolean;
  bannerImageUrl?: string;
  formats: string[];
  rankings: Ranking[];
}

export default function LeaderboardView() {
  const { slug } = useParams<{ slug: string }>();

  const [board, setBoard] = useState<Leaderboard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadLeaderboard() {
      if (!slug) {
        setError("Leaderboard not found.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const data = await getLeaderboard(slug);

        setBoard(data);
      } catch (error) {
        console.error("Failed to load leaderboard:", error);
        setError("Failed to load leaderboard.");
      } finally {
        setLoading(false);
      }
    }

    loadLeaderboard();
  }, [slug]);

  if (loading) {
    return (
      <main className="mx-auto min-h-screen max-w-6xl p-6 text-white">
        <div className="py-10 text-center text-gray-400">
          Loading leaderboard...
        </div>
      </main>
    );
  }

  if (error || !board) {
    return (
      <main className="mx-auto min-h-screen max-w-6xl p-6 text-white">
        <div className="rounded-lg bg-[#132a4a] p-8 text-center">
          <h1 className="mb-2 text-2xl font-bold">
            Leaderboard unavailable
          </h1>

          <p className="text-gray-400">
            {error ?? "The requested leaderboard could not be found."}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-6xl p-6 text-white">
      {/* Banner */}
      {board.bannerImageUrl && (
        <div className="mb-6 overflow-hidden rounded-lg">
          <img
            src={board.bannerImageUrl}
            alt={board.title}
            className="h-56 w-full object-cover"
          />
        </div>
      )}

      {/* Description */}
      <section className="mb-6 rounded-lg bg-[#132a4a] p-5">
        <h2 className="mb-3 text-xl font-bold">
          Description
        </h2>

        <p className="text-gray-300">
          {board.description}
        </p>
      </section>

      {/* Information */}
      <section className="mb-6 rounded-lg bg-[#132a4a] p-5">
        <h2 className="mb-4 text-xl font-bold">
          Information
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <span className="font-semibold">
              League:
            </span>{" "}
            <span className="text-gray-300">
              {board.league}
            </span>
          </div>

          <div>
            <span className="font-semibold">
              Scoring:
            </span>{" "}
            <span className="text-gray-300">
              {board.scoring}
            </span>
          </div>

          <div>
            <span className="font-semibold">
              Official:
            </span>{" "}
            <span className="text-gray-300">
              {board.isOfficial ? "Yes" : "No"}
            </span>
          </div>

          <div>
            <span className="font-semibold">
              Featured:
            </span>{" "}
            <span className="text-gray-300">
              {board.isFeatured ? "Yes" : "No"}
            </span>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="mb-6 rounded-lg bg-[#132a4a] p-5">
        <h2 className="mb-4 text-xl font-bold">
          Formats
        </h2>

        <div className="flex flex-wrap gap-2">
          {board.formats.map((format) => (
            <span
              key={format}
              className="rounded-full border border-[#24558a] bg-[#10243e] px-4 py-2 text-sm text-gray-200"
            >
              {format}
            </span>
          ))}
        </div>
      </section>

      {/* Rankings */}
      <section className="rounded-lg bg-[#132a4a] p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">
            Rankings
          </h2>

          <span className="text-sm text-gray-400">
            {board.rankings.length}{" "}
            {board.rankings.length === 1
              ? "Player"
              : "Players"}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#08182d]">
                <th className="border border-[#24558a] p-4 text-center">
                  Rank
                </th>

                <th className="border border-[#24558a] p-4 text-center">
                  Player
                </th>

                <th className="border border-[#24558a] p-4 text-center">
                  Rating
                </th>
              </tr>
            </thead>

            <tbody>
              {board.rankings.map((player) => (
                <tr
                  key={`${player.rank}-${player.playerName}`}
                  className="transition hover:bg-[#173458]"
                >
                  <td className="border border-[#24558a] p-4 text-center font-bold">
                    {player.rank}
                  </td>

                  <td className="border border-[#24558a] p-4 text-center font-medium">
                    {player.playerName}
                  </td>

                  <td className="border border-[#24558a] p-4 text-center font-bold text-[#4da6ff]">
                    {player.currentElo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}