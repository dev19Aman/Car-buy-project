import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import UploadPhoto from './uploadPhoto';

const UploadPhotos = () => {
    return (
        <>
            {/* Add Leads */}
            <div className='w-full bg-[#000000] p-8'>
                <h2 className='text-xl font-semibold text-white'>Upload Up To 10 Photos</h2>
                <section className='grid grid-cols-5 mt-7 gap-4'>
              <UploadPhoto/>
              <UploadPhoto/>
              <UploadPhoto/>
              <UploadPhoto/>
              <UploadPhoto/>
              <UploadPhoto/>
              <UploadPhoto/>
              <UploadPhoto/>
              <UploadPhoto/>
              <UploadPhoto/>
                </section>
                <Button background='#FDB82A' color="black" fontSize="sm" fontWeight={'bold'} _hover={{ backgroundColor: "transparent", color: "#FDB82A", border: "2px solid #FDB82A" }} mt="6" width={100}>Post Now</Button>
            </div>

        </>
    )
}

export default UploadPhotos;

const boxCss = "w-full flex justify-center items-center border-[0.1rem] border-dotted border-gray-600 py-7 rounded-sm"
