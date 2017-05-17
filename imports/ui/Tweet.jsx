import React, {Component} from "react";
import { Meteor } from "meteor/meteor";



//<span>{this.props.tweet.created_at} </span>

export default class Tweet extends Component {

  render() {
    this.pintar();
    return (<div className="tweet">
      <div className="tweetUnit">
    	<img src={this.props.tweet.user.profile_image_url} alt={this.props.tweet.user.screen_name + "profile image"}/>
      <span>{this.props.tweet.user.screen_name} </span>
      <br></br>
      <span>{this.props.tweet.text} </span>
      {/*<span>{JSON.stringify(this.props.tweet)}</span>*/}
      </div>
      <br></br>
      <br></br>
    </div>);
  }
  pintar()
  {
    console.log("pintando")


    if(this.props.tweet.coordinates)
    {
      console.log(this.props.tweet);
      let longitud = this.props.tweet.coordinates.coordinates[0];
      let latitud = this.props.tweet.coordinates.coordinates[1];
      console.log("Pintando locacion"+longitud+" , "+latitud);
      longitud = longitud + 74;
      latitud = latitud - 4.5;
      pixelLongitud = (longitud*300)/11.3;
      pixelLatitud = (latitud*300)/11.3;
      console.log("Pintando en"+pixelLongitud+" , "+pixelLatitud);
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.beginPath();
      ctx.arc(300+pixelLongitud,300-pixelLatitud,5,0,2*Math.PI);
      ctx.stroke();
    }
  }
}
