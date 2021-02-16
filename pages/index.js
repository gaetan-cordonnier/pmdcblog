import Prismic from "prismic-javascript";
import Head from "next/head";
import { Reset } from "styled-reset";
import Layout from "../layout";
import { Category, Card } from "../styles/style.js";
import { RichText, Date } from "prismic-reactjs";
import { client } from "../prismic-configuration";
import { CpForm } from "../components/cpForm";

export default function Blog({ posts }) {
  
  const urbanPost = posts.results
    .filter((infoPost) => infoPost.data.category.slug === "urbanisme")
    .slice(0, 3);

  const amenagementPost = posts.results
    .filter((infoPost) => infoPost.data.category.slug === "amenagement")
    .slice(0, 3);
  
  return (
    <>
      <Reset />
      <Head>
        <title>Permettez-moi de construire</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Category>
          {urbanPost.map((dataPost, index) => (
            <Card key={dataPost.uid}>
              <h4>{RichText.render(dataPost.data.title)}</h4>
              <img src={dataPost.data.coverimage.url} alt="img" />
              <time>{Date(dataPost.data.date).toString()}</time>
            </Card>
          ))}
        </Category>
        <Category>
          {amenagementPost.map((dataPost, index) => (
            <Card key={dataPost.uid}>
              <h4>{RichText.render(dataPost.data.title)}</h4>
              <img src={dataPost.data.coverimage.url} alt="img" />
              <time>{Date(dataPost.data.date).toString()}</time>
            </Card>
          ))}
        </Category>
        <aside>
          <CpForm />
        </aside>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "post"),
    { orderings: "[my.post.date desc]" }
  );
  return { props: { posts } };
}
