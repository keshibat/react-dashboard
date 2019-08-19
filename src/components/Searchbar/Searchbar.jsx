import React, {Component} from 'react';
import '../../styles/Searchbar.css';

class Searchbar extends Component {
    constructor(props){
        super(props);
        this.items = [
            'Mercedes Benz',
            'Toyota',
            'Nissan',
            'BMW',
            'Ferrari',
            'Nissan rx'
        ];
        this.state = {
            suggestions: [],
            text: '',
        };
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        }    
            this.setState(() => ({suggestions, text: value}));
    }

    suggestionSelected (value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }
        
    renderSuggestions () {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
            {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
        </ul>
        )
    }

    render() {
        const { text } = this.state
        return (
            <div className="App-Component">
                <div className="AutoCompleteText">
                    <input value = {text} onChange={this.onTextChanged} placeholder="Search for car" type="text"/>
                    <ul>
                        {this.renderSuggestions()}
                    </ul>
                </div>
            </div>
        )
    }
   
};

export default Searchbar;