const MysteriousCard = ({setPlayerCard}) => {
  return (
    <div className='p-4 bg-zinc-800 rounded-lg cursor-pointer' onClick={() => setPlayerCard(true)}>
      <div className='h-60 sm:h-80 flex justify-center items-center'>
        <h1 className='text-slate-100 font-bold text-9xl'>?</h1>
      </div>
      <div className='h-[1px] w-full bg-zinc-700'></div>
      <p className='text-center text-slate-100 font-light text-[16px] pt-4'>
        Нажмите на карту, чтобы узнать, кто вы!
      </p>
    </div>
  )
}

export default MysteriousCard