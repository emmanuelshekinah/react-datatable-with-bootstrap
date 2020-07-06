import React, {Component} from 'react'
import  ReactDataTable from 'react-datatable-bootstrap'

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataTablesOptions: {
        'tableOptions': {
          'table_title': 'Hello'
        },
        'colums': [
          { 'column_properties': {
                'name': 'id',
                'title': '#',
                'width': '',
                'allowSort': false
              },
              'text':[
                {
                  'name': 'active',
                  'show': true,
                  'className': ''
                },
                {
                  'name': 'active',
                  'show': true,
                  'className': ''
                }
              ],
              'button': [
                {
                  'actionType': 'preview',
                  'show': true,
                  'title': 'Agreement PDF 1',
                  'passValue': 'id',
                  'className': 'btn btn-outline-success btn-sm'
                },
                {
                  'actionType': 'preview',
                  'show': true,
                  'title': 'Agreement PDF 2',
                  'passValue': 'id',
                  'className': 'btn btn-outline-success btn-sm'
                }
              ],
              'fa_icon':[
                {
                  'show': true,
                  'className': 'fa fa-pencil-square',
                  'position': 'before'
                }
              ]
          },
          { 'column_properties': {
            'name': 'name',
            'title': 'Scheme Name',
            'width': '',
            'allowSort': true
          },
          'text':[
            {
              'name': 'active',
              'show': true,
              'className': ''
            },
            {
              'name': 'active',
              'show': true,
              'className': ''
            }
          ],
          'button': [
            {
              'actionType': 'preview',
              'show': false,
              'title': 'Agreement PDF',
              'passValue': 'id',
              'className': 'btn btn-outline-success btn-sm'
            }
          ],
          'fa_icon':[
            {
              'show': true,
              'className': 'fa fa-pencil-square',
              'position': 'before'
            }
          ]
      },
      { 'column_properties': {
        'name': 'active',
        'title': 'Active',
        'width': '',
        'allowSort': true
      },
      'text':[
        {
          'name': 'active',
          'show': true,
          'className': ''
        },
        {
          'name': 'active',
          'show': true,
          'className': ''
        }
      ],
      'button': [
        {
          'actionType': 'preview',
          'show': false,
          'title': 'Agreement PDF',
          'passValue': 'id',
          'className': 'btn btn-outline-success btn-sm'
        }
      ],
      'fa_icon':[
        {
          'show': true,
          'className': 'fa fa-address-book',
          'position': 'before'
        },
        {
          'show': true,
          'className': 'fa fa-pencil-square',
          'position': 'before'
        }
      ]
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

          },
          {
            'active':'Emmanuel Shekinah',
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

