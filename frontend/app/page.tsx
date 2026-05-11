const games = [
  {
    id: 1,
    matchup: "Boston Celtics vs New York Knicks",
    spread: "Celtics -4.5",
    moneyline: "BOS -180 / NYK +150",
    total: "O/U 221.5",
    baseline: "Market favors Celtics by multiple possessions",
    resultStatus: "Pending",
  },
  {
    id: 2,
    matchup: "Denver Nuggets vs Phoenix Suns",
    spread: "Nuggets -2.5",
    moneyline: "DEN -135 / PHX +115",
    total: "O/U 228.0",
    baseline: "Sportsbook expects a close high-scoring game",
    resultStatus: "Pending",
  },
  {
    id: 3,
    matchup: "Milwaukee Bucks vs Miami Heat",
    spread: "Bucks -3.0",
    moneyline: "MIL -145 / MIA +125",
    total: "O/U 216.5",
    baseline: "Market slightly favors Bucks",
    resultStatus: "Pending",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <p className="text-sm font-bold uppercase text-slate-500">
        Masters-Thesis-Final
      </p>

      <h1 className="mt-2 text-5xl font-bold">
        NBA Betting Research Dashboard
      </h1>

      <p className="mt-4 max-w-3xl text-lg">
        A minimal mock dashboard for comparing future machine learning
        predictions against sportsbook lines.
      </p>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {games.map((game) => (
          <div
            key={game.id}
            className="rounded-lg border border-slate-300 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-semibold text-slate-500">
              Mock Game {game.id}
            </p>

            <h2 className="mt-3 text-2xl font-bold">{game.matchup}</h2>

            <div className="mt-8 space-y-4">
              <div>
                <p className="text-sm font-bold uppercase text-slate-500">
                  Spread
                </p>
                <p className="font-bold">{game.spread}</p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase text-slate-500">
                  Moneyline
                </p>
                <p className="font-bold">{game.moneyline}</p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase text-slate-500">
                  Total
                </p>
                <p className="font-bold">{game.total}</p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase text-slate-500">
                  Sportsbook Baseline
                </p>
                <p className="font-medium">{game.baseline}</p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase text-slate-500">
                  Result Status
                </p>
                <p className="font-medium">{game.resultStatus}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}