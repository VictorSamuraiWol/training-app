import { DataContext } from '../DataContext/DataContext';
import './DataProvider.css';
import { useEffect, useState } from 'react';

export default function DataProvider({ children }) {

  // const [usersContents, setUsersContents] = useState('')
  const [dinamicUsersContents, setDinamicUsersContents] = useState('')
  const [userId, setUserId] = useState('')
  const [typeTrain, setTypeTrain] = useState('')
  const [loader, setLoader] = useState(false)
  const [loginValidate, setLoginValidate] = useState(false)
  const [nameUser, setNameUser] = useState('')

  {/* Static Users */}
  const staticUsersContents = [
    {
      "name" : "Example Static",
      "weight": "Example",
      "height": "Example",
      "exercise1": [["A", "Example"], ["B", "Example"], ["C", "Example"], ["D", "Example"], ["E", "Example"], ["F", "Example"], ["G", "Example"], ["H", "Example"], ["I", "Example"], ["J", "Example"]],
      "exercise2": [["A", "Example"], ["B", "Example"], ["C", "Example"], ["D", "Example"], ["E", "Example"], ["F", "Example"], ["G", "Example"], ["H", "Example"], ["I", "Example"], ["J", "Example"]],
      "exercise3": [["A", "Example"], ["B", "Example"], ["C", "Example"], ["D", "Example"], ["E", "Example"], ["F", "Example"], ["G", "Example"], ["H", "Example"], ["I", "Example"], ["J", "Example"]],
      "exercise4": [["A", "Example"], ["B", "Example"], ["C", "Example"], ["D", "Example"], ["E", "Example"], ["F", "Example"], ["G", "Example"], ["H", "Example"], ["I", "Example"], ["J", "Example"]],
      "exercise5": [["A", "Example"], ["B", "Example"], ["C", "Example"], ["D", "Example"], ["E", "Example"], ["F", "Example"], ["G", "Example"], ["H", "Example"], ["I", "Example"], ["J", "Example"]],
      "exercise6": [["A", "Example"], ["B", "Example"], ["C", "Example"], ["D", "Example"], ["E", "Example"], ["F", "Example"], ["G", "Example"], ["H", "Example"], ["I", "Example"], ["J", "Example"]],
      "exercise7": [["A", "Example"], ["B", "Example"], ["C", "Example"], ["D", "Example"], ["E", "Example"], ["F", "Example"], ["G", "Example"], ["H", "Example"], ["I", "Example"], ["J", "Example"]],
      "exercise8": [["A", "Example"], ["B", "Example"], ["C", "Example"], ["D", "Example"], ["E", "Example"], ["F", "Example"], ["G", "Example"], ["H", "Example"], ["I", "Example"], ["J", "Example"]],
      "exercise9": [["A", "Example"], ["B", "Example"], ["C", "Example"], ["D", "Example"], ["E", "Example"], ["F", "Example"], ["G", "Example"], ["H", "Example"], ["I", "Example"], ["J", "Example"]],
      "exercise10": [["A", "Example"], ["B", "Example"], ["C", "Example"], ["D", "Example"], ["E", "Example"], ["F", "Example"], ["G", "Example"], ["H", "Example"], ["I", "Example"], ["J", "Example"]],
      "exercise11": [["A", "Example"], ["B", "Example"], ["C", "Example"], ["D", "Example"], ["E", "Example"], ["F", "Example"], ["G", "Example"], ["H", "Example"], ["I", "Example"], ["J", "Example"]],
      "exercise12": [["A", "Example"], ["B", "Example"], ["C", "Example"], ["D", "Example"], ["E", "Example"], ["F", "Example"], ["G", "Example"], ["H", "Example"], ["I", "Example"], ["J", "Example"]],
      "exercise13": [["A", "Example"], ["B", "Example"], ["C", "Example"], ["D", "Example"], ["E", "Example"], ["F", "Example"], ["G", "Example"], ["H", "Example"], ["I", "Example"], ["J", "Example"]],
      "exercise14": [["A", "Example"], ["B", "Example"], ["C", "Example"], ["D", "Example"], ["E", "Example"], ["F", "Example"], ["G", "Example"], ["H", "Example"], ["I", "Example"], ["J", "Example"]],
      "exercise15": [["A", "Example"], ["B", "Example"], ["C", "Example"], ["D", "Example"], ["E", "Example"], ["F", "Example"], ["G", "Example"], ["H", "Example"], ["I", "Example"], ["J", "Example"]],
      "exercise1Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "waitingTheExercise"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", "waitingTheExercise"], ["H", "waitingTheExercise"], ["I", "waitingTheExercise"], ["J", "waitingTheExercise"]],
      "exercise2Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "waitingTheExercise"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", "waitingTheExercise"], ["H", "waitingTheExercise"], ["I", "waitingTheExercise"], ["J", "waitingTheExercise"]],
      "exercise3Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "waitingTheExercise"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", "waitingTheExercise"], ["H", "waitingTheExercise"], ["I", "waitingTheExercise"], ["J", "waitingTheExercise"]],
      "exercise4Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "waitingTheExercise"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", "waitingTheExercise"], ["H", "waitingTheExercise"], ["I", "waitingTheExercise"], ["J", "waitingTheExercise"]],
      "exercise5Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "waitingTheExercise"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", "waitingTheExercise"], ["H", "waitingTheExercise"], ["I", "waitingTheExercise"], ["J", "waitingTheExercise"]],
      "exercise6Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "waitingTheExercise"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", "waitingTheExercise"], ["H", "waitingTheExercise"], ["I", "waitingTheExercise"], ["J", "waitingTheExercise"]],
      "exercise7Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "waitingTheExercise"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", "waitingTheExercise"], ["H", "waitingTheExercise"], ["I", "waitingTheExercise"], ["J", "waitingTheExercise"]],
      "exercise8Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "waitingTheExercise"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", "waitingTheExercise"], ["H", "waitingTheExercise"], ["I", "waitingTheExercise"], ["J", "waitingTheExercise"]],
      "exercise9Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "waitingTheExercise"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", "waitingTheExercise"], ["H", "waitingTheExercise"], ["I", "waitingTheExercise"], ["J", "waitingTheExercise"]],
      "exercise10Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "waitingTheExercise"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", "waitingTheExercise"], ["H", "waitingTheExercise"], ["I", "waitingTheExercise"], ["J", "waitingTheExercise"]],
      "exercise11Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "waitingTheExercise"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", "waitingTheExercise"], ["H", "waitingTheExercise"], ["I", "waitingTheExercise"], ["J", "waitingTheExercise"]],
      "exercise12Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "waitingTheExercise"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", "waitingTheExercise"], ["H", "waitingTheExercise"], ["I", "waitingTheExercise"], ["J", "waitingTheExercise"]],
      "exercise13Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "waitingTheExercise"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", "waitingTheExercise"], ["H", "waitingTheExercise"], ["I", "waitingTheExercise"], ["J", "waitingTheExercise"]],
      "exercise14Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "waitingTheExercise"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", "waitingTheExercise"], ["H", "waitingTheExercise"], ["I", "waitingTheExercise"], ["J", "waitingTheExercise"]],
      "exercise15Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "waitingTheExercise"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", "waitingTheExercise"], ["H", "waitingTheExercise"], ["I", "waitingTheExercise"], ["J", "waitingTheExercise"]],
      "nutrition": [["Supplements:", "Example"], ["Breakfast:", "Example"], ["Snack:", "Example"], ["Lunch:", "Example"], ["Snack:", "Example"], ["Dinner:", "Example"], ["Late-night Snack:", "Example"]],
      "notes": ["Example", "Example", "Example", "Example", "Example", "Example", "Example", "Example", "Example", "Example"],
      "password": "Example Static",
      "imageProfile": "example",
      "audio": "Example",
      "id": "Example"
    },
    {
      "name" : "Victor Static",
      "weight": "80 kgs",
      "height": "1.69 cm",
      "exercise1": [["A", "Warm-up: HIIT - 10-12 min"], ["B", "Warm-up: HIIT - 10-12 min"], ["C", "Warm-up: HIIT - 10-12 min"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise2": [["A", "Biceps: 1x 12-14 (6kg - dumbbell) + (up) 3x 7-9 (8kg - dumbbell)"], ["B", "Squat: 1x 16-20 (bodyweight) + (up) 3x 12-14 (bodyweight)"], ["C", "Triceps: 1x 12-14 (6kg - dumbbell) + 2x 7-9 (8kg - dumbbell)"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise3": [["A", "Dumbbell Reverse Curl: (up) 3x 12-14 (6kg - dumbbell) (already warmed up)"], ["B", "Stiff (Romanian Deadlift): 1x 16-20 (bodyweight) + (up) 3x 12-14 (bodyweight)"], ["C", "Front Raise: 1x 12-14 (4kg - plates) + (up) 3x 7-9 (5kg - plates)"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise4": [["A", "Dumbbell Shoulder Extension: 1x 12-14 (4kg - plates) + 1x 7-9 (5kg - plates)"], ["B", "Glute Bridge: 1x 16-20 (bodyweight) + 3x 12-14 (bodyweight)"], ["C", "Lateral Raise: 1x 12-14 (4kg - plates) + (up) 2x 7-9 (5kg - plates)"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise5": [["A", "Back: 1x 16-20 (8kg - dumbbell) + 2x 12-14 (10kg - dumbbell)"], ["B", "Crunch (Abs): 1x 16-20 (bodyweight) + (up) 3x 12-14 (bodyweight)"], ["C", "Incline Push-up: 1x 16-20 + 2x 12-14 (bodyweight)"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise6": [["A", "Trapezius: 1x 16-20 (10kg - dumbbell) + 3x 12-14 (12kg - dumbbell)"], ["B", "Plank: 1x (35 seconds)"], ["C", "Wrist Curl: 2x 12-14 (10kg - dumbbell) (already warmed up, no rest between reps)"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise7": [["A", "Wrist Curl: 2x 12-14 (12kg - dumbbell) (already warmed up, no rest between reps)"], ["B", ""], ["C", "Wrist Extension: 2x 12-14 (5kg - plate) (already warmed up, no rest between reps)"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise8": [["A", "Wrist Extension: 2x 12-14 (5kg - plate) (already warmed up, no rest between reps)"], ["B", ""], ["C", "Crunch (Abs): 1x 16-20 (bodyweight) + (up) 3x 12-14 (bodyweight)"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise9": [["A", "Crunch (Abs): 1x 16-20 (bodyweight) + (up) 3x 12-14 (bodyweight)"], ["B", ""], ["C", "Plank: 1x (35 seconds)"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise10": [["A", "Plank: 1x (35 seconds)"], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise11": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise12": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise13": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise14": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise15": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise1Gif": [["A", "hiit"], ["B", "hiit"], ["C", "hiit"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise2Gif": [["A", "concentrationCurl"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise3Gif": [["A", "dumbbellReverseCurl"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise4Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise5Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise6Gif": [["A", "waitingTheExercise"], ["B", "plank"], ["C", "waitingTheExercise"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise7Gif": [["A", "waitingTheExercise"], ["B", ""], ["C", "waitingTheExercise"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise8Gif": [["A", "waitingTheExercise"], ["B", ""], ["C", "waitingTheExercise"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise9Gif": [["A", "waitingTheExercise"], ["B", ""], ["C", "plank"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise10Gif": [["A", "plank"], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise11Gif": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise12Gif": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise13Gif": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise14Gif": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise15Gif": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "nutrition": [["Supplements:", "Whey", "Creatina", "Dextrose"], ["Breakfast:", "Coffee", "Whole Wheat Bread", "Eggs", "Avocado", "Mustard", "Onion"], ["Snack:", "Yogurt", "Banana", "Oat", "Papaya", "Pineapple"], ["Lunch:", "Grape Juice", "Chicken", "Rice", "Beans", "Cassava", "Beetroot", "Carrot"], ["Snack:", "Coffee", "Low-carb Cake"], ["Dinner:", "Grape Juice", "Meat", "Rice", "Pasta", "Sweet Potato", "Beetroot", "Carrot"], ["Late-night Snack:", "Tea", "Nut", "Apple"]],
      "notes": ["Start date: 8 January 2026", "Rest between reps: 1 min", "Rest between sets: 1-3 min", "UP technique"],
      "password": "Victor Static",
      "imageProfile": "profileVictor",
      "audio": "audio1",
      "id": "1"
    },
    {
      "name" : "Leimar",
      "weight": "87 kgs",
      "height": "1,75 cm",
      "exercise1": [["A", "Supino Horizontal: 1x16-20 (60% da carga) + 5x12-14 (20kgs cada)"], ["B", "Leg Press: 1x16-20 (60% da carga) + 3x12-14 (30kgs cada)"], ["C", "Remada na máquina: 1x16-20 (60% da carga) + 5x12-14 (5 barras)"], ["D", "HIIT (burpess, polichinelo, pular corda, etc): 10-15 min"], ["E", "Extensão de Triceps na Barra: 1x12-14 (60% da carga) + 3x7-9 (15kgs cada)"], ["F", "Rosca Direta: 1x12-14 (60% da carga) + 3x7-9 (15kgs cada)"], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise2": [["A", "Voador: 5x12-14 (5 barras)"], ["B", "Stiff: 1x16-20 (60% da carga) + 3x12-14 (barra)"], ["C", "Puxador: 5x12-14 (5 barras)"], ["D", "Abdominal supra: 3x12-14 (peso do corpo)"], ["E", "Triceps Francês: 3x7-9 (20kgs)"], ["F", "Biceps Concentrado: 3x7-9 (10kgs)"], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise3": [["A", "Elevação Frontal: 4x7-9 (3 barras)"], ["B", "Cadeira Flexora: 3x12-14 (5 barras)"], ["C", "Remada Alta: 4x12-14 (5 barras)"], ["D", "Abdominal oblíquo: 3x12-14 (peso do corpo)"], ["E", "Triceps Corda: 3x7-9 (8 barras)"], ["F", "Biceps Alternado: 3x7-9 (10kgs)"], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise4": [["A", "Elevação Lateral: 4x7-9 (3 barras)"], ["B", "Cadeira Extensora: 3x12-14 (5 barras)"], ["C", "Rosca Punho: 3x12-14 (20kgs)"], ["D", "Abdominal infra: 3x12-14 (peso do corpo)"], ["E", "Elevação Frontal: 4x7-9 (3 barras)"], ["F", "Rosca Punho: 3x12-14 (10kgs cada)"], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise5": [["A", "Remada Alta: 4x12-14 (5 barras)"], ["B", "Abdominal supra: 3x12-14 (peso do corpo)"], ["C", "Rosca Punho Invertida: 3x12-14 (20kgs)"], ["D", "Prancha: 30s"], ["E", "Elevação Lateral: 4x7-9 (3 barras)"], ["F", "Rosca Punho Invertida: 3x12-14 (10kgs cada)"], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise6": [["A", ""], ["B", "Prancha: 30s"], ["C", ""], ["D", ""], ["E", "Panturrilha em pé: 1x16-20 (60% da carga) + 3x12-14 (20kgs cada)"], ["F", "Abdominal oblíquo: 3x12-14 (peso do corpo)"], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise7": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", "Panturrilha sentado: 3x12-14 (20kgs cada)"], ["F", "Abdominal infra: 3x12-14 (peso do corpo)"], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise8": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise9": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise10": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise11": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise12": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise13": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise14": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise15": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise1Gif": [["A", "barbellBenchPress"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "hiit"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise2Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "waitingTheExercise"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise3Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "waitingTheExercise"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise4Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "waitingTheExercise"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise5Gif": [["A", "waitingTheExercise"], ["B", "waitingTheExercise"], ["C", "waitingTheExercise"], ["D", "plank"], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise6Gif": [["A", ""], ["B", "plank"], ["C", "waitingTheExercise"], ["D", ""], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise7Gif": [["A", ""], ["B", ""], ["C", "waitingTheExercise"], ["D", ""], ["E", "waitingTheExercise"], ["F", "waitingTheExercise"], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise8Gif": [["A", ""], ["B", ""], ["C", "waitingTheExercise"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise9Gif": [["A", ""], ["B", ""], ["C", "plank"], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise10Gif": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise11Gif": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise12Gif": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise13Gif": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise14Gif": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "exercise15Gif": [["A", ""], ["B", ""], ["C", ""], ["D", ""], ["E", ""], ["F", ""], ["G", ""], ["H", ""], ["I", ""], ["J", ""]],
      "nutrition": [["Suplementos:", "Whey", "Creatina", "Dextrose"], ["Café da Manhã:", "Café", "Ovos", "Manteiga", "Abacate"], ["Lanche:", "", "", "", "", ""], ["Almoço:", "Carne", "Frango", "Arroz", "Feijão", "Batata Doce", "Mandioca"], ["Lanche:", "Vitamina de Banana", "Pão", "Ovos"], ["Jantar:", "Carne", "Frango", "Arroz", "Feijão", "Batata Doce", "Mandioca"], ["Ceia:", "Chá", "Castanha", "Amendoim"]],
      "notes": ["Start date: 8 January 2026", "Rest between reps: 1 min", "Rest between sets: 1-3 min"],
      "password": "Leimar",
      "imageProfile": "profileLeimar",
      "audio": "audio2",
      "id": "2"
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
          // setUsersContents(data)
          setDinamicUsersContents(data)
          setLoader(false)
  
        }
              
      } catch (error) {
          console.error(error)
  
      }
          
    }
    
    fetchDataTraining()

  }, [])
  
  const value = {
    dinamicUsersContents, 
    setDinamicUsersContents,
    staticUsersContents, 
    userId, 
    setUserId,
    typeTrain, 
    setTypeTrain,
    loader,
    loginValidate, 
    setLoginValidate,
    nameUser, 
    setNameUser

  }

  return (        
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider> 
  );
}
