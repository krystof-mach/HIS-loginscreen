import { Button, Stack, TextInput, PasswordInput, Group, Paper } from '@mantine/core';
import { useState, useRef, useEffect} from 'react'
import prop from './prop.mp4'
import './App.css'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Notification } from '@mantine/core';

export default function App() {

  const [heslo, setHeslo] = useState('');
  const [jmeno, setJmeno] = useState('');
  const [send, setSend] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


    if (send) {
        console.log("jmeno: ", jmeno, "heslo:", heslo);
        setSend(!send);

        if(heslo !== '123') {
            setWpswrd(true);
        }
        else {
            setWpswrd(false);
        }
        if(jmeno !== '123') {
            setWname(true);
        }
        else {
            setWname(false);
        }

        Error(wname, wpswrd);

    }

    const videoRef = useRef(null);

    useEffect(() => {
        const vid = document.querySelector("video");
        vid.play();
        let rychlost = 1;
        let x = 3000;
        const interval = setInterval(() => {
            x/=2;
            rychlost /=1.5;
            vid.playbackRate = rychlost;
            if (rychlost <= 0.3) clearInterval(interval);
        }, x);
    }, []);




  return (

      <div className='flex justify-center items-start sm:items-center h-screen w-screen relative overflow-hidden'>
            <div className="z-2 absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)]"></div>
            <video ref={videoRef} src={prop} autoPlay muted className='w-full h-full absolute top-0 left-0 object-cover z-1' />
        <div className='relative z-3 flex items-center justify-center px-4 sm:px-8 '>
          <Paper shadow="xl" p="xl"
                 style={{
                   backgroundColor: 'rgba(255, 255, 255, 0.3)',
                   backdropFilter: 'blur(3px)',
                 }}
                 className='sm:w-full max-w-md sm:max-w-full w-screen'>
            <h1 className='font-[Zen_Dots] z-30 text-5xl sm:text-9xl justify-center flex text-center'>HIS 3</h1>

            <Stack
                className='w-full'
                align="strech"
                justify="center"
                gap="lg"
            >

                <Notification hidden={errorMessage.length === 0} color="red" title="Chyba" withCloseButton={!true}>
                    {errorMessage}
                </Notification>
              <TextInput
                  className="backdrop-blur-sm border rounded-sm"

                  placeholder='Uživatel'
                  value={jmeno}
                  size = 'lg'
                  onChange={(event) => setJmeno(event.currentTarget.value)}/>

              <PasswordInput
                  className="backdrop-blur-sm border rounded-sm"
                  placeholder='Heslo'
                  value={heslo}
                  size = 'lg'
                  onChange={(event) => setHeslo(event.currentTarget.value)} />
            </Stack>

            <Group align='right'>
              <div style={{ flexGrow: "1" }}>&nbsp;</div>
              <Button mt="sm" size={'md'} variant='filled' onClick={() => { setSend(!send) }}><FontAwesomeIcon icon={faDoorOpen} />  &nbsp; Přihlásit</Button>

            </Group>
          </Paper>

        </div>
      </div>
  );
}
