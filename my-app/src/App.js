import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/Styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App;
