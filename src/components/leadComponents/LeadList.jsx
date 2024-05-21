import React from 'react'
import ViewList from './ViewList'
import Car1 from '../../assets/images/car3-remove.png'
import Delete from '../../assets/icons/leads/delete.png'
import Edit from '../../assets/icons/leads/edit.png'
import Filter from '../../assets/icons/leads/filter.png'
import DownArrow from '../../assets/icons/leads/down-arrow.svg'
import { background, Button, Checkbox, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
const LeadList = () => {
  return (
    <>
    <div className='mt-4 flex justify-between'>
    <Menu >
<MenuButton as={Button} size="xs" textColor="white" bg={'transparent'} rightIcon={<img src={Filter} />}
 _hover={{ bg: 'none'}}
 _expanded={{ bg: 'none' }}
//  _focus={{ boxShadow: 'outline' }}
 >
Filter
</MenuButton>
<MenuList bg='black' color='black'>
<MenuItem bg='black' display='flex' textColor='white' justifyContent='space-between'>
    <Text >Year</Text>
  <Checkbox />
</MenuItem>
<MenuItem bg='black' display='flex' textColor='white' justifyContent='space-between'>
    <Text >Make</Text>
  <Checkbox />
</MenuItem>
<MenuItem bg='black' display='flex' textColor='white' justifyContent='space-between'>
    <Text >Modal</Text>
  <Checkbox />
</MenuItem>
</MenuList>
</Menu>
<div>
<Menu >
<MenuButton size="xs" as={Button}  textColor="white" bg='#262626' rightIcon={<img src={DownArrow} />}
 _hover={{ bg: 'none'}}
 rounded='sm'
 _expanded={{ bg: '#262626' }}
 mr='2'
//  _focus={{ boxShadow: 'outline' }}
 >
Sort by
</MenuButton>
<MenuList bg='black' color='black'>
<MenuItem bg='black' display='flex' textColor='white' justifyContent='space-between'>
    <Text >Year</Text>
  <Checkbox  defaultChecked/>
</MenuItem>
</MenuList>
</Menu>
        <Button background='#FDB82A' color="black" size="xs" rounded='sm' >Add new  Leads</Button>
</div>
    </div>
    <ul  className="w-full h-[40vh] overflow-auto scrollbar pr-3">
        {new Array(10).fill().map(() => (
            <li className={ListCss}>
                <img src={Car1} alt="_logo" width={35}/>
                    <span>2018</span>
                    <span>Lamborghini Urus</span>
                    <span>Aventador</span>
                    <span>5252525252</span>
                    <span>New York</span>
                    <span>Pending</span>
                        <ViewList />
                    <img src={Edit} alt="_logo" width='15px'/>
                    <img src={Delete} alt="_logo" width='15px'/>
            </li>
        ))}
    </ul>
    </>


  )
}

export default LeadList

const ListCss = "flex px-3 justify-between items-center border-l-2 mt-2 rounded border-[##585858] hover:border-theme bg-transparent hover:bg-[#272117]  hover:cursor-pointer hover:bg-[#171717] text-xs text-white py-2 mt-1 pl-5"
