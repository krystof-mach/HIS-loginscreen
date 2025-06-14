import {useEffect, useRef, useState} from 'react';
import prop from "./prop.mp4";
import {Button, Group, Notification, Paper, PasswordInput, Stack, TextInput} from "@mantine/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";


export interface LoginScreenProps {
    onSubmit: (userName:string, password:string) => Promise<{errorMessage: string | null}>;
}

export default function LoginScreen({ onSubmit}:
LoginScreenProps) {
    const [userName, setUserName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [errorMessage, setErrorMessage] = useState<string|null>();
    const [loading, setLoading] = useState<boolean>(false);

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (!videoRef.current) {
            console.error("Video element not found");
            return;
        }

        const vid = videoRef.current;

        vid.play();
        let rychlost = 1;
        let x = 3000;

        const interval = setInterval(() => {
            x/=2;
            rychlost /=1.5;
            vid.playbackRate = rychlost;

            if (rychlost <= 0.3) {
                clearInterval(interval);
            }
        }, x);
    }, [videoRef]);



    return (
        <form onSubmit={async e => {
            e.preventDefault();

            setLoading(true);
            try {
                const result = await onSubmit(userName || '', password || '');
                setErrorMessage(result.errorMessage);
            }
            catch (e: unknown)
            {
                console.error("Login failed", e);
                setErrorMessage((e as Error).message);
            }
            setLoading(false);
        }}>
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

                        <Notification hidden={!errorMessage} color="red" title="Chyba" withCloseButton={!true}>
                            {errorMessage}
                        </Notification>

                        <TextInput
                            className="backdrop-blur-sm border rounded-sm"
                            name="username"
                            placeholder='Uživatel'
                            value={userName}
                            size = 'lg'
                            onChange={(event) => setUserName(event.currentTarget.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    // Submit the form when Enter is pressed
                                    document.getElementsByName("password")[0].focus();
                                }
                            }}
                            disabled={loading}
                        />

                        <PasswordInput
                            className="backdrop-blur-sm border rounded-sm"
                            placeholder='Heslo'
                            name="password"
                            value={password}
                            size = 'lg'
                            onChange={(event) => setPassword(event.currentTarget.value)}
                            disabled={loading}
                        />
                    </Stack>

                    <Group align='right'>
                        <div style={{ flexGrow: "1" }}>&nbsp;</div>
                        <Button disabled={loading} type={"submit"}
                                mt="sm" size={'md'} variant='filled'><FontAwesomeIcon icon={faDoorOpen} />  &nbsp; Přihlásit</Button>

                    </Group>
                </Paper>

            </div>
        </div>
        </form>
    );
}