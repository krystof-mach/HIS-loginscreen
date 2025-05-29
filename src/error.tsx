import { Notification } from '@mantine/core';
import { useState } from 'react'

export default function Error(jmeno, heslo) {
    const [wname, setWname] = useState(false);
    const [wpswrd, setWpswrd] = useState(false);

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

  return(
      <Notification hidden={!wname && !wpswrd} color="red" title="Chyba" withCloseButton={!true}>
          Neznámý uživatel, nebo heslo
      </Notification>
    )
}