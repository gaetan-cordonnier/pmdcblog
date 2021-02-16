import Link from "next/link";
import { Body, Header, Title, Main, Footer } from "../styles/style.js";

export default function Layout({ children }) {
  return (
    <Body>
      <Header>
        <Title>
          <h1>Le Blog</h1>
          <Link href="/">
            <img src="../static/logo-full-color.png" alt="logo" />
          </Link>
        </Title>
        <nav>
          <ul>
            {["Aménagement", "Urbanisme"].map((item) => (
              <li key="{item}">{item}</li>
            ))}
          </ul>
        </nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <p>
          &copy;&nbsp; {new Date().getFullYear()} Permettez moi de construire -
          Fait avec ♡ à Lille
        </p>
      </Footer>
    </Body>
  );
}
