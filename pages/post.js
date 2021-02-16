import React from "react";
import Link from "next/link";
import { RichText, Date } from "prismic-reactjs";
import { client } from "../prismic-configuration";

export default function Post({ post }) {
  return (
    <div>
      {RichText.render(post.data.title)}
      <span>{Date(post.data.date).toString()}</span>
      {RichText.render(post.data.content)}
      <Link href="/">
        <a>Retour</a>
      </Link>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const post = await client.getByUID("post", query.uid);
  console.log(query);
  return { props: { post } };
}
