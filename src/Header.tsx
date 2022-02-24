import React from 'react';
import Menu from './Menu';
import LogoType from "./LogoType";
import ButtonDarkMode from "./ButtonDarkMode";

let dataMenu = ['Inicio','Productos','Como trabajamos','Servicios','Contactos'];


export default
function Header(): JSX.Element {
  return (
    <header className="header bg-degrade-blue">
      <LogoType />
      <Menu dataMenu={dataMenu} />
      <ButtonDarkMode />
    </header>
  );
}


