import './CreateAllClientsDB.css';
import DescriptionIconsMenu from '../../DescriptionIconsMenu/DescriptionIconsMenu';
import { MdGroupAdd } from 'react-icons/md';

function CreateAllClientsDB({ onClick, onMouseOver, onMouseLeave, ableDescriptionIconsMenu, 
  descriptionIconName, errorMessageCreateAllClients }) {

  return (
    <div 
      className='container-decription-add-clients'
    >
      <DescriptionIconsMenu 
        ableDescriptionIconsMenu={ableDescriptionIconsMenu}
        descriptionIconName={descriptionIconName}
        name='Create All Clients'
      />

      {errorMessageCreateAllClients &&
        <span 
          className="error-msg-add-clients"
        >
          {errorMessageCreateAllClients}
        </span>
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
