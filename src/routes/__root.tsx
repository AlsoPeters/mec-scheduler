import { useEffect, useState } from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [students, setStudents] = useState<any[]>([])



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

        <Link to='/students' activeProps={{ className: 'font-bold', }}
          activeOptions={{ exact: true }}
        >
          Students
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
