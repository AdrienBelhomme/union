import React from 'react';
import * as CustomCode from '../CustomCode.js';
import * as Utils from '../utils';
import { ScreenContainer } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';

const RealvideocomponentScreen = props => {
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      console.log(
        props.route?.params?.urlofvideo ??
          'https://res.cloudinary.com/djl9nmkbs/video/upload/v1660767022/video/test_cardio_qnho5p.mp4'
      );
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Utils.CustomCodeErrorBoundary>
        <CustomCode.VidePlayerUnionLast navigation={props.navigation} />
      </Utils.CustomCodeErrorBoundary>
    </ScreenContainer>
  );
};

export default RealvideocomponentScreen;
