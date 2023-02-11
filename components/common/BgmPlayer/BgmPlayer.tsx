import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import * as S from './BgmPlayer.styles';
import { hasUserInteractionState } from 'store/atom/bgm_player';
import Button from '../Button';
import usePrevious from 'hooks/usePrevious';

const BgmPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasUserInteraction, setHasUserInteraction] = useRecoilState(hasUserInteractionState);
  const prevHasInteraction = usePrevious(hasUserInteraction);
  const [isClicked, setIsClicked] = useState(false);

  const handleBgmBtn = useCallback(() => {
    setHasUserInteraction(true);
    setIsClicked((prev) => !prev);
  }, [setHasUserInteraction]);

  useEffect(() => {
    if (audioRef && audioRef.current) {
      // 화면 인터렉션 발생 시 배경음악 재생
      if (!prevHasInteraction && hasUserInteraction) {
        audioRef.current.play();
        setIsClicked(true);
        return;
      }
      // 배경 음악 버튼 클릭에 따라 배경음악 재생
      isClicked ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [hasUserInteraction, prevHasInteraction, isClicked]);

  return (
    <S.BgmPlayer>
      <Button title={`배경음악 ${isClicked ? '끄기' : '켜기'}`} handleClick={handleBgmBtn}>
        <span role={'icon'}>{isClicked ? '🔈' : '🔇'}</span>
        <S.Text>배경음악 {isClicked ? '끄기' : '켜기'}</S.Text>
      </Button>
      <audio ref={audioRef} src={'assets/sound/vinyl-noise.mp3'} autoPlay loop controls />
    </S.BgmPlayer>
  );
};

export default BgmPlayer;
