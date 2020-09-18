import React from "react";
import "./App.css";
import FontsHeader from "./components/FontsHeader";
import Footer from "./components/Footer";

const App = () => {
  const [Fonts, setFonts] = React.useState([]);
  fetch(
    "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyD0GW5XCnhEle3sT98BNnGsV4jAfqO0920&sort=date"
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("qqch ne va pas");
    })
    .then((result) => {
      setFonts(result.items.slice(0, 10));
      console.log(result.items.slice(0, 10));
    })
    .catch((error) => console.log(error.message), []);

  return (
    <>
      <FontsHeader>
        <h1 className="display-1">Quoi de neuf, Google Fonts™ ?</h1>
        <p className="tagline h4">
          Les plus récentes, les plus trendy et les plus populaires polices
          Google.
        </p>
      </FontsHeader>
      <main>
        <div className="container min-vh-100">
          <div className="row my-5">
            <h1>Notre dernier article</h1>
            <h2 className="badge bg-danger">Les plus récentes</h2>
            {Fonts.map((el) => {
              return (
                <article key={el.family} className="card col-lg-6 mb-3 shadow">
                  <h2 className="h5"> Nom de la police:{el.family}</h2>
                  <p>
                    <b>catégorie</b> - {el.category}
                  </p>
                  <p>nombres de variantes: {el.variants.length}</p>
                </article>
              );
            })}
          </div>
        </div>
      </main>
      )
      <Footer />
    </>
  );
};

export default App;
