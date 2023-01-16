import React from 'react'
import {Link} from "react-router-dom" 

import LogoImg from "./logo.svg"


const Logo = () => {
  return (
    <>
      <Link to={'/'}>
          <div className='flex cursor-pointer'>
            <img src={LogoImg} alt="logo" className="block w-[104px] h-[83px]" />
            <div className='m-[auto]'>
              <h2 className='font-medium'>MangoRead</h2>
              <p className='text-[#878787]'>Читай мангу с нами</p>
            </div>
          </div>
        </Link>
    </>
  )
}

export default Logo