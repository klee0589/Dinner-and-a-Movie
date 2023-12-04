
import useCocktail from './useCocktail';
import './App.css';

function App() {
  const { cocktail, setSearchCocktail, fetchData, loading } = useCocktail();

  return (
    <div className="App">
      <input height="20" onChange={(e) => {
        console.log(e.target.value.length)
        setSearchCocktail(e.target.value)
        if(e.target.value.length > 3){
          fetchData()
        }
      }}/>
      <div>
      {loading ? 'Loading...' : <div>
        {cocktail && cocktail.drinks.map( drink => {
            return <div>
              {drink.strDrink}
            </div>
        })}
        </div>
      }
      </div>
    </div>
  );
}

export default App;
