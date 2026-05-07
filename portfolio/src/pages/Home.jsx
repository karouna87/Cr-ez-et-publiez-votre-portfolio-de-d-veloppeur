import "./Home.css";
import profile from "../assets/profile.webp"; 

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <img src={profile} alt="Kouotou Arouna développeur web" className="profile-img" />

        <div className="hero-text">
          <h1>Kouotou Arouna</h1>
          <h2>Intégrateur Web diplômé</h2>

          <p>
            Je suis intégrateur web passionné, spécialisé dans la création
            d’interfaces modernes, performantes et accessibles. Après ma formation,
            je conçois des sites web responsive en HTML, CSS et React.
          </p>

          <a href="/projects" className="btn">Voir mes projets</a>
        </div>
      </section>
    </main>
  );
}

export default Home;