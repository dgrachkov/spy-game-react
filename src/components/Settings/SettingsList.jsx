import SettingsItem from "./SettingsItem"

const SettingsList = ({parameters, changeParameters, changeLocation}) => {
  return (
    <ul className='mt-5'>
      <SettingsItem 
        title='Игроки' img='players'
        changeParameters={changeParameters}
        value={parameters.players.length}
      />
      <SettingsItem 
        title='Время' img='time'
        value={parameters.time}
        changeParameters={changeParameters}
      />
      <SettingsItem 
        title='Локация' img='location'
        value={parameters.locationName}
        changeParameters={changeParameters}
        changeLocation={changeLocation}
      />
    </ul>
  )
}

export default SettingsList