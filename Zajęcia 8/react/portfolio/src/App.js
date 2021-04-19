import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App(obiekt) {
  let [isLight, setLight] = useState(false);
  let layout = "ciemny";
  if(isLight){ layout = "jasny"}
  return (
    <div className={"App " + layout}>
      <div class="button"><button onClick={()=>{
        setLight(!isLight)
      }}>ZMIEŃ TŁO</button>
      </div>
      <header>
        <h1>PORTFOLIO</h1>
        <nav>
          <a href="#"><div class="navi">Główna</div></a>
          <a href="#"><div class="navi">O mnie</div></a>
          <a href="#"><div class="navi">Projekty</div></a>
          <a href="#"><div class="navi">Kontakt</div></a>
        </nav>
      </header>
      <main>
        <article>
          <section class="img">
            <img src={obiekt.imgSRC}></img>
          </section>
          <section class="opis">
            <h2>{obiekt.name}</h2>
            <p>{
            obiekt.opis.length > 500 ? obiekt.opis.substring(0,500) + " czytaj więcej..." : obiekt.opis
            }</p>
          </section>
        </article>
      </main>
      {/* <button onClick={()=>{
        setLight(!isLight)
      }}>ZMIEŃ TŁO</button> */}
    </div>
  );
}

export default App;
