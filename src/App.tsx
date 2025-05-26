import { Button, Stack, TextInput, PasswordInput, Group } from '@mantine/core';
import { useState } from 'react'
import "./App.css"

export default function App() {

  const [heslo, setHeslo] = useState('');
  const [jmeno, setJmeno] = useState('');
  const [send, setSend] = useState(false);

  if(send){
    console.log("jmeno: ",jmeno, "heslo:",heslo);
    setSend(!send);
  }

  return (

    <div className='inpt'>
      <Stack
      w={500}
      bg="var(--mantine-color-body)"
      align="strech"
      justify="center"
      gap="md"
    >
    
      <TextInput 
      placeholder='uzivatel'
      value={jmeno}
      onChange={(event) => setJmeno(event.currentTarget.value)}/>

      <PasswordInput
        placeholder='heslo'
        value={heslo}
        onChange={(event) => setHeslo(event.currentTarget.value)}/>
    </Stack>
    <Group align='right'>
      <div style={{flexGrow: "1"}}>&nbsp;</div>
        <Button mt="lg" color='violet' variant='filled'onClick={()=>{setSend(!send)}}>potvrdit</Button>
        </Group>
    </div>
  );
}