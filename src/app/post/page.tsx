import React from 'react'
import Cards from '../components/Cards'

const page = () => {
  return (
   <div className="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-3 xl:grid-cols-3 mt-5 ">
     {/* <h1 className='h-screen flex justify-center items-center text-lg font-bold border-2 border-teal-500 bg-teal-500'>
      Hello I"m arjun here
    </h1> */}


    <Cards/>
     <Cards/>
      <Cards/>
       <Cards/>
        <Cards/>
         <Cards/>
          <Cards/>
           <Cards/>
            <Cards/>
   </div>
  )
}

export default page
