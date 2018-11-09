import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { CardList } from 'react-native-card-list';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import { TextInput } from 'react-native';

var idNum = 1

var cards = [
  {
    name: '0',
    date: 'Starry Night',
    time: <Text>Starry Night</Text>,
    location: 'Ann Arbor',
    summary: 'Training for marathon'
  },
  {
    name: '0',
    date: 'Starry Night',
    time: <Text>Starry Night</Text>,
    location: 'Ann Arbor',
    summary: 'Training for marathon'
  },
  {
    name: '0',
    date: 'Starry Night',
    time: <Text>Starry Night</Text>,
    location: 'Ann Arbor',
    summary: 'Training for marathon'
  },
];

var displayList = [
  {
    id: "0",
    title: "Run @ IM Building Track",
    content: <Text>Date: 11/07/2018{"\n"}Time: 4:00pm{"\n"}Location: IM Building Track{"\n"}Event: Ann Arbor half marathon{"\n"}Summary: We do not run very fast! Come if you want to meet the rest of the MRun team</Text>
  },
  {
    id: "0",
    title: "Arb late-night run",
    content: <Text>Date: 11/07/2018{"\n"}Time: 9:00pm{"\n"}Location: Arb{"\n"}Event: Thanksgiving Day Turkey Trot{"\n"}Summary: Thanksgiving is right around the corner! Come train with us, we love running at night, and the arb is a fun place to do it.</Text>
  },
  {
    id: "0",
    title: "CCRB afternoon run",
    content: <Text>Date: 11/07/2018{"\n"}Time: 12:00pm{"\n"}Location: CCRB{"\n"}Event: Detroit Marathon{"\n"}Summary: Very focused group, we like to talk, but our pace is fast</Text>
  }

]

function createPage() {
  alert('going to create page')
}

class EventCreate extends React.Component {
   constructor(props) {
    super(props);
    this.state = { name: '', date: '', time: '', location: '', event: '', summary: '' };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Text>Create your event!</Text>
        <View style={{flex:0.05}}></View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200}}
          onChangeText={(name) => this.setState({name})}
          placeholder="Name"
          value={this.state.name}
        />
        <View style={{flex:0.05}}></View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200}}
          onChangeText={(date) => this.setState({date})}
          placeholder='Date'
          value={this.state.date}
        />
        <View style={{flex:0.05}}></View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200}}
          onChangeText={(time) => this.setState({time})}
          placeholder="Time"
          value={this.state.time}
        />
        <View style={{flex:0.05}}></View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200}}
          onChangeText={(location) => this.setState({location})}
          placeholder="Location"
          value={this.state.location}
        />
        <View style={{flex:0.05}}></View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200}}
          onChangeText={(event) => this.setState({event})}
          placeholder="What are you training for?"
          value={this.state.event}
        />
        <View style={{flex:0.05}}></View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200}}
          onChangeText={(summary) => this.setState({summary})}
          placeholder="Summary"
          value={this.state.summary}
        />
        <View style={{flex:0.05}}></View>
        <Button
          onPress={() => {
            let new_card = {
              name: this.state.name,
              date: this.state.date,
              time: this.state.time,
              location: this.state.location,
              event: this.state.event,
              summary: this.state.summary,
            }
            alert('Your event has been created!')
            cards.push(new_card)
            displayList.push({
              id: idNum,
              title: new_card.name,
              content: <Text>Date: {new_card.date}{"\n"}Time: {new_card.time}{"\n"}Location: {new_card.location}{"\n"}Event: {new_card.event}{"\n"}Summary: {new_card.summary}</Text>
            })
            navigate('Feed')
          }
          }
          title="Create"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() =>
            navigate('Feed')
          }
          title="Cancel"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

class EventFeed extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <CardList cards={displayList} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default createBottomTabNavigator({
  Feed: EventFeed,
  Create: EventCreate,
},
{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Feed') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Create') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);


// const App = createStackNavigator({
//   Home: { screen: EventFeed },
//   Profile: { screen: EventCreate },
// });

// export default App;

