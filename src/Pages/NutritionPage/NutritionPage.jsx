import './NutritionPage.css';
import { useContext } from 'react';
import { DataContext } from '../../Components/DataContext/DataContext';
import { useOutletContext } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";

function NutritionPage() {

  const { usersContents, loginValidate, nameUser } = useContext(DataContext)

  const { compactUserName } = useOutletContext()

  return (
    <div className='nutrition-page-styles'>
      {loginValidate && <div className='banner-nutrition-page'></div>}

      {/* Static Content */}
      {/* Victor Static - Static User 1 */}
      {nameUser.toLowerCase().trim() === 'Victor Static'.toLowerCase() && loginValidate &&
        <div
          key='static-victor-static-id'
          className='cards-info-nutrition'
        >
          <h2 className='cards-info-nutrition-title'>Nutrition - {compactUserName('Victor Static', 15)}</h2>

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
          <h2 className='cards-info-nutrition-title'>Nutrition - {compactUserName('Leimar', 15)}</h2>

          <div className='cards-info-nutrition-itens'>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Suplementos: Whey, Creatina</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Café da Manhã: Café, Ovos, Manteiga, Abacate</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Almoço: Carne, Frango, Arroz, Feijão, Batata Doce, Mandioca</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Lanche: Vitamina de Banana, Pão, Ovos</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Jantar: Carne, Frango, Arroz, Feijão, Batata Doce, Mandioca</p>
            <p className='cards-info-nutrition-item'><FaCheck className='iconCheckNutrition' />Ceia: Chá, Castanha, Amendoim </p>
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
          <h2 className='cards-info-nutrition-title'>Nutrition - {compactUserName(user.name, 15)}</h2>

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
