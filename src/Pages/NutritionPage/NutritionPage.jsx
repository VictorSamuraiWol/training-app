import './NutritionPage.css';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../Components/DataContext/DataContext';
import { useOutletContext } from 'react-router-dom';
import { GiMuscleUp } from "react-icons/gi";

function NutritionPage() {

  const { staticUsersContents, dbUsers, loginValidate, nameUser, setAbleNutritionPage, setTypeTrain, setQuickAccessTypeName } = useContext(DataContext)

  const { compactUserName } = useOutletContext()

  useEffect(() => {
    setAbleNutritionPage(true)
    setTypeTrain('')
    setQuickAccessTypeName('nutrition')

    return () => {
      setAbleNutritionPage(false) // runs on component unmount
    } 

  }, [])

  return (
    <div className='nutrition-page-styles'>
      {loginValidate && <div className='banner-nutrition-page'></div>}

      {/* Static and Dynamic User Contents */}
      {(staticUsersContents || dbUsers) && loginValidate && [...(staticUsersContents), ...(dbUsers)]
      .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
        .map(user => ({id: user.id, name: user.name, nutrition: user.nutrition}))
        .map(idNameNutrition => (
        <div
          key={idNameNutrition.id}
          className='cards-info-nutrition'
        >
          <h2 className='cards-info-nutrition-title'>Nutrition - {compactUserName(idNameNutrition.name, 15)}</h2>

          <div className='cards-info-nutrition-itens'>

            {idNameNutrition.nutrition.map((nutri, indice) => ( 
              nutri[0] && nutri[1] && <div key={indice} className='cards-info-nutrition-itens-icon-item'>
                <GiMuscleUp className='iconMuscleNutrition' />
                <p className='cards-info-nutrition-item'>{nutri[0]} {nutri[1].join(", ")}</p>

              </div>
            ))}

          </div>

        </div>
      ))}
      
    </div>
  )

}

export default NutritionPage;
