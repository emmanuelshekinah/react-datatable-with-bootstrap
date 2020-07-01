import React, {Component} from 'react'
import  ReactDataTable from 'react-datatable-bootstrap'

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataTablesOptions: {
        'colums': [

          {
              'name': 'id',
              'width': '',
              'show': false,
              'title': '#',
              'order': false,
              'button': {
                  'actionType': 'edit',
                  'show': false,
                  'title': '',
                  'passValue': 'id'
              },
              'fa_icon':{
                  'show': true,
                  'className': 'fa fa-pencil-square',
                  'position': 'before',//after
                  'actionType': 'edit',
                  'passValue': 'id',
              }
          },
          {
              'name': 'updated_at',
              'width': '',
              'show': true,
              'title': 'Scheme Name g',
              'order': false,
              'button': {
                  'show': false
              },
              'fa_icon':{
                  'show': true,
                  'className': 'fa fa-pencil-square',
                  'position': 'before'//after
              }
          },
          {
              'name': 'active',
              'width': '',
              'show': true,
              'title': 'Active',
              'order': true,
              'button': {
                  'show': false
              },
              'fa_icon':{
                  'show': false,
                  'className': 'fa fa-pencil-square',
                  'position': 'before'//after
              }
          },
          {
              'name': 'active',
              'width': '',
              'show': true,
              'title': 'Active',
              'order': true,
              'button': {
                  'show': false
              },
              'fa_icon':{
                  'show': false,
                  'className': 'fa fa-pencil-square',
                  'position': 'before'//after
              }
          },
          {
              'name': '',
              'width': '',
              'show': false,
              'title': 'Preview',
              'order': false,
              'button': {
                  'actionType': 'preview',
                  'show': true,
                  'title': 'Agreement PDF',
                  'passValue': 'id',
                  'className': 'btn btn-outline-success btn-sm'
              },
              'fa_icon':{
                  'show': false,
                  'className': 'fa fa-pencil-square',
                  'position': 'before'//after
              }
          }
      ]

      },
      apiData: {
        'pageNate': [0,10],
        'totalTableData': 12,
        'data': [
          {
            'active':1,
            'created_at': '1es.shekinah@gmail.com',
            'cycle_id': '0728999919',
            'html_pdf_template': 'Emmanuel Shekinah 1',
            'id': 'Emmanuel Shekinah 1',
            'name': 'hhhdgddg',
            'updated_at': 'hhhh'

          },{
            'active':1,
            'created_at': '1es.shekinah@gmail.com',
            'cycle_id': '0728999919',
            'html_pdf_template': 'Emmanuel Shekinah 1',
            'id': 'Emmanuel Shekinah 1',
            'name': 'hhhdgddg',
            'updated_at': 'hhhh'

          },{
            'active':1,
            'created_at': '1es.shekinah@gmail.com',
            'cycle_id': '0728999919',
            'html_pdf_template': 'Emmanuel Shekinah 1',
            'id': 'Emmanuel Shekinah 1',
            'name': 'hhhdgddg',
            'updated_at': 'hhhh'

          },{
            'active':1,
            'created_at': '1es.shekinah@gmail.com',
            'cycle_id': '0728999919',
            'html_pdf_template': 'Emmanuel Shekinah 1',
            'id': 'Emmanuel Shekinah 1',
            'name': 'hhhdgddg',
            'updated_at': 'hhhh'

          },{
            'active':1,
            'created_at': '1es.shekinah@gmail.com',
            'cycle_id': '0728999919',
            'html_pdf_template': 'Emmanuel Shekinah 1',
            'id': 'Emmanuel Shekinah 1',
            'name': 'hhhdgddg',
            'updated_at': 'hhhh'

          },{
            'active':1,
            'created_at': '1es.shekinah@gmail.com',
            'cycle_id': '0728999919',
            'html_pdf_template': 'Emmanuel Shekinah 1',
            'id': 'Emmanuel Shekinah 1',
            'name': 'hhhdgddg',
            'updated_at': 'hhhh'

          },{
            'active':1,
            'created_at': '1es.shekinah@gmail.com',
            'cycle_id': '0728999919',
            'html_pdf_template': 'Emmanuel Shekinah 1',
            'id': 'Emmanuel Shekinah 1',
            'name': 'hhhdgddg',
            'updated_at': 'hhhh'

          },{
            'active':1,
            'created_at': '1es.shekinah@gmail.com',
            'cycle_id': '0728999919',
            'html_pdf_template': 'Emmanuel Shekinah 1',
            'id': 'Emmanuel Shekinah 1',
            'name': 'hhhdgddg',
            'updated_at': 'hhhh'

          },{
            'active':1,
            'created_at': '1es.shekinah@gmail.com',
            'cycle_id': '0728999919',
            'html_pdf_template': 'Emmanuel Shekinah 1',
            'id': 'Emmanuel Shekinah 1',
            'name': 'hhhdgddg',
            'updated_at': 'hhhh'

          },{
            'active':1,
            'created_at': '1es.shekinah@gmail.com',
            'cycle_id': '0728999919',
            'html_pdf_template': 'Emmanuel Shekinah 1',
            'id': 'Emmanuel Shekinah 1',
            'name': 'hhhdgddg',
            'updated_at': 'hhhh'

          },{
            'active':1,
            'created_at': '1es.shekinah@gmail.com',
            'cycle_id': '0728999919',
            'html_pdf_template': 'Emmanuel Shekinah 1',
            'id': 'Emmanuel Shekinah 1',
            'name': 'hhhdgddg',
            'updated_at': 'hhhh'

          },{
            'active':1,
            'created_at': '1es.shekinah@gmail.com',
            'cycle_id': '0728999919',
            'html_pdf_template': 'Emmanuel Shekinah 1',
            'id': 'Emmanuel Shekinah 1',
            'name': 'hhhdgddg',
            'updated_at': 'hhhh'

          }

        ]
      }
    }
    this.dataTableBtnAction = this.dataTableBtnAction.bind(this)
    this.dataTableOnChange = this.dataTableOnChange.bind(this)
  }
  dataTableBtnAction(id, actionType,e){
    console.log('Onclick Id value: ', id);
    console.log('Onclick ACtion value: ', actionType);
    console.log('Onclick Action Event: ', e);

  }
  dataTableOnChange(state){
    console.log('Change States from DataTable: ', state)
  }

  render() {
    return(
      <ReactDataTable dataTablesOptions={this.state.dataTablesOptions}
                      dataTableBtnAction={this.dataTableBtnAction}
                      dataTableOnChange={this.dataTableOnChange}
                      dataTableData={this.state.apiData}
      />
    )
  }

}

