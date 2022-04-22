import { useSelector , useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import quizzesActions from "../../redux/quizzes/quizzes-actions"; 
import loadingAction from '../../redux/loader/loader-action';
import {quizzesCategories } from '../../redux/quizzes/quizzes-selectors';
import LuckyButton from '../LuckyButton';
import s from './QuizzesList.module.css';


const axios = require('axios');


const  getRndInteger = (minimum, maximum) => {
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

export default function QuizzesList (){

    const quizzes = useSelector(quizzesCategories)

    const dispatch = useDispatch()

    const selectedQuiz = (amount , quizId) =>{
      axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${quizId}`)
      .then(res => {
          dispatch(loadingAction(true))
          dispatch(quizzesActions.selectedQuiz(res.data.results))
          dispatch(loadingAction(false))
      })
    }

        return(
                <> 
                    <ul className={s.quizzes_list}>
                        {quizzes.map((quizze) => {
                            const amout = getRndInteger(8,23)
                            return (
                                <li key={quizze.id} className={s.quizzes_item} onClick={() => selectedQuiz(amout , quizze.id)}> 
                                <div className={s.quiz_info}>   
                                        <p className={s.name}> {quizze.name}</p>
                                        <p className={s.countQuestions}>The number of questions in the quiz: <span className={s.amout}>{amout}</span></p>
                                    <Link className={s.run_button} to={`quizze/${quizze.id}`} >
                                        Run
                                    </Link>
                                </div> 
                                    <img className={s.quiz_photo} src="https://i.ibb.co/zfGPxQs/quiz.jpg" alt="quizPhoto" ></img>
                                </li>
                            )
                        })}
                    </ul>
            <LuckyButton selectedQuiz={selectedQuiz} getRndInteger={getRndInteger} />
            </>
        )
}