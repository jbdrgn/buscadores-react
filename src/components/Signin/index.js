import React, { Component } from 'react'
import {
    CONTINUE,
    EMAIL,
    FALSE,
    FORGOT_PASSWORD,
    HASH_SIGN,
    LOGO,
    PASSWORD,
    ROOT_SLASH,
    SIGN_IN_TO_YOUR_ACCOUNT,
    SUBMIT,
    TRUE
} from '../../constants/GeneralConstants'
import {
    Container,
    FormButton,
    FormContent,
    FormHeaderOne,
    FormLabel,
    FormWrap,
    Icon,
    Form,
    FormInput,
    Text,
    ArrowBack,
    ArrowLeft
} from './SigninElements'
import capitalizeName, { capitalizeLine } from '../../utils';
import { SmallArrowButton } from '../Buttons/MainButtons';

export class SignIn extends Component {

    constructor() {
        super();
        this.state = {
            hover: false
        }
    }

    onHover = () => {
        this.state.hover ?
            this.setState({ hover: false }) :
            this.setState({ hover: true });
    }

    render() {

        const { hover } = this.state;

        return (
            <>
                <Container>
                    <FormWrap>
                        <FormContent>
                            <Form action={HASH_SIGN}>
                                <Icon to={ROOT_SLASH}>
                                    <img src={require('../../images/white_rabbit_64.svg')}
                                        alt={LOGO}
                                    />
                                </Icon>
                                <FormHeaderOne>
                                    {capitalizeLine(SIGN_IN_TO_YOUR_ACCOUNT)}
                                </FormHeaderOne>
                                <FormLabel htmlFor={FOR}>{capitalizeName(EMAIL)}</FormLabel>
                                <FormInput type={EMAIL} required />
                                <FormLabel htmlFor={FOR}>{capitalizeName(PASSWORD)}</FormLabel>
                                <FormInput type={PASSWORD} required />
                                <FormButton type={SUBMIT}>{capitalizeName(CONTINUE)}</FormButton>
                                <Text is_footer={TRUE}>{capitalizeLine(FORGOT_PASSWORD)}</Text>
                                <SmallArrowButton to={ROOT_SLASH}
                                    onMouseEnter={this.onHover}
                                    onMouseLeave={this.onHover}
                                    is_big={FALSE}
                                    is_dark_btn={TRUE}
                                >
                                    {hover ? <ArrowBack /> : <ArrowLeft />}
                                    Back
                                </SmallArrowButton>
                            </Form>
                        </FormContent>
                    </FormWrap>
                </Container>
            </>
        )
    }
}

export default SignIn