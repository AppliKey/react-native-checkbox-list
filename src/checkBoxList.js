import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

import CheckBox from './checkBox';



export default class CheckBoxList extends Component {
  render() {
    const { arrayCheckbox, checkCheckBoxInArray} = this.props;
    return (
        <View>
          {
            arrayCheckbox.map( (checkbox, index) => <CheckBox key={index} image={checkbox.image}
                                                       label={checkbox.label || false}
                                                       labelLeft={checkbox.labelLeft || false}
                                                       labelRight={checkbox.labelRight || false}
                                                       checkCheckBoxInArray={checkCheckBoxInArray}
                                                       value={checkbox.value}
                                                       styleCheckbox={checkbox.styleCheckbox}
                                                       styleLabel={checkbox.styleLabel}/>)
            }
        </View>
    );
  }
}
