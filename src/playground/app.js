console.log('App.js is running');


///Parent Class
class DelivApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
        options: []
      };
    }
    componentDidMount() {
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
  
        if (options) {
          this.setState(() => ({ options }));
        }
      } catch (e) {
        // Do nothing at all
      }
    }
    componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
    componentWillUnmount() {
      console.log('componentWillUnmount');
    }
    handleDeleteOptions() {
      this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
      }));
    }
    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }
    handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
  
      this.setState((prevState) => ({
        options: prevState.options.concat(option)
      }));
    }
    render() {
      const subtitle = 'Restaurant Food App';
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
      );
    }
  }
  
  const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
  };
  
  Header.defaultProps = {
    title: 'Deliv'
  };
  
  const Action = (props) => {
    return (
      <div>
        <button
          onClick={props.handlePick}
          disabled={!props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  };
  
  const Options = (props) => {
    return (
      <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {
          props.options.map((option) => (
            <Option
              key={option}
              optionText={option}
              handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }
      </div>
    );
  };
  
  const Option = (props) => {
    return (
      <div>
        {props.optionText}
        <button
          onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}
        >
          remove
        </button>
      </div>
    );
  };
  
  class AddOption extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      };
    }
    handleAddOption(e) {
      e.preventDefault();
  
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
  
      this.setState(() => ({ error }));
  
      if (!error) {
        e.target.elements.option.value = '';
      }
    }
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
        </div>
      );
    }
  }
  
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));




//JSX - JavaScript XML

// const app = {
//     title: 'Deliv',
//     subtitle: 'Restaurant Food App',
//     options: []
// };

// const onFormSubmit = (e) => {
//     e.preventDefault();

//     const option = e.target.elements.option.value;

//     if (option) {
//         app.options.push(option);
//         e.target.elements.option.value = ' ';
//         render();
//     }
// };

// const onRemoveAll = () => {
//     app.options = [];
//     render();
// };

// const onMakeDecision = () => {
//     const randomNum = Math.floor(Math.random() * app.options.length);
//     const option= app.options[randomNum]; 
//     alert(option);
// }
// const appRoot = document.getElementById('app');

// const render = () => {
// const template = (
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
//         <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//         <button disabled={app.options.length === 0} onClick={onMakeDecision}> What should I do?</button>
//         <button onCLick={onRemoveAll}>Remove All</button>
//         <ol>
//            {app.options.map((option) => <li key = {option}> {option}</li>)}
//         </ol>
        
     
//         <form onSubmit={onFormSubmit}>
//             <input type='text' name='option'/>
//             <button>Add option</button>
//         </form>

//     </div>
//     );
    

//         ReactDOM.render(template, appRoot); 
//     };

//     render();

    // const user= {
    //     userId: 1,
    //     userName: 'John',
    //     password: 'David123',
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     email: 'johndoe@gmail',
    //     phone: 73212345678
    // };

    // function getuserName(userName) {
    //     if(userName) {
    //         return <p>Username: {user.userName}</p>
    //     }
    // }
    // const templateTwo =(
    //     <div>
    //         <h1>{user.userName ? user.userName: 'Anonmous'}</h1>
    //         {(user.userId && user.userId >=0) && <p>Id: {user.userId}</p>}
    //         {getuserName(user.userName)}
    //     </div>
    // )
    // const templateThree = (
    //     <div>
    //         <h1>User Info</h1>
    //         <p> Username: {user.userName}</p>
    //         <p> Password: {user.password}</p>
    //         <p> First Name: {user.firstName} </p>
    //         <p> Last Name: {user.lastName} </p>
    //         <p> Email: {user.email} </p>
    //         <p> Phone#: {user.phone} </p>
    //     </div>
    // );

//-------------------Use Count---------------
// let count = 0;
// const add = () => {
//     count++;
//     renderCounterApp();
// };
// const deleted = () => {
//     count--;
//     renderCounterApp();
// };
// const undo = () => {
//     count = 0;
//     renderCounterApp();
// };

// const renderCounterApp = () => {
//     const templateOne = (
//     <div>
//         <h1>User Count: {count}</h1>
//         <button onClick={add}>Add User</button>
//         <button onClick={deleted}>Delete User</button>
//         <button onClick={undo}>Undo</button>


//     </div>
//     )
//     }

