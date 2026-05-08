import "./Projects.css";
import kasaImg from "../assets/kasa.webp";
import bookiImg from "../assets/booki.webp";
import reactLogo from "../assets/react.webp";
import htmlLogo from "../assets/html.webp";
import cssLogo from "../assets/css.webp";

function Projects() {
  return (
    <main className="projects">

      <section className="projects-hero">
        <h1>Mes Projets</h1>

        <p>
          Découvrez une sélection de projets réalisés durant ma formation
          d’intégrateur web. Ces réalisations mettent en avant mes compétences
          en développement front-end, responsive design et création
          d’interfaces modernes.
        </p>
      </section>

      <section className="project-card">
        <div className="project-image">
          <img
            src={kasaImg}
            alt="Application Kasa React"
          />
        </div>

        <div className="project-content">
          <h2>Kasa - Application de location immobilière</h2>
          <p>
            Développement d’une application web de location immobilière
            moderne avec React pour une entreprise fictive spécialisée
            dans la réservation de logements.
          </p>

          <h3>Contexte et enjeux</h3>

          <p>
            L’objectif du projet était de moderniser l’interface de la plateforme
            Kasa afin d’améliorer l’expérience utilisateur et la navigation.
          </p>

          <h3>Objectifs</h3>

          <ul>
            <li>Créer une SPA moderne avec React</li>
            <li>Mettre en place un routing dynamique</li>
            <li>Créer des composants réutilisables</li>
            <li>Rendre l’application responsive</li>
          </ul>

          <h3>Stack technique</h3>
          <div className="tech-stack">
            <img src={reactLogo} alt="React logo" />
            <img src={cssLogo} alt="CSS logo" />
          </div>

          <h3>Compétences développées</h3>
          <p>
            Développement React, gestion des composants,
            React Router, animations CSS et responsive design.
          </p>

          <h3>Résultats et impact</h3>
          <p>
            Création d’une application fluide, moderne et optimisée
            pour mobile et desktop.
          </p>

          <h3>Perspectives d’amélioration</h3>
          <p>
            Ajouter une gestion d’état globale avec Redux Toolkit
            et connecter l’application à une API backend.
          </p>

          <a
            href="https://github.com/karouna87/Cr-ez-une-application-web-de-location-immobili-re-avec-React"
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            Voir le repository GitHub
          </a>
        </div>
      </section>

      <section className="project-card">
        <div className="project-image">
          <img
            src={bookiImg}
            alt="Projet Booki HTML CSS"
          />
        </div>

        <div className="project-content">

          <h2>Booki - Page d’accueil d’une agence de voyage</h2>
          <p>
            Intégration complète de la page d’accueil d’une agence
            de voyage en HTML et CSS à partir d’une maquette Figma.
          </p>

          <h3>Contexte et enjeux</h3>
          <p>
            Le projet visait à reproduire fidèlement une interface moderne
            tout en respectant les bonnes pratiques d’intégration web.
          </p>

          <h3>Objectifs</h3>
          <ul>
            <li>Intégrer une maquette responsive</li>
            <li>Respecter la sémantique HTML</li>
            <li>Optimiser l’accessibilité</li>
            <li>Créer un design adaptable mobile/tablette</li>
          </ul>

          <h3>Stack technique</h3>
          <div className="tech-stack">
            <img src={htmlLogo} alt="HTML logo" />
            <img src={cssLogo} alt="CSS logo" />
          </div>

          <h3>Compétences développées</h3>
          <p>
            HTML sémantique, Flexbox, responsive design,
            optimisation CSS et intégration pixel perfect.
          </p>

          <h3>Résultats et impact</h3>
          <p>
            Réalisation d’une interface responsive fidèle à la maquette
            et optimisée pour différents appareils.
          </p>

          <h3>Perspectives d’amélioration</h3>
          <p>
            Ajouter des animations modernes et une version dynamique
            avec JavaScript ou React.
          </p>

          <a
            href="http://127.0.0.1:5500/index.html"
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            Voir la page développée
          </a>
        </div>
      </section>

      <section className="career-section">
        <h2>Projection et ambitions</h2>
        <p>
          Mon objectif est d’intégrer une équipe dynamique et innovante
          afin de participer au développement d’applications web modernes
          et performantes.
        </p>

        <p>
          Je souhaite continuer à développer mes compétences en React,
          Redux Toolkit, accessibilité web et gestion de projet
          tout en travaillant sur des solutions évolutives et centrées
          sur l’expérience utilisateur.
        </p>
      </section>
    </main>
  );
}

export default Projects;