import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
// import PersonalInfo from '../../assets/images/personal-info.png'
import vehicleInfo from '../../assets/images/vehicle-info.png'


const LeadPersonalInfo = () => {
    return (
        <>
                {/* Add Leads */}
                <div className='w-full bg-[#000000] pt-8 px-8 h-fit'>
                        <div className="flex gap-3 items-center border-b pb-4 border-gray-600">
                        <div class="bg-cover flex justify-center items-center bg-center w-20 h-20 rounded-full border border-theme">
                        <img src={vehicleInfo} alt="accounnt-management" width={40} />
                    </div>
                            <h2 className='text-xl font-semibold text-white'>Vehicle information</h2>
                        </div>
                            <h2 className='text-xl font-semibold text-white mt-4'>Puchase Vehicle</h2>
<div className='grid grid-cols-3 mt-7 text-xs text-white gap-5'>
<div>
                        <label >Vehicle VIN</label>
          <input type="text" placeholder="First Name" className={inputCss}/>
</div>
<div>
                        <label >Vehicle Year</label>
          <input type="text" placeholder="Last Name" className={inputCss}/>
</div>
<div>
                        <label>Vehicle Make</label>
          <input type="text" placeholder="Phone Number" className={inputCss}/>
</div>
<div>
                        <label>Vehicle Modal</label>
          <input type="text" placeholder="Email" className={inputCss}/>
</div>
<div>
                        <label>Trim</label>
          <input type="text" placeholder="Phone Number" className={inputCss}/>
</div>
<div>
                        <label>Body Style </label>
          <input type="text" placeholder="Phone Number" className={inputCss}/>
</div>
<div>
                        <label>Interior Color</label>
          <input type="text" placeholder="Phone Number" className={inputCss}/>
</div>
<div>
                        <label>Exterior Color</label>
          <input type="text" placeholder="Phone Number" className={inputCss}/>
</div>
<div>
                        <label>Mileage</label>
          <input type="text" placeholder="Phone Number" className={inputCss}/>
</div>
 
                    </div>
                    <ButtonGroup display="flex" justifyContent="space-between" mt="7" pb="3.5">
                            <Button background='#FDB82A' color="black" fontSize="sm" fontWeight={'bold'} _hover={{backgroundColor:"transparent", color:"#FDB82A",border:"2px solid #FDB82A"}}width={100}>Back</Button>
                            <Button background='#FDB82A' color="black" fontSize="sm" fontWeight={'bold'} _hover={{backgroundColor:"transparent", color:"#FDB82A",border:"2px solid #FDB82A"}} width={100}>Next</Button>
                </ButtonGroup>
                    </div>

        </>
    )
}

export default LeadPersonalInfo;

const inputCss = "bg-transparent border border-gray-600 text-white outline-none text-xs  w-full rounded px-4 py-2 mt-2"






