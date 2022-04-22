import { getCountAllQuizzes , getTotalQuestions , getAllTime , getTotalCorrectAnswers} from '../../redux/generalStatistics/generalStatistics-selectors'
import {getCountCorrectAnswersQuiz , getCountWrongAnswersQuiz , getTimeQuiz} from '../../redux/quizStatistics/quisStatistics-selectors'
import { useSelector  } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './Results.module.css';
import { useEffect, useState } from 'react';

export default function Results (){
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
       
        if(point >= 90){
             setResult('Excellent')
        }
        else if (point >= 70 && point < 90 ){
              setResult('Well done. Keep it up !!!')
        }
        else if(point >= 40 && point < 70){
             setResult('Not bad , but you can do better')
        }
        else if(point >= 20 && point < 40){
             setResult('Not a very good result')
        }
        else if (point < 20) {
             setResult('Not good . It will be better next tim')
        }
      
    } , [ point , countCorrectAnswersQuiz , countWrongAnswersQuiz ])

   
    const convert = (value) => {
        return Math.floor(value / 60) + "min" + " "  + (value % 60 ? value % 60 : '00') + "sec"
    }

    const averageTime = Math.floor(aLLTime / countAllQuizzes) ;

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
                    <span>{convert(timeQuiz)}</span>
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
                    <span>{convert(averageTime)}</span>
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