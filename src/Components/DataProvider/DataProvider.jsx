import './DataProvider.css';
import supabase from '../SupabaseConfig/SupabaseConfig';
import { DataContext } from '../DataContext/DataContext';
import { useEffect, useState } from 'react';

export default function DataProvider({ children }) {

  const [dynamicUsersContents, setDynamicUsersContents] = useState('')
  const [userId, setUserId] = useState('')
  const [typeTrain, setTypeTrain] = useState('')
  const [loader, setLoader] = useState(false)
  const [loginValidate, setLoginValidate] = useState(false)
  const [nameUser, setNameUser] = useState('')
  const [ableExercisesPage, setAbleExercisesPage] = useState(false)
  const [ableNutritionPage, setAbleNutritionPage] = useState(false)
  const [ableNotesPage, setAbleNotesPage] = useState(false)
  const [dbUsers, setDbUsers] = useState([])
  const [insertError, setInsertError] = useState(null);

// ===========================
//  Clients List INSERT in Supabase
// ===========================
const clientsData = [
  {
    "name" : "2",
    "weight": "Example",
    "height": "Example",
    "exercises": [[{"type": "A"}, {"exercises": [
                                                  [{"exercise": "exercise1"}, {"gif": "waitingTheExercise"}], 
                                                  [{"exercise": "exercise2"}, {"gif": "waitingTheExercise"}], 
                                                  [{"exercise": "exercise3"}, {"gif": "waitingTheExercise"}], 
                                                  [{"exercise": "exercise4"}, {"gif": "waitingTheExercise"}], 
                                                  [{"exercise": "exercise5"}, {"gif": "waitingTheExercise"}], 
                                                  [{"exercise": "exercise6"}, {"gif": "waitingTheExercise"}], 
                                                  [{"exercise": "exercise7"}, {"gif": "waitingTheExercise"}], 
                                                  [{"exercise": "exercise8"}, {"gif": "waitingTheExercise"}], 
                                                  [{"exercise": "exercise9"}, {"gif": "waitingTheExercise"}], 
                                                  [{"exercise": "exercise10"}, {"gif": "waitingTheExercise"}]
                                                ]}],
                  [{"type": "B"}, {"exercises": [
                                                  [{"exercise": "exercise1"}, {"gif": "waitingTheExercise"}], 
                                                  [{"exercise": "exercise2"}, {"gif": "waitingTheExercise"}]
                                                ]}],
                  [{"type": "C"}, {"exercises": [
                                                  [{"exercise": "exercise1"}, {"gif": "waitingTheExercise"}]
                                                ]}]
                  ],
    "nutrition":  [
                    ["Supplements:", ["Example"]], 
                    ["Breakfast:", ["Example"]], 
                    ["Snack:", ["Example"]], 
                    ["Lunch:", ["Example"]], 
                    ["Snack:", ["Example"]], 
                    ["Dinner:", ["Example"]], 
                    ["Late-night Snack:", ["Example"]]
                  ],
    "notes": ["Example", "Example", "Example", "Example", "Example", "Example", "Example", "Example", "Example", "Example"],
    "password": "2",
    "image_profile": "example",
    "audio": "audio2",
    "video_yt": [
                  {"name": "The Best of Armin Only", "id": "vDe9pO6P84Q?si=3m0ht2pEGEE4Kl2t"}, 
                  {"name": "ALOK MIX 2025 - MELHORES MÚSICAS ELETRÔNICAS DE 2025 - ALIVE", "id": "QBC0KZ7ZQro?si=aVtIHWXTDMghcWaR"}
                ],
    "quick_access": [
                      [{"name": "A"}, {"path": "/exercises-page/A"}], 
                      [{"name": "B"}, {"path": "/exercises-page/B"}], 
                      [{"name": "C"}, {"path": "/exercises-page/C"}], 
                      [{"name": "nutrition"}, {"path": "/nutrition-page"}], 
                      [{"name": "notes"}, {"path": "/notes-page"}]
                    ],
    "id": "2"
  },
  {
    id: 'Victor Supabase',
    name: 'Victor Supabase',
    weight: '80 kgs',
    height: '1.69 cm',
    password: 'Victor Supabase',
    image_profile: 'profileVictor',
    audio: 'audio1',
    exercises: [
      [{type: 'A'}, {exercises: [
                                  [{exercise: 'Warm-up: HIIT - 10-15 min'}, {gif: 'hiit'}], 
                                  [{exercise: 'Biceps: 1x 12-14 (6kg - dumbbell) + (up) 4x 7-9 (7kg - dumbbell)'}, {gif: 'concentrationCurl'}], 
                                  [{exercise: 'Dumbbell Reverse Curl: (up) 4x 7-9 (6kg - dumbbell) (already warmed up)'}, {gif: 'dumbbellReverseCurl'}], 
                                  [{exercise: 'Dumbbell Shoulder Extension: 1x 12-14 (4kg - plates) + 3x 7-9 (5kg - plates)'}, {gif: 'waitingTheExercise'}], 
                                  [{exercise: 'Back: 1x 16-20 (8kg - dumbbell) + 2x 12-14 (10kg - dumbbell)'}, {gif: 'waitingTheExercise'}], 
                                  [{exercise: 'Trapezius: 1x 16-20 (10kg - dumbbell) + (up) 4x 12-14 (12kg - dumbbell)'}, {gif: 'waitingTheExercise'}], 
                                  [{exercise: 'Wrist Curl: 2x 12-14 (10kg - dumbbell) (already warmed up, no rest between reps)'}, {gif: 'barbellWristCurl'}], 
                                  [{exercise: 'Wrist Extension: 2x 12-14 (5kg - plate) (already warmed up, no rest between reps)'}, {gif: 'barbellReverseWristCurl'}], 
                                  [{exercise: 'Crunch (Abs): 1x 16-20 (bodyweight) + (up) 3x 12-14 (bodyweight)'}, {gif: 'abdominalCrunch'}], 
                                  [{exercise: 'Plank: 1x (35 seconds)'}, {gif: 'plank'}]
                                ]}],
      [{type: 'B'}, {exercises: [
                                  [{exercise: 'Warm-up: HIIT - 10-15 min'}, {gif: 'hiit'}], 
                                  [{exercise: 'Squat: 1x 16-20 (bodyweight) + 3x 12-14 (bodyweight)'}, {gif: 'waitingTheExercise'}], 
                                  [{exercise: 'Stiff (Romanian Deadlift): 1x 16-20 (bodyweight) + 3x 12-14 (bodyweight)'}, {gif: 'stiff'}], 
                                  [{exercise: 'Glute Bridge: 1x 16-20 (bodyweight) + 3x 12-14 (bodyweight)'}, {gif: 'waitingTheExercise'}], 
                                  [{exercise: 'Crunch (Abs): 1x 16-20 (bodyweight) + (up) 3x 12-14 (bodyweight)'}, {gif: 'abdominalCrunch'}], 
                                  [{exercise: 'Plank: 1x (35 seconds)'}, {gif: 'plank'}]
                                ]}],
      [{type: 'C'}, {exercises: [
                                  [{exercise: 'Warm-up: HIIT - 10-15 min'}, {gif: 'hiit'}], 
                                  [{exercise: 'Triceps: 1x 12-14 (6kg - dumbbell) + 3x 7-9 (8kg - dumbbell)'}, {gif: 'waitingTheExercise'}], 
                                  [{exercise: 'Front Raise: 1x 12-14 (4kg - plates) + 3x 7-9 (5kg - plates)'}, {gif: 'dumbbellFrontRaise'}], 
                                  [{exercise: 'Lateral Raise: 1x 12-14 (4kg - plates) + (up) 3x 7-9 (5kg - plates)'}, {gif: 'dumbbellLateralRaise'}], 
                                  [{exercise: 'Incline Push-up: 1x 16-20 + 3x 12-14 (bodyweight)'}, {gif: 'waitingTheExercise'}], 
                                  [{exercise: 'Wrist Curl: 2x 12-14 (10kg - dumbbell) (already warmed up, no rest between reps)'}, {gif: 'barbellWristCurl'}], 
                                  [{exercise: 'Wrist Extension: 2x 12-14 (5kg - plate) (already warmed up, no rest between reps)'}, {gif: 'barbellReverseWristCurl'}], 
                                  [{exercise: 'Crunch (Abs): 1x 16-20 (bodyweight) + (up) 3x 12-14 (bodyweight)'}, {gif: 'abdominalCrunch'}], 
                                  [{exercise: 'Plank: 1x (35 seconds)'}, {gif: 'plank'}]
                                ]}],
    ],
    nutrition: [
      ['Supplements:', ['Whey', 'Creatina', 'Dextrose']],
      ['Breakfast:', ['Coffee', 'Whole Wheat Bread', 'Eggs', 'Avocado', 'Mustard', 'Onion']],
      ['Snack:', ['Yogurt', 'Banana', 'Oat', 'Papaya', 'Pineapple']],
      ['Lunch:', ['Grape Juice', 'Chicken', 'Rice', 'Beans', 'Cassava', 'Beetroot', 'Carrot']],
      ['Snack:', ['Coffee', 'Low-carb Cake']],
      ['Dinner:', ['Grape Juice', 'Meat', 'Rice', 'Pasta', 'Sweet Potato', 'Beetroot', 'Carrot']],
      ['Late-night Snack:', ['Tea', 'Nut', 'Apple']]
    ],
    notes: [
      'Start date: 8 January 2026',
      'Rest between reps: 1 min',
      'Rest between sets: 1-3 min',
      'UP technique'
    ],
    video_yt: [
      {name: 'Alok | Portal do Amanhã', id: 'GgdnY3yIuIE?si=h-5Q60VtePrIWxaS' },
      {name: 'Armin van Buuren live at EDC Las Vegas 2026', id: 'n-MhD_TdzN4?si=T8ruZ0Ogr4taVYqW'},
      {name: 'The Best of Armin Only', id: 'vDe9pO6P84Q?si=3m0ht2pEGEE4Kl2t'},
      {name: 'Armin van Buuren live at A State of Trance 2026', id: 'ifbfwHkhhFc?si=-UEuR13jwNsl_BgD'},
      {name: 'Armin van Buuren live at UNTOLD Festival 2025', id: '-nNE8lDgJ4g?si=6_F4BVnaaUFps0ta'},
      {name: 'Armin van Buuren live at Ushuaïa, Ibiza 2025', id: 'yIBQX-F_Jjw?si=es6mErCPcGn9_0tm'},
      {name: 'Armin van Buuren live at A State of Trance, London 2025', id: 'lOq30ufGX-8?si=DVPoRkfTsvYFHpiq'},
      {name: 'ALOK @ TOMORROWLAND WINTER 2026', id: 'iP-t3nMX9wQ?si=VTtnRXXn5du8TmMO'}
    ],
    quick_access: [
      [{name: 'A'}, {path: '/exercises-page/A'}],
      [{name: 'B'}, {path: '/exercises-page/B'}],
      [{name: 'C'}, {path: '/exercises-page/C'}],
      [{name: 'nutrition'}, {path: '/nutrition-page'}],
      [{name: 'notes'}, {path: '/notes-page'}]
    ],
  }
]

// ===========================
//  Mapping JS → DB
// ===========================
function mapClientToDB(data) {
  return {
    id:            data.id,
    name:          data.name,
    weight:        data.weight,
    height:        data.height,
    password:      data.password,
    image_profile: data.image_profile,
    audio:         data.audio,
    exercises:     data.exercises,
    nutrition:     data.nutrition,
    notes:         data.notes,
    video_yt:      data.video_yt,
    quick_access:  data.quick_access,

  }
  
}
 
// ===========================
//  INSERT — add a client
// ===========================
// async function insertClient(data) {
//   const { error } = await supabase
//     .from('clients')
//     .insert(mapClientToDB(data))
 
//   if (error) {
//     console.error('Error inserting client:', error.message)

//     return false

//   }
 
//   console.log(`Client "${data.name}" successfully added!`)

//   return true

// }

// ===========================
//  INSERT — add all clients
// ===========================
async function insertAllClients(clients = clientsData) {
  const rows = clients.map(mapClientToDB)

  const { error } = await supabase
    .from('clients')
    .upsert(rows, { onConflict: 'id' }) // 👈 if id already exist, update


  if (error) {
    console.error('Error inserting clients:', error.message)

    if (error.code === '42501' || error.message?.includes('row-level security')) {
      setInsertError('Unauthorized access')
      setTimeout(() => setInsertError(null), 3000)

    } else {
      setInsertError('Error inserting clients.')

    }

    return false

  }

  setInsertError(null)
  console.log(`${rows.length} clients successfully added/updated!`)

  return true

}


// ===========================
//  SELECT — search client by id
// ===========================
// async function getClient(id) {
//   const { data, error } = await supabase
//     .from('clients')
//     .select('*')
//     .eq('id', id)
//     .single()
 
//   if (error) {
//     console.error('Error searching for client:', error.message)

//     return null

//   }
 
//   return data

// }

// ===========================
//  SELECT — search all clients
// ===========================
async function getAllClients() {
  const { data, error, status } = await supabase
    .from('clients')
    .select('*')
 
  if (error) {
    console.error('Error searching for clients:', error.message)

    return null

  }

  console.log('status supabase:', status)
 
  return data

}

// get all clients
useEffect(() => {
  async function fetchClients() {
    const clients = await getAllClients()

    setDbUsers(clients)

  }

  fetchClients()

}, [])

// ===========================
//  UPDATE — update specific field
// ===========================
// async function updateClient(id, fields) {
//   const { error } = await supabase
//     .from('clients')
//     .update(fields)
//     .eq('id', id)
 
//   if (error) {
//     console.error('Error updating client:', error.message)

//     return false

//   }
 
//   return true

// }
 
// ===========================
//  DELETE — delete client by id
// ===========================
// async function deleteClient(id) {
//   const { error } = await supabase
//     .from('clients')
//     .delete()
//     .eq('id', id)
 
//   if (error) {
//     console.error('Error deleting client:', error.message)

//     return false

//   }
 
//   console.log(`Client "${id}" successfully deleted!`)

//   return true

// }



  {/* Static Users */}
  const staticUsersContents = [
    {
      "name" : "0",
      "weight": "Example",
      "height": "Example",
      "exercises": [[{"type": "A"}, {"exercises": [
                                                    [{"exercise": "exercise1"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "exercise2"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "exercise3"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "exercise4"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "exercise5"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "exercise6"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "exercise7"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "exercise8"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "exercise9"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "exercise10"}, {"gif": "waitingTheExercise"}]
                                                  ]}],
                    [{"type": "B"}, {"exercises": [
                                                    [{"exercise": "exercise1"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "exercise2"}, {"gif": "waitingTheExercise"}]
                                                  ]}],
                    [{"type": "C"}, {"exercises": [
                                                    [{"exercise": "exercise1"}, {"gif": "waitingTheExercise"}]
                                                  ]}]
                   ],
      "nutrition":  [
                      ["Supplements:", ["Example"]], 
                      ["Breakfast:", ["Example"]], 
                      ["Snack:", ["Example"]], 
                      ["Lunch:", ["Example"]], 
                      ["Snack:", ["Example"]], 
                      ["Dinner:", ["Example"]], 
                      ["Late-night Snack:", ["Example"]]
                    ],
      "notes": ["Example", "Example", "Example", "Example", "Example", "Example", "Example", "Example", "Example", "Example"],
      "password": "0",
      "image_profile": "example",
      "audio": "audio2",
      "video_yt": [
                    {"name": "The Best of Armin Only", "id": "vDe9pO6P84Q?si=3m0ht2pEGEE4Kl2t"}, 
                    {"name": "ALOK MIX 2025 - MELHORES MÚSICAS ELETRÔNICAS DE 2025 - ALIVE", "id": "QBC0KZ7ZQro?si=aVtIHWXTDMghcWaR"}
                  ],
      "quick_access": [
                        [{"name": "A"}, {"path": "/exercises-page/A"}], 
                        [{"name": "B"}, {"path": "/exercises-page/B"}], 
                        [{"name": "C"}, {"path": "/exercises-page/C"}], 
                        [{"name": "nutrition"}, {"path": "/nutrition-page"}], 
                        [{"name": "notes"}, {"path": "/notes-page"}]
                      ],
      "id": "0"
    },
    {
      "name" : "Victor",
      "weight": "80 kgs",
      "height": "1.69 cm",
      "exercises": [[{"type": "A"}, {"exercises": [
                                                    [{"exercise": "Warm-up: HIIT - 10-15 min"}, {"gif": "hiit"}], 
                                                    [{"exercise": "Biceps: 1x 12-14 (6kg - dumbbell) + (up) 4x 7-9 (7kg - dumbbell)"}, {"gif": "concentrationCurl"}], 
                                                    [{"exercise": "Dumbbell Reverse Curl: (up) 4x 7-9 (6kg - dumbbell) (already warmed up)"}, {"gif": "dumbbellReverseCurl"}], 
                                                    [{"exercise": "Dumbbell Shoulder Extension: 1x 12-14 (4kg - plates) + 3x 7-9 (5kg - plates)"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "Back: 1x 16-20 (8kg - dumbbell) + 2x 12-14 (10kg - dumbbell)"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "Trapezius: 1x 16-20 (10kg - dumbbell) + (up) 4x 12-14 (12kg - dumbbell)"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "Wrist Curl: 2x 12-14 (10kg - dumbbell) (already warmed up, no rest between reps)"}, {"gif": "barbellWristCurl"}], 
                                                    [{"exercise": "Wrist Extension: 2x 12-14 (5kg - plate) (already warmed up, no rest between reps)"}, {"gif": "barbellReverseWristCurl"}], 
                                                    [{"exercise": "Crunch (Abs): 1x 16-20 (bodyweight) + (up) 3x 12-14 (bodyweight)"}, {"gif": "abdominalCrunch"}], 
                                                    [{"exercise": "Plank: 1x (35 seconds)"}, {"gif": "plank"}]
                                                  ]}],
                    [{"type": "B"}, {"exercises": [
                                                    [{"exercise": "Warm-up: HIIT - 10-15 min"}, {"gif": "hiit"}], 
                                                    [{"exercise": "Squat: 1x 16-20 (bodyweight) + 3x 12-14 (bodyweight)"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "Stiff (Romanian Deadlift): 1x 16-20 (bodyweight) + 3x 12-14 (bodyweight)"}, {"gif": "stiff"}], 
                                                    [{"exercise": "Glute Bridge: 1x 16-20 (bodyweight) + 3x 12-14 (bodyweight)"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "Crunch (Abs): 1x 16-20 (bodyweight) + (up) 3x 12-14 (bodyweight)"}, {"gif": "abdominalCrunch"}], 
                                                    [{"exercise": "Plank: 1x (35 seconds)"}, {"gif": "plank"}]
                                                  ]}],
                    [{"type": "C"}, {"exercises": [
                                                    [{"exercise": "Warm-up: HIIT - 10-15 min"}, {"gif": "hiit"}], 
                                                    [{"exercise": "Triceps: 1x 12-14 (6kg - dumbbell) + 3x 7-9 (8kg - dumbbell)"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "Front Raise: 1x 12-14 (4kg - plates) + 3x 7-9 (5kg - plates)"}, {"gif": "dumbbellFrontRaise"}], 
                                                    [{"exercise": "Lateral Raise: 1x 12-14 (4kg - plates) + (up) 3x 7-9 (5kg - plates)"}, {"gif": "dumbbellLateralRaise"}], 
                                                    [{"exercise": "Incline Push-up: 1x 16-20 + 3x 12-14 (bodyweight)"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "Wrist Curl: 2x 12-14 (10kg - dumbbell) (already warmed up, no rest between reps)"}, {"gif": "barbellWristCurl"}], 
                                                    [{"exercise": "Wrist Extension: 2x 12-14 (5kg - plate) (already warmed up, no rest between reps)"}, {"gif": "barbellReverseWristCurl"}], 
                                                    [{"exercise": "Crunch (Abs): 1x 16-20 (bodyweight) + (up) 3x 12-14 (bodyweight)"}, {"gif": "abdominalCrunch"}], 
                                                    [{"exercise": "Plank: 1x (35 seconds)"}, {"gif": "plank"}]
                                                  ]}]
                   ],
      "nutrition":  [
                      ["Supplements:", ["Whey", "Creatina", "Dextrose"]], 
                      ["Breakfast:", ["Coffee", "Whole Wheat Bread", "Eggs", "Avocado", "Mustard", "Onion"]], 
                      ["Snack:", ["Yogurt", "Banana", "Oat", "Papaya", "Pineapple"]], 
                      ["Lunch:", ["Grape Juice", "Chicken", "Rice", "Beans", "Cassava", "Beetroot", "Carrot"]], 
                      ["Snack:", ["Coffee", "Low-carb Cake"]], 
                      ["Dinner:", ["Grape Juice", "Meat", "Rice", "Pasta", "Sweet Potato", "Beetroot", "Carrot"]], 
                      ["Late-night Snack:", ["Tea", "Nut", "Apple"]]
                    ],
      "notes": ["Start date: 8 January 2026", "Rest between reps: 1 min", "Rest between sets: 1-3 min", "UP technique"],
      "password": "Victor",
      "image_profile": "profileVictor",
      "audio": "audio1",
      "video_yt": [
                    {"name": "Alok | Portal do Amanhã", "id": "GgdnY3yIuIE?si=h-5Q60VtePrIWxaS"}, 
                    {"name": "Armin van Buuren live at EDC Las Vegas 2026", "id": "n-MhD_TdzN4?si=T8ruZ0Ogr4taVYqW"}, 
                    {"name": "The Best of Armin Only", "id": "vDe9pO6P84Q?si=3m0ht2pEGEE4Kl2t"}, 
                    {"name": "Armin van Buuren live at A State of Trance 2026", "id": "ifbfwHkhhFc?si=-UEuR13jwNsl_BgD"}, 
                    {"name": "Armin van Buuren live at UNTOLD Festival 2025", "id": "-nNE8lDgJ4g?si=6_F4BVnaaUFps0ta"}, 
                    {"name": "Armin van Buuren live at Ushuaïa, Ibiza 2025", "id": "yIBQX-F_Jjw?si=es6mErCPcGn9_0tm"}, 
                    {"name": "Armin van Buuren live at A State of Trance, London 2025", "id": "lOq30ufGX-8?si=DVPoRkfTsvYFHpiq"}, 
                    {"name": "ALOK @ TOMORROWLAND WINTER 2026", "id": "iP-t3nMX9wQ?si=VTtnRXXn5du8TmMO"}
                  ],
      "quick_access": [
                        [{"name": "A"}, {"path": "/exercises-page/A"}], 
                        [{"name": "B"}, {"path": "/exercises-page/B"}], 
                        [{"name": "C"}, {"path": "/exercises-page/C"}], 
                        [{"name": "nutrition"}, {"path": "/nutrition-page"}], 
                        [{"name": "notes"}, {"path": "/notes-page"}]
                      ],
      "id": "Victor"
    },
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
                                                    [{"exercise": "Abdominal infra: 3x12-14 (peso do corpo)"}, {"gif": "waitingTheExercise"}], 
                                                    [{"exercise": "Prancha: 30s"}, {"gif": "plank"}]
                                                  ]}],
                    [{"type": "E"}, {"exercises": [
                                                    [{"exercise": "Extensão de Triceps na Barra: 1x12-14 (60% da carga) + 3x7-9 (15kgs cada)"}, {"gif": "waitingTheExercise"}], 
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
      "quick_access": [
                        [{"name": "A"}, {"path": "/exercises-page/A"}], 
                        [{"name": "B"}, {"path": "/exercises-page/B"}], 
                        [{"name": "C"}, {"path": "/exercises-page/C"}], 
                        [{"name": "D"}, {"path": "/exercises-page/D"}], 
                        [{"name": "E"}, {"path": "/exercises-page/E"}], 
                        [{"name": "F"}, {"path": "/exercises-page/F"}], 
                        [{"name": "nutrition"}, {"path": "/nutrition-page"}], 
                        [{"name": "notes"}, {"path": "/notes-page"}]
                      ],
      "id": "Leimar"
    }

  ]

  {/* Dinamic Content */}
  useEffect(() => {
    // Functions that uses GET method to request users in the API
    async function fetchDataTraining() {
      try {
        setLoader(true)
        const res = await fetch("http://localhost:3001/clients")
        const data = await res.json() 
  
        if (!data) {
          throw new Error("Dados inválidos")
  
        } else {
          setDynamicUsersContents(data)
          setLoader(false)
  
        }
              
      } catch (error) {
        console.error(error)
  
      }
          
    }
    
    fetchDataTraining()

  }, [])

  useEffect(() => {
    staticUsersContents && staticUsersContents.length > 0 && setLoader(false)

  }, [])

  const value = {
    dynamicUsersContents, 
    setDynamicUsersContents,
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
    clientsData,
    insertAllClients,
    insertError, 
    setInsertError

  }

  return (        
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider> 
  )

}
