import React, {Component} from 'react'
import  ReactDataTable from 'react-datatable-bootstrap'
import json from './json.json'

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataTablesOptions: json,
      apiData: {
        'pageNate': [0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200],
        'totalTableData': 51,
        'data': [
          {'id':1,'personnel': 'Chuck Norris', 'name2': 'Shekinah', 'name3': 'Shekinah', 'name4': 'Shekinah', 'name5': 'Shekinah', 'name6': 'Emma', 'show_input': true},
          {'id':2,'personnel': 'Emmanuel Shekinah', 'name2': 'Shekinah', 'name3': 'Shekinah', 'name4': 'Shekinah', 'name5': 'Shekinah', 'name6': 'Emma', 'show_input': false},
          {'id':3,'personnel': 'Emmanuel Shekinah', 'name2': 'Shekinah', 'name3': 'Shekinah', 'name4': 'Shekinah', 'name5': 'Shekinah', 'name6': 'Emma'},
          {'id':5,'personnel': 'Emmanuel Shekinah', 'name2': 'Shekinah', 'name3': 'Shekinah', 'name4': 'Shekinah', 'name5': 'Shekinah', 'name6': 'Emma'},
          {'id':6,'personnel': 'Emmanuel Shekinah', 'name2': 'Shekinah', 'name3': 'Shekinah', 'name4': 'Shekinah', 'name5': 'Shekinah', 'name6': 'Emma'},
          {'id':7,'personnel': 'Emmanuel Shekinah', 'name2': 'Shekinah', 'name3': 'Shekinah', 'name4': 'Shekinah', 'name5': 'Shekinah', 'name6': 'Emma'},
          {'id':8,'personnel': 'Emmanuel Shekinah', 'name2': 'Shekinah', 'name3': 'Shekinah', 'name4': 'Shekinah', 'name5': 'Shekinah', 'name6': 'Emma'},
          {'id':9,'personnel': 'Emmanuel Shekinah', 'name2': 'Shekinah', 'name3': 'Shekinah', 'name4': 'Shekinah', 'name5': 'Shekinah', 'name6': 'Emma'},
          {'id':10,'personnel': 'Emmanuel Shekinah', 'name2': 'Shekinah', 'name3': 'Shekinah', 'name4': 'Shekinah', 'name5': 'Shekinah', 'name6': 'Emma'},

        ]
      }
    }
    this.dataTableBtnAction = this.dataTableBtnAction.bind(this)
    this.dataTableOnChange = this.dataTableOnChange.bind(this)
    this.dataTableOnChangeInput = this.dataTableOnChangeInput.bind(this)
   // this.dataTableOnChangeInputOnBlur = this.dataTableOnChangeInputOnBlur.bind(this)
  }
  dataTableBtnAction(id, actionType,e){
    console.log('Onclick Id value: ', id);
    console.log('Onclick ACtion value: ', actionType);
    console.log('Onclick Action Event: ', e);

  }
  dataTableOnChange(state){
    console.log('Change States from DataTable: ', state)
  }
  dataTableOnChangeInput(e){
    console.log(e.target.name+' :'+e.target.value);
  }

  dataTableOnChangeInputOnBlur(e){
    console.log(" On Blur" + e.target.name+' :'+e.target.value);
  }

  render() {
    return(
      <ReactDataTable dataTablesOptions={this.state.dataTablesOptions}
                      dataTableBtnAction={this.dataTableBtnAction}
                      dataTableOnChange={this.dataTableOnChange}
                      dataTableData={this.state.apiData}
                      dataTableOnChangeInput={this.dataTableOnChangeInput}
                     // dataTableOnChangeInputOnBlur={this.dataTableOnChangeInputOnBlur}
      />
    )
  }

}

