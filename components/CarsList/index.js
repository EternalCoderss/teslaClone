import React from 'react'
import { Dimensions, FlatList, Text, View } from 'react-native';
import CarItem from '../CarItem';
import cars from './cars';
import styles from './style';



function CarList() {
  return (
    <View style = {styles.container}> 
        <FlatList
         data = {cars}
        renderItem = {({item}) => <CarItem car={item}/> }
        showsVerticalScrollIndicator = {false}
        snapToAlignment = {'start'}
        decelerationRate = {'fast'}
        snapToInterval = {Dimensions.get('window').height}

        />
    </View>
  )
}

export default CarList;