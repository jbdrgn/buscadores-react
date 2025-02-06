import React, { Component } from 'react';
import Select from 'react-dropdown-select';

import {
  SelectTags,
  // SelectChannels, SelectThemes, 
  Main
} from './HomeElements';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

import Filter from '../../components/Filter';
import data from '../../data/channels.json';
import capitalizeName, { capitalizeLine, removeDiacritics } from '../../utils';
import { NO_MATCHES, MAIN, MIN_WIDTH, CHANNEL, THEMES, TRUE, DISABLED, EMPTY, CHANNELS } from '../../constants/GeneralConstants';

// const searchBarChannelsFull = {
//   padding:"21px",
//   zIndex:996,
//   minWidth:"100%",

//   fontSize:"24px",
//   backgroundColor:"#ffffff",
//   opacity: 1.0,
//   /* flex: "1 50%", */

//   position: "fixed"
// }

const searchBarChannels = {
  padding: "21px",
  zIndex: 996,
  maxWidth: "50%",

  fontSize: "24px",
  backgroundColor: "#ffffff",
  opacity: 1.0,
  /* flex: "1 50%", */

  position: "fixed"
}

const searchBarChannelsSmall = {
  padding: "21px",
  zIndex: 996,
  minWidth: "100%",

  fontSize: "24px",
  backgroundColor: "#ffffff",
  opacity: 1.0,

  position: "fixed"
}

// const searchBarThemesFull = {
//   padding:"21px",
//   zIndex:993,
//   minWidth:"100%",

//   fontSize:"24px",
//   backgroundColor:"#ffffff",
//   opacity: 1.0,
//   /* flex: "1 50%", */

//   position: "fixed"
// }

const searchBarThemes = {
  padding: "21px",
  zIndex: 993,
  maxWidth: "50%",

  fontSize: "24px",
  backgroundColor: "#ffffff",
  opacity: 1.0,
  /* flex: "1 50%", */

  position: "fixed"
}

const searchBarThemesSmall = {
  marginTop: "72px",
  padding: "21px",
  zIndex: 993,
  minWidth: "100%",

  fontSize: "24px",
  backgroundColor: "#ffffff",
  opacity: 1.0,

  left: "0px",
  position: "fixed"
}

/* const searchBarHidden = {
  opacity: 0.0,
} */

class Home extends Component {

  constructor() {
    super();
    this.state = {
      is_open: false,
      items: data.items,
      match_text: "",
      active_filter: -1, // no filter: -1
      is_param: false,
      is_full_screen: window.matchMedia(`(min-width: ${MIN_WIDTH}px)`).matches
    }

    //bind an arrow function to the constructor
    this.toggle = this.toggle.bind(this);
    this.handleChangeChannel = this.handleChange.bind(this);
    // this.handleChangeChannel = this.handleChangeChannel.bind(this);
    // this.handleChangeTheme = this.handleChangeTheme.bind(this);
    this.handleParam = this.handleParam.bind(this);
  }

  componentDidMount() {
    const handlerScreenUpdate = (e) => { this.setState({ is_full_screen: e.matches }); }
    window.matchMedia(`(min-width: ${MIN_WIDTH}px)`).addEventListener('change', handlerScreenUpdate);
    this.updateLastPath();
    this.handleParam();
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

  handleChange = (item, num) => {
    this.setState({
      match_text: 0 < item.length ? item[0].value : EMPTY,
      active_filter: 0 < item.length ? num : -1,
    });
  }

  handleParam = () => {

    /* /themes/actualidad -> match:"themes" */
    if (
      this.props.match.params[0] !== undefined &&
      this.props.match.params[0].toLocaleLowerCase().match(THEMES)
    ) {

      this.setState({
        match_text: this.props.match.params[0].split("/")[this.props.match.params[0].split("/").length - 1].toLocaleLowerCase(),
        active_filter: Number(0),
        is_param: true
      })
    }
  }

  /*
  handleChangeChannel = (channel) => {
    this.setState({
      match_text: 0 < channel.length ? channel[0].value : "",
      active_filter: 0 < channel.length ? 1 : -1
    });
  }

  handleChangeTheme = (theme) => {
    this.setState({
      match_text: 0 < theme.length ? theme[0].value : "",
      active_filter: 0 < theme.length ? 2 : -1
    });
  }
  */

  //back to main page from param "/themes/:id_theme"
  resetActiveFilter = () => {
    this.state.match_text = EMPTY;
    this.state.active_filter = Number(-1);
    this.state.is_param = false
  }

  checkActiveSelect = function (filter_to_match, active_filter) {
    return -1 < active_filter && active_filter !== filter_to_match;
  }

  //NOT USED
  disableSelect = function (text, id, var_text, var_id) {
    return var_text !== text && var_id !== id;
  }

  render() {

    var {
      is_open, items, is_full_screen, is_param, match_text, active_filter
    } = this.state;

    var items_tmp = [];
    var channels = [];
    var themesNames = new Set();
    var themes = [];

    items.forEach((item) => {
      var it = item;
      it._id = removeDiacritics(item._id);

      item.themes.forEach((theme, id) => {
        //remove Diacritics
        it.themes[id] = removeDiacritics(theme);
        //load Themes names
        if (id !== 0) { themesNames.add(it.themes[id]); }
      })

      //load Channels data (use .forEach instead .filter or .map)
      channels.push({
        value: it._id,
        label: capitalizeLine(it.themes[0])
      });

      items_tmp.push(it)
    })
    items = items_tmp;

    //sort Channels alphabethically
    channels.sort((a, b) => {
      return a.value > b.value ? 1 : -1;
    })

    //load Themes data
    Array.from(themesNames).forEach(theme => {
      themes.push({
        value: theme,
        label: capitalizeLine(theme)
      });
    })

    //sort Themes alphabethically
    themes.sort((a, b) => {
      return a.value > b.value ? 1 : -1;
    })

    return (
      <>
        <Sidebar is_open={is_open} toggle={this.toggle} />
        <Main id={MAIN}></Main>
        <Navbar is_open={is_open} is_param={is_param} toggle={this.toggle} resetActiveFilter={this.resetActiveFilter} />
        <SelectTags>
          <Select options={channels}
            className={CHANNEL}
            style={is_full_screen ? searchBarChannels : searchBarChannelsSmall}
            placeholder={(match_text !== EMPTY && active_filter !== 1) ? `(${capitalizeName(DISABLED)})` : capitalizeName(CHANNELS)}
            onChange={(channel) => this.handleChange(channel, Number(1))}
            noDataLabel={capitalizeLine(NO_MATCHES)}
            disabled={match_text !== EMPTY && active_filter !== 1}
            clearable={TRUE}
          />
          <Select options={themes}
            className={THEMES}
            style={is_full_screen ? searchBarThemes : searchBarThemesSmall}
            placeholder={(match_text !== EMPTY && active_filter !== 2) ? `(${capitalizeName(DISABLED)})` : capitalizeName(THEMES)}
            onChange={(theme) => this.handleChange(theme, Number(2))}
            noDataLabel={capitalizeLine(NO_MATCHES)}
            disabled={match_text !== EMPTY && active_filter !== 2}
            clearable={TRUE}
          />
        </SelectTags>
        <Filter items={items} match_text={match_text} active_filter={active_filter} />
        <Footer />
      </>
    );
  }
}

export default Home;
