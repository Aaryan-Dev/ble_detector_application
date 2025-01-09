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
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

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
              icon={
                <FontAwesome6
                  name="arrow-right"
                  color="white"
                  iconStyle="solid"
                />
              }
              login={<Text style={styles.LoginText}>Login</Text>}
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
  },
  CustomButtonLogin: {
    color: 'white',
  },
  LoginText: {
    color: 'white',
  },
});

export default Login;
