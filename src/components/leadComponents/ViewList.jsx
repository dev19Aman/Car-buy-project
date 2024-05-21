import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Box
} from "@chakra-ui/react";
import User from '../../assets/images/john-dee-remove.png'
import Logo from '../../assets/images/logo.png'
import View from '../../assets/icons/leads/view.png'


const ViewList=()=> {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
     <img src={View} alt="_logo" width='15px'  onClick={onOpen}/>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size='2xl'>
        <ModalOverlay />
        <ModalContent  mb="-40" mr="7"  bg='#262626'>
        <div className="shadow-xs pr-2">
    <table className="w-full text-white text-xs bg-[#262626] rounded-lg rounded-b-lg">
      <thead>
        <tr
          className="
            uppercase
            border-b
            border-gray-500
          "
        >
          <th className={thCss}>Name</th>
          <th className={thCss}>Mobile Number</th>
          <th className={thCss}>Lead Preference</th>
          <th className={thCss}>Cost</th>
          <th className={thCss}>Request</th>
        </tr>
      </thead>
      <tbody>
        {new Array(1).fill().map(()=>(
        <tr
          className="
            bg-[#262626]
            hover:bg-black
            transition-colors
            duration-300
          "
        >
                 <td className="px-4 ">
            <div className="flex gap-1 justify-center items-center">
          <div className='w-9 h-9 rounded-full bg-[#777E8F]'>
            <img src={User} alt="" />
          </div>
           <span className="w-20">John Dee</span>
            </div>
          </td>
          <td className="px-4 ">
            <div className="w-20 flex justify-center items-center">6398301514</div>
          </td>
          <td className="px-4 py-3 flex  gap-1 ">
            <div className={leadCss}>New York</div>
            <div className={leadCss}>150km/hr</div>
            <div className={leadCss}>2015 Modal</div>
          </td>
          <td className="px-7">
           Price:5k$
          </td>
          <td className="px-4 flex  gap-1 ">
          <div className={leadCss} style={{backgroundColor:"#2ED048"}}>Accept</div>
            <div className={leadCss} style={{backgroundColor:"#FBA819"}}>Pending</div>
            <div className={leadCss} style={{backgroundColor:"#DF2C2C"}}>Deny</div>
          </td>
              
        </tr>
        ))}

      </tbody>
    </table>
  </div>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ViewList;

 const leadCss = "bg-[#9D9D9D] w-20 h-8 flex justify-center items-center rounded-md" 
 const svgPath = "M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"
const svgCss = "text-lg mr-4 tex-white hover:text-theme";
const thCss = "px-2 py-1";