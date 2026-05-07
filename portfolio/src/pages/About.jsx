import "./About.css";

function About() {
  return (
    <main className="about">

      <section className="about-hero">
        <h1>À propos</h1>

        <p>
          Passionné par le numérique et les nouvelles technologies,
          Kouotou Arouna est aujourd’hui intégrateur web diplômé après une
          reconversion professionnelle réussie dans le développement web.
        </p>
      </section>

      <section className="about-section">
        <h2>Parcours professionnel</h2>

        <p>
          Avant de me spécialiser dans le développement web,
          j'ai construit une solide expérience professionnelle dans le domaine
          de la comptabilité et de la gestion financière.
        </p>

        <p>
          J' ai exercé pendant trois années comme assistant comptable
          au sein d’un cabinet de fiduciaire, où je participais au suivi
          comptable, à la gestion administrative et à l’accompagnement
          des clients dans leurs opérations financières.
        </p>

        <p>
          J'ai ensuite poursuivi mon parcours durant une année dans le secteur
          du BTP en tant que comptable fournisseur et frais généraux,
          développant ainsi mon sens de l’organisation, de la rigueur
          et de l’analyse.
        </p>

        <p>
          Souhaitant évoluer vers un métier plus créatif et tourné vers
          les technologies numériques, j'ai entrepris une reconversion
          professionnelle et obtenu un diplôme niveau Bac+2 d’intégrateur web.
        </p>

        <p>
          Aujourd’hui, je conçoit des interfaces modernes, responsive
          et accessibles grâce à des technologies comme HTML, CSS,
          JavaScript, React et Redux toolkit.
        </p>
      </section>

      <section className="about-section">
        <h2>Compétences</h2>

        <div className="skills">

          <div className="skill-card">
            <h3>HTML5</h3>
            <p>
              Création de structures web sémantiques et optimisées SEO.
            </p>
          </div>

          <div className="skill-card">
            <h3>CSS3</h3>
            <p>
              Mise en page responsive, animations et design moderne.
            </p>
          </div>

          <div className="skill-card">
            <h3>JavaScript</h3>
            <p>
              Dynamisation des interfaces et interactions utilisateur.
            </p>
          </div>

          <div className="skill-card">
            <h3>React</h3>
            <p>
              Développement d’applications web modernes basées sur des composants.
            </p>
          </div>

          <div className="skill-card">
            <h3>Responsive Design</h3>
            <p>
              Adaptation des interfaces pour mobile, tablette et desktop.
            </p>
          </div>

          <div className="skill-card">
            <h3>SEO</h3>
            <p>
              Optimisation du référencement naturel et des performances web.
            </p>
          </div>

          <div className="skill-card">
            <h3>Redux Toolkit</h3>

            <p>
              Gestion avancée de l’état global dans les applications React
              grâce à Redux Toolkit pour une architecture performante
              et maintenable.
            </p>
          </div>

          <div className="skill-card">
            <h3>Gestion de projet</h3>

            <p>
              Réalisation de documents de spécifications techniques,
              configuration d’outils de veille technologique et suivi
              de projet avec des tableaux Kanban.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

export default About;