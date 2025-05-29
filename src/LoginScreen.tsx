import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";

export interface ILoginScreenProps
{
    name: string;
    password: string;

    onNameChange: (name: string) => void;
    onPasswordChange: (password: string) => void;

    onLogin: () => void;
    videoSrc: string;
}
export function LoginScreen({name, password, onNameChange, onPasswordChange, onLogin, videoSrc}: ILoginScreenProps) {

    return (
        <div className='flex justify-center items-start sm:items-center h-screen w-screen relative overflow-hidden'>
            <div className="z-2 absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)]"></div>
            <video ref={videoRef} src={videoSrc} autoPlay muted className='w-full h-full absolute top-0 left-0 object-cover z-1' />
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