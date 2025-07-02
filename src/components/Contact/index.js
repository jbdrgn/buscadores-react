import React, { Component } from 'react';
// import { ToastContainer as Toast, toast } from 'react-toast';
import {
    BACK, COPY, COPIED_MESSAGE, COPIED_VISIBLE_TIME, EMAIL,
    ROOT
    // MAIN, SERVICES, SIGN_UP, SIGN_IN, SOCIAL, INICIO, FOOTER, 
} from '../../constants/GeneralConstants';
import capitalizeName from '../../utils';
import {
    SidebarContainer,
    // Icon, CloseIcon,
    SidebarWrapper, SidebarMenu,
    // SidebarLink,
    SidebarBtnWrap,
    SidebarRoute,
    BtnBack,
    ArrowBack, ArrowLeft, BtnTextBack, TextEmail,
    ContainerCopy, BtnCopy, MessageCopy, IconOk,
    // SidebarBtnIconCopy, SidebarBtnColumn, 
    IconCopy,
    // SidebarBtnColumnCopy, 
    Email, ContainerMessageCopy
} from './ContactElements';
// import { NavBtn, NavBtnContainer } from '../Navbar/NavbarElements';

class Contact extends Component {

    constructor() {
        super();
        this.state = {
            hover: false,
            copied_visible: false,
            is_smallest: true
        }
    }

    componentDidMount() {
        this.updateLastPath();
    }

    updateLastPath = () => {
        window.location.last = (window.location.last === undefined) ?
            window.location.last = `${window.location.pathname}` :
            window.location.last = window.location.tmp;
        window.location.tmp = `${window.location.pathname}`
    }

    onHover = () => {
        this.state.hover ?
            this.setState({ hover: false }) :
            this.setState({ hover: true });
    }

    copyToClipboard = (TEXT) => {
        navigator.clipboard.writeText(TEXT); //modern text copy

        /*         
        toast.success(`'${TEXT}' copiado al portapapeles`,{
            backgroundColor: "#009900"
        });
        */

        this.messageCopyTimer(COPIED_VISIBLE_TIME);
    }

    messageCopyTimer = (time) => {
        this.setState({ copied_visible: true });
        setTimeout(() => {
            this.setState({ copied_visible: false });
        }, time);
    }

    render() {

        const { hover, copied_visible, is_smallest } = this.state;
        const {
            // is_open, 
            toggle } = this.props;
        const OWN_EMAIL = `${process.env.REACT_APP_EMAIL}`;

        return (
            <SidebarContainer is_open={true}>

                {/*
                <Icon onclick={toggle}>
                    <CloseIcon/>
                </Icon>
                */}

                <SidebarWrapper>

                    {/*
                    <SidebarMenu>
                        <SidebarLink to={MAIN} onClick={toggle}>
                            {capitalizeName(MAIN)}
                        </SidebarLink>
                        <SidebarLink to={FOOTER} onClick={toggle}>
                            {capitalizeName(FOOTER)}
                        </SidebarLink>
                    </SidebarMenu>
                    */}

                    <SidebarMenu>
                        <TextEmail>
                            {capitalizeName(EMAIL)}
                        </TextEmail>
                        <Email>
                            {OWN_EMAIL}
                        </Email>
                        <ContainerCopy>
                            <BtnCopy onClick={() => this.copyToClipboard(OWN_EMAIL)}>
                                <IconCopy />
                                {capitalizeName(COPY)}
                            </BtnCopy>
                        </ContainerCopy>
                        <ContainerMessageCopy is_smallest={is_smallest}>
                            <MessageCopy is_visible={copied_visible}>
                                <IconOk src={require('../../images/purple_ok.png')} alt='logo' />
                                {capitalizeName(COPIED_MESSAGE)}
                            </MessageCopy>
                        </ContainerMessageCopy>
                        {/* <Toast position = "center" delay = {2000} style={{top: "-90px"}}/> */}
                    </SidebarMenu>

                    <SidebarBtnWrap>
                        <SidebarRoute to={
                            (window.location.last !== undefined) ?
                                `${window.location.last}` : `${ROOT}`
                        }>
                            <BtnBack onClick={toggle}
                                onMouseEnter={this.onHover}
                                onMouseLeave={this.onHover}
                            >
                                {hover ? <ArrowBack /> : <ArrowLeft />}
                                <BtnTextBack>{capitalizeName(BACK)}</BtnTextBack>
                            </BtnBack>
                        </SidebarRoute>
                    </SidebarBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        )
    }
}

export default Contact;