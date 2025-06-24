import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError();

  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
        <p>Status: {error.status}</p>
        <p>URL: {error.statusText}</p>
        {error && <p>{error.data}</p>}
        <NavLink to="/"><button>Go to Home</button></NavLink>
    </div>
  )
}

export default ErrorPage
