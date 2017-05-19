import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View
} from 'react-vr';
import Tag from './components/Tag';
import Location from './location';

export default class edinburgh_vr extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('vrimage.jpeg')} />
        <Tag {...Location.culture}></Tag>
        <Tag {...Location.airport}></Tag>
        <Tag {...Location.family}></Tag>
        <Tag {...Location.shopping}></Tag>

      </View>
    );
  }
};

AppRegistry.registerComponent('edinburgh_vr', () => edinburgh_vr);
