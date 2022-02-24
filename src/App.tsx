import React from 'react';
import Header from './Header';
import SectionPresentacion from "./SectionPresentation";

export default
function App(): JSX.Element {
  return (
      <>
          <Header />
          <main className="M-main">
            <SectionPresentacion />
          </main>
      </>

  );
}


