import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  const request = await fetch(
    `https://api.github.com/repos/botirjonkadirov/${name}`
  );
  const repo = await request.json();
  return repo;
}

async function Repo({ name }) {
  const repo = await fetchRepo(name);
  return (
    <div className="card" key={repo.id}>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <div className="repo-details">
        <span>
          <FaStar />
        </span>
        <span>
          <FaCodeBranch />
        </span>
        <span>
          <FaEye />
        </span>
      </div>
    </div>
  );
}

export default Repo;
