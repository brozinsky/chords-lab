import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="container flex flex-col items-center h-screen justify-center space-y-4">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-red-500">
        <b>Error: </b>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
