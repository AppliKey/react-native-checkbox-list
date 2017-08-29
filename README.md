# Install

```bash
  $ npm i react-native-checkbox-list --save
```

## Usage

```jsx
  import { ListOfCheckbox } from'react-native-checkbox-list';  
...
<ListOfCheckbox  arrayCheckbox={[ 
  { 
    image: require('./some-image-forCheck.png'), 
    label: 'CheckOne',
    labelLeft: true, 
    value: 'checkOne', 
    styleCheckbox: {width: 30,height: 30,borderWidth: 2,borderColor: '#000'},
    styleLabel: {color: '#000', fontSize: 20}
  },

  { 
    image: require('./some-image-forCheck.png'), 
    label: 'CheckTwo',
    labelLeft: true,  
    value: 'checkTwo', 
    styleCheckbox: {width: 30,height: 30,borderWidth: 2,borderColor: '#000'},
    styleLabel: {color: '#000', fontSize: 20}
  }
  ]}

/>
```

### Properties
| Prop   | Type | Description |
| :------------ |:------:| :-----------------:|
| arrayCheckbox | `Array` | Array of checkboxes objects |
| image | `require()` | Picture of the marked checkbox |
| value | `String` | Key for object of checkbox in array checkboxes, which return method getArrayCheckbox |
| styleCheckbox | `Object` | Object of style checkbox |
| styleLabel | `Object` | Object of style label |
| label | `String` | Label for checkbox |
| labelLeft | `Boolean` | Label before checkbox |
| labelRight | `Boolean` | Label after checkbox |


## Methods

  getArrayCheckbox
  return array of checkboxs with result

```jsx
  import { getArrayCheckbox } from'react-native-checkbox-list';  
```

