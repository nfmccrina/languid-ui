import { FunctionComponent, HTMLAttributes } from 'react';

interface AudioPlayerProps extends HTMLAttributes<any> {}

const AudioPlayer: FunctionComponent<AudioPlayerProps> = (
  props: AudioPlayerProps
) => {
  return (
    <audio
      className={props.className}
      src="https://languidstream.mccrina.site:8080/sermon.ogg"
      controls
    ></audio>
  );
};

export default AudioPlayer;
