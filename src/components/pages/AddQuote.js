import { useHistory } from "react-router";
import QuoteForm from "../quotes/QuoteForm";
import useHttp from '../../hooks/use-http';
import {addQuote} from '../../lib/api';
import { useEffect } from "react";
const AddQuote = () => {
    const {sendRequest, status} = useHttp(addQuote);
    const history = useHistory();

    useEffect(()=>{
        if(status === 'completed'){
            history.push('/quotes');
        }
    },[status, history])

    const AddQuoteHandler = (quoteData) =>{
        sendRequest(quoteData);
        history.push('/quotes');    //pushes a new page (Can go back)
        //history.replace() would replace the page with the new one (cannot go back)
    }
    return <QuoteForm isLoading={status === 'pending'} onAddQuote={AddQuoteHandler}/>
}

export default AddQuote;