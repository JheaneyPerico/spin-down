import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLeaderboards } from "../api";

interface Leaderboard {
  id: string;
  slug: string;
  title: string;
  description: string;
  formats: string[];
}

export default function HomeView() {
  const [leaderboards, setLeaderboards] = useState<Leaderboard[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadLeaderboards() {
    try {
      setLoading(true);

      const data = await getLeaderboards(search);

      setLeaderboards(data);
    } catch (error) {
      console.error("Failed to load leaderboards:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadLeaderboards();
  }, []);

  return (
    <main className="mx-auto min-h-screen max-w-6xl p-6">
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-bold text-[#4da6ff]">
          Spin Down Leaderboards
        </h1>

      </div>

      {/* Search */}
      <div className="mb-8 flex gap-3">
        <input
          type="text"
          className="flex-1 rounded-md border-2 border-[#24558a] bg-[#10243e] p-3 text-white placeholder:text-[#9bb0c9] focus:border-[#4da6ff] focus:outline-none"
          placeholder="Search leaderboards..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              loadLeaderboards();
            }
          }}
        />

        <button
          type="button"
          className="rounded-md bg-[#ff8c00] px-5 py-3 font-medium text-white transition hover:bg-[#e67600]"
          onClick={loadLeaderboards}
        >
          Search
        </button>
      </div>

      {/* Loading state */}
      {loading ? (
        <div className="py-10 text-center text-gray-400">
          Loading leaderboards...
        </div>
      ) : leaderboards.length === 0 ? (
        <div className="rounded-lg bg-[#132a4a] p-8 text-center">
          <p className="text-gray-300">
            No leaderboards found.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {leaderboards.map((board) => (
            <Link
              key={board.id}
              to={`/leaderboards/${board.slug}`}
              className="group flex flex-col rounded-xl border border-[#24558a] bg-[#132a4a] p-5 shadow transition hover:border-[#4da6ff] hover:shadow-lg"
            >
              {/* Title */}
              <h2 className="mb-3 text-xl font-bold text-white transition group-hover:text-[#4da6ff]">
                {board.title}
              </h2>

              {/* Description */}
              <p className="text-[#d1dbea]">
                {board.description}
              </p>

              {/* Formats */}
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {board.formats.map((format) => (
                  <span
                    key={format}
                    className="rounded-md border border-blue-700 bg-blue-900 px-2 py-1 text-sm text-blue-200"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
