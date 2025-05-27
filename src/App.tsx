import { Button, Stack, TextInput, PasswordInput, Group, Paper } from '@mantine/core';
import { useState } from 'react'
import "./App.css"
import prop from './prop.mp4'


export default function App() {

  const [heslo, setHeslo] = useState('');
  const [jmeno, setJmeno] = useState('');
  const [send, setSend] = useState(false);

  if (send) {
    console.log("jmeno: ", jmeno, "heslo:", heslo);
    setSend(!send);
  }

  return (

    <div className='inpt'>
      
      <div className="overlay"></div>
      <video src={prop} autoPlay loop muted />
      <div className='content'>
        <Paper shadow="xl" p="xl"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(3px)',
        }}>
          <Stack
            w={500}
            align="strech"
            justify="center"
            gap="lg"
          >



            <TextInput
              style={{
            backgroundColor: 'rgba(255, 255, 255, 0.09)',
            backdropFilter: 'blur(50px)',
            border: '1px',
            padding: '4px 12px',
            borderRadius: '4px',   

               }}
            placeholder='uzivatel'
            value={jmeno}
            variant='unstyled'
            onChange={(event) => setJmeno(event.currentTarget.value)}/>

            <PasswordInput
            className="bg-['rgba(255, 255, 255, 0.09)'] backdrop-blur-2xl border rounded-sm"
             style={{
                padding: '4px 12px',
              }}

              placeholder='heslo'
              value={heslo}
              variant='unstyled'
              onChange={(event) => setHeslo(event.currentTarget.value)} />
          </Stack>
          <Group align='right'>
            <div style={{ flexGrow: "1" }}>&nbsp;</div>
            <Button mt="lg" color='violet' variant='filled' onClick={() => { setSend(!send) }}>přihlásit</Button>
          </Group>
        </Paper>

      </div>

    </div>
  );
}