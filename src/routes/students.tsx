import { createFileRoute } from '@tanstack/react-router'
import TestDatabaseFetch from '../components/TestDatabaseFetch'
import AddStudentForm from '../components/AddStudentForm'



export const Route = createFileRoute('/students')({
  component: MembersComponent,
})



function MembersComponent() {


  return (
    <>
      <h1 className='p-2 text-2xl font-bold'>Hello from Students</h1>
      {/* <TestDatabaseFetch /> */}
      <AddStudentForm />
    </>
  )
}
