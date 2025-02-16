
"use client";
import { useState } from "react";
import "./globals.css";
import SearchBar from "./components/search";
import JobbLista, { Job } from "./components/jobbLista";

function App() {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  return (
    <main>
      <h1>Lediga Jobb</h1>
      <SearchBar onJobsFiltered={setFilteredJobs} />
      <JobbLista jobs={filteredJobs} />
    </main>
  );
}

export default App;
