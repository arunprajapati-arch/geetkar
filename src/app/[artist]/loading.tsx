import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"


const loading = () => {
  return (
    <Skeleton className="m-12 w-[100px] h-[20px] rounded-full" />

  )
}

export default loading