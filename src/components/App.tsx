import * as React from "react";
import axios from 'axios';


class App extends React.Component<{}, {}> {

  private fu = () =>{
    console.log('Press btn')
    axios.get('/node/opa', {
      params: {
        ID: 12345
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    return(<div>
      Hello Vladimir!
      <button onClick={this.fu}  >Нажми меня!!</button>
    </div>);
  }

}

export default App;