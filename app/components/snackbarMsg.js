/*eslint-disable*/
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';

export const SnackbarMsg = ({show,msg}) => {
  const [visible, setVisible] = React.useState(show);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={() => {onDismissSnackBar}}
        action={{
          label: 'OK',
          onPress: () => {
            onDismissSnackBar();
          },
        }}>
        {msg}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});