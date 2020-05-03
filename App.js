import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import * as actionCreators from './redux/actionCreators';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
    };
  }

  getTempByCityName() {
    const {cityName} = this.state;
    this.props.fetchDataThunk(cityName);
  }

  getWeatherMessage() {
    const {isLoading, error, temp} = this.props;

    if (isLoading) {
      return 'Loading...';
    }
    if (error) {
      return 'error, try again';
    }

    if (temp === null) {
      return 'Please, type your city';
    }
    return ` Your city temp is: ${this.props.temp} oC`;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>{this.getWeatherMessage()}</Text>

        <TextInput
          style={styles.inputStyle}
          placeholder="Please insert your city"
          onChangeText={text => {
            this.setState({cityName: text});
          }}
        />

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={this.getTempByCityName.bind(this)}>
          <Text style={styles.textButtonStyle}> Get Temp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  temp: state.temp,
  city: state.cityName,
  error: state.error,
  isLoading: state.isLoading,
});

const mapDispatchToProps = actionCreators;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    width: 200,
    padding: 10,
    backgroundColor: 'white',
    margin: 30,
    fontSize: 20,
  },
  textStyle: {
    fontSize: 20,
  },
  textButtonStyle: {
    fontSize: 20,
    color: 'white',
  },
  buttonStyle: {
    backgroundColor: 'gray',
    padding: 10,
  },
});
