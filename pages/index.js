import React from "react";
import Head from "next/head";

{
  /* <img src="/static/my-image.png" alt="my image" /> */
}

const Index = () => {
  return (
    <div className="container">
      <Head>
        <title>Dentální hygiena - Eva Zvánovcová</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Dentální Hygiena - Eva Zvánovcová</h1>
      <img width="220" height="220" src="/static/photo.png" />
      <p>Vzdělání</p>
      <ul>
        <li>
          2011 – 2014 – Studium na 3. LF v Praze, Obor Dentální hygienistka
        </li>
      </ul>
      <p>Kurzy a školení</p>
      <ul>
        <li>2017 – Neodkladná resuscitace a urgentní stavy</li>
        <li>2017 – Praktická parodontologie</li>
        <li>
          2016 – Kurz Dětský a dospělý pacient v ordinaci dentální hygienistky
        </li>
      </ul>
      <p>Profesní zkušenosti</p>
      <ul>
        <li>
          2017 – současnost –{" "}
          <a href="https://www.cdc-klinika.cz/">CDC zubní klinika Praha</a>
        </li>
        <li>2014 – současnost – Soukromá ordinace Mudr. Jana Jurči</li>
        <li>2014 – 2017 – Smille dental clinic</li>
      </ul>
      <p>Kontakt</p>
      <ul>
        <li>zvanovcova.eva@gmail.com</li>
      </ul>
      <style jsx>{`
        .container {
          max-width: 600px;
          width: 100%;
          margin: auto;
          padding: 16px;
        }
        img {
          max-width: 100%;
        }
        p,
        h1,
        li {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        }
        h1 {
          font-size: 32px;
          line-height: 140%;
        }
        p {
          font-size: 20px;
          line-height: 140%;
        }
        li {
          font-size: 16px;
          line-height: 140%;
        }
      `}</style>
      {/* https://necolas.github.io/normalize.css/8.0.1/normalize.css */}
      <style global jsx>{`
        body {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default Index;
