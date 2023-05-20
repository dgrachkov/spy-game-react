import { Link } from 'react-router-dom'
import SettingsList from "../components/Settings/SettingsList";

const Settings = ({parameters, changeParameters, changeLocation}) => {
  return (
    <div className="bg-[#18181b]">
      <div className='max-w-3xl mx-auto px-3 pt-12 pb-10'>
        <h2 className='text-slate-100 font-medium text-2xl text-center'>
          Настройки игры
        </h2>
        <SettingsList 
          changeParameters={changeParameters}
          parameters={parameters} 
          changeLocation={changeLocation}
        />
        <div className="flex justify-center">
          <Link to='/' className='btn mt-7 text-center m-auto block text-lg text-slate-100 px-7 py-3 rounded-md font-medium'>
            Готово
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Settings