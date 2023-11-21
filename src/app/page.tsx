// import Image from 'next/image'
import AddTask from './components/AddTask'
import TodoList from './components/TodoList'
import Link from 'next/link'
// import {getAllTodos} from '../../api'

export default  async function Home() {
  // const tasks = await getAllTodos()
  return (
    <main className="max-w-4xl mx-auto mt-4">
     <div className='text-center my-5 flex flex-col gap-5'>
      <h1 className='text-5xl font-bold'> Hello Arjun here</h1>
      <AddTask />
  
     </div>
         <TodoList  />

         <button className='border-2 bg-blue-400 hover:bg-blue-500 rounded-lg shadow-md px-2 py-4'>
          <Link href="/post" className='font-bold '>Go to Posts</Link>
         </button>
    </main>
  )
}
