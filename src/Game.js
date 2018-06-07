import React from 'react';
import Number from './Number';


const randomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

class Game extends React.Component {

  challengeNumbers = Array
    .from({ length: this.props.challengeSize })
    .map(() => randomNumberBetween(...this.props.challengeRange));
  
  sampleSize(sampleNumbers, count) {
    var result = new Array(count),
      length = sampleNumbers.length,
      taken = new Array(length),
      random = null
    if (count > length)
      throw new RangeError("getRandom: more elements taken than available");

    while (count--) {
      random = Math.floor(Math.random() * length + 1)
      result[count] = sampleNumbers[random in taken ? taken[random] : random];
      taken[random] = --length in taken ? taken[length] : length;
    }
    return result
  }
  
  target = this.sampleSize(
      this.challengeNumbers,
      this.props.challengeSize - 2
    ).reduce((acc, curr) => acc + curr, 0);

  render() {
    return (
      <div className="game">
        <div className="help">
          Pick 4 numbers that sum to the target in 15 seconds
        </div>
        <div className="target">{this.target}</div>
        <div className="challenge-numbers">
          {this.challengeNumbers.map((value, index) =>
          <Number key={index} value={value}/>
          )}
        </div>
        <div className="footer">
          <div className="timer-value">15</div>
          <button>Start</button>
        </div>
      </div>
    );
  }
}

export default Game;
