import SettingsItem from "./SettingsItem"

const SettingsList = ({parameters, changeParameters}) => {
  return (
    <ul className='mt-5'>
      <SettingsItem 
        title='Игроки' img='players'
        changeParameters={changeParameters}
        value={parameters.players.length}
      />
      <SettingsItem 
        title='Шпионы' img='spy'
        value={parameters.spy}
        changeParameters={changeParameters}
      />
      <SettingsItem 
        title='Время' img='time'
        value={parameters.time}
        changeParameters={changeParameters}
      />
    </ul>
  )
}

export default SettingsList