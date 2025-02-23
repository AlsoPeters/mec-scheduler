import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/classrooms')({
  component: ClassroomComponent,
})

function ClassroomComponent() {
  return <>
    <div className='p-2'>Hello from Classrooms!</div>

    <div id='classroomContainer' className='bg-amber-50'>

      <div id='classroomNav' className='flex justify-between w-full px-2'>

        <div id='leftContainer' className='flex gap-2'>
          <div id='roomNameContainer' className='border-2 px-2 text-center'>
            <div id='roomDropDown'>A</div>
            <p className='font-bold'>ROOM</p>
          </div>
          <div id='teacher' className='border-2 px-2 flex items-center'>Kyle</div>
        </div>
        
        <div id='rightContainer' className='flex gap-2'>
          <div id='classroomLevel' className='font-bold border-2 flex items-center px-2'>E-1</div>
          <div id='classroomTime' className='italic border-2 flex items-center px-2'>5:00</div>
        </div>

      </div>

      <div id='students' className='border-2 flex'>
        <div id='groupOne' className='w-1/2 flex flex-col gap-2 p-2'>
          <div className='border-2 px-2'>Student 1</div>
          <div className='border-2 px-2'>Student 2</div>
          <div className='border-2 px-2'>Student 3</div>
          <div className='border-2 px-2'>Student 4</div>
        </div>
        <div id='groupTwo' className='w-1/2 flex flex-col gap-2 p-2'>
          <div className='border-2 px-2'>Student 4</div>
          <div className='border-2 px-2'>Student 5</div>
          <div className='border-2 px-2'>Student 6</div>
          <div className='border-2 px-2'>Student 7</div>
        </div>
      </div>
    </div>
  </>
}
