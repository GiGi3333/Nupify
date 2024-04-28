'use client'

import Box from "@/components/box"

import {BounceLoader} from 'react-spinners'


export default function Loading () {
return (
    <Box className="h-full flex justify-center items-center">
      <BounceLoader color='#22c55e' size={40}/>
    </Box>
)
}