import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sound
} from 'react-vr';
import Tag from './components/Tag';
import Location from './location';
import WxConfig from './WxConfig';

export default class edinburgh_vr extends React.Component {
  render() {
    return (
      <View>
        <Pano
          source={asset('vrimage.jpeg')}
          style={{
            top: 200
          }}
        />
        <Tag {...Location.airport}></Tag>
        <Tag {...Location.hotel}></Tag>
        <Tag {...Location.royal}></Tag>
        <Tag {...Location.scotland}></Tag>
        <Tag {...Location.shopping}></Tag>
        <Tag {...Location.culture}></Tag>
        <Tag {...Location.castle}></Tag>
        <Tag {...Location.family}></Tag>
        <Tag {...Location.green}></Tag>
        <Tag {...Location.harry}></Tag>
        <Tag {...Location.university}></Tag>
      </View>
    );
  }
};

AppRegistry.registerComponent('edinburgh_vr', () => edinburgh_vr);
