import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/11357244?s=460&u=c232d975a857dbbef4048695540ecd22400b9a75&v=4"
          alt="Welder Rodrigues"
        />
        <div>
          <strong>Welder Rodrigues</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de programação com foco na stack
        Javascript.
        <br />
        <br />
        Apaixonado por criar telas e coisas uteis para todos.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$100.00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
