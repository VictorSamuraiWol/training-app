import './NutritionPage.css';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../Components/DataContext/DataContext';
import { useOutletContext } from 'react-router-dom';
import { GiMuscleUp } from "react-icons/gi";

function NutritionPage() {

  const { staticUsersContents, dynamicUsersContents, loginValidate, nameUser, setAbleNutritionPage } = useContext(DataContext)

  const { compactUserName } = useOutletContext()

  useEffect(() => {
    setAbleNutritionPage(true)

    return () => {
      setAbleNutritionPage(false) // runs on component unmount
    } 

  }, [])

  return (
    <div className='nutrition-page-styles'>
      {loginValidate && <div className='banner-nutrition-page'></div>}

      {/* Static and Dynamic User Contents */}
      {(staticUsersContents || dynamicUsersContents) && loginValidate && [...(staticUsersContents), ...(dynamicUsersContents)]
      .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim()) 
      .map(user => (
        <div
          key={user.id}
          className='cards-info-nutrition'
        >
          <h2 className='cards-info-nutrition-title'>Nutrition - {compactUserName(user.name, 15)}</h2>

          <div className='cards-info-nutrition-itens'>
            {user.nutrition[0][1] && <div className='cards-info-nutrition-itens-icon-item'>
              <GiMuscleUp className='iconMuscleNutrition' />
              <p className='cards-info-nutrition-item'>{user.nutrition[0][0]} {user.nutrition[0].slice(1).join(", ")}</p>

            </div>}

            {user.nutrition[1][1] && <div className='cards-info-nutrition-itens-icon-item'>
              <GiMuscleUp className='iconMuscleNutrition' />
              <p className='cards-info-nutrition-item'>{user.nutrition[1][0]} {user.nutrition[1].slice(1).join(", ")}</p>

            </div>}

            {user.nutrition[2][1] && <div className='cards-info-nutrition-itens-icon-item'>
              <GiMuscleUp className='iconMuscleNutrition' />
              <p className='cards-info-nutrition-item'>{user.nutrition[2][0]} {user.nutrition[2].slice(1).join(", ")}</p>

            </div>}

            {user.nutrition[3][1] && <div className='cards-info-nutrition-itens-icon-item'>
              <GiMuscleUp className='iconMuscleNutrition' />
              <p className='cards-info-nutrition-item'>{user.nutrition[3][0]} {user.nutrition[3].slice(1).join(", ")}</p>

            </div>}

            {user.nutrition[4][1] && <div className='cards-info-nutrition-itens-icon-item'>
              <GiMuscleUp className='iconMuscleNutrition' />
              <p className='cards-info-nutrition-item'>{user.nutrition[4][0]} {user.nutrition[4].slice(1).join(", ")}</p>

            </div>}

            {user.nutrition[5][1] && <div className='cards-info-nutrition-itens-icon-item'>
              <GiMuscleUp className='iconMuscleNutrition' />
              <p className='cards-info-nutrition-item'>{user.nutrition[5][0]} {user.nutrition[5].slice(1).join(", ")}</p>

            </div>}

            {user.nutrition[6][1] && <div className='cards-info-nutrition-itens-icon-item'> 
              <GiMuscleUp className='iconMuscleNutrition' />
              <p className='cards-info-nutrition-item'>{user.nutrition[6][0]} {user.nutrition[6].slice(1).join(", ")}</p>

            </div>}            

          </div>

        </div>))}

    </div>
  )

}

export default NutritionPage;
