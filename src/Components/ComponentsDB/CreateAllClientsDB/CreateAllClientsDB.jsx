import './CreateAllClientsDB.css';
import DescriptionIconsMenu from '../../DescriptionIconsMenu/DescriptionIconsMenu';
import { MdGroupAdd } from 'react-icons/md';

function CreateAllClientsDB({ onClick, onMouseOver, onMouseLeave, ableDescriptionIconsMenu, 
  descriptionIconName, insertError }) {

  return (
    <div 
      className='container-decription-add-clients'
    >
      <DescriptionIconsMenu 
        ableDescriptionIconsMenu={ableDescriptionIconsMenu}
        descriptionIconName={descriptionIconName}
        name='Create All Clients'
      />

      {insertError &&
        <div 
          className="error-msg-add-clients"
        >
          {insertError}
        </div>
      }

      <MdGroupAdd 
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        className='icon-add-clients'
      />

    </div>    
  )

}

export default CreateAllClientsDB;
