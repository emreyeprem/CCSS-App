import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Footer from './Footer'
import '../assets/css/listproduct.css'
import Dropzone from 'react-dropzone'
import request from "superagent";
import classNames from 'classnames'
import MyStatefulEditor from './MyStatefulEditor'
import axios from 'axios'

let config = {headers: {
  'Accept': 'application/json',
  'Api-Key': 'hgvsDmBJtYaWJUkSCMUUJhYm',
  'Content-Type': 'application/json',
  'crossDomain': true,
  "async": true
}}

const baseStyle = {
  width: 200,
  height: 200,
  borderWidth: 2,
  borderColor: '#666',
  borderStyle: 'dashed',
  borderRadius: 5
};
const activeStyle = {
  borderStyle: 'solid',
  borderColor: '#6c6',
  backgroundColor: '#eee'
};
const rejectStyle = {
  borderStyle: 'solid',
  borderColor: '#c66',
  backgroundColor: '#eee'
};
const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
  zIndex: 1,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: '5%',
  width: '100%',
  height: '100%',
  padding: 0,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
  borderStyle:'none'
}

const img = {
  display: 'block',
  width: '190px',
  height: '190px',
  marginTop: '40px',
  marginRight: '4px'
};

class ListProduct extends Component {
  constructor(props){
    super(props)
    this.state = {

       files:[],
       grade:'',
       subject: '',
       standards: [],
       standard: '',
       keywords:'',
       title: '',
       resourcetype:'',
       price: 0
    }

  }

