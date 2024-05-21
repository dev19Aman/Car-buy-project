import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Logo from '../../assets/images/logo.png'
import Logout from '../../assets/icons/logout.svg'
import Search from '../../assets/icons/search.svg'
import User from '../../assets/images/john-dee-remove.png'
import { background, Button, Checkbox, Menu, MenuButton, MenuItem, MenuList,  Stack,  Text } from '@chakra-ui/react'
import DownArrow from '../../assets/icons/leads/down-arrow.svg'

const Header = () => {
  return (
    <>
      <div className="bg-[#000000] h-[10vh]">
  <div className="px-4">
    <div className="flex items-center justify-between py-2">
      <div >
        <img className="h-12 " src={Logo} alt="Logo"/>
      </div>
<div className='flex items-center gap-3'>
<p className='text-white text-sm'> Need Help?</p>
      <div className="flex items-center bg-[#171717] rounded-lg px-4 py-1">
          <input type="text" placeholder="Search" className="bg-[#171717] text-white outline-none text-sm px-2 py-1 w-72"/>
          <img src={Search}/>
        </div>
</div>
    
<Menu >
<MenuButton as={Button} size="xs" textColor="white" bg={'transparent'} rightIcon={<img src={DownArrow} />}
 _hover={{ bg: 'none'}}
 _expanded={{ bg: 'none' }}
 >
          <div className=' flex items-center gap-2'>
          <div className='w-9 h-9 rounded-full bg-[#777E8F]'>
            <img src={User} />
            </div>
            <div className='text-left'>
            <span className=" text-sm"> John</span>
            <p className="text-xs">Aliyan@Gmail.com</p>
            </div>
          </div>
</MenuButton>
<MenuList bg='#272727' border='none'>
<section className='px-4'>
        <div className={boxCss}>
            <div className='w-14 h-14 rounded-full bg-[#777E8F] my-4'>
            <img src={User} />
            </div>
            <h1>Hi, John</h1>
            <p className="text-sm">Are You Sure Want Logout</p>
            <p className='text-xs text-gray-500 leading-6'>You need to input your details to get back</p>
            <Stack direction='row' py='5'>
            <button className={`${buttonCss} bg-transparent text-theme border-theme`}>
              Cancel
            </button>
            <button className={`${buttonCss} bg-theme border-theme text-black`}>
              Logout
            </button>
            </Stack>
        </div>
        </section>
</MenuList>
</Menu>
    </div>
  </div>
</div>

    </>
  )
}

export default Header;
const buttonCss= "border text-sm flex items-center gap-1 py-2 px-6 rounded font-semibold"
const boxCss = "w-full flex flex-col justify-center items-center text-white"
