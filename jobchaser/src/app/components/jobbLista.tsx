
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

type JobbListaProps = {
  jobs: Job[];
};

export default function JobbLista({ jobs }: JobbListaProps) {
  // if (!Array.isArray(jobs)) {
  //   return <p className="error">Fel: Jobbdata är inte i rätt format.</p>;
  // }

  return (
    <ul>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <li key={job.id} className="job-card">
            <img src={job.logo} alt={job.company} className="job-logo" />
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