"use client";

import { useState, useEffect } from "react";
import JobbLista, { Job } from "../components/jobbLista";
import SearchBar from "../components/search";

export default function JobsPage() {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("/jobs.json");
      const data: Job[] = await response.json();
      setFilteredJobs(data);
    };
    fetchJobs();
  }, []);

  return (
    <div className="page">
      <h1>Lediga Jobb</h1>
      <SearchBar onJobsFiltered={setFilteredJobs} />
      <JobbLista jobs={filteredJobs} />
    </div>
  );
}