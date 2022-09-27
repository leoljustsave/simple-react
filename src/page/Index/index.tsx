import { useEffect, useRef } from 'react';

import './style.scss';

export const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const initStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      if (!videoRef.current) return;

      // const videoTracks = stream.getVideoTracks();
      console.log('videoRef.current: ', videoRef.current);
      videoRef.current.srcObject = stream;
    } catch (e) {}
  };

  useEffect(() => {
    initStream();
  }, []);

  const handleGetSnapshot = () => {
    return;
  };

  return (
    <div className='box'>
      <video ref={videoRef} autoPlay playsInline />
      <input type='button' value='click' onClick={handleGetSnapshot} />
    </div>
  );
};
