import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    
    <div className="text-5xl text-center" id="error-page">
      <h1 >Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/"> <button className="btn btn-secondary">Home</button></Link>
    </div>
  );
}