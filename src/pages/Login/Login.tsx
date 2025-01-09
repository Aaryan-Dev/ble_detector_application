import {CustomInput, CustomButton} from 'components/atoms';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
  Alert,
} from 'react-native';

const Login: React.FC = () => {
  const handleInputOnChange = () => {
    console.log('handleInputOnChange');
  };

  const handleLogin = () => {
    Alert.alert('Logged In')
  }

  return (
    <SafeAreaView>
      <View style={styles.loginView}>
        <View>
          <Image
            style={styles.syllabLogo}
            source={require('../../assets/android-chrome-192x192.png')}
          />
        </View>

        <View>
          <Text style={styles.loginText}>Syllab</Text>
        </View>

        <View style={styles.emailInputBox}>
          <View style={styles.emailInput}>
            <CustomInput
              inputMode="text"
              keyboardType="email-address"
              placeholder="Enter Syllab email address"
            />
          </View>
        </View>
        <View style={styles.loginButton}>  
          <CustomButton
            buttonColor={'white'}
            onClick={handleLogin}
            title="Login"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginView: {
    width: 300,
    margin: 'auto',
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
    fontSize: 20,
    paddingBottom: 20,
  },
  emailInputBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emailInput: {
    width: '100%',
  },
  loginButton: {
    marginTop: 1,
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'flex-start',
  },
  CustomButtonLogin: {
    color: 'white',
  },
});

export default Login;
