import React from 'react'
import Header from '../../components/header'
import Sidebar from '../../components/Sidebar'
import Logo from '../../assets/images/logo.png'
import { Button, ButtonGroup, HStack, Select } from '@chakra-ui/react'
import { CarSlider } from '../carSlider'
import TotalUsers from '../../assets/icons/users/total-users.svg'
import ActiveUsers from '../../assets/icons/users/active.svg'
import Inactive from '../../assets/icons/users/inactive.svg'
import Pending from '../../assets/icons/users/pending-users.svg'
import Invites from '../../assets/icons/users/invites.svg'
import joinRequest from '../../assets/icons/users/join-request.svg'


const UserManagement = () => {
  return (
    <>
    <Header/>
      <main className="flex gap-6 p-6 bg-[#171717]">
        <Sidebar/>

        {/* User Management */}
        <div className='w-full h-[81vh]'>
        <section className="flex gap-3">
  {counts.map((i)=>(
    <div className="flex w-full items-center justify-between bg-[#262626] shadow py-4 px-4 rounded border-l-4 " style={{borderColor:i.textColor}}>
    <div className='text-white text-center'>
      <h1 className="text-gray-500 font-semibold text-xs">{i.label}</h1>
      <div className=" text-lg mt-1 font-bold" style={{color:i.textColor}}>{i.count}</div>
    </div>
    <img src={i.img} width={35}/>
  </div>
    ))}
</section>


<div className="w-full rounded-lg shadow-xs mt-5 bg-[#262626] pr-2">
  <div className="w-full pr-3">
    <table className="w-full whitespace-no-wrap text-white  text-xs font-semibold">
      <thead>
        <tr
          className="
            tracking-wide
            text-left
            uppercase
            border-b
            border-gray-500
          "
        >
          <th className="px-4 py-3">#</th>
          <th className="px-4 py-3">Pic</th>
          <th className="px-4 py-3">Name</th>
          <th className="px-4 py-3">Active</th>
          <th className="px-4 py-3">Email</th>
          <th className="px-4 py-3">Leads</th>
          <th className="px-4 py-3">Created</th>
          <th className="px-4 py-3">Action</th>
        </tr>
      </thead>
      <tbody
        className="text-sm
          bg-[#262626]
          divide-y divide-gray-500
        "
      >
        {new Array(10).fill().map(()=>(

        <tr
          className="
           transition-colors
            duration-300
            bg-[#FFFFFF]
          divide-y divide-gray-500
          "
        >
          <td className="px-4 py-3 w-5 h-5">
            
          </td>
          <td className="px-4 py-3">
          <div className='w-8 h-8 rounded-full bg-theme'></div>
          </td>
          <td className="px-4 py-3">John Dee</td>
          <td className="px-7 py-3">
          <div className='w-2 h-2 rounded-full bg-green-700'></div>
          </td>
          <td className="px-4 py-3">johndoe@example.com</td>
          <td className="px-4 py-3">
        <img className="h-6 " src={Logo} alt="Logo"/>
          </td>
          <td className="px-4 py-3">an hour ago</td>
          <td className="px-4 py-3">
          <Button colorScheme='red' size='sm'>
    Delete
  </Button>
          </td>
        </tr>
        ))}

      </tbody>
    </table>
  </div>
</div>


        </div>



     




      </main>
    </>
  )
}

export default UserManagement
const ListCss ="flex justify-between items-center border-l-8 rounded-md border-[##585858] hover:border-theme bg-transparent hover:bg-[#272117]  hover:cursor-pointer hover:bg-[#171717] font-bold text-sm text-white py-2 mt-1 pl-5"

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
    label:"Join Request",
    count:100,
    img:joinRequest,
    textColor:"#A8A8A8"
  },
  {
    label:"Open Invites",
    count:100,
    img:Invites,
    textColor:"#19EDFB"
  },
  {
    label:"Inactive Users",
    count:100,
    img:Inactive,
    textColor:"#DF2C2C"
  },
]