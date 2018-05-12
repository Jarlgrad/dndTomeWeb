import React from 'react';
import SpellComponent from '../spell/SpellComponent.jsx';
import SpellBookComponent from '../spellbook/SpellBookComponent.jsx';
import './centerSpreadComponent.scss';
import empire from '../../static/img/aw_rymdimperiet.png';

export default class CenterSpreadComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            spell: props.spell,
            spellBook: props.spellBook
        }
        this.addSpell = this.addSpell.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.spell !== prevState.spell){
            return {spell: nextProps.spell};
        }
        return null;
    }

    addSpell(spell) {
        console.log(`in addSpell in CenterSpread before adding, spellBook: ${this.state.spellBook}, spell: ${spell}`);
        this.setState(prevState => ({ 
            spellBook: [...prevState.spellBook, spell] 
        }));
    }
    
    render() {

        return (
            <div className="centerSpread">
                <SpellComponent 
                    className="leftPage" 
                    spell={this.state.spell} 
                    spellBook={this.state.spellBook} 
                    addSpell={this.addSpell}
                    />
                <SpellBookComponent 
                    className="rightPage"
                    spellBook={this.state.spellBook}
                    />
                
            </div>
        );
    }
}