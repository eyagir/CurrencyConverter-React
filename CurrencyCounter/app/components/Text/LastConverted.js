import PropTypes from 'prop-types';
import React from 'react';
import {
  Text, View,
} from 'react-native';

import { styles } from '../Text';

const LastConverted = ({text}) => (
    <View style = {styles.container}>
        <Text style = {styles.text}>
           {text} 
        </Text>
    </View>
);

export default LastConverted;