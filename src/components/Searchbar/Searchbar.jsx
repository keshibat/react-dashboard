import React, {Component} from 'react';
import '../../styles/Searchbar.css';


class Searchbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            suggestions: [],
            text: '',
        };
    }

    onTextChanged = (e) => {
        const { items } = this.props;
        const value = e.target.value;
        const cars = items.map(car => ( car.carName))
        
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = cars.sort().filter(v => regex.test(v));
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

    grabCarData = (e) => {
        e.preventDefault();
        const {items} = this.props;
        const { text } = this.state;
       for(let i = 0; i < items.length; i++) {
           if (text === items[i].carName) {
                const data = items[i]
               console.log(data);
           } 
       }
        ;
    }
    render() {
        const { text } = this.state
        return (
            <div className="App-Component">
                <div className="AutoCompleteText">
                <form className="example">
                <input value = {text} onChange={this.onTextChanged} placeholder="Search for car" type="text"/>
                <button onClick={this.grabCarData} type="submit" className="submit-button"><i className="fa fa-search"></i></button>
                    {/* <span><button className="button-style">Go</button></span> */}
                    <ul>
                        {this.renderSuggestions()}
                    </ul>
                </form>
                   
                </div>
            </div>
        )
    }
   
};

export default Searchbar;