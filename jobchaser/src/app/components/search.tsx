
import { useState, useEffect } from "react";
import { Job } from "./jobbLista";

type SearchBarProps = {
  onJobsFiltered: (jobs: Job[]) => void;
};

export default function SearchBar({ onJobsFiltered }: SearchBarProps) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/jobs.json");
        if (!response.ok) throw new Error("Kunde inte hämta jobbdata.");
        const data: Job[] = await response.json();
        if (!Array.isArray(data)) throw new Error("Felaktigt format på jobbdata.");
        setJobs(data);
        onJobsFiltered(data); // Skicka jobben till App.tsx
      } catch (err) {
        setError("Något gick fel vid hämtning av jobb.");
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    const filteredJobs = searchTerm.trim()
      ? jobs.filter((job) =>
          job.position.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : jobs;
    onJobsFiltered(filteredJobs); // Skicka filtrerade jobb till App.tsx
  }, [searchTerm, jobs]);

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Sök jobb efter position..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src="/images/search.svg" alt="sök" className="search-icon" />
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
