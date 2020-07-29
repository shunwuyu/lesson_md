import React, { Component } from "react";
import THREE, { Vector3 } from "three";
import autobind from "autobind-decorator";
import Game from '../components/Game';
import { loadModel } from '../utils/utils';
import robotMovementReducer from '../game-reducers/reducer';
// console.log(robotMovementReducer, '-----------')
export default class GameContainer extends Component {
  constructor() {
    super();
 
    this.state = {
      cameraPosition: new Vector3( 0, 5, 0 ),
      lookAt: new Vector3( 0, 0, 0 )
    };
  }

  componentDidMount() {
    this.mounted = true;
    window.THREE = THREE;
    loadModel('../../assets/sitepoint-robot.json').then( geometry =>
      this.setState({ geometry })
    );
    this.requestGameLoop();
  }

  componentWillUnmount() {

    this.mounted = false;
    this.cancelGameLoop();

  }
  @autobind
  cancelGameLoopGameLoop() {

      window.cancelAnimationFrame( this.reqAnimId );

  }

  @autobind
  requestGameLoop() {
    this.reqAnimId = window.requestAnimationFrame( this.gameLoop );
  }

  @autobind
  gameLoop( time ) {

      if( !this.mounted ) {
          return;
      }
      
      this.requestGameLoop();
      
      const oldState = this.state;
      
      // Apply our reducer functions to the "game state", which for this
      // example is held in local container state. It could be moved into
      // a redux/flux store and udpated once per game loop.
      const newState = robotMovementReducer( oldState, time );
      // console.log(newState, '++++++++++++++')
      this.setState( newState );

  }

  render() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const {
      cameraPosition, geometry, lookAt,robotPosition, robotRotation,
    } = this.state;
    // console.log(robotPosition, robotRotation, '-------')
    return (
      <div>
        { geometry ? <Game
            width={ width }
            height={ height }
            cameraPosition={ cameraPosition }
            lookAt={ lookAt }
            geometry={ geometry }
            robotPosition={ robotPosition }
            robotRotation={ robotRotation }
        /> : 'Loading' }
      </div>
    )
  }
}