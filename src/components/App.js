import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Boxe from "../components/Boxe";
import Methodsquare from "../components/Square";
import Text from "../components/text";
import Api from "../components/Api";
import WindonTracker from "../components/WindonTracker";
import Classinged from "../components/Classing";

export default function App() {
  const [user, setUser] = React.useState("Ademola");
  const [Squares, setsquares] = React.useState(Boxe);

  // Method 1
  //const SquaresElemeent = Squares.map((scource) => (
  //   <Methodsquare on={scource.on} />
  // ));
  //method 2

  function eventVlick(id) {
    setsquares(
      //method 1
      (prevsetsquares) => {
        return prevsetsquares.map((Squarestwo) => {
          return Squarestwo.id === id
            ? { ...Squarestwo, on: !Squarestwo.on }
            : Squarestwo;
        });
      }
      //method 2
      // setsquares((prevsetsquares) => {
      //   const newsquare = [];
      //   for (let i = 0; i < prevsetsquares.length; i++) {
      //     const currentsuqare = prevsetsquares[i];
      //     if (currentsuqare.id === id) {
      //       const Updatesquare = {
      //         ...currentsuqare,
      //         on: !currentsuqare.on,
      //       };
      //       newsquare.push(Updatesquare);
      //     } else {
      //       newsquare.push(currentsuqare);
      //     }
      //   }
      //   return newsquare;
      //}
    );
  }
  const SquaresElemeent = Squares.map((scource) => (
    <Methodsquare
      key={scource.id}
      //  id={scource.id}
      on={scource.on}
      toggleclick={() => eventVlick(scource.id)}
    />
  ));

  return (
    <div>
      <Api />
      <WindonTracker />
      <Text />
      <Header name={user} />
      <Body name={user} />
      <h1>Boxes will go here</h1>
      {SquaresElemeent}
    </div>
  );
}
