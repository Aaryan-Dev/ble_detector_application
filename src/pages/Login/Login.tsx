import {CustomInput} from 'components/atoms';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

const Login: React.FC = () => {
  const handleInputOnChange = () => {
    console.log('handleInputOnChange');
  };

  return (
    <SafeAreaView>
      <View style={styles.loginView}>
        <View>
          <Image style={styles.syllabLogo} source={require('../../assets/android-chrome-192x192.png')}/>
        </View>

        <View>
          <Text style={styles.loginText}>Login</Text>
        </View>

        <View style={styles.emailInput}>
          <CustomInput />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginView: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  syllabLogo: {
    width: 300,
    height: 300,
    borderRadius: '10%',
  },
  loginText: {
    padding: 10,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  emailInput: {
    width: '78%',
  },
});

export default Login;
