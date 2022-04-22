import { useSelector , useDispatch } from 'react-redux';
import QuizzesList from "../../Components/QuizzesList/QuizzesList";
import { isLoading } from "../../redux/loader/loader-selector";
import quizStatisticsActions from '../../redux/quizStatistics/quisStatistics-actions';
import Loader from "../../Components/Loader";
import s from './HomePage.module.css';
import { useEffect } from 'react';
export default function HomePage (){

    const isLoadingState = useSelector(isLoading);
    const dispatch = useDispatch()

   useEffect(()=>{
       //If you press the back arrow, the statistics are cleared and the statistics work correctly
    dispatch(quizStatisticsActions.countCorrectAnswersQuiz(0)) 
    dispatch(quizStatisticsActions.countWrongAnswersQuiz(0))
     
   } )
    return(

           <>
           <h1 className={s.title}>Quizzes</h1>
            {isLoadingState ? <Loader /> :  <QuizzesList />}
           </>
    )
}