import React, {Component} from 'react'

class PagiNate extends Component{
  constructor(props) {
    super(props);

    this.state={
      pageNate:[],
      skip:this.props.skip,
      length: 0,
      take: this.props.take,
      pageNo: 0
    }

  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      pagiNate: nextProps.pageNate,
      length: nextProps.pageNate.length,
      skip: nextProps.skip,
      take: nextProps.take
    },()=>{
      console.clear()
      console.log(this.state)
      this.setState({
        pageNo: (this.state.skip/this.state.take)+1
      }, ()=>{
        console.log('PageNo :', this.state.pageNo)})
    })
  }

 
  render() {
    let showingUpTo=0;
    if(this.state.skip+this.state.take>=this.props.totalTableData){
      showingUpTo = this.props.totalTableData;
    }else{
      showingUpTo = this.state.skip+this.state.take;
    }
    return (
      <div className="row">
        <div className="col-6">
          Showing {this.state.skip+1} to {showingUpTo} of {this.props.totalTableData} entries
        </div>
        <div className="col-6 text-right justify-content-end pull-right">

          <nav className="" aria-label="Page navigation example text-right">
            <ul className="pagination justify-content-end">

              {this.state.pageNo===1 &&(
                <li className="page-item disabled">
                  <a href="#" className="page-link" aria-label="Previous">
                    <span aria-hidden="true">«</span><span className="sr-only">Previous</span>
                  </a>
                </li>
              )}
              {this.state.pageNo!==1 &&(
                <li className="page-item">
                  <a href="#" onClick={this.props.paginateMethod.bind(this,(this.state.skip-this.state.take))} className="page-link" aria-label="Previous">
                    <span aria-hidden="true">«</span><span className="sr-only">Previous</span>
                  </a>
                </li>
              )}


              {this.props.pageNate.map((item,index)=>{
                
                if(item===this.state.skip){

                  return (
                    <li className="page-item active">
                    <a className="page-link"
                       href="#"
                    >{index+1}</a>
                  </li>
                  )
                }else{
                    return(
                      <li className="page-item">
                      <a className="page-link"
                         href="#"
                         onClick={this.props.paginateMethod.bind(this,item)}>{index+1}</a>
                    </li>
                    )
                }
              })}

                  {this.state.pageNo===this.state.length &&(
                    <li className="page-item disabled">
                      <a href="#" className="page-link" aria-label="Next">
                        <span aria-hidden="true">»</span><span className="sr-only">Next</span>
                      </a>
                    </li>
                  )}
                  {this.state.pageNo!==this.state.length &&(
                    <li className="page-item">
                      <a href="#" onClick={this.props.paginateMethod.bind(this,(this.state.take+this.state.skip))} className="page-link" aria-label="Next">
                        <span aria-hidden="true">»</span><span className="sr-only">Next</span>
                      </a>
                    </li>
                  )}

            </ul>
          </nav>

         

        </div>
      </div>
    )
  }
}

export default PagiNate
