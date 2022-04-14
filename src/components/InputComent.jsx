import { TextareaAutosize } from '@mui/material'
import React from 'react'
import Oval from "../assets/Oval.jpg"

const InputComent = () => {
  return (
    <div className='max-w-[730px] min-h-[144px] mx-auto mt-32 flex justify-evenly'>
        <img src={Oval} alt="" className='rounded-[50%] w-[40px] h-[40px]'/>
        <TextareaAutosize/>
        <button className='h-[48px] w-[104px] bg-[#5357B6] rounded-[8px] text-white font-semibold'>SEND</button>
    </div>
  )
}

export default InputComent