# react-datatable-with-bootstrap

> React Bootstrap DataTable Package that handle server side

[![NPM](https://img.shields.io/npm/v/react-datatable-with-bootstrap.svg)](https://www.npmjs.com/package/react-datatable-with-bootstrap) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-datatable-with-bootstrap
```

## Usage

```jsx
import React, {Component} from 'react'
import  ReactDataTable from 'react-datatable-with-bootstrap'

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataTablesOptions: {
        'url': '/getAllEmployee',
        'colums': [

          {
            'name': 'email',
            'width': '30%',
            'show': true,
            'title': 'Email',
            'order': true,
            'button': {
              'show': false
            }
          },
          {
            'name': 'cell',
            'show': true,
            'width': '20%',
            'title': 'Cell Number',
            'order': true,
            'button': {
              'show': false
            }
          },
          {
            'name': 'names',
            'show': true,
            'width': '20%',
            'title': 'Full Names',
            'order': true,
            'button': {
              'actionType': 'download',
              'show': false,
              'title': 'Download',
              'passValue': 'id'

            }
          },
          {
            'name': '',
            'show': false,
            'width': '20%',
            'title': '',
            'order': false,
            'button': {
              'actionType': 'edit',
              'show': true,
              'title': 'Edit',
              'passValue': 'id'

            }
          }
        ]

      },
      apiData: {
        'pageNate': [5,10,15,20,122,11,23],
        'totalTableData': 20,
        'data': [
          {
            'id':1,
            'email': '1es.shekinah@gmail.com',
            'cell': '1222222222',
            'names': 'Emmanuel Shekinah 1',

          },{
            'id':2,
            'email': '2es.shekinah@gmail.com',
            'cell': '1222222222',
            'names': 'Emmanuel Shekinah 7',

          },{
            'id':3,
            'email': '4es.shekinah@gmail.com',
            'cell': '1222222222',
            'names': 'Emmanuel Shekinah 2',

          },{
            'id':4,
            'email': '4es.shekinah@gmail.com4',
            'cell': '1222222222',
            'names': 'Emmanuel Shekinah',

          },{
            'id':5,
            'email': '5es.shekinah@gmail.com',
            'cell': '1222222222',
            'names': 'Emmanuel Shekinah 89',

          },

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


```

## License

MIT © [emmanuelshekinah](https://github.com/emmanuelshekinah)
