'use client'

import Box from "@/components/box"

import {BounceLoader} from 'react-spinners'


export default function Loading () {
return (
    <Box className="h-full flex justify-center items-center">
      <BounceLoader color='#6a0dad' size={40}/>
    </Box>
)
}