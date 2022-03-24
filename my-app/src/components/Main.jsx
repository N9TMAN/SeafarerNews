import Navbar from './Navbar';
import Content from './Content'

// let headerStyleHeight = document.querySelector('.main');
// let root = document.querySelector('.app');

// console.log(root);

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <Navbar />
        <Content />
        Main
      </div>
    </main>
  )
}

export default Main;
