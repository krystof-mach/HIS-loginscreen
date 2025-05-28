import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App';
import './index.css';
import '@mantine/core/styles.css';
import 'tailwindcss'
import { createTheme, TextInput } from '@mantine/core';


const theme = createTheme({
    components: {
        TextInput: TextInput.extend({
            vars: (theme,props) =>{
                return {
                    input: {"--input-bg": "rgba(255, 255, 255, 0.4)"},
                    : {"--input-placeholder-color": "rgb(0, 0,0)"}
                };
            }
        }),
    }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);