import './NutritionPage.css';
import ErrorLogin from '../../Components/ErrorLogin/ErrorLogin';
import { useContext } from 'react';
import { DataContext } from '../../Components/DataContext/DataContext';

function NutritionPage() {

  const { usersContents, loginValidate, nameUser } = useContext(DataContext)

  return (
    <div className='nutrition-page-styles'>
      {!loginValidate && <ErrorLogin />}

      {/* Static Content */}
      {/* Static User 1 */}
      {nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && loginValidate &&
        <div
          key='static-leimar-id'
          className='cards-info-nutrition'
        >
          <h2 className='cards-info-nutrition-title'>Nutrition - Leimar</h2>
          <p className='cards-info-nutrition-itens'>Supplements: Example</p>
          <p className='cards-info-nutrition-itens'>Breakfast: Example</p>
          <p className='cards-info-nutrition-itens'>Snack: Example</p>
          <p className='cards-info-nutrition-itens'>Lunch: Example</p>
          <p className='cards-info-nutrition-itens'>Snack: Example</p>
          <p className='cards-info-nutrition-itens'>Dinner: Example</p>
          <p className='cards-info-nutrition-itens'>Late-night Snack: Example</p>
        </div>
      }

      {/* Static User 2 */}
      {nameUser.toLowerCase().trim() === 'New User 1'.toLowerCase() && loginValidate &&
        <div
          key='static-newuser1-id'
          className='cards-info-nutrition'
        >
          <h2 className='cards-info-nutrition-title'>Nutrition - New User 1</h2>
          <p className='cards-info-nutrition-itens'>Supplements: Example</p>
          <p className='cards-info-nutrition-itens'>Breakfast: Example</p>
          <p className='cards-info-nutrition-itens'>Snack: Example</p>
          <p className='cards-info-nutrition-itens'>Lunch: Example</p>
          <p className='cards-info-nutrition-itens'>Snack: Example</p>
          <p className='cards-info-nutrition-itens'>Dinner: Example</p>
          <p className='cards-info-nutrition-itens'>Late-night Snack: Example</p>
        </div>
      }
      
      {/* Dinamic Content */}
      {loginValidate && usersContents && usersContents
      .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim()) 
      .map(user => (
        <div
          key={user.id}
          className='cards-info-nutrition'
        >
          <h2 className='cards-info-nutrition-title'>Nutrition - {user.name}</h2>
          <p className='cards-info-nutrition-itens'>{user.nutrition[0][0]} {user.nutrition[0].slice(1).join(", ")}</p>
          <p className='cards-info-nutrition-itens'>{user.nutrition[1][0]} {user.nutrition[1].slice(1).join(", ")}</p>
          <p className='cards-info-nutrition-itens'>{user.nutrition[2][0]} {user.nutrition[2].slice(1).join(", ")}</p>
          <p className='cards-info-nutrition-itens'>{user.nutrition[3][0]} {user.nutrition[3].slice(1).join(", ")}</p>
          <p className='cards-info-nutrition-itens'>{user.nutrition[4][0]} {user.nutrition[4].slice(1).join(", ")}</p>
          <p className='cards-info-nutrition-itens'>{user.nutrition[5][0]} {user.nutrition[5].slice(1).join(", ")}</p>
          <p className='cards-info-nutrition-itens'>{user.nutrition[6][0]} {user.nutrition[6].slice(1).join(", ")}</p>

        </div>

      ))}

    </div>
  )
}

export default NutritionPage;
