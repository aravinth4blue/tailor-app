import React from 'react'
import parse from 'html-react-parser';


class App extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         customDiv: ['<div class="form-row"> <div class="form-group col-md-2"> <label for="">Material</label> <select id="inputState" class="form-control" name="material"> <option selected>Choose...</option> <option>Saree</option> <option >Chudi</option> <option>Lining Blouse</option> <option>Blouse</option> <option>Sattai Button</option> <option>Pavadai Belt</option> </select> </div> <div class="form-group col-md-2"> <label for="">Color</label> <select id="inputState" class="form-control" name="status"> <option selected>Choose...</option> <option>Blue</option> <option>Yellow</option> <option>Red</option> </select> </div> <div class="form-group col-md-2"> <label for="">Qty</label> <select id="inputState" class="form-control" name="qty"> <option selected>Choose...</option> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option> </select> </div>  <div class="form-group col-md-2"> <label for="">Price</label> <input type="text" class="form-control" name="price"/> </div> <div class="form-group col-md-4"> <label for="">Status</label> <select id="inputState" class="form-control" name="status"> <option selected>Choose...</option> <option>Paid</option> <option>Un Paid</option> <option>Partial</option> </select> </div>']     // set initial state with one div
      }
      console.log(this.state.customDiv)
      this.addRow = this.addRow.bind(this);
      
    }
   addRow() {
      console.log("Add button clicked");
      
      let cDivs = [...this.state.customDiv];
      cDivs.push('<div class="form-row"> <div class="form-group col-md-2"> <label for="">Material</label> <select id="inputState" class="form-control" name="material"> <option selected>Choose...</option> <option>Saree</option> <option >Chudi</option> <option>Lining Blouse</option> <option>Blouse</option> <option>Sattai Button</option> <option>Pavadai Belt</option> </select> </div> <div class="form-group col-md-2"> <label for="">Color</label> <select id="inputState" class="form-control" name="status"> <option selected>Choose...</option> <option>Blue</option> <option>Yellow</option> <option>Red</option> </select> </div> <div class="form-group col-md-2"> <label for="">Qty</label> <select id="inputState" class="form-control" name="qty"> <option selected>Choose...</option> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option> </select> </div>  </div> <div class="form-group col-md-2"> <label for="">Price</label> <input type="text" class="form-control" name="price"/> </div> <div class="form-group col-md-4"> <label for="">Status</label> <select id="inputState" class="form-control" name="status"> <option selected>Choose...</option> <option>Paid</option> <option>Un Paid</option> <option>Partial</option> </select> </div>')
      this.setState({customDiv: cDivs })
      console.log(this.state.customDiv)
      console.log(typeof this.state)
   }
  render(){
   
    
    return (
        <React.Fragment>
          <div class="container">
      <div class="panel panel-primary">
         <div class="panel-heading">
            Customer Details
         </div>
         <div class="panel-body">
            <form method="POST">
               <div class="form-row">
                  <div class="form-group col-md-6">
                     <label for=""> Entry Date</label>
                     <input type="date" class="form-control" name="entry_date"/>
                  </div>
                  <div class="form-group col-md-6">
                     <label for="">Due Date</label>
                     <input type="date" class="form-control" name="due_date"/>
                  </div>
               </div>
               <div class="form-row">
                  <div class="form-group col-md-6">
                     <label for="">Bill No</label>
                     <input type="text" class="form-control" name="bill_no"/>
                  </div>
                  <div class="form-group col-md-6">
                     <label for="">Mobile Number</label>
                     <input type="text" class="form-control" name="cus_mob"/>
                  </div>
                 
               </div>
               <div class="form-row">
               <div class="form-group col-md-6">
                     <label for="">Name</label>
                     <input type="text" class="form-control" name="cus_name"/>
               </div>
               <div class="form-group col-md-6">
                     <label for="">Address</label>
                     <input type="text" class="form-control" name="cus_address"/>
               </div>
                 
               </div>
               {parse(String(this.state.customDiv))}
               <div class="form-row">
               <div class="form-group col-md-2 offset-md-10">
                        <button type="button"
             className="btn btn-primary custom-add-button add-row"
             onClick={this.addRow}><i class="icon-plus-sign"></i></button>
              </div>
              </div>
                 <div class="form-row">
                   <div class="form-group col-md-3 offset-md-6">
                       <label for="">Total</label>
                       <input type="text" class="form-control" name="cus_total"/>
                   </div>
                   <div class="form-group col-md-3">
                       <label for="">Balance</label>
                       <input type="text" class="form-control" name="cus_bal"/>
                   </div>
                 </div> 
                  
               <div class="form-group col-md-12">
                  <button type="submit" class="btn btn-primary" name="submit">Submit</button>
               </div>
            </form>
         </div>
      </div>
      </div>
      <div>
        
        {/* .map((cdiv,i) => {
          <div className="expense-block" key={cdiv}>></div>
        }) */}
        </div>
      </React.Fragment>
      
    );
  }

}
export default App
