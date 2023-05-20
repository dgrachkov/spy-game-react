const SettingsLocationItem = ({currentIndex, setCurrentIndex, changeLocation}) => {
  const locations = [
    {title: 'Фильмы', img: 'films'},
    {title: 'Места', img: 'places'},
  ];

  function nextLocation() {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex >= locations.length - 1) {
      setCurrentIndex(0);
    }
  }

  function prevLocation() {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex <= 0) {
      setCurrentIndex(locations.length - 1);
    }
  }

  function confirmLocation() {
    const a = {index: currentIndex, title: locations[currentIndex].title}
    changeLocation(a);
  }

  return (
    <div className='mt-2 pt-4 pb-2 w-full border-t border-zinc-600'>
      <div 
        className='flex justify-center items-center h-52 sm:h-72 w-full rounded-lg background background_settings' 
        onClick={e => e.stopPropagation()}
        style={{ backgroundImage: `url(/${locations[currentIndex].img}_background.jpeg)` }}
      >
        <div className="absolute top-0 right-0">
          <img src="/icons/information.svg" className='w-6 h-6 mt-2 mr-2'/>
        </div>
        <div className="absolute flex justify-between w-full px-2">
          <img 
            src='/icons/left-arrow.svg'
            className='w-7 h-7'
            onClick={prevLocation}
          />
          <h2 className="text-slate-100 text-lg sm:text-xl">
            {locations[currentIndex].title}
          </h2>
          <img 
            src='/icons/right-arrow.svg'
            className='w-7 h-7'
            onClick={nextLocation}
          />
        </div>
      </div>
      <button 
        onClick={confirmLocation}
        className='mt-4 bg-zinc-600 text-slate-100 py-2 px-4 rounded-lg'>
        Принять
      </button>
    </div>
  )
}

export default SettingsLocationItem