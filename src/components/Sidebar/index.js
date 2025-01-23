import React, { Component } from 'react';
// import { ToastContainer as Toast, toast } from 'react-toast';
import {
    CANALES,
    CONTACT,
    // CONTACTO,
    // NAME,
    // NUMEROS_DE_TU_NOMBRE,
    ROOT,
    // MAIN, SERVICES, SIGN_UP, SIGN_IN, SOCIAL, INICIO, FOOTER, 
    VOLVER,
} from '../../constants/GeneralConstants';
import capitalizeName, { asPath } from '../../utils';
import {
    SidebarContainer,
    // Icon, CloseIcon,
    SidebarWrapper, SidebarMenu,
    // SidebarLink,
    SidebarBtnWrap,
    SidebarRoute,
    BtnBack,
    ArrowBack, ArrowLeft, BtnTextBack,
    // TextEmail, 
    // ContainerCopy, BtnCopy, MessageCopy, IconOk,
    // SidebarBtnIconCopy, SidebarBtnColumn, 
    // IconCopy, 
    // SidebarBtnColumnCopy, 
    // Email, ContainerMessageCopy
} from './SidebarElements';
// import { NavBtn, NavBtnContainer } from '../Navbar/NavbarElements';

class Sidebar extends Component {

    constructor() {
        super();
        this.state = {
            hover: false,
        }
    }

    onHover = () => {
        this.state.hover ?
            this.setState({ hover: false }) :
            this.setState({ hover: true });
    }

    render() {

        const { hover } = this.state;
        const { is_open, toggle } = this.props;

        return (
            <SidebarContainer is_open={is_open}>
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
                        <SidebarRoute to={ROOT} onClick={toggle} >
                            {capitalizeName(CANALES)}
                        </SidebarRoute>
                        {/* <SidebarRoute to={'..'+asPath(VIDEOS)} onClick={toggle}>
                            {capitalizeName(VIDEOS)} 
                        </SidebarRoute>  */}
                        {/* <SidebarRoute to={NAME} onClick={toggle}>
                            {capitalizeName(NUMEROS_DE_TU_NOMBRE)}
                        </SidebarRoute> */}
                        <SidebarRoute to={CONTACT} onClick={toggle}>
                            {capitalizeName(CONTACT)}
                        </SidebarRoute>
                    </SidebarMenu>

                    <SidebarBtnWrap>

                        {/*
                        <SidebarRoute to={asPath(trimLine(SIGN_IN))}>
                            {capitalizeLine(SIGN_IN)}
                        </SidebarRoute>
                        */}

                        <BtnBack onClick={toggle}
                            onMouseEnter={this.onHover}
                            onMouseLeave={this.onHover}
                        >
                            {hover ? <ArrowBack /> : <ArrowLeft />}
                            <BtnTextBack>{capitalizeName(VOLVER)}</BtnTextBack>
                        </BtnBack>
                    </SidebarBtnWrap>

                </SidebarWrapper>
            </SidebarContainer>
        )
    }
}

export default Sidebar;