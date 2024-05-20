import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState} from 'react';
import BackgroundComponent from '../../components/BackgroundComponent/BackgroundComponent';
import {appleIcon, googleIcon, groupMeeting} from '../../assets/images';
import {COLORS} from '../../resources/colors';
import PurpleButton from '../../components/PurpleButton/PurpleButton';
import {useNavigation} from '@react-navigation/native';
import {ROUTE} from '../../resources/routesName';

type Props = {};

const SignInScreen = (props: Props) => {
  const [inputType, setInputType] = useState('phone');
  const navigation = useNavigation();
  return (
    <BackgroundComponent>
      <LinearGradient
        start={{x: 2, y: -0.1}}
        end={{x: -0.8, y: 1.9}}
        colors={['#A129FF', '#080808', '#080808', '#A129FF', 'transparent']}
        style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
          keyboardVerticalOffset={0}>
          <Image
            source={groupMeeting}
            style={styles.loginImage}
            resizeMode="cover"
          />

          <Text style={styles.loginHeading}>Login to Your Account</Text>

          <View style={styles.optionButtonContainer}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => setInputType('email')}>
              <Text
                style={[
                  styles.optionButtonText,
                  inputType === 'email' && {
                    backgroundColor: COLORS.WHITE,
                    color: COLORS.GREY,
                  },
                ]}>
                Email
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => setInputType('phone')}>
              <Text
                style={[
                  styles.optionButtonText,
                  inputType === 'phone' && {
                    backgroundColor: COLORS.WHITE,
                    color: COLORS.GREY,
                  },
                ]}>
                Phone Number
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            {inputType === 'phone' && (
              <TextInput
                style={[styles.loginInput, {flex: 1, marginRight: 8}]}
                placeholder="+91"
                placeholderTextColor={COLORS.LIGHT_GREY}
              />
            )}
            <TextInput
              style={styles.loginInput}
              placeholder={
                inputType === 'phone' ? '169 916 9564' : 'xyz@email.com'
              }
              placeholderTextColor={COLORS.LIGHT_GREY}
            />
          </View>
          <View style={{marginVertical: 12}}>
            <PurpleButton
              buttonText="Send OTP"
              onPress={() => navigation.navigate(ROUTE.OTP as never)}
            />
          </View>

          <View
            style={{
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 12,
            }}>
            <Text style={{color: COLORS.WHITE}}> OR Login with </Text>
            <View style={styles.rowContainer}>
              <TouchableOpacity style={styles.loginCompaniesIconContainer}>
                <Image source={googleIcon} style={styles.loginCompaniesIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.loginCompaniesIconContainer}>
                <Image source={appleIcon} style={styles.loginCompaniesIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
              <Text style={{color: COLORS.WHITE}}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(ROUTE.REGISTER as never)}>
                <Text
                  style={{
                    color: COLORS.PURPLE,
                    textDecorationLine: 'underline',
                  }}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </BackgroundComponent>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
  loginImage: {
    width: 360,
    height: 360,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 84,
    marginBottom: 12,
  },
  loginHeading: {
    color: COLORS.WHITE,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '500',
    marginVertical: 12,
  },
  optionButtonContainer: {
    marginVertical: 12,
    flexDirection: 'row',
    height: 48,
    backgroundColor: COLORS.GREY,
    borderRadius: 5,
  },
  optionButton: {
    height: 48,
    flex: 1,
  },
  optionButtonText: {
    color: COLORS.WHITE,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '500',
    width: '100%',
    height: '100%',
    borderColor: COLORS.WHITE,
    fontSize: 16,
    borderRadius: 5,
  },
  loginInput: {
    color: COLORS.WHITE,
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.GREY,
    borderRadius: 5,
    padding: 10,
    marginVertical: 12,
    flex: 8,
  },
  loginCompaniesIcon: {},
  loginCompaniesIconContainer: {
    height: 48,
    width: 48,
    margin: 8,
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 100,
  },
  rowContainer: {
    flexDirection: 'row',
  },
});
