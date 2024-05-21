import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
// import PersonalInfo from '../../assets/images/personal-info.png'
import personalInfo from '../../assets/images/personal-info.png'


const LeadPersonalInfo = () => {
    return (
        <>
                {/* Add Leads */}
                <div className='w-full bg-[#000000] p-8 h-fit'>
                        <div className="flex gap-3 items-center ">
                        <div class="bg-cover flex justify-center items-center bg-center w-20 h-20 rounded-full border border-theme">
                        <img src={personalInfo} alt="accounnt-management" width={40} />
                    </div>
                            <h2 className='text-xl font-semibold text-white'>Tell us about yourself</h2>
                        </div>
<div className='grid grid-cols-2 w-[60%]  mt-7 text-xs text-white gap-5'>
<div>
                        <h4 >First Name</h4>
          <input type="text" placeholder="First Name" className={inputCss}/>
</div>
<div>
                        <h4 >Last Name</h4>
          <input type="text" placeholder="Last Name" className={inputCss}/>
</div>
<div>
                        <h4>Phone Number</h4>
          <input type="text" placeholder="Phone Number" className={inputCss}/>
</div>
<div>
                        <h4>Email</h4>
          <input type="text" placeholder="Email" className={inputCss}/>
</div>
<div>
                        <h4>Zip Code </h4>
          <input type="text" placeholder="Phone Number" className={inputCss}/>
</div>
 
                    </div>
                        <ButtonGroup display="flex" justifyContent="flex-end"  pb="3.5" py="10">
                            <Button background='#FDB82A' color="black" fontSize="sm" fontWeight={'bold'} _hover={{backgroundColor:"transparent", color:"#FDB82A",border:"2px solid #FDB82A"}} width={100}>Next</Button>
                </ButtonGroup>
                    </div>

        </>
    )
}

export default LeadPersonalInfo;

const inputCss = "bg-transparent border border-gray-600 text-white outline-none text-xs  w-full rounded px-4 py-2 mt-2"






