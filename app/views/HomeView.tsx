export default function HomeView() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">Spin Down</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950">Build the leaderboard experience</h1>
      <p className="mt-4 text-lg text-slate-600">
        React and Tailwind CSS are ready. Start with{" "}
        <a className="font-semibold text-sky-700 underline" href="/api/leaderboards">
          GET /api/leaderboards
        </a>
        .
      </p>
    </main>
  );
}
