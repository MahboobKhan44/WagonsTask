import React from 'react'
import { StyleSheet } from "react-native";
//color
import { GRAY_DARK, WHITE, } from '../../global/color';
//Fonts
import { BOLD, LIGHT, REGULAR, SEMIBOLD } from '../../global/typography'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  searchCon: {
    backgroundColor: WHITE,
    height: 50,
    marginTop: 10,
    elevation: 3,
    borderRadius: 10,
    fontSize: 18,
    color: GRAY_DARK,
    paddingLeft: 20,
    fontFamily: REGULAR
  },
})
