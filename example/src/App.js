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
          {'id':1,'name': 'Emmanuel Shekinah', 'defaultChecked': false},
          {'id':2,'name': 'Emmanuel Shekinah'},
          {'id':3,'name': 'Emmanuel Shekinah'},
          {'id':4,'name': 'Emmanuel Shekinah', 'defaultChecked': true},
          {'id':5,'name': 'Emmanuel Shekinah'},
          {'id':6,'name': 'Emmanuel Shekinah'},
          {'id':7,'name': 'Emmanuel Shekinah'},
          {'id':8,'name': 'Emmanuel Shekinah'},
          {'id':9,'name': 'Emmanuel Shekinah'},
          {'id':10,'name': 'Emmanuel Shekinah'},

        ]
      }
    }
    this.dataTableBtnAction = this.dataTableBtnAction.bind(this)
    this.dataTableOnChange = this.dataTableOnChange.bind(this)
    this.dataTableOnChangeInput = this.dataTableOnChangeInput.bind(this)
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

  render() {
    return(
      <ReactDataTable dataTablesOptions={this.state.dataTablesOptions}
                      dataTableBtnAction={this.dataTableBtnAction}
                      dataTableOnChange={this.dataTableOnChange}
                      dataTableData={this.state.apiData}
                      dataTableOnChangeInput={this.dataTableOnChangeInput}
      />
    )
  }

}

