import React from 'react'
import { background, Checkbox, Menu, MenuButton, MenuItem, MenuList, Stack, Text,ButtonGroup,Button } from '@chakra-ui/react'
import DownArrow from '../../assets/icons/leads/down-arrow.svg'
import blackDownArrow from '../../assets/icons/leads/black-down-arrow.svg'

const Own = () => {
    return (
        <>
                {/* OWN */}
                <div className='w-full bg-[#000000] h-fit px-8 py-4'>
                     <div>
<h2 className='text-lg text-white mt-7'>Select Your Application Type:</h2>
<Menu >
<MenuButton size="xs" mt="2" as={Button} bg='#FDB82A' rightIcon={<img src={blackDownArrow} />}
 _hover={{ bg: '#FDB82A'}}
 rounded='sm'
 _expanded={{ bg: '#FDB82A' }}
 mr='2'
 p={'3.5'}
 >
Own
</MenuButton>
<MenuList bg='black' color='black'>
<MenuItem bg='black' display='flex' textColor='white' justifyContent='space-between'>
    <Text >Own </Text>
  <Checkbox  defaultChecked/>
</MenuItem>
</MenuList>
</Menu>
</div>   

                    <div>
<h2 className='text-lg text-white mt-7'>Do They Have The Title In Hand ?</h2>
<Menu >
<MenuButton size="xs" mt="2" as={Button} bg='transparent' textColor='#A9A9A9' border='1px'  rightIcon={<img src={DownArrow} />}
 _hover={{ bg: 'none'}}
 rounded='md'
 _expanded={{ bg: 'none' }}
 mr='2'
 p={'3.5'}
 >
Yes
</MenuButton>
<MenuList bg='black' color='black'>
<MenuItem bg='black' display='flex' textColor='white' justifyContent='space-between'>
    <Text >Sort by </Text>
  <Checkbox  defaultChecked/>
</MenuItem>
</MenuList>
</Menu>
                    </div>
             <ButtonGroup display="flex" justifyContent="space-between"  py="10">
                            <Button background='#FDB82A' color="black" fontSize="sm" fontWeight={'bold'} _hover={{backgroundColor:"transparent", color:"#FDB82A",border:"2px solid #FDB82A"}}width={100}>Back</Button>
                            <Button background='#FDB82A' color="black" fontSize="sm" fontWeight={'bold'} _hover={{backgroundColor:"transparent", color:"#FDB82A",border:"2px solid #FDB82A"}} width={100}>Next</Button>
                </ButtonGroup>
                </div>
        </>
    )
}

export default Own;
