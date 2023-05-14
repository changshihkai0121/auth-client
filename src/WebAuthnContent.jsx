import {
  useState,
} from 'react';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import axios from 'axios';

import { styled } from '@mui/material/styles';

const StackContent = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
}));

const WebAuthnContent = () => {
  const [authState, setAuthState] = useState('');

  const handleRegistration = async () => {
    try {
      const options = await axios.get('https://localhost/generate-registration-options');

      console.log(options);
    } catch (error) {
      console.log(error)
    }
  };

  const handleLogin = async () => {};

  const TriggerButtons = () => {
    return (
      <StackContent spacing={2} direction="row">
        <Button variant="contained" disableElevation onClick={handleRegistration}>
          Webauthn Registration
        </Button>
        <Button variant="contained" disableElevation onClick={handleLogin}>
          Webauthn Login
        </Button>
      </StackContent>
    );
  };

  const AutoCompleteContent = () => {
    return (
      <Autocomplete  />
    );
  };
  
  return (
    <>
      <AutoCompleteContent />
      <TriggerButtons />
    </>
  )
}

export default WebAuthnContent;