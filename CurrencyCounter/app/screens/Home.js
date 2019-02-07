import React, {Component} from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton} from '../components/TextInput';
import {ClearButton} from '../components/Buttons';
import { LastConverted } from '../components/Text';


const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_COVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('press base');
  }
  
  handlePressQuoteCurrency = () => {
    console.log('press quote');
  }

  handleSwapCurrency = () => {
    console.log('handle swap currency');
  }

  handleTextChange = () => {
    console.log('change text');
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText = {TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultBalue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText = {this.handleTextChange}
          value = {TEMP_BASE_PRICE}
        />
        <InputWithButton
          buttonText = {TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          editable={false}
          value={TEMP_QUOTE_PRICE}
        />
        <LastConverted
          text = {"1 " + TEMP_BASE_CURRENCY+ " = " + TEMP_COVERSION_RATE + " "}
        />
        <ClearButton 
          onPress={this.handleSwapCurrency} 
          text="Reverse Currencies" 
        />
      </Container>
    );
  }
}

export default Home;