"use client"
import React from 'react'
import { ThemeProvider } from "styled-components";

const theme={
  color:{
    heading: 'black',
    price: 'green',
    specialtext: 'blue',
    lighttext: 'grey',
    whitetext: '#ffff'
  },
  bgcolor:{
    nav: '#25303c',
    outerbody: 'grey',
    innerbody: '#ffff',
    buttonbg: '#f3943d'
  },
  responsive:{
    mobile: '425px',
    tab: '768px'
  }

}

const ThemeProvide = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeProvide