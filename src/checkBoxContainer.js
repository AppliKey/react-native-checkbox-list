import React, { Component } from 'react';

import CheckBoxList from './checkBoxList';

const checboxs = (function () {
  let arrayCheckbox = [];
  return {
    logCheckBoxProps: function(Component) {
      return class extends Component {
        constructor(props) {
          super(props)
          let arrayValue = [];
          this.props.arrayCheckbox.forEach( (e) => {
            arrayValue.push({
              [e.value]: false
            });
          });
          this.state = {arrayValue}
          arrayCheckbox = this.state.arrayValue;
         }
        checkCheckBoxInArray = (value, check) => {
          let newArray = this.state.arrayValue;
          newArray.forEach((e) => {
           for(var key in e){
             if(key == value){
               e[key] = check;
             }
           }
          });
          this.setState( { arrayValue: newArray })
          arrayCheckbox = this.state.arrayValue;
        }
        render(){
          return <Component {...this.props} checkCheckBoxInArray={this.checkCheckBoxInArray} />
        }
      }
    },
    getArrayCheckbox: function() {
      return arrayCheckbox;
    }
  } 
})();

const ListOfCheckbox = checboxs.logCheckBoxProps(CheckBoxList);
const getArrayCheckbox = checboxs.getArrayCheckbox;
export  { ListOfCheckbox, getArrayCheckbox};
