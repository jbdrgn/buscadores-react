import React, { Component } from 'react'
import channels from '../../data/channels.json';
import videos from '../../data/videos.json';
import { CHANNELS, VIDEOS } from '../../constants/GeneralConstants';

class Json extends Component {

    constructor(){
        super();
        this.state = {
            data:null,
        }

        this.loadData = this.loadData.bind(this);
    }

    componentDidMount(){
        this.loadData()
    }

    loadData = () => {
        const {theme} = this.props.match.params;
        var data = null;

        switch(theme){
            case VIDEOS:
                data = videos.items;
                break;
            case CHANNELS:
            default:
                data = channels.items;
                break;
        }

        this.setState({data:data});
    }

    render() {
        const {data} = this.state;
        return (
            <div>{JSON.stringify(data)}</div>
        )
    }
}

export default Json;