import React from 'react'
import { useRouteError } from "react-router-dom";

const ErrorLayout = () => {
  const error: unknown = useRouteError();

  return (
    <div className="container flex flex-col items-center h-screen justify-center space-y-4">
    <h1 className="text-3xl font-bold">Oops!</h1>
    <p className="text-xl">Sorry, an unexpected error has occurred.</p>
    <p className="text-red-500">
      <b>Error: </b>
      <i>
        {(error as Error)?.message ||
          (error as { statusText?: string })?.statusText}
      </i>
    </p>
  </div>
  )
}

export default ErrorLayout