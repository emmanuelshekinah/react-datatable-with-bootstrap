import React, {Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import './Search_input.css'

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
        <div className="col-4">
          <select className="form-control-sm form-control"
                  onChange={this.props.changeRecordsPerPage.bind(this)}
          >
            <option value={10}>10 records per page</option>
            <option value={25}>25 records per page</option>
            <option value={50}>50 records per page</option>
            <option value={100}>100 records per page</option>
          </select>
        </div>
        <div className="col-4 text-center">
          <h5><b>{this.props.tableOptions.table_title}</b></h5>
          
        </div>
        <div className="col-4 text-right padding_right">


        {/* <div className="search-wrapper">
            <div className="input-holder">
                <input type="text" className="search-input" placeholder="Type to search" value={this.state.search} onChange={this.props.search.bind(this)}/>
                    <button className="search-icon"><span></span></button>
            </div>
            <button className="close"></button>
        </div> */}


                    <div className="input-group input-group-sm">
                        <div className="searchbar">
                            <input type="text" className="search_input effect-1"  style={{color: "#00164E"}} value={this.state.search} onChange={this.props.search.bind(this)}/>
                          
                            <a href="#" className="search_icon search-wrapper bg-light"  style={{color: "#00164E"}}>
                                <i className="search-icon bg-light" id="search_icon"><FontAwesomeIcon icon={faSearch} /></i>
                            </a>
                        </div>
                    </div>



        </div>
        <br />
        <br />
      </div>
    )
  }

}

export default TableFilter
