/*eslint-disable*/
import React from 'react';
import { GAMBannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId ='ca-app-pub-2979993637425208/8910652814';

export const BannerAd = () => {
  return (
    <GAMBannerAd
      unitId={adUnitId}
      sizes={[BannerAdSize.FULL_BANNER]}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
}
