import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {BackgroundComponent, PurpleButton} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {groupMeeting} from '../../assets/images';
import {COLORS} from '../../resources';
import {useNavigation} from '@react-navigation/native';
import {ROUTE} from '../../resources/routesName';

type Props = {};

const RegisterScreen = (props: Props) => {
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

          <Text style={styles.loginHeading}>Register Your Account</Text>
          <TextInput
            style={styles.loginInput}
            placeholder={'Username'}
            placeholderTextColor={COLORS.LIGHT_GREY}
          />
          <TextInput
            style={styles.loginInput}
            placeholder={'Email'}
            placeholderTextColor={COLORS.LIGHT_GREY}
          />
          <View style={{marginVertical: 12}}>
            <PurpleButton buttonText="Register" />
          </View>
          <View style={[styles.rowContainer, {justifyContent: 'center'}]}>
            <Text style={{color: COLORS.WHITE}}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTE.SIGN_IN as never)}>
              <Text
                style={{
                  color: COLORS.PURPLE,
                  textDecorationLine: 'underline',
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </BackgroundComponent>
  );
};

export default RegisterScreen;
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
  loginInput: {
    color: COLORS.WHITE,
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.GREY,
    borderRadius: 5,
    padding: 10,
    marginVertical: 12,
  },
  rowContainer: {
    flexDirection: 'row',
  },
});
