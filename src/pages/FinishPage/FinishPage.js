import { getCountAllQuizzes , getTotalQuestions , getAllTime , getTotalCorrectAnswers} from '../../redux/generalStatistics/generalStatistics-selectors'
import {getCountCorrectAnswersQuiz , getCountWrongAnswersQuiz , getTimeQuiz} from '../../redux/quizStatistics/quisStatistics-selectors'
import { useSelector  } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './FinishPage.module.css';
import { useEffect, useState } from 'react';

export default function FinishPage (){
    const [ result , setResult] = useState('')
    const [ point , setPoint] = useState(0)

    //General Info
    const countAllQuizzes = useSelector(getCountAllQuizzes)
    const totalQuestions = useSelector(getTotalQuestions)
    const aLLTime = useSelector(getAllTime)
    const totalCorrectAnswer = useSelector(getTotalCorrectAnswers)

    //Quiz Info
    const countCorrectAnswersQuiz = useSelector(getCountCorrectAnswersQuiz)
    const countWrongAnswersQuiz = useSelector(getCountWrongAnswersQuiz)
    const timeQuiz = useSelector(getTimeQuiz)

    useEffect( () => {
        const pointResult = 100*countCorrectAnswersQuiz / (countCorrectAnswersQuiz + countWrongAnswersQuiz) || 0
        setPoint(Math.round(pointResult))

        // switch(point){
        //     case( point >= 90):
        //        setResult('Excellent')
        //        break ;
        //     case (point >= 50 || point < 90):
        //         setResult('Well done. Keep it up !!!')
        //         break ;
        //     case( point >= 20 || point < 50):
        //         setResult('Not bad , but you can do better')
        //         break ;
        //      case( point < 20):
        //         setResult('Not good . It will be better next time')
        //         break ;
        //     default:
        //         setResult('Good job')
        // }

        // if(point >= 90){
        //     setResult('Excellent')
        // }
        // else if( 50 < point < 90){
        //     setResult('Well done. Keep it up !!!')
        // }
        // else if( 20 < point <= 50){
        //     setResult('Not bad , but you can do better')
        // }
        // else if (point < 20){
        //     setResult('Not good . It will be better next time')
        // }
        // else{
        //     setResult('Good job')
        // }
      
    } , [  ])

    const averageTime = aLLTime / countAllQuizzes ;

    return(
        <>
       

        <h1 className={s.result}>{result}</h1>
        <p className={s.point_text}>Your result : <span className={s.point}>{point} points/100 points</span></p>
        <div className={s.results_container}>
            <div className={s.quizInfo_container}>
                <h2 className={s.title}>Quiz Information</h2>

                <p className={s.text}>The number of correct questions in the quiz:
                    <span>{countCorrectAnswersQuiz}</span> 
                </p>

                <p className={s.text}>Number of incorrect questions in the quiz :
                    <span>{countWrongAnswersQuiz}</span>
                </p>

                <p className={s.text}>Quiz time : 
                    <span>{Math.round(timeQuiz)}seconds</span>
                </p>
          </div>

         <div className={s.general_information}>
                <h2 className={s.title}>General Information</h2>

                <p className={s.text}>Number of all quizzes :
                    <span>{countAllQuizzes}</span> 
                </p>

                <p className={s.text}> The number of all questions passed :
                    <span>{totalQuestions}</span>
                </p>

                <p className={s.text}>The average time of the quiz: 
                    <span>{Math.round(averageTime)}seconds</span>
                </p>

                <p className={s.text}>The number of all correct questions:
                    <span>{totalCorrectAnswer}</span>
                </p>
          </div>
        </div>
          <Link to='/' className={s.go_backHome}>Return to HomePage</Link>

        </>
    )
}