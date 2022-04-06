import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome NASSCOM deep mentoring session - hosting static website on AWS
        </p>
        <a
          className="App-link"
          href="https://aws.amazon.com/getting-started/hands-on/host-static-website/?pg=gs&sec=lyfa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn AWS - Hosting web application using AWS Amplify
        </a>
      </header>
    </div>
  );
}

export default App;
