import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Props = {
    url?: string | null
}

const UserImage = ({url}: Props) => {
  return (
    <Avatar className='h-20 w-20 mt-8' >
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>

  )
}

export default UserImage