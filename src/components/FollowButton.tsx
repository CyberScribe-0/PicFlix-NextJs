"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2Icon } from 'lucide-react'
import toast from 'react-hot-toast'
import { toggleFollow } from '@/actions/user.actions'

const FollowButton = ({userId}:{userId:string}) => {
  const[isLoading,setIsLoading] = useState(false)

  const handlefollow = async ()=>{
    setIsLoading(true)
    try {
      await toggleFollow(userId)
      toast.success("user followed successfully")
    } catch (error) {
      toast.error("error following user");
      
    }finally{
      setIsLoading(false)
    }
  }
  return (
    <Button size={"sm"}
    variant={"secondary"}
    onClick={handlefollow}
    disabled={isLoading}
    className='w-20'>
      {isLoading ?  <Loader2Icon className='w-4 h-4 animate-spin'/> :"Follow"}
      
    </Button>
  )
}

export default FollowButton
