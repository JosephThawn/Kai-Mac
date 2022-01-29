class App extends React.Component {
  
    constructor(props){
      super(props);
      this.state = {
        bootcampName: "Nucamp"
      };
    }
    
    render() {
      return(
        <div>
          <Welcome bootcampName={this.state.bootcampName}/>
        </div>
      ) 
    }
  }
  
  function Welcome(props) {
    return (
      <h1>Welcome to {props.bootcampName}!</h1>
      )
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));