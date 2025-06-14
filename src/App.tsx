
import './App.css'

import LoginScreen from "./LoginScreen.tsx";

export default function App() {
    

  return (
      <LoginScreen onSubmit={(userName: string, password: string) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (userName === 'admin' && password === 'password') {
              resolve({ errorMessage: null });
            } else {
              resolve({ errorMessage: 'Invalid username or password' });
            }
          }, 1000);
        });
      }} ></LoginScreen>
  );
}
