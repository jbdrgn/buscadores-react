import React, { Component } from 'react';
import Sidebar from '../../../components/Sidebar';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

import channels from '../../../data/channels.json';
import capitalizeName,{asPath, capitalizeLine} from '../../../utils';
import {
    KeyContainer,
    MainContainer,
    ImageContainer,
    Image,
    Title,
    Social,
    SocialContainer,
    Text,
    Icon,
    ColumnContainer,
    Main,
    DetailChannelRoute,
    BtnBack,
    ArrowBack,    
    ArrowLeft,
    BtnTextBack,
    DetailChannelFooter
} from './DetailChannelElement';

import { CHANNELS, HYPHEN, MAIN, TITLE, VOLVER, _BLANK } from '../../../constants/GeneralConstants';

export class ChannelDetail extends Component {

    constructor(){
        super();
        this.state = {
            is_open: false,
            items: channels.items,
            hover:false,
            flip: false
        }

        //bind an arrow function to the constructor
        this.toggle = this.toggle.bind(this);
    }

    toggle = () => {
        this.state.is_open ? 
            this.setState({is_open: false}) : 
            this.setState({is_open: true});
    }

    onHover = () => {
        this.state.hover ? 
            this.setState({hover: false}) :
            this.setState({hover: true});        
    }   

    click = () => { this.setState({flip : !this.state.flip}) }

    render() {

        const { items, is_open, hover, flip } = this.state;
        const {id} = this.props.match.params;
        const item = items.filter(channel => channel._id === id)[0]
        console.log(item);    

        return (
            <>
                <Sidebar is_open={is_open} toggle={this.toggle}/>
                <Main id={MAIN}></Main>
                <Navbar is_open={is_open} toggle={this.toggle}/>

                <MainContainer>
                    <KeyContainer key={item._id}>
                        <MainContainer>
                            <Title id={`${TITLE}${HYPHEN}${item._id}`}>{capitalizeLine(item.themes[0])}</Title>
                            <ImageContainer onClick={this.click}>
                                {!flip ?
                                    <Image src={require(`../../../images/${item._id}.png`)} alt={item.image}/>
                                    :
                                    <SocialContainer>
                                        {
                                            item.social.map((link,id) => {
                                                return (
                                                    <Social 
                                                        key={id} 
                                                        href={Object.values(link).toString()}
                                                        target={_BLANK}
                                                    >
                                                        <ColumnContainer>
                                                            <Icon 
                                                                src={require(`../../../images/${Object.keys(link).toString()}.png`)} 
                                                                alt={Object.keys(link).toString()}
                                                            />
                                                        </ColumnContainer>
                                                        <ColumnContainer>
                                                            <Text>{capitalizeLine(
                                                                /* Object.keys(link).toString() === "sharethis" ? 
                                                                "web" : Object.keys(link).toString() */
                                                                Object.keys(link).toString()
                                                            )}</Text>
                                                        </ColumnContainer>
                                                    </Social>
                                                )
                                            })
                                        }
                                    </SocialContainer>
                                }
                            </ImageContainer>
                        </MainContainer>
                    </KeyContainer>
                </MainContainer>       

                <DetailChannelRoute to={'..'+asPath(CHANNELS)}>
                    <BtnBack onClick={this.toggle}
                        onMouseEnter={this.onHover}
                        onMouseLeave={this.onHover}
                    >
                        {hover ? <ArrowBack /> : <ArrowLeft />}
                        <BtnTextBack>{capitalizeName(VOLVER)}</BtnTextBack>
                    </BtnBack>
                </DetailChannelRoute>
                <DetailChannelFooter>
                    <Footer/>
                </DetailChannelFooter>                 
            </>
        )
  }
}

export default ChannelDetail;