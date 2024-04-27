"use client"
import React from 'react'
// import { ThemeProvider } from "styled-components";
import GlobalStyles from './styles/Global.style';


const GlobalStyleProvide = ({
    children,
  }: any) => {
  return (
    <GlobalStyles>
      {children}
    </GlobalStyles>
  )
}

export default GlobalStyleProvide;