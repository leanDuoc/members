import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ReplyIcon from '@mui/icons-material/Reply';
import Avatar from '@mui/material/Avatar';
import Add from "../assets/add.svg"
import Remove from "../assets/remove.svg"
const Comment = () => {
  const [isMyComment, setIsMyComment] = useState(false)

  const handleClick = () => {
    setIsMyComment(!isMyComment)
  }

  return (
    <div className='flex max-w-[730px] bg-white mx-auto mt-24 py-6 px-6 rounded-xl'>
        <div className='leftbar min-w-[40px] max-h-[100px] mr-4 bg-[#F5F6FA] rounded-xl'>
          <div className='h-[33px] flex justify-center items-center'>
            <img src={Add} alt="" className='w-[11px] h-[11px]'/>
          </div>
          <div className='h-[33px] flex justify-center text-[#5357B6] font-bold'>12</div>
          <div className='h-[33px] flex justify-center items-center'>
            <img src={Remove} alt="" className='w-[11px] h-[11px]'/>
          </div>
        </div>
        <div className='rightbar'>
          <div className='flex justify-between mb-2'>
              <div className='flex gap-4 items-center'>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 24, height: 24 }}
                />
                <img src="" alt="" />
                <p className='font-semibold text-[#334253]'>juliusomo</p>
                {isMyComment && <p>you</p>}
                <p className='text-[#67727E]'>2 days ago</p>
              </div>
              
              {isMyComment ? <div className='flex gap-4'>
                <div className='flex'>
                <DeleteIcon/>
                <p>Delete</p>
                </div>
                <div className='flex'>
                  <EditIcon/>
                  <p>Edit</p>
                </div>
              </div> : <div className='flex gap-4 text-[#5357B6]'>
                <ReplyIcon/>
                <p className='font-bold'>Reply</p>
              </div>}
              {/* <p>icon</p>
              <button>Reply</button> */}
          </div>
          <div className='text-[#67727E]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ab explicabo eveniet dolorem dignissimos. Consequatur eius nobis, quo exercitationem laboriosam ab tenetur cum aperiam modi totam nulla nostrum consequuntur dignissimos.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ab explicabo eveniet dolorem dignissimos. Consequatur eius nobis, quo exercitationem laboriosam ab tenetur cum aperiam modi totam nulla nostrum consequuntur dignissimos.
                
              <button onClick={handleClick}>click me</button>
          </div>
        </div>
        
    </div>
  )
}

export default Comment