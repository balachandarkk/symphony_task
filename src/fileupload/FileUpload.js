import React, { Component } from 'react';
import './FileUpload.css';
import Home from '../common/Home';

class FileUpload extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: [],
      showItems: 4,
      delimiterVal: '|',
      splitLen: 0
    }
  }

  onShowFileData = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      const splitValue = text.split(/\r?\n/);
      const splitValLen = splitValue.length;

      this.setState({
        value: splitValue,
        splitLen: splitValLen
      })
    };
    reader.readAsText(e.target.files[0])
  }

  handleChangeShowItem = (e) => {
    const inputValue = e.target.value;
    if(inputValue <= 0 && inputValue != '') {
      this.setState({
        showItems: 1
      })
    }else{
      this.setState({
        showItems: inputValue
      })
    }
  }

  handleChangeDelimit = (e) => {
    const delimitInputValue = e.target.value;
    this.setState({
      delimiterVal: delimitInputValue
    })
  }

  render = () => {
    const {showItems, delimiterVal, value, splitLen} = this.state;
    return (<>  <div className="container">
      <Home />
            <div className="heading"> File Upload and File Read Using State Coompoenent</div>
    <form method="post" action="#" id="#">         
     <div class="form-group files">
       {/* <label>Upload Your File </label> */}
       <input type="file" name="file" onChange={(e)=>this.onShowFileData(e)}/>
     </div>
 </form>

 <div>  
 <input type="text" value={showItems} onChange={(e) => this.handleChangeShowItem(e)}/>
<input type="text" value={delimiterVal} onChange={(e) => this.handleChangeDelimit(e)}/>
<table>
{value.slice(0, showItems != '' ? showItems : splitLen).map((textValue, index)=> {
     return (<tr key={index}>
      {textValue.split(`${delimiterVal}`).map((textValueResult, index)=> {
         return <td className="table-row" key={index}> {textValueResult} </td>
       })}
     </tr>)
   })}
</table>
</div> 
</div>  
      </>
    )
  }
}

export default FileUpload;