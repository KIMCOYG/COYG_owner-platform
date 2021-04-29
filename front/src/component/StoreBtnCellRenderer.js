import React, {Component} from "react"

class StoreBtnCellRenderer extends Component {
    constructor(props) {
      super(props);
      this.btnClickedHandler = this.btnClickedHandler.bind(this);
    }
    btnClickedHandler() {
     this.props.clicked(this.props.value);
    }
    render() {
      return (
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".StoreModal">조회</button>
      )
    }
  }

  export default StoreBtnCellRenderer;