import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}

        <Link to='/classrooms' activeProps={{ className: 'font-bold', }}
          activeOptions={{ exact: true }}
        >
          Classrooms
        </Link>

        <Link to='/members' activeProps={{ className: 'font-bold', }}
          activeOptions={{ exact: true }}
        >
          Members
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
