import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/liceu');
    }, 3000);
  }, [navigate]);
  return (
    <div className="container">
      <h1>Page not found 404</h1>
    </div>
  );
}

export default NotFound;
