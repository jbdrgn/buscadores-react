import React, { Component } from 'react'
import { MainContainer, UlContainer, IdContainer } from './FilterElements';
import Item from '../Item';
//import { removeDiacritics } from '../../utils';

export class Filter extends Component{

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
                                        <Item item={item}/>
                                    </IdContainer>
                                )
                            }) 

                            : 

                            active_filter === 1 ?

                                items.map((item,id) => {
                                    if (item._id === match_text) {
                                        return(
                                            <IdContainer key={id}>
                                                <Item item={item}/>
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
                                                    <Item item={item}/>
                                                </IdContainer>
                                            )                                            
                                        } else { return null}
                                    })

                                    :

                                    active_filter === 0 ?

                                        items.map((item,id) => {
                                            if (item.themes.includes(match_text)) {
                                                return(
                                                    <IdContainer key={id}>
                                                        <Item item={item}/>
                                                    </IdContainer>
                                                )                                            
                                            } else { return null}
                                        })

                                        :
                                    
                                        items.map((item,id) => {
                                            return(
                                                <IdContainer key={id}>
                                                    <Item item={item}/>
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

export default Filter;