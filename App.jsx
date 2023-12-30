import React, { useState, useEffect, Component } from 'react'
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
import { Switch } from 'react-native-switch';
import Icon from 'react-native-vector-icons/FontAwesome5';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      device: [
        {place: 'Living Room', desc: '3 familiy member have access', deviceCount: 4, isOn: true},
        {place: 'Living Room', desc: '3 familiy member have access', deviceCount: 4, isOn: true},
        {place: 'Living Room', desc: '3 familiy member have access', deviceCount: 4, isOn: true},
        {place: 'Living Room', desc: '3 familiy member have access', deviceCount: 4, isOn: true},
        {place: 'Living Room', desc: '3 familiy member have access', deviceCount: 4, isOn: true},
        {place: 'Living Room', desc: '3 familiy member have access', deviceCount: 4, isOn: true},
      ]
     };
  }

    render() {
      return (
        <View style={{backgroundColor: '#013661', flex: 1}}>  
          <StatusBar backgroundColor="#ffffff" barStyle="light-content" />
          <View style={{flex: 1, margin: 20}}>
          <Image
            style={{width: 50, height: 50}}
            source={require('./src/images/02.png')}
          />

          <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>Hello Everyone</Text>
          <Text style={{fontSize: 18}}>Apa Ada Yang Bisa Saya Bantu?</Text>
          <FlatGrid
            style={{flex: 1, marginTop: 30}}
            itemDimension={130}
            data={this.state.device}
            renderItem={({ item, index }) => (
              <TouchableOpacity 
                  style={{backgroundColor: '#ffffff', height: 150, borderRadius: 12, elevation: 3, padding: 20}}>
                <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 18}}>{item.place}</Text>
                <Text style={{color: '#ababab', fontSize: 12}}>{item.desc}</Text>
                <Text style={{color: '#013661', fontWeight: 'bold', marginVertical: 10}}>{item.deviceCount} devices</Text>
                <Switch
                  value={item.isOn}
                  onValueChange={(val) => {
                    let data = this.state.device;
                    data[index].isOn = val;
                    this.setState({device: data})
                  }}
                  disabled={false}
                  activeText={'On'}
                  inActiveText={'Off'}
                  circleSize={20}
                  barHeight={15}
                  circleBorderWidth={0}
                  backgroundActive={'#5A8EB8'}
                  backgroundInactive={'#8EC2ED'}
                  circleActiveColor={'#013661'}
                  circleInActiveColor={'#cccccc'}                 
                  changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                  innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                  outerCircleStyle={{}} // style for outer animated circle
                  renderActiveText={false}
                  renderInActiveText={false}
                  switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                  switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                  switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
                  switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                />
              </TouchableOpacity>
            )}
          />
          </View>
            <View style={{backgroundColor: '#ffffff', flexDirection: 'row', paddingVertical: 10, borderTopRightRadius: 10, borderTopLeftRadius: 10}}>
                  <TouchableOpacity style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                    <Icon name="home" size={20} color="#013661" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                    <Icon name="clock" size={20} color="#013661" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                    <Icon name="plus-circle" size={20} color="#013661" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                    <Icon name="chart-bar" size={20} color="#013661" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                    <Icon name="cog" size={20} color="#013661" />
                  </TouchableOpacity>
          </View>        
        </View>
      );
    }
}
export default App;