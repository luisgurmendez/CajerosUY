import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Toolbar, ThemeProvider } from 'react-native-material-ui';
import MapView from 'react-native-maps';


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

export default class App extends React.Component {

  render() {

      const { region } = this.props;
      console.log(region);

    return (
        <ThemeProvider>
            <View>
                <Toolbar
                    leftElement="menu"
                    centerElement="CajerosUY"
                />
            </View>
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

            </View>
        </ThemeProvider>

    );
  }
}