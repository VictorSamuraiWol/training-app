import './CreateAllClientsDB.css';
import { MdGroupAdd } from 'react-icons/md';

function CreateAllClientsDB({ onClick, onMouseOver, onMouseLeave, ableDescriptionIconsMenu, 
  descriptionIconName, insertError }) {

  return (
    <div 
      className='container-decription-add-clients'
    >
      {ableDescriptionIconsMenu && descriptionIconName === 'Create All Clients' &&
        <span
          className='descriptionIconsMenu'
        >
          {descriptionIconName}
        </span>
      }

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
