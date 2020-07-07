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
              'position': 'before',
              'extra': 
              {
                'depend_from_this_field': 'cell',
                'conditional': 'boolean'
              }
            },
            {
              'show': true,
              'className': 'fa fa-free-code-camp',
              'position': 'before'
            }
          ],
          'input': [
            {
              'show': true,
              'name': 'cell',
              'id': 'cell',
              'input_type': 'checkbox',
              'className': 'custom-control custom-checkbox',
              'defaultChecked': true,
              
            }
          ]
      },
      { 'column_properties': {
        'name': 'active',
        'title': 'Active',
        'width': '10%',
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
          'show': false,
          'className': 'fa fa-address-book',
          'position': 'before'
        },
        {
          'show': false,
          'className': 'fa fa-pencil-square',
          'position': 'before',
          'extra': 
              {
                'depend_from_this_field': 'age',
                'conditional': 'not_equals',
                'value':
                {
                  'fromDB': false,
                  'value': null
                }

              }
        }
      ],
      'input': [
        {
          'show': true,
          'name': 'cell',
          'id': 'cell',
          'input_type': 'text',
          'defaultValue': 'Hello',
          
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
            'updated_at': 'hhhh',
            'cell': true,
            'age': 4

          },
          {
            'active':'Emmanuel Shekinah',
            'created_at': '1es.shekinah@gmail.com',
            'cycle_id': '0728999919',
            'html_pdf_template': 'Emmanuel Shekinah 1',
            'id': 'Emmanuel Shekinah 1',
            'name': 'hhhdgddg',
            'updated_at': 'hhhh',
            'cell': true,
            'age': null

          }

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

