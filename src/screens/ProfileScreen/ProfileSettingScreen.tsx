import {Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  BackgroundComponent,
  HeaderComponent,
  SettingButtonComponent,
  SettingComponent,
} from '../../components';
import CurvedContainer from '../../components/CurvedContainer/CurvedContainer';
import {useNavigation} from '@react-navigation/native';
import {
  respFontSize,
  responsiveHeight,
} from '../../utilities/responsiveDimensions';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {setFontSize} from '../../redux/slices/FontSlice';

type Props = {};

const ProfileSettingScreen = (props: Props) => {
  const [fontSizeModal, setFontSizeModal] = useState(false);
  const dispatch = useAppDispatch();

  const navigation = useNavigation();
  return (
    <>
      <BackgroundComponent notTranslucent>
        <HeaderComponent
          text="Profile Setting"
          leftIconEvent={() => navigation.goBack()}
        />
        <CurvedContainer>
          <SettingComponent text={'Theme'} rightIcon={true} />
          <SettingComponent
            text={'Font Size'}
            rightIcon={true}
            rightIconEvent={() => setFontSizeModal(!fontSizeModal)}
          />
          <SettingComponent text={'Delay Sending'} rightIcon={true} />
          <SettingComponent text={'Swipe Actions'} rightIcon={true} />
          <SettingButtonComponent text={'Night Mode'} />
          <SettingButtonComponent text={'Notification'} />
          <SettingButtonComponent text={'Automatic contact colors'} />
          <SettingButtonComponent text={'Use system font'} />
        </CurvedContainer>
      </BackgroundComponent>
      <Modal
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
        visible={fontSizeModal}
        onRequestClose={() => {
          setFontSizeModal(!fontSizeModal);
        }}>
        <BackgroundComponent>
          <View style={{marginTop: responsiveHeight(24)}}>
            <HeaderComponent
              text="Font Size"
              leftIconEvent={() => setFontSizeModal(false)}
            />
            <CurvedContainer>
              <SettingComponent
                text={'Small'}
                rightIconEvent={() =>
                  dispatch(setFontSize({fontSize: 'small', sizeFactor: 1}))
                }
              />
              <SettingComponent
                text={'Medium'}
                rightIconEvent={() =>
                  dispatch(setFontSize({fontSize: 'medium', sizeFactor: 1.25}))
                }
              />
              <SettingComponent
                text={'Large'}
                rightIconEvent={() =>
                  dispatch(setFontSize({fontSize: 'large', sizeFactor: 1.5}))
                }
              />
            </CurvedContainer>
          </View>
        </BackgroundComponent>
      </Modal>
    </>
  );
};

export default ProfileSettingScreen;

const styles = StyleSheet.create({});
