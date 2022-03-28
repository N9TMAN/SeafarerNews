import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/Styles";
import { BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="app">
          <Header />
          <Main postsData={props.postsData} dialogsData={props.dialogsData} messagesData={props.messagesData}/>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
