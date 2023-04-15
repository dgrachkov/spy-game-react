import { useState } from "react"
import { Link } from 'react-router-dom'
import ModalForm from "../components/ModalForm"

import SettingsList from "../components/SettingsList";

const Settings = ({parameters, setParameters}) => {
  const [selectedParameters, setSelectedParameters] = useState('');
  const [modalForm, setModalForm] = useState(false);

  function selectParameters(parameter) {
    setSelectedParameters(parameter)
  }

  return (
    <div className='max-w-3xl mx-auto px-3 py-12'>
      <h2 className='text-slate-100 font-medium text-2xl text-center'>Настройки игры</h2>
      <SettingsList 
        parameters={parameters} 
        setModalForm={setModalForm} 
        selectParameters={selectParameters}
      />
      <ModalForm 
        parameters={parameters}
        active={modalForm} selectedParameters={selectedParameters} 
        setActive={setModalForm}
      />
      <div className="flex justify-center">
        <Link to='/' className='mt-7 text-center m-auto block text-lg bg-zinc-700 text-slate-100 px-5 py-3 rounded-md font-medium duration-300 hover:bg-zinc-600'>
          Готово
        </Link>
      </div>
    </div>
  )
}

export default Settings