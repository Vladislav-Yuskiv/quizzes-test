import { useSelector  } from 'react-redux';
import QuationsList from "../../Components/QuationsList";
import { isLoading } from "../../redux/loader/loader-selector";
import Loader from '../../Components/Loader';

export default function PlayPage (){

    const isLoadingState = useSelector(isLoading);

    return(
            <>
                {isLoadingState ? <Loader /> : <QuationsList />}
            </>
    )
}