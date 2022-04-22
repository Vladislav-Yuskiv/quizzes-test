import { useSelector , useDispatch } from 'react-redux';
import { selectedQuiz } from '../../redux/quizzes/quizzes-selectors'
import {getCountCorrectAnswersQuiz , getCountWrongAnswersQuiz , getTimeQuiz} from '../../redux/quizStatistics/quisStatistics-selectors';
import {getCountAllQuizzes , getTotalQuestions , getAllTime , getTotalCorrectAnswers} from '../../redux/generalStatistics/generalStatistics-selectors';
import generalStatisticsActions from '../../redux/generalStatistics/generalStatistics-actions'; 
import { Link } from "react-router-dom";
import quizStatisticsActions from '../../redux/quizStatistics/quisStatistics-actions';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { useEffect, useState } from 'react';
import s from './Quations.module.css'

export default function QuationsList (){
  
    const dispatch = useDispatch()

    const[indexElem , setIndexElem] = useState(0)
    const [ currentQuestionAnswer , setCurrentQuestionAnswer] = useState('')
    const [ startTime , setStartTime] = useState(0)

    const [ allAnswersState , setAllAnswers] = useState([])

    const questions = useSelector(selectedQuiz);
    const countCorrectAnswers = useSelector(getCountCorrectAnswersQuiz);
    const countWrongAnswersQuiz = useSelector(getCountWrongAnswersQuiz);

    const countAllQuizzes = useSelector(getCountAllQuizzes);
    const totalQuestions = useSelector(getTotalQuestions)
    const aLLTime = useSelector(getAllTime)

    useEffect(()=>{
        setStartTime(Date.now()) 
    } , [ ])
    //  useEffect(() =>{       
    //         questions.forEach((question , index) => {
    //           let allAnswersQuiz = [ ...question.incorrect_answers , question.correct_answer]
    //           allAnswersQuiz.sort(() => Math.random() - 0.5);

    //           setAllAnswers(prevstate =>  [...prevstate , {id : index ,allAnswersQuiz}])
              

    //          })            
             
    //  } ,[ questions ]) 

    const onRadioBtnChange = (value) => {
        setCurrentQuestionAnswer(value)
    }

    const savedAnswer = (currentAnswer  ) => {

        if(currentQuestionAnswer === ''){
           return alert('You must choose an answer!')
        }

       if(currentAnswer === currentQuestionAnswer){
        dispatch(quizStatisticsActions.countCorrectAnswersQuiz(countCorrectAnswers + 1))
       }
       else{
        dispatch(quizStatisticsActions.countWrongAnswersQuiz(countWrongAnswersQuiz + 1))
       }
      
       setCurrentQuestionAnswer('')
       setIndexElem(indexElem + 1)
    }

    const timeQuiz = ( start , end) => {
        const time = (end - start)/1000 ;
        return time
    }

    const onFinished = () => {
       
   
       //Info for current Quiz
       dispatch(quizStatisticsActions.timeQuiz( timeQuiz(startTime , Date.now())))
        
        //GeneralInformation
        dispatch(generalStatisticsActions.aLLTime( aLLTime + timeQuiz(startTime , Date.now())))
        dispatch(generalStatisticsActions.countOfAllQuizzes(countAllQuizzes + 1))
        dispatch(generalStatisticsActions.totalQuestions(totalQuestions + questions.length))
       
    }


    const onCancel = () => {
        dispatch(quizStatisticsActions.countCorrectAnswersQuiz(0))
        dispatch(quizStatisticsActions.countWrongAnswersQuiz(0))
    }

   
    return(
       
        <>
        <h1 className={s.category_name} >Questions</h1>
        <ol className={s.questions_list}>
            {questions.map((question , index) =>{

                let allAnswers = [ ...question.incorrect_answers , question.correct_answer]

                //here I randomly went through the array  to shuffle all the answers 
                //but they shuffled every time I clicked the Asnwer button

                //allAnswers.sort(() => Math.random() - 0.5);

             //To do this, the user could not answer the following quetion until he answered current quetion
               let isDisabled = true;
               if(indexElem === index === 0){
                   isDisabled = false
               }
               if(indexElem === index){
                   isDisabled = false
               }
         
                return(
                    <li key={index} className={s.question_item}>
                        <p className={s.number_of_question}>{index + 1})</p>
                        <p className={s.question}>{question.question}</p>
                        <form onSubmit={(e) => {  
                            e.preventDefault()
                            savedAnswer(question.correct_answer  )}
                            }>
                       
                       <RadioGroup onChange={onRadioBtnChange}   >
                             {allAnswers.map((answer, index) =>{
                                return (
                                    <RadioButton key={index} rootColor='#000000' pointColor="#1e46bd" disabled={isDisabled} value={answer}>
                                        {answer}
                                    </RadioButton>
                                )
                            })} 
   
                        </RadioGroup> 
                        <button className={s.button_answer} disabled={isDisabled}  type='submit'>Answer</button>
                        </form>
                    </li>
                )
            })}
        </ol>

        <div className={s.links_wrapper}>
            <Link to='/' className={s.cancel} onClick={onCancel} >Cancel and go to Home Page</Link>
            <Link to='/results' className={s.finish}  onClick={onFinished}>Finish</Link>
        </div>
        </>
    )
}