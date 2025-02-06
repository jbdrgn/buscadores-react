import React, { Component } from 'react';
import Select from 'react-dropdown-select';

import {
  SelectTags,
  // SelectChannels, SelectThemes, 
  Main
} from './VideosElements';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';

import FilterVideo from '../../../components/FilterVideo';
import data from '../../../data/videos.json';
import capitalizeName, { capitalizeLine, removeDiacritics, cutTitle } from '../../../utils';
import { NO_MATCHES, TEMAS, MAIN, MIN_WIDTH, THEMES, TRUE, DISABLED, VIDEOS, EMPTY } from '../../../constants/GeneralConstants';

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

class Videos extends Component {

  constructor() {
    super();
    this.state = {
      is_open: false,
      items: data.items,
      match_text: "",
      active_filter: -1, // no filter: -1
      is_full_screen: window.matchMedia(`(min-width: ${MIN_WIDTH}px)`).matches
    }

    //bind an arrow function to the constructor
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    //this.handleChangeTheme = this.handleChangeTheme.bind(this);
  }

  componentDidMount() {
    const handlerScreenUpdate = (e) => { this.setState({ is_full_screen: e.matches }); }
    window.matchMedia(`(min-width: ${MIN_WIDTH}px)`).addEventListener('change', handlerScreenUpdate);

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

  handleChange = (item, num) => {
    this.setState({
      match_text: 0 < item.length ? item[0].value : "",
      active_filter: 0 < item.length ? num : -1
    });
  }

  /*
  handleChangeTheme = (theme) => {
    console.log();
    this.setState({
      match_text: 0 < theme.length ? theme[0].value : "",
      active_filter: 0 < theme.length ? 2 : -1
    });
  }
  */

  checkActiveSelect = function (filter_to_match, active_filter) {
    return -1 < active_filter && active_filter !== filter_to_match;
  }

  //NOT USED
  disableSelect = function (text, id, var_text, var_id) {
    return var_text !== text && var_id !== id;
  }

  render() {

    var {
      is_open, items, is_full_screen, match_text, active_filter
    } = this.state;

    var items_tmp = []
    var videos = [];
    var themesNames = new Set();
    var themes = [];

    //load videos data (use .forEach instead .filter or .map)
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
      var shortTitle = it.themes[0].split("(")[0];
      videos.push({
        value: it._id,
        label: cutTitle(shortTitle, 32, ".")
      });

      items_tmp.push(it)
    })
    items = items_tmp;

    //sort videos alphabethically
    videos.sort((a, b) => {
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
        <Navbar is_open={is_open} toggle={this.toggle} />
        <SelectTags>
          <Select options={videos}
            className={VIDEOS}
            style={is_full_screen ? searchBarChannels : searchBarChannelsSmall}
            placeholder={(match_text !== EMPTY && active_filter !== 1) ? `(${capitalizeName(DISABLED)})` : capitalizeName(VIDEOS)}
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
        <FilterVideo items={items} match_text={match_text} active_filter={active_filter} />
        <Footer />
      </>
    );
  }
}

export default Videos;
