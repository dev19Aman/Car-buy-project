import React from 'react'
import { Button, ButtonGroup, Text } from '@chakra-ui/react'
import accountManagement from '../assets/icons/account-management.svg'
import email from '../assets/images/email.png'
import Upload from '../assets/images/upload.png'

const AccountInfo = () => {
    return (
        <>
            <div className='w-full bg-[#000000] p-8 '>
                <div className="flex gap-4 items-center">
                    <div class="bg-cover flex justify-center items-center bg-center w-36 h-36 rounded-full" style={{ backgroundImage: `url(${accountManagement})` }}>
                        <img src={Upload} alt="accounnt-management" width={30} />
                    </div>
                    <div className='text-left text-white'>
                        <h2 className=" text-2xl font-semibold"> John Dee</h2>
                        <div className='flex gap-2'>

                            <img src={email} alt="email" width={18} />
                            <p className="text-xs">Aliyan@Gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2  w-full mt-7 pt-7 text-xs text-white gap-8 border-t border-gray-700'>
                    <div >
                        <h4 >Name</h4>
                        <input type="text" placeholder="Name" className={inputCss} />
                    </div>
                    <div>
                        <h4 >Email</h4>
                        <input type="text" placeholder="email" className={inputCss} />
                    </div>
                    <div>
                        <h4>Change Password</h4>
                        <div className='flex gap-3 items-center justify-center'>
                            <input type="Email" placeholder="Phone Number" className={inputCss} />
                            <button className={buttonCss}>
                                Send Link
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default AccountInfo;

const buttonCss = "border text-xs flex items-center justify-center py-2 rounded-md font-semibold mt-2 hover:bg-transparent hover:text-theme bg-theme border-theme text-black w-24 "
const inputCss = "bg-transparent border border-gray-600 text-gray-400 outline-none text-xs  w-full rounded-md px-4 py-2 mt-2 focus:bg focus:bg-[#262626]"