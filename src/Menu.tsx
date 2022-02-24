import React from 'react';

interface PropsType{
    dataMenu: object
}

function listMenu( list:object):object {
    let rows = [];
    let dataMenu1 = ['Inicio','Productos','Como trabajamos','Servicios','Contactos'];
    for (let li of dataMenu1) {
        rows.push(<li className="M-nav-item"><a className="M-nav-link active" href="#">{ li }</a></li>);
    }
    return rows;
}

export default
function Menu({ dataMenu }: PropsType): JSX.Element {
  return (
      <nav className="navbar M-nav" id="M-nav">
        <button className="M-navbar-toggler" id="M-navbar-toggler" type="button">
          <span className="M-navbar-icon"><i className="fa fa-navicon"></i></span>
        </button>
        <ul className="M-nav-menu ">
            { listMenu(dataMenu) }
        </ul>
      </nav>
  );
}


