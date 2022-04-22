import { Link } from "react-router-dom";
import { useSelector , useDispatch } from 'react-redux';
import {quizzesCategories} from "../../redux/quizzes/quizzes-selectors";
import { useEffect, useState } from 'react';
import s from './LuckyButton.module.css'
export default function LuckyButton ({selectedQuiz , getRndInteger}) {

    const [ luckyQuiz , setLuckyQuiz] = useState({});
    const quizzes = useSelector(quizzesCategories)
    
    
    useEffect(() =>{
        const randomNumberQuiz = Math.floor(Math.random() * quizzes.length); 
        setLuckyQuiz(quizzes[randomNumberQuiz])
    
    }, [ quizzes])
  
   

    const onLuckyBtnClick = () =>{
        const amout = getRndInteger(8,23)
        selectedQuiz(amout , luckyQuiz.id)
    }
    return(
        <>
       { quizzes.length > 0 &&  <Link className={s.luckyBtn} to={`quizze/${luckyQuiz && luckyQuiz.id || 777  }`} onClick={onLuckyBtnClick} >I`m Lucky</Link>}
        </>
    )
}