import { Button } from '@mui/material'
import React from 'react'

const Form = ( {label} ) => {


    const style="border-[1px] border-solid border-black"

  return (
    <>
        <form className='flex flex-col w-[500px]'>
            <input type="email" placeholder='E-Mail' className={style}/>
            <input type="password" placeholder='Password' className={style}/>
            <Button variant="contained" color="primary" >{label}</Button>
        </form>
    </>
  )
}

export default Form