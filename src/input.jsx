import { useState } from 'react';
import { PasswordInput } from '@mantine/core';
import './App.css'

 function Pss() {
    const [heslo, setHeslo] = useState('');

    console.log(heslo);
    return (
        <PasswordInput
            radius="md"
            placeholder="Heslo"
            value={heslo}
            onChange={(event) => setHeslo(event.currentTarget.value)}
        />
    );
}  
export default Pss;