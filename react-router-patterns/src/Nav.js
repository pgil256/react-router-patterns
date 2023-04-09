import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = ({ dogs }) => {
  return (
    <nav className='Nav'>
      <div className='Nav-items-container'>
        <NavLink key='home' className='Nav-item' to={`/dogs`}>
          Home
        </NavLink>
        {dogs.map((d) => (
          <NavLink key={d.name} className='Nav-item' to={`/dogs/${d.name}`}>
            {d.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
