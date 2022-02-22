import * as React from 'react';
import { TextInput } from 'react-native-paper';

const InputPassword = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="Password"
      secureTextEntry={true}
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

export default InputPassword;