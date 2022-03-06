import React from 'react';
import * as YT from './Youtube.styled';
import Icon from '../icomoon/IcoMoon.component';

const YoutubeButton = () => {
  return (
    <YT.YoutubeButton>
      <YT.LinkYoutube href='https://youtube.com' target='_blank' alt='asd'>
        <Icon size='60%' icon='youtube' color='white' />
      </YT.LinkYoutube>
    </YT.YoutubeButton>
  );
};

export default YoutubeButton;
