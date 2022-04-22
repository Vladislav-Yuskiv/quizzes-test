// import { RadioGroup, RadioButton } from 'react-radio-buttons';
// import { useEffect, useState } from 'react';

// export default function AnswerForm ({isDisabled , setIndexElem}){

//     const [ currentQuestionAnswer , setCurrentQuestionAnswer] = useState('')
//     const [countCorrectAnswers , setCountCorrectAnswers] = useState(0)

//     const onRadioBtnChange = (value) => {
//         setCurrentQuestionAnswer(value)
//     }

//     const savedAnswer = (currentAnswer ) => {

//         if(currentQuestionAnswer === ''){
//            return alert('Потрібно дати відповідь')
//         }

//        if(currentAnswer === currentQuestionAnswer){
//         setCountCorrectAnswers(countCorrectAnswers + 1)
//         alert('Правильно')
//        }
//        else{
//            alert('Неправильно')
//        }

//        setCurrentQuestionAnswer('')

//        setIndexElem(indexElem + 1)
    
//     }

//      return(
//         <form onSubmit={(e) => {  
//             e.preventDefault()
//             savedAnswer(question.correct_answer )}
//             }>
//                 <RadioGroup onChange={onRadioBtnChange}  horizontal>
//                     {allAnswers.map((answer, index) =>{
//                         return (
//                             <RadioButton key={index} disabled={isDisabled} value={answer}>
//                                 {answer}
//                             </RadioButton>
//                         )
//                     })}
//                 </RadioGroup>
//             <button disabled={isDisabled}  type='submit'>Answer</button>
//         </form>
//      )
// }