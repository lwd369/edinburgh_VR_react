import React from 'react';
import {
  asset,
  Image,
  VrButton,
  View,
  Text,
  Animated
} from 'react-vr';
import { Linking } from 'react-native';

export default class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: false,
      hoverScale: new Animated.Value(1)
    }
  }

  onHover() {
    const hover = !this.state.onHover;
    const scale = hover ? 1.2 : 1;
    this.setState({
      onHover: hover
    })

    Animated.spring(                    
      this.state.hoverScale,                 
      {
        toValue: scale,                   
        friction: 10,                    
      }
    ).start();   
  }

  render() {
    return (
      <View
        billboarding='off'
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          transform: this.props.translate,
          width: this.props.width,
          height: this.props.height,
        }}>
      
        {/*<Text
          style={{
            color: 'red',
            fontSize: 0.2,
            marginRight:0.2,
          }}>{this.props.id}</Text>*/}
        <VrButton
          billboarding='on'
          style={{ flex: 1}}
          onClick={() => Linking.openURL(`http://wap.yeahstation.com/edinburgh/?aid=${this.props.id}`)}>
          <Animated.Image
            style={{ flex: 1, transform:[{scale:this.state.hoverScale}]}}
            source={asset(this.props.image)}
            onEnter={this.onHover.bind(this)}
            onExit={this.onHover.bind(this)}>
          </Animated.Image>
        </VrButton>
      </View>
    );
  }
}