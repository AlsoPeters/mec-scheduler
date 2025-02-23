import { createFileRoute } from '@tanstack/react-router'
import membersData from '../data/members.json'
import { useState } from 'react'
import LevelDropdown from '../components/LevelDropdown'

export const Route = createFileRoute('/members')({
  component: MembersComponent,
})



function MembersComponent() {

  const levelStyle = 'border-2 px-2 border-b-0'

  return (
    <>
      <h1 className='p-2'>Hello from Members</h1>
      
      <LevelDropdown />
    </>
  )
}
