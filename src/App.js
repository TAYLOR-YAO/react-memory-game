import React from 'react';
// import Images from "./components/Images";
import './App.css';
import imagesSrc from "./imagesSrc";

class App extends React.Component {
  state = {
    score:0,
    HighScore:0,
    scoreArr: []
    
  }

  HandleShuffle = event=>{
    event.preventDefault();
    let dataAttr = event.currentTarget.getAttribute("data-id");

   if (this.state.scoreArr.includes(dataAttr)) {
     this.setState({HighScore: this.state.score, score: 0});
   }
   else {
    this.setState({
      score: this.state.score + 1,
      imageArr: imagesSrc.sort(function() { return 0.5 - Math.random() })
    });
    this.state.scoreArr.push(dataAttr)
   }

    
  }
  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <div className="game-name"><a href="">Clicky Game</a></div>
          <div className="score-bar">
            <ul>
              <li><a href="">Score: <span>{this.state.score}</span></a></li>
              <li><span>|</span></li>
              <li><a href="" >High Score:<span>{this.state.HighScore}</span></a></li>
            </ul>
          </div>
        </div>
        <div className="heading">
          <h1>Clicky Game!</h1>
          Click an image to earn a point, but don't click one image towice!
        </div>
        <div>
          {
            imagesSrc.map(image => (
              <div className="images-container" key={image.id}>
                <div data-id={image.id} className="images-box" onClick={this.HandleShuffle}>
                      <img value={image.id}
                        alt="Game images"
                        src={image.image}
                      />
                </div>
              </div>
            ))
          } 
        </div>



      </div>
    );
  }
}

export default App;