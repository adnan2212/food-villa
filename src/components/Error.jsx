import ErrorImage from "../assets/img/Error.jpg";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="error-page">
      <img src={ErrorImage} alt="error-image" />
      <h1>Oops! The restaurant you're looking for can't be found.</h1>
      <h2>{err.data}</h2>
      <h3 className="error-back-home">
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  );
};

export default Error;
