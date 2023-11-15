
"use client"

import {FC} from 'react'

interface pageProps{
    params:{posts:string}
}

const page:FC<pageProps> = ({params})=>{
console.log(params)


    return(
        <div>
            Hello {params.posts}
        </div>
    )
}

export default page;