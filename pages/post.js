import React from "react";
import Link from "next/link";
import { RichText, Date } from "prismic-reactjs";
import { client } from "../prismic-configuration";

const Post = ({ post }) => (
	<div>
		<Link href="/">
			<a>Retour</a>
		</Link>
		{RichText.render(post.data.title)}
		<span>{Date(post.data.date).toString()}</span>
		{RichText.render(post.data.content)}
	</div>
);

export async function getServerSideProps({ query }) {
	const post = await client.getByUID("post", query.uid);

	return { props: { post } };
}

export default Post;
