import { Link } from 'react-router-dom'

const Home = ({changeSpy}) => {
  return (
    <main className='bg-[#18181b]'>
      <div className='max-w-3xl mx-auto h-[75vh] flex justify-center items-center py-6'>
        <div className=''>
          <Link to='/правила' className='text-center m-auto block text-lg bg-zinc-700 text-slate-100 px-5 py-3 rounded-md font-medium duration-300 hover:bg-zinc-600'>
            Правила
          </Link>
          <Link to='/настройки' className='text-center mt-5 m-auto block text-lg bg-zinc-700 text-slate-100 px-5 py-3 rounded-md font-medium duration-300 hover:bg-zinc-600'>
            Настройки
          </Link>
          <Link 
            onClick={changeSpy} 
            to='/игра' 
            className='btn text-slate-100 text-center mt-5 m-auto block text-lg px-7 py-3 rounded-md font-medium'
          >
            Играть
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Home