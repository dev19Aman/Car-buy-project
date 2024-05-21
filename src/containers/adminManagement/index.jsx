import React from 'react'
import Header from '../../components/header'
import Sidebar from '../../components/Sidebar'
import { background, Button, Checkbox, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
import Delete from '../../assets/icons/leads/delete.png'
import Edit from '../../assets/icons/leads/edit.png'
import Search from '../../assets/icons/search.svg'


const AdminManagement = () => {
  return (
    <>
    <Header/>
      <main className="flex gap-6 p-6 bg-[#171717] h-[90vh]">
        <div>
        <Sidebar/>
        </div>
        <div className='w-full'>
    <div className='mt-4 flex justify-between'>
      <Text textColor='white' fontSize='xl'>Admin Management</Text>
        <Button background='#FDB82A' color="black" size="xs" rounded='sm' p={'3.5'}>Add new  Leads</Button>
    </div>
    <ul  className="w-full overflow-auto scrollbar pr-3 h-[72vh]">
        {new Array(19).fill().map(() => (
            <li className={ListCss}>
                    <span>John Dee</span>
                    <span>John Doe@gmail.com</span>
                    <span>an hour ago</span>
                    <div className='flex gap-3 pr-2'>
                    <img src={Edit} alt="_logo" width='15px'/>
                    <img src={Delete} alt="_logo" width='15px'/>
                    </div>
            </li>
        ))}
    </ul>
        </div>

        <section className='px-2 w-8/12'>
        <div className={boxCss}>
            <h1 className='font-semibold'>Invite People on this Project</h1>
            <p className="text-xs text-gray-500 leading-6">Invite Existing Team member or add new ones.</p>
            <div className="flex items-center bg-[#171717] rounded px-4 py-1 mt-2">
          <input type="text" placeholder="Search" className="bg-[#171717] text-white outline-none text-sm px-2 py-1 w-72"/>
          <img src={Search}/>
        </div>

        
        </div>
        </section>
</main>
    </>
  )
}

export default AdminManagement
const ListCss ="flex justify-between items-center border-l-4 rounded border-[##585858] hover:border-theme bg-transparent hover:bg-[#272117]  hover:cursor-pointer hover:bg-[#171717] font-bold text-sm text-white py-2 mt-1 pl-5"
const boxCss = "w-full flex flex-col justify-center items-center text-white bg-[#000000] p-4 "
