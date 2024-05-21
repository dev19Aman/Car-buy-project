import React from 'react'
import Header from '../../components/header'
import Sidebar from '../../components/Sidebar'
import LeadVehicleInfo from '../../components/leadComponents/leadVehicleInfo'
import UploadPhotos from '../../components/leadComponents/uploadPhotos'
import { Button, ButtonGroup, Select, Text } from '@chakra-ui/react'
import Logo1 from '../../assets/images/carlogo1.png'
import Logo2 from '../../assets/images/carlogo2.png'
import Logo3 from '../../assets/images/carlogo3.png'
import Car1 from '../../assets/images/car3-remove.png'
import Delete from '../../assets/icons/leads/delete.png'
import Edit from '../../assets/icons/leads/edit.png'
import rightArrow from '../../assets/icons/right-arrow.svg'
import { CarSlider } from '../carSlider'
import ViewList from '../../components/leadComponents/ViewList'
import LeadList from '../../components/leadComponents/LeadList'
import Own from '../../components/ownerShipStatus/own'
import Finance from '../../components/ownerShipStatus/finance'
import Lease from '../../components/ownerShipStatus/lease'
import LeadPersonalInfo from '../../components/leadComponents/leadPersonalInfo'
const AddLeads = () => {
    return (
        <>
            <Header />
            <main className="flex gap-6 p-6 bg-[#171717] h-[90vh]">
                <Sidebar />
                {/* <Lease/> */}
                {/* <Own/> */}
                {/* <Finance/> */}
                {/* <LeadPersonalInfo/> */}
                {/* <LeadVehicleInfo/> */}
                {/* <UploadPhotos/> */}

            

                {/* My Leads */}
                <div className='w-full'>
                    <h2 className='text-white text-2xl font-semibold'>My Leads</h2>
                    <section className="flex gap-3 pt-3 pb-4 items-center border-b border-gray-500 ">
                        {carLogo.map((i) => (
                            <div className="flex w-full items-center gap-3 bg-[#262626] shadow py-2 pl-4 rounded ">
                                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-[#000000]'>
                                        <img src={i.img} alt="_logo" width="20px"/>
                                </div>
                                <h1 className="text-white font-semibold text-xs">{i.title}</h1>
                            </div>
                        ))}
                        <ButtonGroup gap='4'>
                            <Button background='#FDB82A' color="black" fontSize="sm">Manage Leads</Button>
                            <Button rightIcon={<img src={rightArrow} alt="view all"/>} colorScheme='transparent' variant='solid' fontSize="sm">
                                view all
                            </Button>
                        </ButtonGroup>
                    </section>
                    <section className='pt-4 flex gap-3'>
                        <div className='w-[52vw]'>
                            <CarSlider />
                         <LeadList/>
                        </div>
                        <div className=" bg-[#262626] shadow pt-2 rounded w-full text-xs font-semibold text-white h-full">
                            <div className='px-4'>
                                <p className='text-lg font-semibold'>Features</p>
                                <div className="flex items-center justify-center">
                                <img src={Car1} height={100} />
                                </div>
                                <p className='text-base'>Lamborghini Urus</p>
                                <div className="text-white  text-xs flex justify-between mt-4">
                                    <div>
                                        <Text fontSize='xs' lineHeight="5" color="gray.500">Mileage </Text>
                                        <Text fontSize='sm' fontWeight={600}>2500 KM </Text>
                                    </div>
                                    <div>
                                        <Text fontSize='xs' lineHeight="5" color="gray.500">Transmission</Text>
                                        <Text fontSize='sm' fontWeight={600}>Manual</Text>
                                    </div>
                                    <div>
                                        <Text fontSize='xs' lineHeight="5" color="gray.500">Drive Unit </Text>
                                        <Text fontSize='sm' fontWeight={600}>Front</Text>
                                    </div>
                                </div>
                                <div className="text-white  text-xs flex justify-between py-4">
                                    <div>
                                        <Text fontSize='xs' lineHeight="5" color="gray.500">Mileage </Text>
                                        <Text fontSize='sm' fontWeight={600}>2500 KM </Text>
                                    </div>
                                    <div>
                                        <Text fontSize='xs' lineHeight="5" color="gray.500">Transmission</Text>
                                        <Text fontSize='sm' fontWeight={600}>Manual</Text>
                                    </div>
                                    <div>
                                        <Text fontSize='xs' lineHeight="5" color="gray.500">Drive Unit </Text>
                                        <Text fontSize='sm' fontWeight={600}>Front</Text>
                                    </div>
                                </div>
                                <div className='py-4 border-t border-gray-500'>
                                    <h2 className='text-sm'>Gallery</h2>
                                    <div className="text-white text-xs flex justify-between mt-2 gap-2">
                                        {new Array(5).fill().map(() => (
                                            <div className='w-full h-10 bg-[#D9D9D9] rounded-sm flex justify-center items-center'>
                                <img src={Car1} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className='flex justify-between mt-5'>
                                        <Text fontSize='xs' lineHeight="5" >Price</Text>
                                        <div className='flex items-center gap-1'>
                                            <span className='text-theme text-xl font-semibold'>$</span>
                                            <Text fontSize='xs' lineHeight="5" textAlign="center">20k</Text>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <button className="cursor-pointer bg-theme w-full py-2 text-gray-800 mt-2">
                                Sell my Exotic
                            </button>
                        </div>

                    </section>
                </div>
            </main>
        </>
    )
}

export default AddLeads;
const ListCss = "flex justify-between items-center border-l-2 mt-2 rounded border-[##585858] hover:border-theme bg-transparent hover:bg-[#272117]  hover:cursor-pointer hover:bg-[#171717] font-bold text-xs text-white py-2 mt-1 pl-5"

const svgPath = "M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"
const svgCss = "text-lg mr-4 tex-white hover:text-theme";


const carLogo = [
    {
        title:"Tesla",
        img:Logo1
    },
    {
        title:"Porsche",
        img:Logo2
    },
    {
        title:"Ferrari",
        img:Logo3
    },
    {
        title:"Mercedes",
        img:Logo3
    }
]