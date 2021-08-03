import React, {Suspense} from 'react';
import { Redirect, Route, Switch } from "react-router";
import MainNavigation from "./components/layout/MainNavigation";
import QuoteDetails from "./components/pages/QuoteDetail";
import Layout from './components/layout/Layout';
import AllQuotes from './components/pages/AllQuotes'; //Regular import
import NotFound from "./components/pages/NotFound";
import LoadingSpinner from './components/UI/LoadingSpinner';

const AddQuote = React.lazy(()=> import("./components/pages/AddQuote")) //Lazy Import

function App() {
  return (
    <Layout>
      <Suspense fallback={
        <div className='centered'>
          <LoadingSpinner/>
        </div>
      }>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes'/>
          </Route>
          <Route path='/new-quote'>
            <AddQuote/>
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes/>
          </Route>
          <Route path='/quotes/:quoteId' >
            <QuoteDetails/>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
