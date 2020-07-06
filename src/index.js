import React, { Component, Fragment } from 'react'
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
  buttons =(e)=>{
    console.log('Functions ',e);
    
  }
  render(){
    return(
      <div>
        <TableFilter onAction={this.onAction}
                     search={this.search}
                     searchInput={this.state.searchInput}
                     changeRecordsPerPage={this.changeRecordsPerPage}
                     filterId={this.state.filterId}
                     tableOptions={this.props.dataTablesOptions.tableOptions}
                     toChild={this.state}
        />
        <table className="table table-hover">
          <thead>
          <tr>
            {this.state.columns.map((item, index) => {
              
                if (item.column_properties.allowSort === true) {//allow sort order
                  return (
                            <th width={item.column_properties.width} scope="col" key={index}>
                              {item.column_properties.title}
                              <a href="#" onClick={this.changeOrder.bind(this, item.column_properties.name)}>
                                &nbsp; <i className="fa fa-sort " aria-hidden="true"></i>
                              </a>
                            </th>
                          )
                } else {
                  return (
                            <th width={item.column_properties.width} scope="col" key={index}>
                              {item.column_properties.title}
                            </th>
                          )
                }

             
            })}
          </tr>
          </thead>
          <tbody>

          {this.state.apiData.map((item, index) => {

            return (
              <tr key={index}>
                {this.state.columns.map((cols, count) => {
                       
                  for (var i = 0; i < Object.keys(item).length; i++) {
                    console.log('Data Table objects: ',Object.keys(item)[i]);
                        
                    if (cols.column_properties.name === Object.keys(item)[i]) {
                       
                        return (
                                  <td key={index+i}>
                                   


                                   {/* Fa Icons */}
                                    {cols.fa_icon.map((fa, fai)=>{
                                      if(fa.show===true){
                                        return(
                                         
                                            <i className={fa.className} 
                                              onClick={this.props.dataTableBtnAction.bind(this, item[fa.passValue], fa.actionType)} 
                                              aria-hidden="true" style={{cursor: 'pointer'}}
                                              >&nbsp;</i>
                                         
                                        )
                                      }
                                    })}
                                    {/* End--Fa Icons */}
                                    

                                    {/* Text */}
                                    {cols.text.map((txt, txi)=>{
                                      if(txt.show===true){
                                        return(
                                            <span className={txt.className}>&nbsp;{item[txt.name]}</span>
                                         
                                        )
                                      }
                                    })}
                                   {/* End--Text */}


                                    {/* Buttons */}
                                    {cols.button.map((btn, i)=>{
                                      return (
                                        <Fragment>
                                          &nbsp;
                                          {btn.show===true && (
                                             
                                                <button type="button" 
                                                  event={item} 
                                                  id={item.id} 
                                                  name={cols.column_properties.name}
                                                  onClick={this.props.dataTableBtnAction.bind(this, item[btn.passValue], btn.actionType)}
                                                  className={btn.className}>
                                                  {btn.title}
                                              </button>
                                             
                                          )}
                                          
                                        </Fragment>
                                      )
                                    })}
                                    {/* End--Buttons */}
                                   
                                     {/* Input */}
                                     {cols.input.map((input, data)=>{

                                       if(input.input_type==='text'){
                                        return (
                                          <Fragment>
                                            
                                            &nbsp;
                                            {input.show===true && (
                                               
                                               <div className="input-group">
                                                  <input type={input.input_type} name={input.name} id={input.id} className={input.className}
                                                  onChange={this.props.dataTableOnChangeInput.bind(this)}
                                                   defaultValue={input.defaultValue} />
                                             </div>
                                               
                                            )}
                                            
                                          </Fragment>
                                        )
                                       }
                                       else if(input.input_type==='checkbox'){
                                        return (
                                          <Fragment>
                                            
                                            &nbsp;
                                            {input.show===true && (
                                               
                                               <div className="">
                                                  <input type={input.input_type} name={input.name} id={input.id} className={input.className}
                                                  onChange={this.props.dataTableOnChangeInput.bind(this)}
                                                  defaultChecked={input.defaultChecked} />
                                             </div>
                                               
                                            )}
                                            
                                          </Fragment>
                                        )
                                      }else if(input.input_type==='textarea'){

                                      }
                                      
                                    })}
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
