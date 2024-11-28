import React, { Component } from 'react';
import { asPath, capitalizeLine } from '../../utils';
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
    ChannelRoute
} from './ItemElements';
import { CLICK_ME, TOP, CHANNELS, TITLE, HYPHEN, _BLANK, TOOLTIP } from '../../constants/GeneralConstants';
import Tooltip from '@mui/material/Tooltip'; //https://mui.com/material-ui/react-tooltip/
import Zoom from '@mui/material/Zoom'; 

export class Item extends Component {

    constructor(){
        super();
        this.state = {
            flip:false
        }
    }

    click = () => { this.setState({flip : !this.state.flip}) }

    render() {

    const { flip } = this.state;
    const { item } = this.props;

    return (
      <>
        <KeyContainer key={item._id}>
            <MainContainer>

                <Tooltip id={`${TOOLTIP}${HYPHEN}${item._id}`} 
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
                    <ChannelRoute to={asPath(CHANNELS)+asPath(item._id)}>
                        <Title id={`${TITLE}${HYPHEN}${item._id}`}>{capitalizeLine(item.themes[0])}</Title>
                    </ChannelRoute>
                </Tooltip>     

                <ImageContainer onClick={this.click}>
                    {!flip ?
                        <Image src={require(`../../images/${item._id}.png`)} alt={item.image}/>
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
                                                    src={require(`../../images/${Object.keys(link).toString()}.png`)} 
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
      </>
    )
  }
}

export default Item;