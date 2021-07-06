import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../screen/HomePage/HomePageStyle';

const GameListingComponent = ({ item, navigation }) => {

  return (
    <View
      activeOpacity={0.8}
      style={styles.mainConComponent}>

      <View style={styles.viewGame}>

        <Text style={styles.titleFont}>Title:  {item.title}</Text>
        <Text style={styles.platformFont}>Platform:  {item.platform}</Text>
        <Text style={styles.platformFont}>Score:  {item.score}</Text>
        <Text style={styles.platformFont}>Game:  {item.genre}</Text>
        <Text style={styles.platformFont}>Editor_Choice:  {item.editors_choice}</Text>
      </View>

    </View>
  );
}

export default GameListingComponent;
