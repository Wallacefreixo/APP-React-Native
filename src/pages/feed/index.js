import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import SafeView from '../../components/atoms/SafeView';
import { Card } from '../../components/organisms/';
import { SimpleIcon } from '../../components/molecules/DefaultButton/style'

function Feed(props) {
  return (
    <SafeView>
      <SimpleIcon onPress={() => {  props.navigation.goBack() }}>
         <Ionicons name="ios-funnel-outline" size={40} color="#f00" /> 
      </SimpleIcon>

      <Card />
      
    </SafeView>
  );
};

export default Feed;