
"use client"

import React from 'react'

interface ModalProps{
    modalOpen:boolean;
}

const Modal:React.FC<ModalProps> = ({modalOpen}) => {
  return (
   <>
   {/* The button to open modal */}
<label htmlFor="my_modal_6" className="btn">open modal</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <input type="email" placeholder='Type your email...'  required/>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
   
   </>
  )
}

export default Modal
