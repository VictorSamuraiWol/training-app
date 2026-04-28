import './NutritionPage.css';
import ErrorLogin from '../../Components/ErrorLogin/ErrorLogin';
import { useContext } from 'react';
import { DataContext } from '../../Components/DataContext/DataContext';
import { useOutletContext } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";

function NutritionPage() {

  const { usersContents, loginValidate, nameUser } = useContext(DataContext)

  const { compactUserName } = useOutletContext()

  return (
    <div className='nutrition-page-styles'>
      {!loginValidate && <ErrorLogin />}

      {loginValidate && <div className='banner-nutrition-page'></div>}

      {/* Static Content */}
      {/* Victor Static - Static User 1 */}
      {nameUser.toLowerCase().trim() === 'Victor Static'.toLowerCase() && loginValidate &&
        <div
          key='static-victor-static-id'
          className='cards-info-nutrition'
        >
          <h2 className='cards-info-nutrition-title'>Nutrition - Victor Static</h2>

          <div className='cards-info-nutrition-itens'>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Supplements: Whey, Creatina, Dextrose</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Breakfast: Coffee, Whole Wheat Bread, Eggs, Avocado, Mustard, Onion</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Snack: Yogurt, Banana, Oat, Papaya, Pineapple</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Lunch: Grape Juice, Chicken, Rice, Beans, Cassava, Beetroot, Carrot</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Snack: Coffee, Low-carb Cake</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Dinner: Grape Juice, Meat, Rice, Pasta, Sweet Potato, Beetroot, Carrot</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Late-night Snack: Tea, Nut, Apple</p>
          </div>

        </div>
      }

      {/* Leimar - Static User 2 */}
      {nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && loginValidate &&
        <div
          key='static-leimar-id'
          className='cards-info-nutrition'
        >
          <h2 className='cards-info-nutrition-title'>Nutrition - Leimar</h2>

          <div className='cards-info-nutrition-itens'>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Supplements: Whey, Creatina</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Breakfast: Coffee, 5 Eggs, Bread</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Snack: Whey, 3 Bananas</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Lunch: Meat, Eggs, Rice, Beans</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Snack: Banana Smoothie, Whey, Bread, Eggs</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Dinner: Meat, Eggs, Rice, Beans</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Late-night Snack: Eggs</p>
          </div>

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
          <h2 className='cards-info-nutrition-title'>Nutrition - {compactUserName(user.name)}</h2>

          <div className='cards-info-nutrition-itens'>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />{user.nutrition[0][0]} {user.nutrition[0].slice(1).join(", ")}</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />{user.nutrition[1][0]} {user.nutrition[1].slice(1).join(", ")}</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />{user.nutrition[2][0]} {user.nutrition[2].slice(1).join(", ")}</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />{user.nutrition[3][0]} {user.nutrition[3].slice(1).join(", ")}</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />{user.nutrition[4][0]} {user.nutrition[4].slice(1).join(", ")}</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />{user.nutrition[5][0]} {user.nutrition[5].slice(1).join(", ")}</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />{user.nutrition[6][0]} {user.nutrition[6].slice(1).join(", ")}</p>

          </div>

        </div>

      ))}

    </div>
  )
}

export default NutritionPage;
