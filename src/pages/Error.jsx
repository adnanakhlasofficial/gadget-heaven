import React from "react";
import { Helmet } from "react-helmet";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="grid h-screen place-content-center text-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page Not Found</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="text-9xl font-bold text-deep-black">{error.status}</h2>
      <p className="text-2xl font-semibold">{error.statusText}</p>
      {error.data?.message && <p>{error.data.message}</p>}
      <p className="mt-4 text-base text-gray">
        The resource requested could not found on this server!
      </p>
      <Link to="/">
        <button className="mt-6 rounded-full bg-primary px-6 py-2 text-white">
          Goto Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
