import React, { Component } from 'react';
import './App.css';

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this);
  };


  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang
      }
    });
  }

  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'CSS', 'Python'];
    return (
      <ul className="languages">

      {languages.map((lang) => {
        return (

          <li
          style={lang === this.state.selectedLanguage ? { color: '#d0021b'}: null}
          onClick={this.updateLanguage.bind(null, lang)} key={lang}> {lang}
          </li>
        )

      })}
      </ul>
    )
  }
}

export default Popular;
