// Imports libraries
import { useLocation } from "react-router-dom";

export const ErrorPage = () => {
  const location = useLocation();

  return (
    <div>
      <h1>ErrorPage</h1>
      {location.state && location.state.error && (
        <h2>{location.state.error.message}</h2>
      )}
    </div>
  );
};
