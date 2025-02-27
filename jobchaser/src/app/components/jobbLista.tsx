"use client";
import { useSelector } from "react-redux";
import { RootState } from "./../redux/store";
import { useGetjobsQuery } from "./../redux/services/jobsAPI";
import Image from "next/image";

export type Job = {
  id: number;
  company: string;
  logo: string;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export default function JobbLista() {
  const { data: jobs, isLoading, error } = useGetjobsQuery(undefined);
  const category = useSelector((state: RootState) => state.filter.category);
  const searchTerm = useSelector((state: RootState) => state.filter.searchTerm);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Fel vid hämtning av jobb: {JSON.stringify(error)}</div>;

  // 🔥 Filtrera jobben baserat på kategori och sökning
  const filteredJobs = jobs?.filter((job:Job) =>
    (!category || job.role === category) &&
    job.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job:Job) => (
          <li key={job.id} className="job-card">
            <Image width="60" height="60" src={job.logo} alt={job.company} className="job-logo" />
            <h2><strong>{job.position}</strong></h2>
            <div className="job-info">
              <p><strong>Företag:</strong> {job.company}</p>
              <p><strong>Roll:</strong> {job.role}</p>
              <p><strong>Nivå:</strong> {job.level}</p>
              <p><strong>Publicerad:</strong> {job.postedAt}</p>
              <p><strong>Kontrakt:</strong> {job.contract}</p>
              <p><strong>Plats:</strong> {job.location}</p>
              <p><strong>Språk:</strong> {job.languages.join(", ")}</p>
              <p><strong>Verktyg:</strong> {job.tools.length > 0 ? job.tools.join(", ") : "Inga verktyg"}</p>
            </div>
          </li>
        ))
      ) : (
        <p>Inga jobb hittades</p>
      )}
    </ul>
  );
}

