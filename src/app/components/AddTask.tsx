"use client"

import React, { useState } from 'react'
import {} from "react-icons/ai"
import { CiCirclePlus } from "react-icons/ci";
import Modal from './Modal';


const AddTask = () => {

    const [modalOpen , setModalOpen] = useState<boolean>(false)


  return (
    <div className='overflow-hidden'>
     <button onClick={()=>setModalOpen(true)} className='btn btn-primary w-full'> Add task  <CiCirclePlus className="ml-2"  size={24}/>  </button>
     <Modal modalOpen={!modalOpen} />
    </div>
  )
}

export default AddTask
