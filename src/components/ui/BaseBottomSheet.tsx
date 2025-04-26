import { useRef, useImperativeHandle, forwardRef } from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

import tw from '../../libs/tw';

export type BaseBottomSheetRef = {
  expand: () => void;
  close: () => void;
};

const BaseBottomSheet = forwardRef<
  BaseBottomSheetRef,
  { children: React.ReactNode }
>(({ children }, ref) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // expose expand & close methods to parent
  useImperativeHandle(ref, () => ({
    expand: () => bottomSheetRef.current?.expand(),
    close: () => bottomSheetRef.current?.close(),
  }));

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={['30%']}
      onChange={(index) => {}}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          opacity={0.2}
        />
      )}
    >
      <BottomSheetView style={tw.style('flex-1')}>{children}</BottomSheetView>
    </BottomSheet>
  );
});

export default BaseBottomSheet;
