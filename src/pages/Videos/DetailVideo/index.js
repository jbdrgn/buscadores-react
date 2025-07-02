
import React, { Component } from 'react';
import { BigPlayButton, ControlBar, ForwardControl, LoadingSpinner, Player, ReplayControl } from 'video-react';

import Sidebar from '../../../components/Sidebar';
import { Main } from '../AllVideos/VideosElements';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import videos from '../../../data/videos.json';

import { BACK, MAIN, VIDEOS } from '../../../constants/GeneralConstants';

import {
    MainContainer,
    KeyContainer,
    Title,
    DetailVideoRoute,
    BtnBack,
    ArrowBack,
    ArrowLeft,
    BtnTextBack,
    DetailVideoFooter
} from './DetailVideoElement';
import capitalizeName, { asPath, capitalizeLine, removeDiacritics } from '../../../utils';

class VideoDetail extends Component {

    constructor() {
        super();
        this.state = {
            is_open: false,
            items: videos.items,
            hover: false,
        }

        //bind an arrow function to the constructor
        this.toggle = this.toggle.bind(this);
    }

    toggle = () => {
        this.state.is_open ?
            this.setState({ is_open: false }) :
            this.setState({ is_open: true });
    }

    onHover = () => {
        this.state.hover ?
            this.setState({ hover: false }) :
            this.setState({ hover: true });
    }

    render() {
        const { id } = this.props.match.params;
        const { is_open, items, hover } = this.state;
        const item = items.filter(video => video._id === id)[0]

        return (
            <>
                <Sidebar is_open={is_open} toggle={this.toggle} />
                <Main id={MAIN}></Main>
                <Navbar is_open={is_open} toggle={this.toggle} />

                <MainContainer>
                    <KeyContainer key={item._id}>
                        <Title id={`title-${item._id}`}>{capitalizeLine(item.themes[0])}</Title>
                        <Title id={`subtitle-${item._id}`}>{capitalizeLine(removeDiacritics(item.subtitle))}</Title>
                        &nbsp;
                        <Player
                            playsInline
                            poster={require(`../../../images/${item._id}.png`)}
                            src={require(`../../../videos/${item._id}.mp4`)}
                        //src={require(`../../../videos/${item._id}.mp4`)}
                        //src={`${PATH_VIDEOS}/${item._id}.mp4`}
                        >
                            <BigPlayButton position='center' />
                            <LoadingSpinner />
                            <ControlBar autoHide={false}>
                                <ReplayControl seconds={10} />
                                <ForwardControl seconds={10} />
                            </ControlBar>
                        </Player>
                    </KeyContainer>
                </MainContainer>

                <DetailVideoRoute to={'..' + asPath(VIDEOS)}>
                    <BtnBack onClick={this.toggle}
                        onMouseEnter={this.onHover}
                        onMouseLeave={this.onHover}
                    >
                        {hover ? <ArrowBack /> : <ArrowLeft />}
                        <BtnTextBack>{capitalizeName(BACK)}</BtnTextBack>
                    </BtnBack>
                </DetailVideoRoute>
                <DetailVideoFooter>
                    <Footer />
                </DetailVideoFooter>
            </>
        )
    }
}

export default VideoDetail;