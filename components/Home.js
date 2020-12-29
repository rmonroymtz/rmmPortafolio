const Home = () => {
    return(
        <article id="top" className="wrapper style1">
        <div className="container">
          <div className="row">
            <div className="col-4 col-5-large col-12-medium">
              <span className="image fit"><img src="/images/pic00.jpg" alt="" /></span>
            </div>
            <div className="col-8 col-7-large col-12-medium">
              <header>
                <h1><strong>Ricardo Monroy</strong>.</h1>
              </header>
              <p><strong>Desarrollador web</strong>, con 3 años de experiencia.
                    <br/>
                Continuamente aprendiendo y adquiriendo nuevas habilidades en función a las actuales y 
                futuras demandas y tendencias tecnológicas en el campo del diseño y desarrollo de 
                aplicaciones web en general.
                <br/>
                Apasionado con el trabajo que realizo, ofreciendo en cada proyecto total atención, 
                dedicación, personalización y calidad al cliente.
              </p>
              <a href="#work" className="button large scrolly">Conozca lo que hago</a>
            </div>
          </div>
        </div>
      </article>
    );
}

export default Home;