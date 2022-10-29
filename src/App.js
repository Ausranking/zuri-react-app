import Header from "./components/Header";
import Button from "./components/Button";
import Footer from "./components/Footer";
import "./app.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Button
          text="Twitter Link"
          link="https://twitter.com/_kingaustinn"
          id="twitter"
        />
        <Button
          text="Zuri Team"
          link="https://training.zuri.team/"
          id="btn_zuri"
        />
        <Button text="Zuri Books" link="https://books.zuri.team/" id="books" />
        <Button
          text="Python Books"
          link="https://books.zuri.team/python-for-beginners? ref_id=Austin Nze"
          id="book_python"
        />
        <Button
          text="Background Checks For Codes"
          link="https://background.zuri.team/"
          id="pitch"
        />
        <Button
          text="Design Books"
          link="https://books.zuri.team/design-rules"
          id="book_design"
          // title="This is where you get all coding and design related books to help your coding journey"
        />
        <div className="social_links">
          <a href="https://slack.com/austin nze">
            <img src="images/slack.png" alt="slack logo" />
          </a>
          <a href="https://github.com/ausranking">
            <img src="images/Icon.png" alt="github logo" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
