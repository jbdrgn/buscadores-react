import React, { Component } from 'react'
import { MainContainer, UlContainer, IdContainer } from './FilterVideoElements';
import Video from '../Video';
// import { trimLine } from '../../utils';

export class FilterVideo extends Component{

    render(){

        const { items, match_text, active_filter } = this.props;

        return (
            <>
            <MainContainer>
                <UlContainer>
                    {
                        match_text === "" ?
                        
                            items.map((item,id) => {
                                return(
                                    <IdContainer key={id}>
                                        <Video item={item}/>
                                    </IdContainer>
                                )
                            }) 

                            : 

                            active_filter === 1 ?

                                items.map((item,id) => {
                                    if (item._id.includes(match_text)) {
                                        return(
                                            <IdContainer key={id}>
                                                <Video item={item}/>
                                            </IdContainer>
                                        )                                            
                                    } else { return null}
                                })

                                :

                                active_filter === 2 ?

                                    items.map((item,id) => {
                                        if (item.themes.includes(match_text)) {
                                            return(
                                                <IdContainer key={id}>
                                                    <Video item={item}/>
                                                </IdContainer>
                                            )                                            
                                        } else { return null}
                                    })

                                    :
                                    
                                    items.map((item,id) => {
                                        return(
                                            <IdContainer key={id}>
                                                <Video item={item}/>
                                            </IdContainer>
                                        )
                                    })
                    }
                </UlContainer>
            </MainContainer>
            </>
        )
    }
}

export default FilterVideo;