import logo from './logo.svg';
import './App.css';
import Tile from './Tile';


let object = ['bear','corgi','crab','fish','panda','parrot','pig','rabbit','rhinoceros','shark','snail','turtle',]
object = [...object,...object]

function shuffle(tiles){
  for(let i = tiles.length - 1; i>0;i--){
    const j = Math.floor(Math.random() * tiles.length);
    console.log('exchange ' + i + ' with ' + j);
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    
  }
  console.log(tiles[4])
}
shuffle(object)



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <div className='grid grid-cols-6 gap-4 justify-items-center' >
            {object.map(function(object, index){
             return <Tile  
             tile={object} 
             altText={'icon of ' + object} 
             culaore={"rosu"} 
             index={index}/>
            })}
        </div>
    </div>
  );
}

export default App;
