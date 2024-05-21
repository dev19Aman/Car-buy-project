import React from 'react'
import Header from '../../components/header'
import Sidebar from '../../components/Sidebar'
import { Button, ButtonGroup, HStack, Select, Stack } from '@chakra-ui/react'
import { CarSlider } from '../carSlider'
import Logo from '../../assets/images/logo.png'
import TotalUsers from '../../assets/icons/users/total-users.svg'
import ActiveUsers from '../../assets/icons/users/active.svg'
import JoinRequest from '../../assets/icons/users/join-request.svg'
import Invites from '../../assets/icons/users/invites.svg'
import Inactive from '../../assets/icons/users/inactive.svg'
import Purchase from '../../assets/icons/users/purchase-leads.svg'
import Pending from '../../assets/icons/users/pending-users.svg'

const Dashboard = () => {
  return (
    <>
    <Header/>
      <main className="flex gap-6 p-6 bg-[#171717]">
        <Sidebar/>
        <div className="w-full">
<Stack direction="row" width="full" height="40vh">
  <div className='w-full bg-[#000000]'>
    hello
  </div>
  <div className='w-full bg-[#000000]'>
    hello
  </div>
</Stack>

<div className='mt-7'>
<h2 className='text-white text-2xl font-semibold'>Users</h2>
<section className="flex gap-8 mt-4">
  {counts.map((i)=>(
    <div className="flex w-full items-center justify-between bg-[#262626] shadow py-6 px-10 rounded border-l-8" style={{borderColor:i.textColor}} >
    <div className='text-gray-400 text-center'>
      <h1 className="text-sm">{i.label}</h1>
      <div className=" text-4xl mt-1 font-bold" style={{color:i.textColor}}>{i.count}</div>
    </div>
 <img src={i.img} width={60}/>
  </div>
    ))}
</section>
    </div>

<div className='mt-7'>
<h2 className='text-white text-2xl font-semibold'>Leads</h2>
<section className="flex gap-8 mt-4">
  {leads.map((i)=>(
    <div className=" w-full bg-[#262626] shadow py-4 px-4 pl-8 rounded border-l-8" style={{borderColor:i.textColor}} >
      <h1 className="text-sm text-gray-400">{i.label}</h1>
    <div className=' flex h-full w-full justify-between'>
      <h3 className="text-4xl mt-1 font-bold" style={{color:i.textColor}}>{i.count}</h3>
 <img src={i.img} width={60} className="py-2" />
    </div>
  </div>
    ))}
</section>
    </div>
        </div>

</main>
    </>
  )
}

export default Dashboard

const counts = [
  {
    label:"Total Users",
    count:100,
    img:TotalUsers,
    textColor:"#FCB012"
  },
  {
    label:"Active Users",
    count:100,
    img:ActiveUsers,
    textColor:"#2ED048"
  },
  {
    label:"inactive Users",
    count:100,
    img:Inactive,
    textColor:"#DF2C2C"
  },
]
const leads = [
  {
    label:"Total leads",
    count:100,
    img:TotalUsers,
    textColor:"#FCB012"
  },
  {
    label:"Total pending approval leads",
    count:100,
    img:Pending,
    textColor:"#A8A8A8"
  },
  {
    label:"Total successfully purchased leads",
    count:100,
    img:Purchase,
    textColor:"#2ED048"
  },
]