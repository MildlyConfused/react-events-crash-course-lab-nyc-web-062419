import React, { Component } from "react"
import {
  drawChromeBoiAtCoords,
  toggleCycling,
  resize
} from "./canvasHelpers.js"

export default class ChromeBoisDomain extends Component {
  handleMouseMove = event => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    // event.preventDefault()
    let xCord = event.clientX
    let yCord = event.clientY
    drawChromeBoiAtCoords(xCord, yCord)
  }

  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a=83', then it should call `resize` with '+'
  /* if the key pressed was 's=65', then it should call `resize` with '-' 
   */

  handleKeyDown = event => {
    console.log(event.key)
    event.key === "s" ? resize("-") : null
    event.key === "a" ? resize("+") : null
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}
        onKeyDown={this.handleKeyDown}
        width="900"
        height="600"
        tabIndex="0"
      ></canvas>
    )
  }
}
