import React, { Component } from 'react';
import "../../../node_modules/video-react/dist/video-react.css";
import { BigPlayButton, ControlBar, ForwardControl, LoadingSpinner, Player, ReplayControl } from 'video-react';
import { asPath, capitalizeLine } from '../../utils';
import {
    KeyContainer,
    MainContainer,
    Title,
    VideoRoute,
} from './ItemElements';
import { CLICK_ME, TOP, VIDEOS } from '../../constants/GeneralConstants';
import Tooltip from '@mui/material/Tooltip'; //https://mui.com/material-ui/react-tooltip/
import Zoom from '@mui/material/Zoom'; 
//import {Icon} from '@mui/material'; 

class Video extends Component {

    render() {

    const { item } = this.props;

    return (
      <>
        <KeyContainer key={item._id}>
            <MainContainer>
                <Tooltip id={`tooltip-${item._id}`} 
                    title={
                        <span style={{
                                fontSize:"1.5em",
                            }}>
                            {capitalizeLine(CLICK_ME)}
                        </span>
                    }
                    TransitionComponent={Zoom}
                    arrow={true}
                    placement={TOP}
                >                                   
                    <VideoRoute to={asPath(VIDEOS)+asPath(item._id)}>
                        <Title id={`title-${item._id}`}>{capitalizeLine(item.themes[0])}</Title>
                    </VideoRoute>
                </Tooltip>                                   
                <Player
                    playsInline 
                    poster={require(`../../images/${item._id}.png`)}
                    src={require(`../../videos/${item._id}.mp4`)}
                    //src={require(`../../../videos/${item._id}.mp4`)}
                    //src={`${PATH_VIDEOS}/${item._id}.mp4`}
                >
                    <BigPlayButton position='center'/>
                    <LoadingSpinner/>
                    <ControlBar autoHide={false}>
                        <ReplayControl seconds={10}/>
                        <ForwardControl seconds={10}/>
                    </ControlBar>
                </Player>
            </MainContainer>
        </KeyContainer>
      </>
    )
  }
}

export default Video;