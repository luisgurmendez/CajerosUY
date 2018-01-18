import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import { BottomNavigation, ThemeProvider, ActionButton, COLOR, Avatar} from 'react-native-material-ui';
import MapView from 'react-native-maps';


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 56,
        justifyContent: 'flex-end',
        backgroundColor:'blue'
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    footer:{
        bottom:0,
        left:0,
        right:0,
        position:"absolute"
    }
});

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            active:"today"
        }
    }

    handlePress = () =>{
        alert("Hi")
    }

  render = () => {

      const { region } = this.props;

      const uiTheme = {
          palette: {
              primaryColor: COLOR.green500,
          },
          toolbar: {
              container: {
                  height: 50,
              },
          },
      }

    return (
        <ThemeProvider uiTheme={uiTheme}>
            <View style ={{position:'absolute',top:0,bottom:0,right:0,left:0}}>
                <View style ={styles.container}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    />
                    <ActionButton onPress={this.handlePress} icon="add"/>
                </View>
                <View style={styles.footer}>
                    <BottomNavigation active={this.state.active} hidden={false} >
                        <BottomNavigation.Action
                            key="today"
                            icon="today"
                            label="Today"
                            onPress={() => this.setState({ active: 'today' })}
                        />
                        <BottomNavigation.Action
                            key="people"
                            icon="people"
                            label="People"
                            onPress={() => this.setState({ active: 'people' })}
                        />
                        <BottomNavigation.Action
                            key="bookmark-border"
                            icon="bookmark-border"
                            label="Bookmark"
                            onPress={() => this.setState({ active: 'bookmark-border' })}
                        />
                        <BottomNavigation.Action
                            key="settings"
                            icon="settings"
                            label="Settings"
                            onPress={() => this.setState({ active: 'settings' })}
                        />
                    </BottomNavigation>
                </View>
            </View>
        </ThemeProvider>

    );
  }
}