
"use client";
// import { useState } from "react";
import "./globals.css";
import SearchBar from "./components/search";
import JobbLista from "./components/jobbLista";
import FilterComponent from "./components/FilterSelektor"

function App() {
  // const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  return (
    <main>
      <h1>Lediga Jobb</h1>
      <SearchBar  />
      <FilterComponent/>
      <JobbLista  />
    </main>
  );
}

export default App;
