import React from 'react'
import Header from '../../components/header'
import Sidebar from '../../components/Sidebar'
import { background, Button, Checkbox, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
import Car1 from '../../assets/images/car3-remove.png'
import Delete from '../../assets/icons/leads/delete.png'
import Edit from '../../assets/icons/leads/edit.png'
import Filter from '../../assets/icons/leads/filter.png'
import DownArrow from '../../assets/icons/leads/down-arrow.svg'
import ViewList from '../../components/leadComponents/ViewList'

const CompletedLeads = () => {
  return (
    < div className=''>
    <Header/>
      <main className="flex gap-6 p-6 bg-[#171717]  h-[90vh]">
        <Sidebar/>
        <div className='w-full'>
    <div className='mt-4 flex justify-between'>
    <Menu>
<MenuButton as={Button} size="xs" textColor="white" bg={'transparent'} rightIcon={<img src={Filter} />}
 _hover={{ bg: 'none'}}
 _expanded={{ bg: 'none' }}

 >
Filter
</MenuButton>
<MenuList bg='black' color='black'>
<MenuItem bg='black' display='flex' textColor='white' justifyContent='space-between'>
    <Text >Sort</Text>
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
 p={'3.5'}
 >
Sort by
</MenuButton>
<MenuList bg='black' color='black'>
<MenuItem bg='black' display='flex' textColor='white' justifyContent='space-between'>
    <Text >Sort by </Text>
  <Checkbox  defaultChecked/>
</MenuItem>
</MenuList>
</Menu>
        <Button background='#FDB82A' color="black" size="xs" rounded='sm' p={'3.5'}>Add new  Leads</Button>
</div>
    </div>
    <ul  className="w-full overflow-auto scrollbar pr-3 h-[72vh]">
        {new Array(19).fill().map(() => (
            <li className={ListCss}>
                <img src={Car1} alt="_logo" width={35}/>
                    <span>2018</span>
                    <span>Lamborghini Urus</span>
                    <span>Aventador</span>
                    <span>5252525252</span>
                    <span>New York</span>
                    <span>Pending</span>
                    <div className='flex gap-3 pr-2'>
                        <ViewList />
                    <img src={Edit} alt="_logo" width='15px'/>
                    <img src={Delete} alt="_logo" width='15px'/>
                    </div>
            </li>
        ))}
    </ul>

        </div>
      </main>
    </div>
  )
}

export default CompletedLeads
const ListCss ="flex justify-between items-center border-l-8 rounded-md border-[##585858] hover:border-theme bg-transparent hover:bg-[#272117] hover:text-white  hover:cursor-pointer hover:bg-[#171717] text-[#909090] text-sm hover:font-semibold py-2 mt-2 pl-5"

const counts = [
  {
    label:"Total Users",
    count:100,
  },
  {
    label:"Active Users",
    count:100,
  },
  {
    label:"Join Request",
    count:100,
  },
  {
    label:"Open Invites",
    count:100,
  },
  {
    label:"Inactive Users",
    count:100,
  },
]