import './DescriptionIconsMenu.css';

function DescriptionIconsMenu({ ableDescriptionIconsMenu, descriptionIconName, name }) {

  return (
    ableDescriptionIconsMenu && descriptionIconName === name &&
      <span
        className='descriptionIconsMenu'
      >
        {descriptionIconName}
      </span>
  )

}

export default DescriptionIconsMenu;
