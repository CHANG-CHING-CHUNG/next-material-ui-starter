import NextApp from 'next/app'
import React from 'react'
import { AppWrapper } from '../context/state'
import { ThemeProvider as MaterialThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export default class App extends NextApp {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <AppWrapper>
          <Component {...pageProps} />
      </AppWrapper>
      
    )
  }
}