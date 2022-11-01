import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '',
        color: '',
      },
    }),
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS={false}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
