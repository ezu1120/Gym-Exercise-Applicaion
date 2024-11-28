import React,{useState} from 'react'
import { Box } from "@mui/material"
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import SearchExercise from '../../components/SearchExercise/SearchExercise'
import Exercise from '../../components/Exercise/Exercise'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
}

export default Home