import { useEffect, useRef } from 'react';
import { Worker } from 'tesseract.js';
import { Snapshot } from './snapshot';

import './style.scss';
import { Tesseract } from './tesseract';

export const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const snapshotInsRef = useRef<Snapshot>();
  const tesseractRef = useRef<Tesseract>();

  const initStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      if (!videoRef.current) return;

      // const videoTracks = stream.getVideoTracks();
      videoRef.current.srcObject = stream;
    } catch (e) {}
  };

  const initTesseract = () => {
    tesseractRef.current = new Tesseract();
  };

  const initSnapshot = () => {
    if (!videoRef.current || snapshotInsRef.current) return;

    const { width, height } = getComputedStyle(videoRef.current);
    const size = {
      width: Number(width.replace('px', '')),
      height: Number(height.replace('px', '')),
    };
    snapshotInsRef.current = new Snapshot({ size });
    document.querySelector('#displayBox')?.appendChild(snapshotInsRef.current.getCanvas());
  };

  useEffect(() => {
    initStream();
    initTesseract();
    setTimeout(initSnapshot, 1000);
  }, []);

  const parseWithTesseract = async () => {
    if (!tesseractRef.current || !snapshotInsRef.current) return;

    const img = snapshotInsRef.current.getImageUrl();
    const res = await tesseractRef.current.parse({ img });
  };

  const handleGetSnapshot = () => {
    if (!videoRef.current || !snapshotInsRef.current) return;
    snapshotInsRef.current.takeShot(videoRef.current);
    parseWithTesseract();
  };

  const handleClear = () => {
    if (!snapshotInsRef.current) return;
    snapshotInsRef.current.clear();
  };

  return (
    <div className='box'>
      <div className='display' id='displayBox'>
        <video ref={videoRef} autoPlay playsInline />
      </div>
      <div className='operation'>
        <input type='button' value='take shot' onClick={handleGetSnapshot} />
        <input type='button' value='clear' onClick={handleClear} />
      </div>
    </div>
  );
};
