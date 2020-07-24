import React, {Component, Fragment} from 'react'

class PagiNate extends Component{
  constructor(props) {
    super(props);

    this.state={
      pageNate:[],
      skip:this.props.skip,
      length: 0,
      take: this.props.take,
      pageNo: 0,


    }

  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      pagiNate: nextProps.pageNate,
      length: nextProps.pageNate.length,
      skip: nextProps.skip,
      take: nextProps.take
    },()=>{
      // console.clear()
      console.log('paginate States: ',this.state)
      this.setState({
        pageNo: (this.state.skip/this.state.take)+1
      }, ()=>{
        console.log('PageNo :', this.state.pageNo)})
    })
  }

 
  render() {
    const space=<li className="page-item"  key={"space"}>
    &nbsp;<i class="fa fa-stop" aria-hidden="true" style={{fontSize: "7px", color: "#00164e"}}></i>&nbsp;
    &nbsp;<i class="fa fa-stop" aria-hidden="true" style={{fontSize: "7px", color: "#00164e"}}></i>&nbsp;
    &nbsp;<i class="fa fa-stop" aria-hidden="true" style={{fontSize: "7px", color: "#00164e"}}></i>&nbsp;
  </li>
    let showingUpTo;
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
                  <a href="#" className="page-link" aria-label="Previous"
                   
                  >
                    <span aria-hidden="true">«</span><span className="sr-only">Previous</span>
                  </a>
                </li>
              )}
              {this.state.pageNo!==1 &&(
                <li className="page-item">
                  <a href="#" onClick={this.props.paginateMethod.bind(this,(this.state.skip-this.state.take))} 
                   style={{color: "#00164E"}}
                  className="page-link" aria-label="Previous">
                    <span aria-hidden="true">«</span><span className="sr-only">Previous</span>
                  </a>
                </li>
              )}




              {this.props.pageNate.map((item,index)=>{
                
                if(this.state.length>11){
                   
                  //First: ---page 4 or less
                  if(this.state.pageNo<5){
                    //--First::First
                    if((index+1)<=5){
                     
                      if(item===this.state.skip){
              
                      return (
                        <Fragment>
                            {()=>{if((index+1)==5){return(<Fragment>{space}</Fragment>)}}}
                          <li className="page-item active" key={index}>
                          <a className="page-link"
                          style={{backgroundColor: "#00164E", border: "0px #00164E"}}
                            href="#"
                          >{index+1}</a>
                      </li>
                      {(()=>{if((index+1)===5){return(<Fragment>{space}</Fragment>)}})()}
                        </Fragment>
                      )
                    }else{
                        return(
                          <Fragment>
                             <li className="page-item"  key={index}>
                            <a className="page-link"
                            style={{color: "#00164E"}}
                              href="#"
                              onClick={this.props.paginateMethod.bind(this,item)}>{index+1}</a>
                        </li>
                        {(()=>{if((index+1)===5){return(<Fragment>{space}</Fragment>)}})()}
                          </Fragment>
                         
                        )
                    }
                    
                    }
                    //First::End
                    if((index+1)>=(this.state.length-4)){
                      if(item===this.state.skip){
                        return (
                          <Fragment>
                            <li className="page-item active" key={index}>
                          <a className="page-link"
                          style={{backgroundColor: "#00164E", border: "0px #00164E"}}
                            href="#"
                          >{index+1}</a>
                        </li>
                          </Fragment>
                          
                        )
                      }else{
                          return(
                            <Fragment>
                              <li className="page-item"  key={index}>
                            <a className="page-link"
                            style={{color: "#00164E"}}
                              href="#"
                              onClick={this.props.paginateMethod.bind(this,item)}>{index+1}</a>
                          </li>
                            </Fragment>
                            
                          )
                      }
                    }
                  }
                  //Middle: ---page 4 or more and page less than length-4
                  if(this.state.pageNo>=5 && this.state.pageNo<(this.state.length-3)){
                     //--Middle::First
                     if((index+1)<=3){
                      if(item===this.state.skip){

                      return (
                        <Fragment>
                          <li className="page-item active" key={index}>
                          <a className="page-link"
                          style={{backgroundColor: "#00164E", border: "0px #00164E"}}
                            href="#"
                          >{index+1}</a>
                          {(()=>{if((index+1)===3){return(<Fragment>{space}</Fragment>)}})()}
                      </li>
                        </Fragment>
                        
                      )
                    }else{
                        return(
                          <Fragment>
                            <li className="page-item"  key={index}>
                            <a className="page-link"
                            style={{color: "#00164E"}}
                              href="#"
                              onClick={this.props.paginateMethod.bind(this,item)}>{index+1}</a>
                        </li>
                        {(()=>{if((index+1)===3){return(<Fragment>{space}</Fragment>)}})()}
                          </Fragment>
                          
                        )
                    }

                    }
                   
                     //Middle::Middle
                     if((index+1)>=4 && (index+1)<=(this.state.length-3)){
                       
                      if(item===this.state.skip){
                        return (
                          <Fragment>
                            <li className="page-item active" key={index}>
                          <a className="page-link"
                          style={{backgroundColor: "#00164E", border: "0px #00164E"}}
                            href="#"
                          >{index+1}</a>
                        </li>
                          </Fragment>
                          
                        )
                      }else{
                        if((this.state.pageNo-1)===(index+1) || (this.state.pageNo+2)===(index+1)){
                          return(
                            <Fragment>
                              <li className="page-item"  key={index}>
                            <a className="page-link"
                            style={{color: "#00164E"}}
                              href="#"
                              onClick={this.props.paginateMethod.bind(this,item)}>{index+1}</a>
                          </li>
                            </Fragment>
                            
                          )
                        }
                          
                          
                      }
                    }

                  
                    //Middle::End
                    if((index+1)>(this.state.length-3)){
                      if(item===this.state.skip){
                        return (
                          <Fragment>
                            {(()=>{if((index+1)===(this.state.length-2)){return(<Fragment>{space}</Fragment>)}})()}
                            <li className="page-item active" key={index}>
                          <a className="page-link"
                          style={{backgroundColor: "#00164E", border: "0px #00164E"}}
                            href="#"
                          >{index+1}</a>
                        </li>
                          </Fragment>

                          
                        )
                      }else{
                        // if((this.state.pageNo-1)===(index+1) || (this.state.pageNo+2)===(index+1)){
                          return(
                            <Fragment>
                              {(()=>{if((index+1)===(this.state.length-2)){return(<Fragment>{space}</Fragment>)}})()}
                              <li className="page-item"  key={index}>
                            <a className="page-link"
                            style={{color: "#00164E"}}
                              href="#"
                              onClick={this.props.paginateMethod.bind(this,item)}>{index+1}</a>
                          </li>
                            </Fragment>
                            
                          )
                        // }
                      }
                    }
                  }
                  //End: ---page>=page-3
                  if(this.state.pageNo>=(this.state.length-3)){
                    //--End::First
                    if((index+1)<=5){
                      if(item===this.state.skip){

                      return (
                        <Fragment>
                          <li className="page-item active" key={index}>
                          <a className="page-link"
                          style={{backgroundColor: "#00164E", border: "0px #00164E"}}
                            href="#"
                          >{index+1}</a>
                      </li>
                      {(()=>{if((index+1)===5){return(<Fragment>{space}</Fragment>)}})()}
                        </Fragment>
                        
                      )
                    }else{
                        return(
                          <Fragment>
                            <li className="page-item"  key={index}>
                            <a className="page-link"
                            style={{color: "#00164E"}}
                              href="#"
                              onClick={this.props.paginateMethod.bind(this,item)}>{index+1}</a>
                        </li>
                        {(()=>{if((index+1)===5){return(<Fragment>{space}</Fragment>)}})()}
                          </Fragment>
                          
                        )
                    }

                    }
                    
                    //End::End
                    // if((this.state.pageNo)>=(this.state.length-2)){
                      if((index+1)>=(this.state.length-4)){
                        if(item===this.state.skip){
                          return (
                            <Fragment>
                              <li className="page-item active" key={index}>
                            <a className="page-link"
                            style={{backgroundColor: "#00164E", border: "0px #00164E"}}
                              href="#"
                            >{index+1}</a>
                          </li>
                            </Fragment>
                            
                          )
                        }else{
                            return(
                              <Fragment>
                                <li className="page-item"  key={index}>
                              <a className="page-link"
                              style={{color: "#00164E"}}
                                href="#"
                                onClick={this.props.paginateMethod.bind(this,item)}>{index+1}</a>
                            </li>
                              </Fragment>
                              
                            )
                        }
                      }
                    // }
                  }

                    
                }else{
                    if(item===this.state.skip){

                      return (
                        <Fragment>
                          <li className="page-item active" key={index}>
                        <a className="page-link"
                        style={{backgroundColor: "#00164E", border: "0px #00164E"}}
                          href="#"
                        >{index+1}</a>
                      </li>
                        </Fragment>

                        
                      )
                    }else{
                        return(
                          <Fragment>
                            <li className="page-item"  key={index}>
                          <a className="page-link"
                          style={{color: "#00164E"}}
                            href="#"
                            onClick={this.props.paginateMethod.bind(this,item)}>{index+1}</a>
                        </li>
                          </Fragment>

                          
                        )
                    }
                }

                


              })}




                  {this.state.pageNo===this.state.length &&(
                    <li className="page-item disabled">
                      <a href="#" className="page-link" aria-label="Next"
                       
                      >
                        <span aria-hidden="true">»</span><span className="sr-only">Next</span>
                      </a>
                    </li>
                  )}
                  {this.state.pageNo!==this.state.length &&(
                    <li className="page-item">
                      <a href="#" onClick={this.props.paginateMethod.bind(this,(this.state.take+this.state.skip))} className="page-link" 
                       style={{color: "#00164E"}}
                      aria-label="Next">
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
