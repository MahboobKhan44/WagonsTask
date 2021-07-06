import React from 'react'
import { Text, TextInput, View, FlatList } from 'react-native'
import { styles } from './SearchStyle';
import { Data } from '../../Data'
import GameList from '../../component/GameListingComponent/GameListingComponent'
import FocusAwareStatusBar from '../../component/FocusAwareStatusBar'


const Search = () => {
  //useState
  const [show, setShow] = React.useState(false);
  const [gameData, setGameData] = React.useState(Data);

  const searchGameName = (text) => {
    var sort = text.toLowerCase();
    const data = Data.filter((e) => {
      return e.game.toLowerCase().includes(sort);
    });
    if (text.length > 0) {
      setShow(true)
    } else {
      setShow(false);
    }
    setGameData(data)
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar isLightBar={false} isTopSpace={true} isTransparent={true} />

      <TextInput
        style={styles.searchCon}
        placeholder="Search"
        onChangeText={searchGameName}
      />

      {
        show
        &&
        <FlatList
          data={gameData}
          renderItem={({ item, index }) => <GameList item={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      }
    </View>
  )
}

export default Search;
