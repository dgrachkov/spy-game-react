import SettingsItem from "../components/SettingsItem";

const SettingsList = ({parameters, setModalForm, selectParameters}) => {
  return (
    <ul className='mt-5'>
      <SettingsItem 
        text='Игроки' img='players'
        value={parameters.players}
        setActive={setModalForm} selectParameters={selectParameters}
      />
      <SettingsItem 
        text='Шпионы' img='spy'
        value={parameters.spy}
        setActive={setModalForm} selectParameters={selectParameters}
      />
      <SettingsItem 
        text='Время' img='time'
        value={parameters.time}
        setActive={setModalForm} selectParameters={selectParameters}
      />
    </ul>
  )
}

export default SettingsList