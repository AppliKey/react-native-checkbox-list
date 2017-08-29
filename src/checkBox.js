import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = { check: false }
  }
  pressCheckbox = () => {
    this.props.checkCheckBoxInArray(this.props.value , !this.state.check);
    this.setState({check: !this.state.check});
  }
  render() {
    const { image, label, styleCheckbox, styleLabel, labelLeft, labelRight} = this.props;
    return (
      <View>
          {
            label &&  labelLeft && <Text style={styleLabel}>{label}</Text>
          }
       <TouchableHighlight onPress={this.pressCheckbox} underlayColor={'transparent'}>
          <Image style={styleCheckbox}
                 source={this.state.check ? image : null} ></Image>
        </TouchableHighlight>
          {
            label &&  labelRight && <Text style={styleLabel}>{label}</Text>
          }
      </View>
    );
  }
}
