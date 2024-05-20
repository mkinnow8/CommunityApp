import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import BackgroundComponent from '../../components/BackgroundComponent/BackgroundComponent';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PurpleButton from '../../components/PurpleButton/PurpleButton';
import {COLORS} from '../../resources';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const OtpScreen = (props: Props) => {
  const navigation = useNavigation();
  const [inputValues, setInputValues] = useState<string[]>([
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const inputsRef = useRef<Array<TextInput | null>>([]);

  const inputTyped = (text: string, index: number) => {
    const value = [...inputValues];
    value[index] = text;
    setInputValues(value);
    if (value[index].length === 0) inputsRef.current[index - 1]?.focus();
    else if (value[index].length === 1) inputsRef.current[index + 1]?.focus();
  };

  return (
    <BackgroundComponent>
      <LinearGradient
        start={{x: 2, y: -0.1}}
        end={{x: -0.8, y: 1.9}}
        colors={['#A129FF', '#080808', '#080808', '#A129FF', 'transparent']}
        style={styles.container}>
        <View style={[styles.rowContainer, {marginTop: 44}]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={24} color={COLORS.WHITE} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Phone Verification</Text>
        </View>
        <Text style={styles.otpHeading}>
          Enter 6 digit verification code sent to your phone number
        </Text>

        <View style={styles.rowContainer}>
          <OtpInput
            inputsRef={inputsRef}
            inputValues={inputValues}
            index={0}
            onChange={inputTyped}
          />
          <OtpInput
            inputsRef={inputsRef}
            inputValues={inputValues}
            index={1}
            onChange={inputTyped}
          />
          <OtpInput
            inputsRef={inputsRef}
            inputValues={inputValues}
            index={2}
            onChange={inputTyped}
          />
          <OtpInput
            inputsRef={inputsRef}
            inputValues={inputValues}
            index={3}
            onChange={inputTyped}
          />
          <OtpInput
            inputsRef={inputsRef}
            inputValues={inputValues}
            index={4}
            onChange={inputTyped}
          />
          <OtpInput
            inputsRef={inputsRef}
            inputValues={inputValues}
            index={5}
            onChange={inputTyped}
          />
        </View>
        <View style={{alignItems: 'center', marginVertical: 12}}>
          <TouchableOpacity>
            <Text style={{color: COLORS.WHITE}}>Resend Code</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            flex: 1,
            marginBottom: 48,
          }}>
          <PurpleButton buttonText="Submit" />
        </View>
      </LinearGradient>
    </BackgroundComponent>
  );
};

type otpInputType = {
  inputsRef: React.MutableRefObject<(TextInput | null)[]>;
  inputValues: string[];
  index: number;
  onChange: (text: string, index: number) => void;
};

const OtpInput = ({inputsRef, inputValues, index, onChange}: otpInputType) => {
  return (
    <TextInput
      style={[styles.loginInput, styles.otpInput]}
      ref={el => (inputsRef.current[index] = el)}
      value={inputValues[index]}
      placeholder=""
      keyboardType="numeric"
      maxLength={1}
      placeholderTextColor={COLORS.LIGHT_GREY}
      onChangeText={text => onChange(text, index)}
    />
  );
};
export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  otpHeading: {
    color: COLORS.WHITE,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: '500',
    marginVertical: 24,
  },
  headerText: {
    color: COLORS.WHITE,
    fontSize: 16,
    textAlign: 'center',
    flex: 1,
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
  otpInput: {
    marginHorizontal: 4,
    textAlign: 'center',
  },
});
