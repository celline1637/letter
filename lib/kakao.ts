export const initKakao = () => {
  window.Kakao.init('60ceb456db986d16967adc440d1d35af');
  console.log('here', window.Kakao.isInitialized());
};
