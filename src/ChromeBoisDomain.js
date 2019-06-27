import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'

export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  clickHandler = () => {
    toggleCycling()
  }

  keyPressHandler = (event) => {
    // console.log(event.key)
    if (event.key === 'a') {
      resize('+')
    } else if (event.key === 's') {
      resize('-')
    } else {
      resize()
    }
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.clickHandler}
        onKeyPress={this.keyPressHandler}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
