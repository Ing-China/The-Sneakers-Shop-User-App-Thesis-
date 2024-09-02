import React from 'react';
import {Colors, Icons} from '../../constants';
import Touchable from '../Account/index';

export default function FavoriteButton({onPress, isFavorite}) {
  return (
    <Touchable onPress={onPress}>
      {isFavorite ? (
        <Icons.FAVORITEFILL width={24} height={24} fill={Colors.BLACK} />
      ) : (
        <Icons.FAVORITE width={24} height={24} color={Colors.BLACK} />
      )}
    </Touchable>
  );
}
