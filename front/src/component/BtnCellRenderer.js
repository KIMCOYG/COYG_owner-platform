import React, {Component} from "react"

class BtnCellRenderer extends Component {
    constructor(props) {
      super(props);
      this.btnClickedHandler = this.btnClickedHandler.bind(this);
    }
    btnClickedHandler() {
     this.props.clicked(this.props.value);
    }
    render() {
      return (
        <button style={{}}onClick={this.btnClickedHandler}>수정</button>
      )
    }
  }

  export default BtnCellRenderer;