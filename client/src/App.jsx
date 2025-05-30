import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [teamsRes, matchesRes] = await Promise.all([
          fetch("http://localhost:5000/api/teams"),
          fetch("http://localhost:5000/api/epl-matches"),
        ]);

        if (!teamsRes.ok) throw new Error("Failed to fetch teams");
        if (!matchesRes.ok) throw new Error("Failed to fetch matches");

        const teamsData = await teamsRes.json();
        const matchesData = await matchesRes.json();

        setTeams(teamsData.data);
        setMatches(matchesData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const getTeamName = (id) => {
    const team = teams.find((t) => t.id === id);
    return team ? team.name : "Unknown Team";
  };

  if (loading)
    return <div className="loading">Loading matches and teams...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="app-container">
      <h1>EPL Matches</h1>
      <ul className="list-unstyled">
        {matches.map((match) => (
          <li key={match.id} className="match-item">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg"
                alt="Premier League"
                className="league-logo"
              />
              <div className="team-names">
                {getTeamName(match.home_team_id)}{" "}
                <span className="text">vs</span>{" "}
                {getTeamName(match.away_team_id)}
              </div>
              <div className="kickoff-time">
                {new Date(match.kickoff).toLocaleString()}
              </div>
            </div>
            <div className="score">
              {match.home_score !== null && match.away_score !== null
                ? `${match.home_score} - ${match.away_score}`
                : "vs"}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
