import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history=useHistory();
  //use location gives us access to the loaction parameters in the browser
  const location=useLocation();
//urlsearchparams is a function built into the browser
  const queryParam=new URLSearchParams(location.search);
  
  const isSortingAscending=queryParam.get('sort')==='asc';
  //using queryParameters
  const sortQuote=sortQuotes(props.quotes, isSortingAscending);
  const changeSortingHandler=()=>{
    history.push({
      pathname:location.pathname,
      search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
  })
}
  return (
    <Fragment>
      <div className={classes.sorting}>
          <button onClick={changeSortingHandler}>
             Sort {isSortingAscending ? 'Descending' :'Ascending' }</button>
      </div>
      <ul className={classes.list}>
        {sortQuote.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
