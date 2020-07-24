
# react-datatable-with-bootstrap

  

> React Bootstrap DataTable Package that handle server side Proccesing

  

[![NPM](https://img.shields.io/npm/v/react-datatable-with-bootstrap.svg)](https://www.npmjs.com/package/react-datatable-with-bootstrap) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

  

## Install

  

```bash
npm install --save react-datatable-with-bootstrap
```

  

## Usage

 ```bash
import  React, {Component} from  'react'
import  ReactDataTable  from  'react-datatable-with-bootstrap'

export  default  class  App  extends  Component{
	constructor(props) {
	super(props);
	this.state = {
		dataTablesOptions: {
				'tableOptions': {
					'table_title': 'Hello',
          			'className': 'table table-hover'
				},
				'colums': []
				},
			apiData: {
				'pageNate': [0,10],
				'totalTableData':  12,
				'data': []
			}
		this.dataTableBtnAction = this.dataTableBtnAction.bind(this)
		this.dataTableOnChange = this.dataTableOnChange.bind(this)
		this.dataTableOnChangeInput = this.dataTableOnChangeInput.bind(this)
	}
	//Handling click of buton or fa-icon
	dataTableBtnAction(id, actionType,e){
		console.log('Onclick Id value: ', id);
		console.log('Onclick ACtion value: ', actionType);
		console.log('Onclick Action Event: ', e);
	}
	//This is where you need to introduce API which will be trigured automatical by the ReactDataTable component
	dataTableOnChange(state){
		console.log('Change States from DataTable: ', state)
	}
	//Hnadling Form inputs
	dataTableOnChangeInput(e){
		console.log(e.target.name+' :'+e.target.value);
	}
	render() {

	return(
				<ReactDataTable  dataTablesOptions={this.state.dataTablesOptions}
					dataTableBtnAction={this.dataTableBtnAction}
					dataTableOnChange={this.dataTableOnChange}
					dataTableData={this.state.apiData}
					dataTableOnChangeInput={this.dataTableOnChangeInput}
				/>

	)

	}

  

}
```
## Columns json Example 
### 1. Text
```bash
'colums': [
	{ 
	'column_properties': 
		{
		'name':  'id',
		'title':  '#',
		'width':  '',
		'allowSort':  false
		},
	'text':
		[
			{
				'name':  'name',
				'show':  true,
				'className':  ''
			},
			{
				'name':  'email',
				'show':  true,
				'className':  ''
			}
	]
  ```

### 2. Buttons
```bash
'colums': [
	{ 
	'column_properties': 
		{
		'name':  'id',
		'title':  'Buttons',
		'width':  '',
		'allowSort':  false
		},
	'button':
		[
			{
				'actionType':  'preview',
				'show':  true,
				'title':  'Button 1',
				'passValue':  'id',
				'className':  'btn btn-outline-success btn-sm'
			},
			{
				'actionType':  'preview',
				'show':  true,
				'title':  'Button 2',
				'passValue':  'id',
				'className':  'btn btn-outline-success btn-sm'
			}
	]
  ```
  ### 3. Fa Icons
```bash
'colums': [
	{ 
	'column_properties': 
		{
		'name':  'id',
		'title':  'Icons',
		'width':  '',
		'allowSort':  false
		},
	'fa_icon':
		[
			{
				'show':  true,
				'className':  'fa fa-free-code-camp'
			},
			{
				'show':  true,
				'className':  'fa fa-free-code-camp',
				'extra':
						{
							'depend_from_this_field':  'extra_icon',
							'conditional':  'boolean'
						}			
}
	]
  ```
### 4. Inputs
```bash
'colums': [
	{ 
	'column_properties': 
		{
		'name':  'id',
		'title':  'CheckBox',
		'width':  '',
		'allowSort':  false
		},
	'input':
		[
			{
				'show':  true,
				'name':  'cell',
				'id':  'cell',
				'input_type':  'checkbox',
				'className':  'custom-control custom-checkbox',
				'defaultChecked':  true,'
			},
			{
				'show':  true,
				'name':  'cell',
				'id':  'cell',
				'input_type':  'checkbox',
				'className':  'custom-control custom-checkbox',
				'defaultChecked':  true,'
			}
	]
  ```
## API Response Json

  ``` bash
  apiData: {
	'pageNate': [0,10],
	'totalTableData':  12,
	'data': [
		{
			'id':  'Emmanuel Shekinah 1',
			'name':  'hhhdgddg',
			'cell':  12345,
			'age':  4,
			'extra_icon': true
		},
		{
			'id':  'Emmanuel Shekinah 1',
			'name':  'hhhdgddg',
			'cell':  12345,
			'age':  4,
			'extra_icon': true
		}

	]
}
```

## License

  

MIT © [emmanuelshekinah](https://github.com/emmanuelshekinah/react-datatable-with-bootstrap)