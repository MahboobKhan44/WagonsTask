import React from 'react'
import { StyleSheet } from "react-native";
//color
import { GRAY_DARK, WHITE, } from '../../global/color';
//Fonts
import { BOLD, LIGHT, REGULAR, SEMIBOLD } from '../../global/typography'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE
  },
  allGameCon: {
    marginTop: 20,
    marginLeft: 20,
  },
  fontAllGames: {
    fontFamily: BOLD,
    fontSize: 20,
  },
  searchCon: {
    alignItems: 'center',
    backgroundColor: WHITE,
    height: 50,
    justifyContent: 'center',
    marginTop: 15,
    elevation: 3,
    marginHorizontal: 10,
    borderRadius: 10
  },
  fontSearch: {
    fontSize: 20,
    color: GRAY_DARK
  },
  virtualListCon: {
    marginTop: 10,
    marginBottom: 8,
  },
  mainConComponent: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: WHITE,
    elevation: 3,
    borderRadius: 15,
    marginHorizontal: 10
  },
  viewGame: {
    marginLeft: 15,
    marginVertical: 10
  },
  titleFont: {
    fontSize: 18,
    fontFamily: BOLD,
    marginTop: 2
  },
  platformFont: {
    fontSize: 16,
    fontFamily: REGULAR,
    marginTop: 2
  },
  sortBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5, marginBottom: 7
  },
  lowToHighCon: {
    backgroundColor: "#f0f0f0aa",
    height: 30,
    // width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 0.3,
    marginHorizontal: 5,
    paddingHorizontal: 3
  },
  fontLowToHighCon: {
    padding: 3,
    fontSize: 13,
    color: '#7c7c7c'
  }
})
