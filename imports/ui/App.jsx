import React, {Component} from "react";
import {PropTypes} from "prop-types";
import { Meteor } from "meteor/meteor";
import ColombiaMap from "./ColombiaMap.jsx";
import { createContainer} from "meteor/react-meteor-data"

import TweetsResults from "./TweetsResults.jsx";
import {Tweets} from "../api/Tweets.js";

import {proj} from "./ColombiaMap.jsx";

export class App extends Component {
  constructor(props) {
    super(props);
  }

  changeQuery(evt) {
    if (evt.key !== "Enter") {
      return;
    }
    // "this" will change in the method call, so I need to save it
    let component = this;

    console.log(evt.target.value);
    Meteor.call("twitter.stream", evt.target.value);

  }

  updateMap(){
    print("Update Map");

  }


  render() {
    console.log("render!");
    return (
      <div>
        <br>
        </br>
        <canvas className = "mapa" id="myCanvas" width="600" height="600" >
          Your browser does not support the HTML5 canvas tag.
        </canvas>
        <ColombiaMap
          className = "mapa"
          width="600"
          height="600"

          data={{RISARALDA:10, CALDAS:12}}
          ></ColombiaMap>
          <br>
          </br>
          <div className = "listaTweets">
          <input type="text" onKeyPress={this.changeQuery.bind(this)} placeholder="Query"/>
          { this.props && this.props.err ?
            <div>Error: {this.props.err}</div> :
            <span></span>
          }
          <br>
          </br>
        <h2>Results:</h2>
        {this.props && this.props.tweets ?
          <TweetsResults tweets={this.props.tweets}/> :
          <p>Enter a query</p>
        }
      </div>

      </div>
    );
  }
}

App.propTypes = {
  tweets : PropTypes.array.isRequired
};

export default AppContainer = createContainer(() => {
  Meteor.subscribe("tweets");


  return {
    tweets: Tweets.find({}).fetch()
  };
}, App);
