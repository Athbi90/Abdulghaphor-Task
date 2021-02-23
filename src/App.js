import "./App.css";
import { ThemeProvider } from "styled-components";

import Home from "./components/Home";
import About from "./components/About";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { GlobalStyle, AppWrapper } from "./styles";

const theme = {
  mainColor: "#414066",
  backgroundColor: "#D8AA96",
  secondaryColor: "#E55381",
};
function App() {
  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Link to="/">Home</Link>
        <br></br>
        <Link to="/about"> About</Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </ThemeProvider>
    </AppWrapper>
  );
}

export default App;
