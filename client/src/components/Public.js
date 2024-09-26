import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to{" "}
          <span className="nowrap">Software Developer: Twana Khudhur</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Everywhere, Twana Khudhur fullStack developer provides
          website and System.
        </p>
        <address className="public__addr">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/twanakhudhur"
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/twanakhudhur
          </a>
          /<br />
          GitHub:{" "}
          <a
            href="https://github.com/twanakhudhur"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/twanakhudhur
          </a>
          /<br />
          <br />
          Email: <a href="mailto:tkhudhur97@gmail.com">
            tkhudhur97@gmail.com
          </a>{" "}
          <br />
        </address>
        <br />
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
