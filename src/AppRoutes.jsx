import DataProvider from './Components/DataProvider/DataProvider';
import BasePage from './Pages/BasePage/BasePage';
import ExercisesPage from './Pages/ExercisesPage/ExercisesPage';
import NutritionPage from './Pages/NutritionPage/NutritionPage';
import TrainingPage from './Pages/TrainingPage/TrainingPage';
import NotesPage from './Pages/NotesPage/NotesPage';
import PageNotFound from './Pages/NotFoundPage/NotFoundPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DragTest from './Components/PlayerVideoYT/PlayerVideoYT';

function AppRoutes() {
  return ( 
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BasePage />} >
            <Route index element={<TrainingPage />} />
            <Route path='/exercises-page' element={<ExercisesPage />} />
            <Route path='/nutrition-page' element={<NutritionPage />} />
            <Route path='/notes-page' element={<NotesPage />} />

          </Route>

          <Route path='*' element={<PageNotFound />} />

        </Routes>

      </BrowserRouter>

    </DataProvider> 

  );
}

export default AppRoutes;
