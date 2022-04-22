import Loader from "./Components/Loader";
import { useSelector , useDispatch } from 'react-redux';
import { Routes, Route,} from "react-router-dom";
import loadingAction from './redux/loader/loader-action';
import quizzesActions from "./redux/quizzes/quizzes-actions";
import {quizzesCategories} from './redux/quizzes/quizzes-selectors'
import { isLoading } from "./redux/loader/loader-selector";
import HomePage from './pages/HomePage';
import PlayPage from './pages/PlayPage';
import FinishPage from './pages/FinishPage';
const axios = require('axios');

function App() {

  const dispatch = useDispatch();
  const isLoadingState = useSelector(isLoading);
  const quizzes = useSelector(quizzesCategories);


  //Initially used useEffect but the program did not work properly so redesigned
  if(quizzes.length === 0){
      axios.get('https://opentdb.com/api_category.php').then(res => {
          dispatch(loadingAction(true))
          const quizzes = randomQuizzes(res.data.trivia_categories)
          dispatch(quizzesActions.quizzesCategories(quizzes))
          dispatch(loadingAction(false))
      })
    
  }

 
  const randomQuizzes = (array) =>{
    const randomQuizzes = [];
    for (let i = 0; i < 10; i++) {
      const idx = Math.floor(Math.random() * array.length);
      randomQuizzes.push(array.splice(idx, 1)[0])
    }
    return randomQuizzes
  }
  return (
    <>

{isLoadingState ? <Loader /> : 

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quizze/:quizzeId" element={<PlayPage/>} />
      <Route path="/results"  element={<FinishPage/>}/>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
}
    </>
  );
}

export default App;
