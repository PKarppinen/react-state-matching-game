import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'
import { createTiles, indexOfSelected } from '../../misc/utils';
import './App.css';
import GameContext from '../../GameContext.js';

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      numTiles: 36,
      playing: false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared: null
    }
  }

  startGame = (numTiles) => {
    this.setState((state) => ({
        playing: true,
        previousTileIndex: null,
        toBeCleared: null,
        tiles: createTiles(state.numTiles, this.handleTileClicked)      
    }))
  }

  handleNumTileChange = (num) => {
    this.setState({
      numTiles: num,
      playing: false,
      tiles: []
    })
  } 
  
  handleTileClicked = (id, color) => {
    this.setState((state) => {

      const selectedTileIndex = indexOfSelected(this.state.tiles, id, color);
      var previousTileIndex = this.state.previousTileIndex;
      
      if (this.state.toBeCleared != null) {
        this.state.tiles[this.state.toBeCleared[0]].selected = false;
        this.state.tiles[this.state.toBeCleared[1]].selected = false;
        this.state.toBeCleared = null;
      }


      if (previousTileIndex != null) { 
        var previousTile = this.state.tiles[previousTileIndex];
        var selectedTile = this.state.tiles[selectedTileIndex];

        if (previousTile.id != selectedTile.id && previousTile.color == color) {
          selectedTile.matched = true;
          previousTile.matched = true;
          previousTileIndex = null;
        } else {
          this.state.toBeCleared = [previousTileIndex, selectedTileIndex];
          previousTileIndex = null;
        }
      } else { 
        previousTileIndex = selectedTileIndex;
      }      

      this.state.tiles[selectedTileIndex].selected = true;

      return {
        tiles: this.state.tiles,
        toBeCleared: this.state.toBeCleared,
        previousTileIndex: previousTileIndex
      }
    })
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <GameContext.Provider value={this.state} >
          <OptionsPanel playing={this.state.playing} numTiles={this.state.numTiles} startGame={this.startGame} handleNumTileChange={this.handleNumTileChange} />
          <Board numTiles={this.state.numTiles} tiles={this.state.tiles} />      
        </GameContext.Provider>
    </div>
  );

  }
}

export default App;
