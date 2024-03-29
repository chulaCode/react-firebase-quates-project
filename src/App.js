import {Route, Switch, Redirect} from 'react-router-dom';
import AllQuote from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  //switch helps with registering one active path 
  //at thesame time
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path="/quotes" exact>
            <AllQuote />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
              <NewQuote />
          </Route>
          <Route path="*">
              <NotFound />
          </Route>
      </Switch>
    </Layout>
  );
}

export default App;
