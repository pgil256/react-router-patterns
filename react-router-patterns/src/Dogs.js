import { Link } from 'react-router-dom';
import './Dogs.css';

const Dogs = ({ dogs }) => {
  return (
    <div className='Dogs'>
      {dogs.map((dog) => {
        return (
          <div className='Dogs-card'>
            <h3 className='Dogs-name'>{dog.name}</h3>
            <img className='Dogs-img' src={dog.src} alt={dog.name} />
            <Link to={`/dogs/${dog.name}`}>
              <button className='Dogs-btn'>Details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Dogs;
