const mockGames = [
  {
    awayTeam: "Boston Celtics",
    homeTeam: "New York Knicks",
    spread: "Celtics -4.5",
    moneyline: "BOS -180 / NYK +150",
    overUnder: "221.5",
    sportsbookBaseline: "Market favors Celtics by multiple possessions",
    prediction: "Celtics cover",
    confidence: "64%",
    resultStatus: "Pending"
  },
  {
    awayTeam: "Phoenix Suns",
    homeTeam: "Denver Nuggets",
    spread: "Nuggets -2.5",
    moneyline: "PHX +115 / DEN -135",
    overUnder: "228.0",
    sportsbookBaseline: "Sportsbook expects a close high-scoring game",
    prediction: "Nuggets win",
    confidence: "59%",
    resultStatus: "Covered"
  },
  {
    awayTeam: "Miami Heat",
    homeTeam: "Milwaukee Bucks",
    spread: "Bucks -3.0",
    moneyline: "MIA +125 / MIL -145",
    overUnder: "216.5",
    sportsbookBaseline: "Market slightly favors Bucks at home",
    prediction: "Under 216.5",
    confidence: "61%",
    resultStatus: "Did not cover"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Masters-Thesis-final
          </p>
          <h1 className="mt-2 text-3xl font-bold">
            NBA Betting Research Dashboard
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            A small prototype for comparing future machine learning predictions
            against sportsbook betting lines.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {mockGames.map((game) => (
            <article
              key={`${game.awayTeam}-${game.homeTeam}`}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-slate-500">Mock NBA Game</p>
              <h2 className="mt-2 text-xl font-semibold">
                {game.awayTeam} at {game.homeTeam}
              </h2>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-slate-500">Away team</span>
                  <span className="font-medium">{game.awayTeam}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-500">Home team</span>
                  <span className="font-medium">{game.homeTeam}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-500">Spread</span>
                  <span className="font-medium">{game.spread}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-500">Moneyline</span>
                  <span className="font-medium">{game.moneyline}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-500">Over/under</span>
                  <span className="font-medium">{game.overUnder}</span>
                </div>
              </div>

              <div className="mt-5 rounded-md bg-slate-100 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Sportsbook Baseline
                </p>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  {game.sportsbookBaseline}
                </p>
              </div>

              <div className="mt-4 rounded-md bg-slate-100 p-4">
                <p className="text-sm text-slate-500">Mock model prediction</p>
                <p className="mt-1 font-semibold">{game.prediction}</p>
                <p className="mt-2 text-sm text-slate-600">
                  Confidence: {game.confidence}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Result Status
                </p>
                <p className="mt-1 text-sm font-medium">{game.resultStatus}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}