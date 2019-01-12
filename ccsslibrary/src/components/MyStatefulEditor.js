import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';
import { connect } from 'react-redux'

class MyStatefulEditor extends Component {
  constructor(props){
    super(props)
    this.state={
  value: RichTextEditor.createEmptyValue()
    }
  }

  onChange = (value) => {
    this.setState({value},function(){
      console.log(this.state.value)

    });

    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('markdown')
      );

    }
  };

  render () {
    return (
      <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}

      />
    );
  }
}

// map global state to local props
const mapStateToProps = (state) => {
  return {
    //ctr: state.counter // this.props.ctr

  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter
  onChange : (editorvalue) => dispatch({type:'EDITORVALUE',editorvalue:editorvalue})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MyStatefulEditor)
