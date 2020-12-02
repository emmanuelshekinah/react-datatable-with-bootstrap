import React, { Component, Fragment } from 'react'
// import styles from './styles.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import TableFilter from "./tableComponents/TableFilter";
import PagiNate from "./tableComponents/PagiNate";
import './style.css'


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
      totalTableData: 0,
      sort_col:null,
      is_ascending:true
      //--end Datatable
    }
//--Datatable
    this.paginate = this.paginate.bind(this)
    this.changeRecordsPerPage = this.changeRecordsPerPage.bind(this)
    this.search = this.search.bind(this)
    this.onAction = this.onAction.bind(this)
    //--end Datatable
    this.changeOrder = this.changeOrder.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
  }

  componentDidMount(){

    this.setState({
      columns: this.props.dataTablesOptions.colums,
      apiData: this.props.dataTableData.data,
      pageNate: this.props.dataTableData.pageNate,//---
      totalTableData: this.props.dataTableData.totalTableData
    }, ()=>{
      this.props.dataTableOnChange(this.state)
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
    this.setState({
      sort_col:col,
      is_ascending:!this.state.is_ascending
    })
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

    this.setState({
      searchInput: e.target.value
    }, ()=>{
      this.props.dataTableOnChange(this.state)
    })
  }
  clearSearch(){
    this.setState({
      searchInput: ""
    }, ()=>{
      this.props.dataTableOnChange(this.state)
    })
  }
  onAction(e){

  }
  buttons =(e)=>{


  }

  render(){
    return(
      <div>
        <TableFilter onAction={this.onAction}
                     search={this.search}
                     clearSearch={this.clearSearch}
                     searchInput={this.state.searchInput}
                     changeRecordsPerPage={this.changeRecordsPerPage}
                     filterId={this.state.filterId}
                     tableOptions={this.props.dataTablesOptions.tableOptions}
                     toChild={this.state}
        />
        {/* <table className="mb-0 table table-sm table-hover"> */}
        <div className={this.props.dataTablesOptions.tableOptions.tableContainerClassName}>

          <table className={this.props.dataTablesOptions.tableOptions.className}>
            <thead>
            <tr>
              {this.state.columns.map((item, index) => {

                if (item.column_properties.allowSort === true) {//allow sort order

                  return (
                    <th width={item.column_properties.width} scope="col"
                        className={item.column_properties.freeze === true ? "freeze_col " + "col_" + item.column_properties.name : "col_" + item.column_properties.name}
                        id={item.column_properties.name}
                        key={index}>
                      {item.column_properties.title}&nbsp;&nbsp;
                      <a href="#" onClick={this.changeOrder.bind(this, item.column_properties.name)}>
                        <i className="fa fa-sort " aria-hidden="true" style={{color: "#00164E"}}></i>
                      </a>
                    </th>
                  )

                }

                else {
                  return (
                    <th width={item.column_properties.width} scope="col"
                        className={item.column_properties.freeze === true ? "freeze_col " + "col_" + item.column_properties.name:"col_" +  item.column_properties.name}
                        key={index}>
                      {item.column_properties.title}
                    </th>
                  )
                }





              })}
            </tr>
            </thead>
            <tbody>

            {this.state.apiData.map((item, index) => {
              var faCount = 0;
              return (
                <tr key={item.id }>
                  {this.state.columns.map((cols, count) => {

                    for (var i = 0; i < Object.keys(item).length; i++) {


                      if (cols.column_properties.name === Object.keys(item)[i]) {

                        return (
                          <td
                            className={cols.column_properties.freeze ? "freeze_col " + cols.column_properties.name : cols.column_properties.name}
                            id={ cols.column_properties.name + "_" + index}
                            key={index+i}
                            //key={item.id !== undefined ? item.id +i : index+i}
                          >

                            {/* Fa Icons */}
                            {cols.fa_icon!==undefined && (
                              <Fragment>
                                {cols.fa_icon.map((fa, fai)=>{
                                  if(fa.show===true){
                                    faCount++;



                                    if(fa.extra!==undefined){

                                      if(fa.extra.conditional=='boolean'){//boalean

                                        if(item[fa.extra.depend_from_this_field]===true){
                                          //return
                                          return(
                                            <Fragment>
                                              <i className={fa.className}
                                                 onClick={this.props.dataTableBtnAction.bind(this, item[fa.passValue], fa.actionType)}
                                                 aria-hidden="true" style={{cursor: 'pointer'}}
                                              ></i>
                                            </Fragment>
                                          )
                                        }
                                      }

                                      // else if(fa.extra.conditional=='not_equals'){//not_equals
                                      //
                                      //   if(fa.extra.value.fromDB===true){//when is from db
                                      //
                                      //     if(item[fa.extra.depend_from_this_field]!==item[fa.extra.value.value]){
                                      //       return(
                                      //         <i className={fa.className}
                                      //           onClick={this.props.dataTableBtnAction.bind(this, item[fa.passValue], fa.actionType)}
                                      //           aria-hidden="true" style={{cursor: 'pointer'}}
                                      //           ></i>
                                      //         )
                                      //     }
                                      //   }else{//when is not from db
                                      //

                                      //     if(item[fa.extra.depend_from_this_field]!==fa.extra.value.value){
                                      //       return(
                                      //         <i className={fa.className}
                                      //           onClick={this.props.dataTableBtnAction.bind(this, item[fa.passValue], fa.actionType)}
                                      //           aria-hidden="true" style={{cursor: 'pointer'}}
                                      //           ></i>
                                      //         )
                                      //     }
                                      //   }
                                      // }



                                    }else{
                                      return(
                                        <Fragment>
                                          <i className={fa.className}
                                             onClick={this.props.dataTableBtnAction.bind(this, item[fa.passValue], fa.actionType)}
                                             aria-hidden="true" style={{cursor: 'pointer'}}
                                          ></i>
                                        </Fragment>
                                      )
                                    }

                                  }
                                })}
                              </Fragment>
                            )}

                            {/* End--Fa Icons */}


                            {/* Text */}
                            {cols.text!==undefined && (
                              <Fragment>
                                {cols.text.map((txt, txi)=>{
                                  if(txt.show===true){
                                    return(
                                      <Fragment>
                                        <span className={txt.className + " " + txt.name} id={txt.name + "-" + item.id}>{item[txt.name]}&nbsp;</span>
                                      </Fragment>
                                    )
                                  }
                                })}
                              </Fragment>
                            )}
                            {/* End--Text */}


                            {/* Buttons */}
                            {cols.button!==undefined && (

                              <Fragment>
                                {cols.button.map((btn, i)=>{

                                  if(btn.show===true){

                                    if(btn.extra!==undefined){
                                      if(item[btn.extra.depend_from_this_field]===true){
                                        //return
                                        return(
                                          <Fragment>&nbsp;
                                            <button type="button"
                                                    event={item}
                                                    id={item.id}
                                                    name={cols.column_properties.name}
                                                    onClick={this.props.dataTableBtnAction.bind(this, item[btn.passValue], btn.actionType)}
                                                    className={btn.className}>
                                              <i className={btn.icon_class}> </i>
                                              {btn.title}
                                            </button>

                                          </Fragment>
                                        )
                                      }
                                    }else{
                                      return (
                                        <Fragment>&nbsp;
                                          <button type="button"
                                                  event={item}
                                                  id={item.id}
                                                  name={cols.column_properties.name}
                                                  onClick={this.props.dataTableBtnAction.bind(this, item[btn.passValue], btn.actionType)}
                                                  className={btn.className}>
                                            <i className={btn.icon_class}> </i>
                                            {btn.title}
                                          </button>
                                        </Fragment>
                                      )
                                    }
                                  }

                                })}
                              </Fragment>

                            )}
                            {/* End--Buttons */}

                            {/* Input */}
                            {cols.input!==undefined && (
                              <Fragment>
                                {cols.input.map((input, data)=>{

                                  if(input.input_type==='text'){

                                    if(input.extra!==undefined){
                                      if(item[input.extra.depend_from_this_field]===true){
                                        //return
                                        return(
                                          <Fragment>{input.show===true && (

                                            <div className={"input-group " + input.name}>
                                              <input type={input.input_type}
                                                     name={input.name + "-"+ item.id}
                                                     id={input.name +"-"+item.id}
                                                     className={input.className}
                                                     onChange={this.props.dataTableOnChangeInput.bind(this)}
                                                     defaultValue={item[input.name]}
                                                     onBlur={ this.props.dataTablesOptions.tableOptions.hasOnBlur === true ?  this.props.dataTableOnChangeInputOnBlur.bind(this) : ""}

                                              />
                                            </div>

                                          )}</Fragment>
                                        )
                                      }
                                    }
                                    else{
                                      return (
                                        <Fragment>{input.show===true && (

                                          <div className={"input-group " + input.name}>
                                            <input type={input.input_type}
                                                   name={input.name + "-"+ item.id}
                                                   id={input.name +"-"+item.id}
                                                   className={input.className}
                                                   onChange={this.props.dataTableOnChangeInput.bind(this)}
                                                   defaultValue={item[input.name]}
                                                   onBlur={ this.props.dataTablesOptions.tableOptions.hasOnBlur === true ?  this.props.dataTableOnChangeInputOnBlur.bind(this) : ""}

                                            />
                                          </div>

                                        )}</Fragment>
                                      )
                                    }

                                  }
                                  else if(input.input_type==='checkbox'){
                                    return (
                                      <Fragment>{input.show===true && (

                                        <input type={input.input_type} name={input.name} id={item.id}  className={input.className}
                                               onChange={this.props.dataTableOnChangeInput.bind(this)}
                                               defaultChecked={item.defaultChecked} />


                                      )}</Fragment>
                                    )
                                  }else if(input.input_type==='radio'){
                                    return (
                                      <Fragment>{input.show===true && (

                                        <input type={input.input_type} name={input.name} id={item.id}  className={input.className}
                                               onChange={this.props.dataTableOnChangeInput.bind(this)}
                                               defaultChecked={item.defaultChecked} />


                                      )}</Fragment>
                                    )
                                  }

                                })}
                              </Fragment>
                            )}
                            {/* End--Input */}


                          </td>
                        )




                      }
                    }

                  })}

                </tr>
              )
            })}

            </tbody>
          </table>
        </div>
        <PagiNate paginateMethod={this.paginate}
                  pageNate={this.state.pageNate}
                  skip={this.state.skip}
                  take={this.state.take}
                  totalTableData={this.state.totalTableData}
        />
      </div>
    )
  }

}
