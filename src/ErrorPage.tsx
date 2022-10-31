import { Link, useRouteError } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function ErrorPage() {
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <Container id="error-page" className="mt-5">

      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error as Error).message || (error as Error).name}</i>
      </p>
      <Link to="/">Go to the homepage</Link>
    </Container>
  );
}
