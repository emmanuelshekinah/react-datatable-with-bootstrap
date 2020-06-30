import React, {Component} from 'react'

class TableFilter extends Component{
  constructor(props) {
    super(props);
    this.state={
      search: ''
    }

  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      search: nextProps.toChild.searchInput
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-3">
          <select className="form-control-sm form-control"
                  onChange={this.props.changeRecordsPerPage.bind(this)}
          >
            <option value={10}>10 records per page</option>
            <option value={25}>25 records per page</option>
            <option value={50}>50 records per page</option>
            <option value={100}>100 records per page</option>
          </select>
        </div>
        <div className="col-6"></div>
        <div className="col-3 text-right padding_right">
          <div className="input-group input-group-sm">
            <div className="input-group-prepend">
              <span className="input-group-text">Search</span></div>
            <input type="text" className="form-control remove-outline" value={this.state.search} onChange={this.props.search.bind(this)}/>
          </div>
        </div>
        <br />
        <br />
      </div>
    )
  }

}

export default TableFilter