  onDrop = (files) => {

    this.setState({
      ...this.state,
      className: 'hide',
      files: files.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))
    },function(){console.log(this.state.files)});

   }
   componentWillUnmount() {
     // Make sure to revoke the data uris to avoid memory leaks
     this.state.files.forEach(file => URL.revokeObjectURL(file.preview))
   }
  getGrade = (e)=>{
    this.setState({
      ...this.state,
      grade : e.target.value
    })
  }
  getSubject = (e)=>{
    this.setState({
      ...this.state,
      subject: e.target.value
    })
    axios('http://commonstandardsproject.com/api/v1/jurisdictions/28903EF2A9F9469C9BF592D4D0BE10F8',config).then((response)=>{
      let chosenStandard = response.data.data['standardSets'].filter((each)=>{
        return each.title==this.state.grade && each.subject == this.state.subject
      })
      console.log(chosenStandard[0].id)
      this.setState({
        ...this.state,
        subjectid:chosenStandard[0].id
      })
    }).then((res)=>{
      axios(`http://api.commonstandardsproject.com/api/v1/standard_sets/${this.state.subjectid}`,config).then((response)=>{   if(response.data.data.subject=='Mathematics' && response.data.data.title=='Grade 9'){
        console.log('hey')
        let standardArr=Object.values(response.data.data.standards)

        let standardString=standardArr.map((each)=>{
          return each.description.charAt(0).toUpperCase() + each.description.slice(1)

        })

        this.setState({
          ...this.state,
          standards: standardString.reverse()
        })
      }
      else {
        console.log('hey2')
           let standardArr=Object.values(response.data.data.standards)

           let standardString=standardArr.map((each)=>{
             return each.statementNotation + ' : ' + each.description.charAt(0).toUpperCase() + each.description.slice(1)

           })
           this.setState({
             ...this.state,
             standards: standardString.reverse()
           })
         }
    })
  })
}
getStandard = (e) =>{
  this.setState({
    ...this.state,
    standard: e.target.value
  })
}
getTitle = (e) =>{
  this.setState({
    ...this.state,
    title: e.target.value
  })
}
getKeywords = (e) =>{
  this.setState({
    ...this.state,
    keywords: e.target.value
  })
}
getResourceType =(e)=>{
  if(e.target.checked ==true){
    this.setState({
      ...this.state,
      resourcetype: e.target.value
    })
  }
}
getPrice = (e)=>{
  this.setState({
    ...this.state,
    price: e.target.value
  })
}
deletefile=()=>{
// console.log(this.refs.fileInput)
}
sendItem=()=>{
  var data = new FormData();
data.append('file', this.state.files[0]);
fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        console.log(body)
        this.setState({
          ...this.state,
          fileURL: `http://localhost:3001/${body.file}` });
      });
    }).then((res)=>{axios.post('http://localhost:3001/api/listproduct',{
    fileurl:this.state.fileURL,
    userid: this.props.userid,
    description: this.props.editorvalue,
    grade:this.state.grade,
    subject: this.state.subject,
    standard: this.state.standard,
    keywords: this.state.keywords,
    title: this.state.title,
    resourcetype:this.state.resourcetype,
    price: this.state.price
  }).then((response)=>{
    console.log(response.data)

  }) })
}
  render() {
  let standards = this.state.standards.map((standard)=>{
    return <option value={standard}>{standard}</option>
  })
  const {files} = this.state;
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>

        <embed className="embed" src={file.preview} style={img}/>
      </div>
    </div>
  ));
    return(
      <div>
      <div className="listproductContainer">
      <h2>Create A New Product</h2>
      <label>Product Title<input onChange={this.getTitle} type="text" placeholder="Enter title of the product"></input></label>
      <label>Keywords &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input onChange={this.getKeywords} type="text" placeholder="Enter keywords for buyers to search for your product"></input></label>
      <label>Select grade:
    <select onChange={this.getGrade} id="gradeSelectDropdown">
     <option disabled selected >Select an option</option>
      <option value='Grade K'>Grade K</option>
      <option value='Grade 1'>Grade 1</option>
      <option value='Grade 2'>Grade 2</option>
      <option value='Grade 3'>Grade 3</option>
      <option value='Grade 4'>Grade 4</option>
      <option value='Grade 5'>Grade 5</option>
      <option value='Grade 6'>Grade 6</option>
      <option value='Grade 7'>Grade 7</option>
      <option value='Grade 8'>Grade 8</option>
      <option value='Grade 9'>High School</option>

     </select>  </label>
     <label>Select subject:
     <select onChange={this.getSubject} id="subjectSelectDropdown">
     <option disabled selected >Select an option</option>
     <option value='Mathematics'>Math</option>
     <option value='English Language Arts and Reading'>ELA</option>
     </select>

     </label>
     <label id="standardLabel"> Select standards:
     <select onChange={this.getStandard} id="standardsSelectDropdown">
     <option disabled selected >Select an option</option>
      {standards}
     </select>
     </label>
     <p className="description">Description of your product. Please be specific</p>
      <MyStatefulEditor/>
      <div className="folderresourcecontainer">
     <Dropzone accept="image/*, application/pdf" onDrop={this.onDrop.bind(this)}>
  {({ getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles, rejectedFiles }) => {
    let styles = {...baseStyle}
    styles = isDragActive ? {...styles, ...activeStyle} : styles
    styles = isDragReject ? {...styles, ...rejectStyle} : styles

    return (
      <div>
      <p className="uploadFile">Upload your file  </p>
      <div
        {...getRootProps()}
        style={styles}
      >
        <input {...getInputProps()} />
        <div className="dragContainer">
        <aside style={thumbsContainer}>
           {thumbs}
         </aside>
          <p id={this.state.className} className="dragText">
          Click to select the file or &nbsp;&nbsp;&nbsp;&nbsp;
          {isDragAccept ? 'Drop' : 'Drag'} files here...</p>
        </div>
        {isDragReject && <div className="hideframe">Unsupported file type...</div>}

      </div>
      <button onClick={this.deletefile} className="btn btn-primary">Remove the file</button>
      </div>
    )
  }}

</Dropzone>



      <div className="resourcecontainer">
        <label className="resourceHeading">Choose Resource Type</label>
        <div className="inputContainer">
        <input onChange={this.getResourceType} type="radio" name="resource" value="Activities"/>Activities<br/>
         <input onChange={this.getResourceType} type="radio" name="resource" value="Worksheets"/>Worksheets<br/>
          <input onChange={this.getResourceType} type="radio" name="resource" value="Assessments"/>Assessments<br/>
           <input onChange={this.getResourceType} type="radio" name="resource" value="Projects"/>Projects<br/>
            <input onChange={this.getResourceType} type="radio" name="resource" value="Posters"/>Posters<br/>
            </div>

            <label className="resourceHeading2">Price</label>

           <input onChange={this.getPrice} className="priceInput" type="text" placeholder="&nbsp;&nbsp;$ &nbsp;&nbsp;0" />

           <button onClick={this.sendItem} type="button" className="btn btn-primary btn-lg itemSubmitBtn">Publish Item</button>


      </div>

     </div>
      </div>


      </div>
    )
  }
}


// map global state to local props
const mapStateToProps = (state) => {
  return {
      editorvalue: state.editorvalue,
      userid: state.userid
     //this.props.isAuthenticated
    //ctr: state.counter // this.props.ctr
  }
}

// make the dispatches available on local props
// dispatch is used to communicate with the reducer
// so the reducer can change the global state
const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter
// getGradeSubjectId : (value) => dispatch({type: "SUBJECTID",subjectid: value})

  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ListProduct))
