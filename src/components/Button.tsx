import * as React from 'react';
import { Button } from 'react-native-paper';

const Login = () => (
  <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Login
  </Button>
);

export default Login;