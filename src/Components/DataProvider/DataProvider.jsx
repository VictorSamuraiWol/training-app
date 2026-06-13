import './DataProvider.css';
import { DataContext } from '../DataContext/DataContext';
import { useEffect, useState } from 'react';
import { getAllClients } from '../Supabase/supabaseRequests/supabaseRequests'
import db from '../../../db.json'

export default function DataProvider({ children }) {

  const [userId, setUserId] = useState('')
  const [typeTrain, setTypeTrain] = useState('')
  const [loader, setLoader] = useState(false)
  const [loginValidate, setLoginValidate] = useState(false)
  const [nameUser, setNameUser] = useState('')
  const [ableExercisesPage, setAbleExercisesPage] = useState(false)
  const [ableNutritionPage, setAbleNutritionPage] = useState(false)
  const [ableNotesPage, setAbleNotesPage] = useState(false)
  const [dbUsers, setDbUsers] = useState([])
  const [insertError, setInsertError] = useState(null)
  const [quickAccessTypeName, setQuickAccessTypeName] = useState('')

  // clients List Json
  const clientsDataJson = db.clients

  // get all clients
  useEffect(() => {
    async function fetchClients() {
      setLoader(true)

      const clients = await getAllClients()

      if (clients) {
        setLoader(false)
        setDbUsers(clients)

      }

    }

    fetchClients()

  }, [])

  {/* Static Users */}
  const staticUsersContents = [
    {
      "name" : "Leimar",
      "weight": "87 kgs",
      "height": "1,75 cm",
      "exercises": [[{"type": "A"}, {"exercises": [
                                                    [{"exercise": "Supino Horizontal: 1x16-20 (60% da carga) + 5x12-14 (20kgs cada)"}, {"gif": "barbellBenchPress"}], 
                                                    [{"exercise": "Voador: 5x12-14 (5 barras)"}, {"gif": "peckdeck"}], 
                                                    [{"exercise": "Elevação Frontal: 4x7-9 (3 barras)"}, {"gif": "dumbbellFrontRaise"}], 
                                                    [{"exercise": "Elevação Lateral: 4x7-9 (3 barras)"}, {"gif": "dumbbellLateralRaise"}], 
                                                    [{"exercise": "Remada Alta: 4x12-14 (5 barras)"}, {"gif": "barbellUprightRow"}]
                                                  ]}], 
                    [{"type": "B"}, {"exercises": [
                                                    [{"exercise": "Leg Press: 1x16-20 (60% da carga) + 3x12-14 (30kgs cada)"}, {"gif": "legPress"}], 
                                                    [{"exercise": "Stiff: 1x16-20 (60% da carga) + 3x12-14 (barra)"}, {"gif": "stiff"}], 
                                                    [{"exercise": "Mesa Flexora: 3x12-14 (5 barras)"}, {"gif": "legCurlMachine"}], 
                                                    [{"exercise": "Cadeira Extensora: 3x12-14 (5 barras)"}, {"gif": "legExtensionMachine"}], 
                                                    [{"exercise": "Abdominal supra: 3x12-14 (peso do corpo)"}, {"gif": "abdominalCrunch"}], 
                                                    [{"exercise": "Prancha: 30s"}, {"gif": "plank"}]
                                                  ]}],
                    [{"type": "C"}, {"exercises": [
                                                    [{"exercise": "Remada na máquina: 1x16-20 (60% da carga) + 5x12-14 (5 barras)"}, {"gif": "seatedRowMachine"}], 
                                                    [{"exercise": "Puxador: 5x12-14 (5 barras)"}, {"gif": "latPulldown"}], 
                                                    [{"exercise": "Remada Alta: 4x12-14 (5 barras)"}, {"gif": "barbellUprightRow"}], 
                                                    [{"exercise": "Rosca Punho: 3x12-14 (20kgs)"}, {"gif": "barbellWristCurl"}], 
                                                    [{"exercise": "Rosca Punho Invertida: 3x12-14 (20kgs)"}, {"gif": "barbellReverseWristCurl"}]
                                                  ]}],
                    [{"type": "D"}, {"exercises": [
                                                    [{"exercise": "HIIT (burpess, polichinelo, pular corda, etc): 10-15 min"}, {"gif": "hiit"}], 
                                                    [{"exercise": "Abdominal supra: 3x12-14 (peso do corpo)"}, {"gif": "abdominalCrunch"}], 
                                                    [{"exercise": "Abdominal oblíquo: 3x12-14 (peso do corpo)"}, {"gif": "obliqueCrunch"}], 
                                                    [{"exercise": "Abdominal infra: 3x12-14 (peso do corpo)"}, {"gif": "lyingLegRaise"}], 
                                                    [{"exercise": "Prancha: 30s"}, {"gif": "plank"}]
                                                  ]}],
                    [{"type": "E"}, {"exercises": [
                                                    [{"exercise": "Triceps Testa com Barra: 1x12-14 (60% da carga) + 3x7-9 (15kgs cada)"}, {"gif": "barbellSkullCrusher"}], 
                                                    [{"exercise": "Triceps Francês: 3x7-9 (20kgs)"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "Triceps Corda: 3x7-9 (8 barras)"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "Elevação Frontal: 4x7-9 (3 barras)"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "Elevação Lateral: 4x7-9 (3 barras)"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "Panturrilha em pé: 1x16-20 (60% da carga) + 3x12-14 (20kgs cada)"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "Panturrilha sentado: 3x12-14 (20kgs cada)"}, {"gif": "waitingTheExercise"}]
                                                  ]}],
                    [{"type": "F"}, {"exercises": [
                                                    [{"exercise": "Rosca Direta: 1x12-14 (60% da carga) + 3x7-9 (15kgs cada)"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "Biceps Concentrado: 3x7-9 (10kgs)"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "Biceps Alternado: 3x7-9 (10kgs)"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "Rosca Punho: 3x12-14 (10kgs cada)"}, {"gif": "barbellWristCurl"}], 
                                                    [{"exercise": "Rosca Punho Invertida: 3x12-14 (10kgs cada)"}, {"gif": "barbellReverseWristCurl"}], 
                                                    [{"exercise": "Abdominal oblíquo: 3x12-14 (peso do corpo)"}, {"gif": "obliqueCrunch"}], 
                                                    [{"exercise": "Abdominal infra: 3x12-14 (peso do corpo)"}, {"gif": "waitingTheExercise"}]
                                                  ]}]
                   ],
      "nutrition":  [
                      ["Suplementos:", ["Whey", "Creatina", "Dextrose"]], 
                      ["Café da Manhã:", ["Café", "Ovos", "Manteiga", "Abacate"]],
                      ["Almoço:", ["Carne", "Frango", "Arroz", "Feijão", "Batata Doce", "Mandioca"]], 
                      ["Lanche:", ["Vitamina de Banana", "Pão", "Ovos"]], 
                      ["Jantar:", ["Carne", "Frango", "Arroz", "Feijão", "Batata Doce", "Mandioca"]], 
                      ["Ceia:", ["Chá", "Castanha", "Amendoim"]]
                    ],
      "notes": ["Descanso entre repetições: 1 min", "Descanso entre séries: 1-3 min"],
      "password": "Leimar",
      "image_profile": "profileLeimar",
      "audio": "audio2",
      "video_yt": [
                    {"name": "ALOK MIX 2025 - MELHORES MÚSICAS ELETRÔNICAS DE 2025 - ALIVE", "id": "QBC0KZ7ZQro?si=aVtIHWXTDMghcWaR"}, 
                    {"name": "ALOK @ TOMORROWLAND WINTER 2026", "id": "iP-t3nMX9wQ?si=wTt5XpDiE69IFWwx"}, 
                    {"name": "Alok | Tomorrowland Brasil 2025", "id": "hbXhiCyGYx0?si=dUklTTgtlr6SgrbM"}, 
                    {"name": "Alok | Tomorrowland Brasil 2024", "id": "0MZQtSQG4Ec?si=txCOfZMuUvh6PDMz"}, 
                    {"name": "Alok | Tomorrowland 2023", "id": "YFwzvjJp0q4?si=S7zguMbezUpNNXNE"}
                 ],
      "id": "Leimar"
    }

  ]

  const value = {
    staticUsersContents, 
    userId, 
    setUserId,
    typeTrain, 
    setTypeTrain,
    loader,
    loginValidate, 
    setLoginValidate,
    nameUser, 
    setNameUser,
    ableExercisesPage, 
    setAbleExercisesPage,
    ableNutritionPage, 
    setAbleNutritionPage,
    ableNotesPage, 
    setAbleNotesPage,
    dbUsers,
    insertError, 
    setInsertError,
    clientsDataJson,
    quickAccessTypeName, 
    setQuickAccessTypeName
  }

  return (        
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider> 
  )

}
