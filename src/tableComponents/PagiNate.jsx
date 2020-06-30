import React, {Component} from 'react'

class PagiNate extends Component{
  constructor(props) {
    super(props);

    this.state={
      pageNate:[],
      skip:10,
      length: 0,
      take: 0,
      pageNo: 0
    }

    this.previous = this.previous.bind(this)
    this.next = this.next.bind(this)
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

  previous(e){
    const page = this.state.take-this.state.skip;
    this.props.paginateMethod.bind(e,this.state.skip-this.state.take)
    console.log('Previous: ', page)
  }
  next(e){
    const page = this.state.take+this.state.skip;
    console.log('Next: ', page)
    this.props.paginateMethod.bind(e,this.state.take+this.state.skip)
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
                  <a href="javascript:void(0);" className="page-link" aria-label="Previous">
                    <span aria-hidden="true">«</span><span className="sr-only">Previous</span>
                  </a>
                </li>
              )}
              {this.state.pageNo!==1 &&(
                <li className="page-item">
                  <a href="javascript:void(0);" className="page-link" aria-label="Previous">
                    <span aria-hidden="true">«</span><span className="sr-only">Previous</span>
                  </a>
                </li>
              )}


              {/*{this.props.pageNate.map((item,index)=>(*/}
              {/*  <>*/}
              {/*    {item===this.state.skip && (*/}
              {/*      <li className="page-item active">*/}
              {/*        <a className="page-link"*/}
              {/*           href="javascript:void(0);"*/}
              {/*        >{index+1}</a>*/}
              {/*      </li>*/}
              {/*    )}*/}
              {/*    {item!==this.state.skip && (*/}
              {/*      <li className="page-item">*/}
              {/*        <a className="page-link"*/}
              {/*           href="javascript:void(0);"*/}
              {/*           onClick={this.props.paginateMethod.bind(this,item)}>{index+1}</a>*/}
              {/*      </li>*/}
              {/*    )}*/}
              {/*  </>*/}

              {/*))}*/}

              {/*<li className="page-item"><a href="javascript:void(0);" className="page-link">1</a></li>*/}
              {/*<li className="page-item active"><a href="javascript:void(0);" className="page-link">2</a></li>*/}
              {/*<li className="page-item"><a href="javascript:void(0);" className="page-link">3</a></li>*/}
              {/*<li className="page-item"><a href="javascript:void(0);" className="page-link">4</a></li>*/}
              {/*<li className="page-item"><a href="javascript:void(0);" className="page-link">5</a></li>*/}

                  {this.state.pageNo===this.state.length &&(
                    <li className="page-item disabled">
                      <a href="javascript:void(0);" className="page-link" aria-label="Next">
                        <span aria-hidden="true">»</span><span className="sr-only">Next</span>
                      </a>
                    </li>
                  )}
                  {this.state.pageNo!==this.state.length &&(
                    <li className="page-item">
                      <a href="javascript:void(0);" className="page-link" aria-label="Next">
                        <span aria-hidden="true">»</span><span className="sr-only">Next</span>
                      </a>
                    </li>
                  )}

            </ul>
          </nav>

          {/*<nav aria-label="Page navigation example">*/}
          {/*  <ul className="pagination justify-content-end">*/}
          {/*    {this.state.pageNo===1 &&(*/}
          {/*      <li className="page-item disabled">*/}
          {/*        <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>*/}
          {/*      </li>*/}
          {/*    )}*/}
          {/*    {this.state.pageNo!==1 &&(*/}
          {/*      <li className="page-item">*/}
          {/*        <a className="page-link"*/}
          {/*           href="#"*/}
          {/*           tabIndex="-1"*/}
          {/*           onClick={this.props.paginateMethod.bind(this,-1*(this.state.take-this.state.skip))}*/}
          {/*           aria-disabled="true">Previous</a>*/}
          {/*      </li>*/}
          {/*    )}*/}

              {/*{this.props.pageNate.map((item,index)=>(*/}
              {/*  <>*/}
              {/*    {item===this.state.skip && (*/}
              {/*      <li className="page-item active">*/}
              {/*        <a className="page-link" href="#">{index+1}</a>*/}
              {/*      </li>*/}
              {/*    )}*/}
              {/*    {item!==this.state.skip && (*/}
              {/*      <li className="page-item">*/}
              {/*        <a className="page-link"*/}
              {/*           href="#"*/}
              {/*           onClick={this.props.paginateMethod.bind(this,item)}>{index+1}</a></li>*/}
              {/*    )}*/}
              {/*  </>*/}

              {/*))}*/}


          {/*    {this.state.pageNo===this.state.length &&(*/}
          {/*      <li className="page-item disabled">*/}
          {/*        <a className="page-link" href="#">Next</a>*/}
          {/*      </li>*/}
          {/*    )}*/}
          {/*    {this.state.pageNo!==this.state.length &&(*/}
          {/*      <li className="page-item">*/}
          {/*        <a className="page-link"*/}
          {/*           onClick={this.props.paginateMethod.bind(this,(this.state.take+this.state.skip))}*/}
          {/*           href="#">Next</a>*/}
          {/*      </li>*/}
          {/*    )}*/}


          {/*  </ul>*/}
          {/*</nav>*/}

        </div>
      </div>
    )
  }
}

export default PagiNate
