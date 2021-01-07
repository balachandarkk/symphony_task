import React, { useRef, useState } from 'react';
import './FileUpload.css';
import Home from '../common/Home';

const FileUpload = () => {

    const [value, setValue] = useState([])
    const [showItems, setShowItems] = useState(4)
    const [delimiterVal, setDelimiterVal] = useState('|')
    const [splitLen, setSplitLen] = useState()

const onShowFileData = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      const splitValue = text.split(/\r?\n/);
      const splitValLen = splitValue.length;
      setSplitLen(splitValLen)
      setValue(splitValue)
    };
    reader.readAsText(e.target.files[0])
  }

const handleChangeShowItem = (e) => {
    const inputValue = e.target.value;
    if(inputValue <= 0 && inputValue != '') {
        setShowItems(1)
    }else{
        setShowItems(inputValue)        
    }
}

const handleChangeDelimit = (e) => {
    const delimitInputValue = e.target.value;
    setDelimiterVal(delimitInputValue)
}

    return (<>
        <div className="container">
        <Home />
        <div className="heading"> File Upload and File Read Using Stateless Compoenent</div>
        <form method="post" action="#" id="#">         
              <div class="form-group files">
                {/* <label>Upload Your File </label> */}
                <input type="file" name="file" onChange={(e)=>onShowFileData(e)}/>
              </div>
        </form>

        {value !='' ?  <div>  
            <input type="text" value={showItems} onChange={(e) => handleChangeShowItem(e)}/>
            <input type="text" value={delimiterVal} onChange={(e) => handleChangeDelimit(e)}/> 
                <table>
                    {value && value.slice(0, showItems != '' ? showItems : splitLen).map((textValue, index)=> {
                    return (<tr key={index}>
                        {textValue.split(`${delimiterVal}`).map((textValueResult, index)=> {
                        return <td className="table-row" key={index}> {textValueResult} </td>
                        })}
                    </tr>)
                    })}
                </table>
            </div>  : null}
        </div>        
      </>
    )
}

export default FileUpload;