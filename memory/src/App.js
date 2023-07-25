import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tile from "./Tile";

class App extends React.Component {
    // let [noShown, setNoShown] = useState(0)
    state = {
        objects:[],
        
        noShown:0,
    }
  constructor() {
    super();
    console.log("constructor app comp");
    this.oldIndex = -1;
    this.shown=[];
    
  }
  componentDidMount() {
    console.log("componenta app montata");
    let objects= [
      "bear",
      "corgi",
      "crab",
      "fish",
      "panda",
      "parrot",
      "pig",
      "rabbit",
      "rhinoceros",
      "shark",
      "snail",
      "turtle",
    ];
    objects = [...objects, ...objects];

    function shuffle(tiles) {
      for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * tiles.length);
        console.log("exchange " + i + " with " + j);
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
      }
      
    }
    shuffle(objects);
    
    for(let i = 0; i < objects.length; i++){
      this.shown[i]= 0;
    }
    this.setState({
        objects: objects,
    })
    console.log(this.objects)
  }

  incShown(index){
    console.log('parinte a primit index: ',index)
    this.setState(
        {
            noShown: this.state.noShown + 1
        }
    );
    //daca avem 2 tiles deschise 
    if(this.state.noShown === 2){
      // si sunt egale, pastram
      if(this.oldIndex === -1){ //una singura deschisa

      }else{ // doua deschise
        if(this.objects[this.oldIndex] === this.objects[index]){
          // am deschis 2 si sunt egale
          console.log('tiles uri egale: '+ this.objects[this.oldIndex] + ", " + this.objects[index])
          this.oldIndex = -1;
        } else {
          //am deschis 2 si nu sunt egale
          //inchid dupa 2s
          setTimeout(() => {
            this.render();
          },2*1000)
        }

      }
    }
    // altfel declansam timer sa inchida dupa 2s
  }
  
  render() {
    
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="grid grid-cols-6 gap-4 justify-items-center">
          {this.state.objects.map( (object, index) => {
            return (
              <Tile
                tile={object}
                altText={"icon of " + object}
                // culaore={"rosu"}
                index={index}
                functieClick= {()=> this.incShown(index)}
                shown = {this.shown[index]}
              />
              
            );
          })}
          shown: {this.state.noShown}
        </div>
      </div>
    );
  }
}

export default App;
