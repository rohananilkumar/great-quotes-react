import { Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from '../quotes/HighlightedQuote';
import NoQuotesFound from '../quotes/NoQuotesFound';
import useHttp from '../../hooks/use-http';
import { getSingleQuote } from "../../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";


const QuoteDetails = () => {
    const match = useRouteMatch();
    const params = useParams();
    const {quoteId} = params;
    const {sendRequest, status, data:loadedQuote, error} = useHttp(getSingleQuote,true);
    useEffect(()=>{
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if(status === 'pending'){
        return <div className='centered'>
            <LoadingSpinner/>
        </div>
    }
    if(error){
        return <div className='centered focused'>
            {error}
        </div>
    }
    if(status === 'completed' && (!loadedQuote || loadedQuote.length === 0)){
        return <NoQuotesFound/>
    }

    return <div>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
        <Route path={match.path} exact>
            <div className='centered'>
                <Link className='btn--flat' to={`${match.url}/comments`}>Load comments</Link>
            </div>
        </Route>
        <Route path={`${match.path}/comments`}>
            <Comments/>
        </Route>
    </div>
}

export default QuoteDetails;