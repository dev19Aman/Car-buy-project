import React, { useState } from 'react'
import Dashboard from '../../assets/icons/dashboard.svg'
import UserManagement from '../../assets/icons/user-management.svg'
import MyLeads from '../../assets/icons/my-leads.svg'
import CompletedLeads from '../../assets/icons/completed-leads.svg'
import AccountInfo from '../../assets/icons/account-info.svg'
import Packages from '../../assets/icons/packages.svg'
import User from '../../assets/images/john-dee-remove.png'
import {
  useLocation,
  Link,
} from "react-router-dom";


const Sidebar = () => {
  const location = useLocation();
  console.log("route",location.pathname);
  return ( 
    <main className="bg-[#000000] shadow-md w-72 rounded h-fit">
    <div className="flex flex-col justify-between h-full">
      <div className="flex-grow">
        <section className='px-4'>
        <div className={boxCss}>
            <div className='w-14 h-14 rounded-full bg-[#777E8F]'>
            <img src={User} />
            </div>
            <h1>Hi, John</h1>
        </div>
        </section>
          <ul className="py-6">
            {links.map((i)=>(
                <Link to={i.link } key={i.label}>
              <li key={i.label} className={i.link==location.pathname?activeListCss:ListCss}>
              <img src={i.img} />
                {i.label}
            </li>
                </Link>
              ))}
          </ul>
      </div>
    </div>
  </main>
  )
}

export default Sidebar

const ListCss ="flex items-center hover:border-l-8 rounded-l-md border-theme bg-transparent hover:cursor-pointer hover:bg-[#171717] font-bold text-sm text-white py-2 gap-2 px-4 mt-1"
const activeListCss ="flex items-center border-l-8 rounded-l-md border-theme bg-[#171717] font-bold text-sm text-white py-2 gap-2 px-2 mt-1"

const boxCss = "w-full flex flex-col justify-center items-center text-white h-40 border-b border-gray-600 "

const links = [
  {
    label: "Dashboard",
    img:Dashboard,
    link:'/dashboard'
  },
  {
    label: "User Management",
    img:UserManagement,
    link:'/user-management'
  },
  {
    label: "My Leads",
    img:MyLeads,
    link:'/add-leads'
  },
  {
    label: "Completed Leads",
    img:CompletedLeads,
    link:'/completed-leads'
  },
  {
    label: "Account Information",
    img:AccountInfo,
    link:'/account-info'
  },
  {
    label: "Admin Management",
    img:Packages,
    link:'/admin-management'
  },
];