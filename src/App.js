import logo from "./logo.svg";
import "./App.css";
import YoutubeEmbedder from "./components/YoutubeEmbedder";

function App() {
  const embedIDs = [
    "jjAQ5bv5UOY",
    "-ERFwSSqg1Y",
    "GnTVDMjXDoM",
    "dGwbIjhDhOE",
    "0vf8Ew1KoF4",
    "hRLvvb2w1fg",
  ];
  return (
    <>
      <h1 className="text-2xl text-center mt-10">
        <em>
          <strong> Just give me peace.</strong>
        </em>
      </h1>
      <div className="container p-5 mt-10 mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {embedIDs.map((embedID) => (
            <div className="my-3" key={embedID}>
              <YoutubeEmbedder embedID={embedID} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
