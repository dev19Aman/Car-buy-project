import React from 'react'
import Header from '../../components/header'
import Sidebar from '../../components/Sidebar'
import UploadPhotos from '../../components/leadComponents/uploadPhotos'
import { Button, ButtonGroup, Select, Text } from '@chakra-ui/react'
import accountManagement from '../../assets/icons/account-management.svg'
import Logo2 from '../../assets/images/carlogo2.png'
import Logo3 from '../../assets/images/carlogo3.png'
import AccountInfo from '../../components/AccountInfo';
const AccountInformation = () => {
    return (
        <>
            <Header />
            <main className="flex gap-6  h-[90vh] p-6 bg-[#171717]">
                <Sidebar />
                <AccountInfo/>
            </main>
        </>
    )
}

export default AccountInformation;


