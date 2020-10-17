import React from 'react';
import './App.css';
import marked from 'marked';
import { sample } from './sampleText';

class App extends React.Component {
  state = { text: sample };

  handleChange = (event) => {
    const text = event.target.value; 
    this.setState({ text });
  }

  // sanitize empeche la traduction des balises HTML
  renderText = text =>{
    const __html =  marked(text, {sanitize: true});
    return { __html };
  }

     
  

  render(){
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <textarea 
              value={ this.state.text } 
              className='form-control' 
              rows='35'
              onChange={this.handleChange}
            >

            </textarea>
          </div>
          <div className='col-sm-6'>
            <div dangerouslySetInnerHTML={this.renderText(this.state.text)}></div>
          </div>  
        </div>
      </div>
    );
  }
}

export default App;
