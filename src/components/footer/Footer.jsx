import { Container } from '@mui/material'
import React from 'react'
import Logo from '../logo/Logo'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Map from '../map/Map';

const Footer = () => {
  return (
    <div >
      <Container className="flex justify-between items-center py-[30px]">
         <Logo />
         <div className="flex flex-col font-bold">
           <a href='https://www.facebook.com/GeekTech.kg/' target="_blank" rel="noreferrer" className='flex'> <FacebookIcon className="mr-[10px]"/> <p>Link One</p> </a>
           <a href='https://www.instagram.com/geektech_edu/' target="_blank" rel="noreferrer" className="flex my-[32px]"> <InstagramIcon className="mr-[10px]"/> <p>Link Two</p> </a>
           <a href='https://twitter.com' target="_blank" rel="noreferrer" className='flex'> <TwitterIcon className="mr-[10px]"/> <p>Link Three</p> </a>
         </div>
         <Map />
      </Container>
      <div className='w-[100%] border-[1px] border-[#BBBBBB]'></div>
      <Container className="flex justify-center py-[40px]">
        <p className='mr-[32px]'>©2022, All right reserved.</p>
        <p>Privacy Policy</p>
        <p className='mx-[16px]'>Terms of Service</p>
        <p>Cookies Settings</p>  
      </Container>
    </div>
    
  )
}

export default Footer