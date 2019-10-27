import Autosuggest from 'react-autosuggest';
import React from 'react';
import './search.css'

const values = [
  {
    document: 'CONSTITUCIÓN POLÍTICA',
    name: 'ARTÍCULO 90',
    title: 'TÍTULO VIII DERECHOS Y DEBERES POLÍTICOS',
    chapter: 'CAPÍTULO I Los Ciudadanos',
    shortdescription: 'La ciudadanía es el conjunto de derechos y deberes políticos que ...',
    description: "La ciudadanía es el conjunto de derechos y deberes políticos que corresponden a los costarricenses mayores de dieciocho años. (Así reformado por Ley No. 4763 del 17 mayo de 1971.)",
    explanation: "NA"
  },
  {
    document: 'CONSTITUCIÓN POLÍTICA',
    name: 'ARTÍCULO 21',
    title: 'TÍTULO IV DERECHOS Y GARANTÍAS INDIVIDUALES',
    chapter: 'Capítulo Único',
    shortdescription: '',
    description: "La vida humana es inviolable.",
    explanation: "NA"
  },
  {
    document: 'reforma procesal laboral',
    name: 'articulo 34',
    title: 'title i: education and culture',
    chapter: 'chapter2: unique',
    shortdescription: '',
    description: "article content",
    explanation: "long explanation"
  },
  {
    document: 'reforma procesal laboral',
    name: 'articulo 12',
    title: 'title v: education and culture',
    chapter: 'chapter: unique',
    shortdescription: '',
    description: "article content",
    explanation: "long explanation"
  }
];

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  // calculate suggestions for any given input value
  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : values.filter(lang =>
      lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue = suggestion => { console.log("click on " + suggestion.name); return suggestion.name; }

  // render suggestions.
  renderSuggestion = suggestion => (
    <div>
      <h3 className="suggestions">{suggestion.name}</h3>
      <p>{suggestion.shortdescription}</p>
    </div>
  );

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      className: 'search-bar',
      placeholder: 'buscar ...',
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default Search

// https://github.com/moroshko/react-autosuggest
// https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20