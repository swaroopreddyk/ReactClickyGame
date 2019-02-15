import React, { Component } from "react";
import "./App.css";
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import CharCard from "./components/CharCard";

class App extends Component {
  state = {
    message: "Select and image to begin the game",
    topScore: 0,
    currentScore: 0,
    characters: characters,
    unselectedCharacter: characters
  };

  componentDidMount() {}

  shuffleCharacterArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  selectCharacter = characterName => {
    console.log(characterName);
    const findCharacter = this.state.unselectedCharacter.find(
      item => item.name === characterName
    );

    console.log(findCharacter);
    //if findCharacter === undefined -> failed to select a new character
    if (findCharacter === undefined) {
      this.setState({
        message: "You guessed incorrectly!",
        topScore:
          this.state.currentScore > this.state.topScore
            ? this.state.currentScore
            : this.state.topScore,
        currentScore: 0,
        characters: characters,
        unselectedCharacter: characters
      });
    } else {
      //Successfully found a new character
      const findNewCharacter = this.state.unselectedCharacter.filter(
        item => item.name !== characterName
      );

      this.setState({
        message: "You guessed Correctly!",
        currentScore: this.state.currentScore + 1,
        characters: characters,
        unselectedCharacter: findNewCharacter
      });
    }

    this.shuffleCharacterArray(characters);
  };

  render() {
    return (
      <Wrapper>
        <NavBar
          message={this.state.message}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Title />
        {this.state.characters.map(character => (
          <CharCard
            key={character.name}
            name={character.name}
            image={character.image}
            selectCharacter={this.selectCharacter}
            currentScore={this.state.currentScore}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
