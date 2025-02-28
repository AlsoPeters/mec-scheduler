import { createFileRoute } from '@tanstack/react-router'
import TestDatabaseFetch from '../components/TestDatabaseFetch'
import AddMemberForm from '../components/AddMemberForm'



export const Route = createFileRoute('/members')({
  component: MembersComponent,
})



function MembersComponent() {


  return (
    <>
      <h1 className='p-2'>Hello from Members</h1>
      <TestDatabaseFetch />
      <AddMemberForm />
    </>
  )
}
