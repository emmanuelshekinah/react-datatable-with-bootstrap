import React, { Component } from 'react'
// import styles from './styles.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import TableFilter from "./tableComponents/TableFilter";
import PagiNate from "./tableComponents/PagiNate";


export default class ReactDataTable extends Component {
  constructor(props){
    super(props)
    this.state={
      columns: [],
      apiData: [],
      //--Datatable
      pageNate: [],//---
      take: 10,
      skip: 0,
      searchInput: '',
      totalTableData: 0
      //--end Datatable
    }
//--Datatable
    this.paginate = this.paginate.bind(this)
    this.changeRecordsPerPage = this.changeRecordsPerPage.bind(this)
    this.search = this.search.bind(this)
    this.onAction = this.onAction.bind(this)
    //--end Datatable
    this.changeOrder = this.changeOrder.bind(this)
  }

  componentDidMount(){
    console.log('props: ', this.props.dataTablesOptions)
    this.setState({
      columns: this.props.dataTablesOptions.colums,
      apiData: this.props.dataTableData.data,
      pageNate: this.props.dataTableData.pageNate,//---
      totalTableData: this.props.dataTableData.totalTableData
    })
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      columns: nextProps.dataTablesOptions.colums,
      apiData: nextProps.dataTableData.data,
      pageNate: nextProps.dataTableData.pageNate,//---
      totalTableData: nextProps.dataTableData.totalTableData
    })
  }
  changeOrder(col, e){
    this.props.dataTableOnChange(this.state)
  }
  paginate(skip,e){
    this.setState({
      skip: skip
    }, ()=>{

      this.props.dataTableOnChange(this.state)
    })

  }
  changeRecordsPerPage(e){
    this.setState({
      take: e.target.value
    }, ()=>{

      this.props.dataTableOnChange(this.state)
    })
  }
  search(e){
    console.log(e.target.value)
    this.setState({
      searchInput: e.target.value
    }, ()=>{
      this.props.dataTableOnChange(this.state)
    })
  }
  onAction(e){
    console.log('You have clicked record no: ')
  }
  render(){
    return(
      <div>
        <TableFilter onAction={this.onAction}
                     search={this.search}
                     searchInput={this.state.searchInput}
                     changeRecordsPerPage={this.changeRecordsPerPage}
                     filterId={this.state.filterId}
                     toChild={this.state}
        />
        <table className="table table-hover">
          <thead>
          <tr>
            {this.state.columns.map((item, index) => {
              if (item.show === true && item.button.show === false) {//show only data
                if (item.order === true) {
                  return (<th width={item.width} scope="col" key={index}>{item.title}
                    <a href="#" onClick={this.changeOrder.bind(this, item.name)}> &nbsp;
                      <i className="fa fa-sort " aria-hidden="true"></i></a>
                  </th>)
                } else {
                  return (<th width={item.width} scope="col" key={index}>{item.title}</th>)
                }

              } else if (item.show === true && item.button.show === true) {// show data and button
                return (<th width={item.width} scope="col" key={index}>{item.title} {item.order ? (
                  <a href="#" onClick={this.changeOrder.bind(this, item.name)}><i className="fa fa-sort "
                                                                                  aria-hidden="true"></i></a>) : (<></>)}</th>)
              } else if (item.show === false && item.button.show === true) {// show button
                // return (<th width={item.width} scope="col" key={index}>{item.button.title} {item.order ? (<a href="#" onClick={this.changeOrder.bind(this,item.name)}><i class="fa fa-sort " aria-hidden="true"></i></a>):(<></>)}</th>)
                return (<th width={item.width} scope="col" key={index}>{item.button.title}</th>)
              }
            })}
          </tr>
          </thead>
          <tbody>

          {this.state.apiData.map((item, index) => {

            return (
              <tr>
                {this.state.columns.map((cols, count) => {

                  for (var i = 0; i < this.state.columns.length; i++) {
                    if (cols.name === Object.keys(item)[i]) {
                      if (cols.show === true && cols.button.show === true) {//text and button
                        return (<td>{item[cols.name]}
                          <button type="button" event={item} id={item.id} name={cols.name}
                                  onClick={this.props.dataTableBtnAction.bind(this, item[cols.button.passValue], cols.button.actionType)}
                                  className="btn btn-primary">{cols.button.title}</button>
                        </td>)
                      } else if (cols.show === true && cols.button.show === false) {//only text
                        return (<td>{item[cols.name]}</td>)
                      }

                    }
                    if (cols.show === false && cols.button.show === true) {//only button
                      return (<td>
                        <button type="button" event={item} id={item.id} name={cols.name}
                                onClick={this.props.dataTableBtnAction.bind(this, item[cols.button.passValue], cols.button.actionType)}
                                className="btn btn-primary">{cols.button.title}</button>
                      </td>)
                    }

                  }

                })}

              </tr>
            )
          })}

          </tbody>
        </table>
        <PagiNate paginateMethod={this.paginate}
                  pageNate={[1,2,3,4,5]}
                  skip={this.state.skip}
                  take={this.state.take}
                  totalTableData={this.state.totalTableData}
        />
      </div>
    )
  }

}
