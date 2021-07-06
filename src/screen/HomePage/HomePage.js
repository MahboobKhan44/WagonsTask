import React from 'react'
import { Text, View, VirtualizedList, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './HomePageStyle';
import FocusAwareStatusBar from '../../component/FocusAwareStatusBar'
import { Data } from '../../Data'
import GameList from '../../component/GameListingComponent/GameListingComponent'
import { SEARCH } from '../../global/screenNames';


const HomePage = ({ navigation }) => {

  //useState
  const [toggle, settoggle] = React.useState(false);

  const [dataList, setDataList] = React.useState(Data);

  //functions
  const sortDesending = () => {
    let dataSort = dataList.sort(function (a, b) {
      return b.score - a.score
    });
    setDataList(dataSort);
    settoggle(!toggle);
  }

  const sortAssending = () => {
    let dataSortAss = dataList.sort(function (a, b) {
      return a.score - b.score
    });
    setDataList(dataSortAss.slice(0, dataSortAss.length));
    settoggle(!toggle)
  }

  //GetItemCount VirtualizedList
  const getItemCount = (data) => data.length;

  return (
    <View style={styles.container}>

      <FocusAwareStatusBar isLightBar={false} isTopSpace={true} isTransparent={true} />


      <TouchableOpacity
        style={styles.allGameCon}
      >
        <Text style={styles.fontAllGames}>All Games</Text>

      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(SEARCH)}
        style={styles.searchCon}>
        <Text style={styles.fontSearch}>Search</Text>
      </TouchableOpacity>

      <View style={styles.sortBtn}>

        <TouchableOpacity
          onPress={sortAssending}
          style={styles.lowToHighCon}>
          <Text style={styles.fontLowToHighCon}> Score Low to High</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={sortDesending}
          style={styles.lowToHighCon}>
          <Text style={styles.fontLowToHighCon}> Score High to Low</Text>
        </TouchableOpacity>

      </View>

      <VirtualizedList
        style={styles.virtualListCon}
        data={dataList}
        renderItem={({ item, index }) => <GameList item={item} navigation={navigation} />}
        keyExtractor={(item, index) => index.toString()}
        getItemCount={getItemCount}
        disableVirtualization={false}
        getItem={(data, index) => data[index]}
      />



    </View>
  )
}

export default HomePage;