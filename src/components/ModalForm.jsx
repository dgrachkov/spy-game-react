import { useState } from "react"

const ModalForm = ({parameters, active, setActive, selectedParameters}) => {
  const [settingValue, setSettingValue] = useState('');

  function changeParameters() {
    
  }

  function closeModal() {
    setSettingValue('');
    setActive(false);
  }

  return active && (
    <div className='modal' onClick={closeModal}>
      <div className='modal_form' onClick={e => e.stopPropagation()}>
        <div className="flex justify-end p-3">
          <img 
            onClick={closeModal}
            src="/icons/close.svg"
            className="w-8 h-8 cursor-pointer"
          />
        </div>
        <div className="px-4 pt-2 pb-4">
          <h3 className="text-lg flex font-medium text-slate-100">{selectedParameters.text}
            <p className="ml-3">{selectedParameters.value}</p>
          </h3>
          <input 
            className="w-full text-[15px] text-slate-100 mt-3 border-2 border-zinc-700 rounded-md p-2" 
            placeholder="Введите значение"
            value={settingValue}
            onChange={(e) => setSettingValue(e.target.value)}
          />
          <div className="flex justify-center">
            <button 
              onClick={changeParameters}
              className='mt-5 block text-lg bg-sky-700 text-slate-100 px-7 py-3 rounded-md font-medium duration-300 hover:bg-sky-600'>
              Подтвердить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalForm