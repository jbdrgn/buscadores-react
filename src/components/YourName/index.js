
import React, { Component } from 'react';

import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
//import Footer from '../Footer';

import { APELLIDO, BACK, BUTTON, CONTINUAR, EMPTY, MAIN, NOMBRE, TEXT, ROOT, NUMEROLOGIA_DEL_NOMBRE, RESET, VOCALES, CONSONANTES, CHAR_AS_LETTER, CHAR_AS_VOWEL, LETTER_NUM_MAP, ZERO_NUM, NOMBRE_INPUT, APELLIDO_INPUT, PERSONALIDAD, ALMA, RED_BOOTSTRAP, BLUE_BOOTSTRAP, PURPLE_HTML, GREEN_BOOTSTRAP, ENYE, TOP, WIKIHOW_LINK, _BLANK, WIKIHOW_LINK_ADDRESS, RIGHT, TOOLTIP, HYPHEN, HASH_SIGN, FOR, NOMBRE_O_APELLIDO_REQUERIDO, N, NUMERO_NOMBRE } from '../../constants/GeneralConstants';

import {
    Main,
    // MainContainer,
    // KeyContainer,
    // Title,
    // DetailVideoRoute, 
    BtnBack,
    ArrowBack,
    ArrowLeft,
    BtnTextBack,
    //YourNameFooter,

    FormContainer,
    FormButton,
    FormContent,
    FormHeaderOne,
    FormLabel,
    FormWrap,
    Form,
    FormInput,
    Text,

    BtnWrap,
    ReRoute,
    AnswerForm,
    LinkTo,
    Span,
    AlertForm,
    AlertSpan
} from './YourNameElements';

import capitalizeName, { capitalizeLine, removeDiacritics } from '../../utils';

import Tooltip from '@mui/material/Tooltip'; //https://mui.com/material-ui/react-tooltip/
import Zoom from '@mui/material/Zoom';

class YourName extends Component {

    constructor() {
        super();
        this.state = {
            is_answer_form_visible: false,
            is_alert_form_visible: false,
            is_open: false,
            hover: false,
            name: EMPTY,
            surname: EMPTY,
            fullname_value: EMPTY,
            vowels_value: EMPTY,
            consonants_value: EMPTY
        }

        //bind these functions to the constructor
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
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

    handleSubmit = () => {
        const [vowels_value, consonants_value] = this.numericalName(this.state.name, this.state.surname);
        const fullname_value = vowels_value + consonants_value;

        console.log(!(0 < this.state.name.length) && !(0 < this.state.surname.length))

        this.setState({
            is_alert_form_visible: (!(0 < this.state.name.length) && !(0 < this.state.surname.length)) ? true : false,
            is_answer_form_visible: (!(0 < vowels_value.toString().length) && !(0 < consonants_value.toString().length)) ? false : true,
            fullname_value: (0 < fullname_value.toString().length) ? this.sumNumericValue(fullname_value) : ZERO_NUM,
            vowels_value: (0 < vowels_value.toString().length) ? this.sumNumericValue(vowels_value) : ZERO_NUM,
            consonants_value: (0 < consonants_value.toString().length) ? this.sumNumericValue(consonants_value) : ZERO_NUM,
        })
    }

    handleReset = () => {
        this.setState({
            is_alert_form_visible: false,
            is_answer_form_visible: false,
            name: EMPTY,
            surname: EMPTY,
            fullname_value: EMPTY,
            vowels_value: EMPTY,
            consonants_value: EMPTY
        })
    }

    numericalName = (name, surname) => {
        var text_formatted = this.formatText(name) + this.formatText(surname);
        var text_letters_only = this.checkLettersOnly(text_formatted);
        const [vowels, consonants] = this.vowelsAndConsonantsSplitter(text_letters_only);
        var vowels_value = this.getTextNumericValue(vowels);
        var consonants_value = this.getTextNumericValue(consonants);
        return [vowels_value, consonants_value];
    }

    formatText = (text) => {
        var cleaned_text = removeDiacritics(text);
        return cleaned_text.toLowerCase();
    }

    checkLettersOnly = (text) => {
        return text.split('').filter(c => {
            return c.match(CHAR_AS_LETTER)
        }).join('');
    }

    vowelsAndConsonantsSplitter = (text) => {
        var vowels = '', consonants = '';
        text.split('').forEach(c => {
            if (c.match(CHAR_AS_VOWEL)) vowels += c;
            else if (c.match(CHAR_AS_LETTER) && !c.match(CHAR_AS_VOWEL)) consonants += c;
            else if (c.match(ENYE)) consonants += N;
        })
        return [vowels, consonants];
    }

    getLetterNumericValue = (letter) => {
        //get an array of arrays with the entered letter inside the
        //position which is its numeric value
        var array_letter_and_num_as_position = LETTER_NUM_MAP.map(x => {
            return x.filter(y => {
                return y === letter;
            })
        })

        //filter the empty arrays and get the letter's position
        var index = -1, found = false;
        array_letter_and_num_as_position.forEach((array, i) => {
            if (0 < array.length) {
                if (!found) index = i; found = true;
            }
        })
        return index;
    }

    getTextNumericValue = (text) => {
        var value = '';
        text.split('').forEach(c => {
            value += this.getLetterNumericValue(c);
        })
        return value;
    }

    sumNumericValue = (text) => {
        var num = text;
        var aux = 0;
        do {
            aux = 0; //init "aux"
            num.split('').forEach(n => {
                aux += Number(n);
            });
            num = aux.toString();
        } while (10 <= Number(num));
        return num;
    }

    render() {
        const { is_alert_form_visible, is_answer_form_visible, is_open, hover, name, surname, fullname_value, vowels_value, consonants_value } = this.state;

        return (
            <>
                <Sidebar is_open={is_open} toggle={this.toggle} />
                <Main id={MAIN}></Main>
                <Navbar is_open={is_open} toggle={this.toggle} />

                <FormContainer>
                    <FormWrap>
                        <FormContent>
                            <Form action={HASH_SIGN}>

                                <Tooltip id={`${TOOLTIP}${HYPHEN}${WIKIHOW_LINK}`}
                                    title={
                                        <span style={{
                                            fontSize: "1.5em",
                                        }}>
                                            {capitalizeLine(WIKIHOW_LINK)}
                                        </span>
                                    }
                                    TransitionComponent={Zoom}
                                    arrow={true}
                                    placement={TOP}
                                >
                                    <LinkTo href={WIKIHOW_LINK_ADDRESS} target={_BLANK}>
                                        <FormHeaderOne>
                                            {capitalizeLine(NUMEROLOGIA_DEL_NOMBRE)}
                                        </FormHeaderOne>
                                    </LinkTo>
                                </Tooltip>

                                <FormLabel htmlFor={FOR}>{capitalizeName(NOMBRE)}</FormLabel>
                                <FormInput type={TEXT} value={name} placeholder={capitalizeName(NOMBRE_INPUT)} onChange={(e) => this.setState({ name: e.target.value })} required />
                                <FormLabel htmlFor={FOR}>{capitalizeName(APELLIDO)}</FormLabel>
                                <FormInput type={TEXT} value={surname} placeholder={capitalizeName(APELLIDO_INPUT)} onChange={(e) => this.setState({ surname: e.target.value })} required />
                                <FormButton type={BUTTON} onClick={(e) => this.handleSubmit()}>{capitalizeName(CONTINUAR)}</FormButton>
                                <FormButton style={{ backgroundColor: RED_BOOTSTRAP }} type={BUTTON} onClick={(e) => this.handleReset()}>{capitalizeName(RESET)}</FormButton>
                            </Form>
                            {(
                                fullname_value !== undefined && fullname_value !== '' && (0 < fullname_value.length) &&
                                vowels_value !== undefined && vowels_value !== '' && (0 < vowels_value.length) &&
                                consonants_value !== undefined && consonants_value !== '' && (0 < consonants_value.length)
                            ) ?
                                <AnswerForm is_visible={is_answer_form_visible}>
                                    {
                                        (fullname_value.toString() !== ZERO_NUM) ?
                                            <Text>
                                                <Span>{capitalizeName(NOMBRE)}:
                                                    <Span style={{ color: BLUE_BOOTSTRAP }}> {fullname_value}</Span>
                                                </Span>
                                                <Span style={{ color: BLUE_BOOTSTRAP, float: RIGHT }}>({NUMERO_NOMBRE})</Span>
                                            </Text> : <Span></Span>
                                    }
                                    {
                                        (vowels_value.toString() !== ZERO_NUM) ?
                                            <Text>
                                                <Span>{capitalizeName(VOCALES)}:
                                                    <Span style={{ color: PURPLE_HTML }}> {vowels_value}</Span>
                                                </Span>
                                                <Span style={{ color: PURPLE_HTML, float: RIGHT }}>({ALMA})</Span>
                                            </Text> : <Span></Span>
                                    }
                                    {
                                        (consonants_value.toString() !== ZERO_NUM) ?
                                            <Text>
                                                <Span>{capitalizeName(CONSONANTES)}:
                                                    <Span style={{ color: GREEN_BOOTSTRAP }}> {consonants_value}</Span>
                                                </Span>
                                                <Span style={{ color: GREEN_BOOTSTRAP, float: RIGHT }}>({PERSONALIDAD})</Span>
                                            </Text> : <Span></Span>
                                    }
                                </AnswerForm> : <Span></Span>
                            }
                            {
                                <AlertForm is_visible={is_alert_form_visible}>
                                    <AlertSpan is_visible={is_alert_form_visible}>{NOMBRE_O_APELLIDO_REQUERIDO}</AlertSpan>
                                </AlertForm>
                            }
                            <BtnWrap is_answer={is_answer_form_visible}>
                                {/* <Route to={
                                    (window.location.last !== undefined) ? 
                                    `${window.location.last}`:`${ROOT}` 
                            }> */}
                                <ReRoute to={ROOT}>
                                    <BtnBack onClick={this.toggle}
                                        onMouseEnter={this.onHover}
                                        onMouseLeave={this.onHover}
                                    >
                                        {hover ? <ArrowBack /> : <ArrowLeft />}
                                        <BtnTextBack>{capitalizeName(BACK)}</BtnTextBack>
                                    </BtnBack>
                                </ReRoute>
                            </BtnWrap>
                        </FormContent>
                    </FormWrap>
                </FormContainer>

                {/* <YourNameFooter>
                <Footer/>
            </YourNameFooter> */}
            </>
        )
    }
}

export default YourName;