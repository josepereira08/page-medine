import React from 'react';
import imagenButton from './assets/images/botton-play.png';


function SectionPresentacion() {
  return (
      <section className="section presentation">
        <div>
          <h1 className="presentation-title">Bienvenidos a menide</h1>
          <p className="presentation-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</p>
          <button><img src={imagenButton} /></button>
        </div>
      </section>
  );
}

export default SectionPresentacion;
