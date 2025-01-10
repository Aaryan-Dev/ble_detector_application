import {useState} from 'react';
import {CustomInput, CustomButton} from 'components/atoms';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import {regex} from 'utils';

interface InitialFormValue {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [showedit, setShowEdit] = useState(false);

  const initialValue: InitialFormValue = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .matches(regex.basicEmailRegex, 'Email address must be valid')
      .matches(regex.syllabEmailRegex, 'Email must contain syllab.in domain'),
  });

  const handleLogin = values => {
    setShowEdit(true);
    if (values?.password) {
      Alert.alert(values?.password);
    }
  };

  const handleEdit = formik => {
    formik.setFieldValue('password', '');
    setShowEdit(false);
  };

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

        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={values => handleLogin(values)}
          validateOnChange={false}
          validateOnBlur={false}>
          {formik => {
            return (
              <View style={styles.emailInputBox}>
                <View style={styles.emailInput}>
                  <View style={styles.showEditbox}>
                    {showedit && (
                      <TouchableOpacity
                        onPress={() => handleEdit(formik)}
                        style={styles.editEmail}>
                        <Text style={styles.editEmailText}>
                          {formik?.values?.email}
                        </Text>
                        <FontAwesome6
                          name="pen"
                          color="black"
                          iconStyle="solid"
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                  {!showedit && (
                    <CustomInput
                      error={formik?.errors?.email}
                      style={styles.input}
                      onChangeText={formik?.handleChange('email')}
                      onBlur={formik?.handleBlur('email')}
                      value={formik?.values?.email}
                      inputMode="text"
                      keyboardType="email-address"
                      placeholder="Enter syllab email address"
                    />
                  )}
                  {showedit && (
                    <CustomInput
                      error={formik?.errors?.password}
                      style={styles.input}
                      onChangeText={formik?.handleChange('password')}
                      onBlur={formik?.handleBlur('password')}
                      value={formik?.values?.password}
                      inputMode="text"
                      keyboardType="password"
                      placeholder="Password"
                    />
                  )}
                </View>
                <View style={styles.loginButton}>
                  <CustomButton
                    buttonColor={'white'}
                    onClick={formik?.handleSubmit}
                    icon={
                      <FontAwesome6
                        name="arrow-right"
                        color="white"
                        iconStyle="solid"
                      />
                    }
                    login={
                      <Text style={styles.LoginText}>
                        {!showedit ? 'Enter' : 'Login'}
                      </Text>
                    }
                  />
                </View>
              </View>
            );
          }}
        </Formik>
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
  showEditbox: {
    height: 15,
  },
  syllabLogo: {
    width: 300,
    height: 300,
    borderRadius: '3%',
  },
  loginText: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20,
  },
  emailInputBox: {
    width: '100%',
    justifyContent: 'space-between',
  },
  emailInput: {
    width: '100%',
  },
  editEmail: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 5,
  },
  editEmailText: {
    textDecorationLine: 'underline',
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
  input: {
    borderWidth: 1,
    width: '100%',
    padding: 5,
  },
});

export default Login;
