import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import videoSrc from './ms_accessibility.mp4';
import FullScreen from './full-screen-container';

export default function MsVideo() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <FullScreen>{isMounted && <Video autoPlay src={videoSrc} />}</FullScreen>
  );
}
