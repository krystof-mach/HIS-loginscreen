import { Button, Stack, TextInput, Title, PasswordInput } from '@mantine/core';
import { useState } from 'react'
import "./App.css"

export default function App() {

  const [heslo, setHeslo] = useState('');
  const [jmeno, setJmeno] = useState('');


  return (
    <div className='inpt'>
      <Stack
      w={500}
      bg="var(--mantine-color-body)"
      align="strech"
      justify="center"
      gap="md"
    >
    
      <TextInput value={jmeno}  onChange={(event) => setJmeno(event.currentTarget.value)}/>

      <PasswordInput
        value={heslo}
        onChange={(event) => setHeslo(event.currentTarget.value)}/>
    </Stack>
        <Button mt="lg" color='violet' variant='filled'onClick={()=>{console.log("jmeno: ",jmeno, "heslo:",heslo)}}>potvrdit</Button>
    </div>
  );
}