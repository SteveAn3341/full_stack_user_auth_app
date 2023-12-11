import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </>
  );
};