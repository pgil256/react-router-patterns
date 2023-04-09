import { useParams, Redirect } from "react-router-dom";
import "./Dog.css";

const Dog = ({ dogs }) => {
  const { name } = useParams();

  const dog = dogs.find((d) => d.name === name);
  if (!dog) {
    return <Redirect to="/dogs" />;
  }
  return (
    <div className="Dog">
      <h1 className="Dog-name">{dog.name}</h1>
      <img className="Dog-img" src={dog.src} alt={dog.name} />
      <p className="Dog-age">{`${dog.age} years old`}</p>
      <ul>
        {dog.facts.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dog;
