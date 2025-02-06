"use client"

import { sanityUserPost } from '@/services/userApi'
import React, { useEffect } from 'react'

function Product() {
  useEffect(()=>{
    sanityUserPost()
  },[])
  return (
    <div>

    </div>
  )
}

export default Product