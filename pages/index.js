import Prismic from "prismic-javascript";
import Head from "next/head";
import Link from "next/link";
import { Reset } from "styled-reset";
import Layout from "../layout";
import { Category, Card } from "../styles/style.js";
import { RichText, Date } from "prismic-reactjs";
import { client, linkResolver, hrefResolver } from "../prismic-configuration";
import { CpForm } from "../components/cpForm";

export default function Blog({ category, posts }) {
	console.log(category);
	console.log(posts);

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
					{/* <img src={category.data.image.url} alt="avatar image" /> */}
					{/* <h1>{RichText.asText(category.data.headline)}</h1>
			<p>{RichText.asText(category.data.content)}</p> */}
					<Card>
						<ul>
							{posts.results.map((post) => (
								<li key={post.uid}>
									{RichText.render(post.data.title)}
									<Link
										href={hrefResolver(post)}
										as={linkResolver(post)}
										passHref
									>
										<a>{RichText.render(post.data.title)}</a>
										{/* <img src={post.data.href} alt="image" /> */}
									</Link>
									<span>{Date(post.data.date).toString()}</span>
								</li>
							))}
						</ul>
					</Card>
				</Category>
				<Category>
					{/* <img src={category.data.image.url} alt="avatar image" /> */}
					{/* <h1>{RichText.asText(category.data.headline)}</h1>
			<p>{RichText.asText(category.data.content)}</p> */}
					<Card>
						<ul>
							{posts.results.map((post) => (
								<li key={post.uid}>
									{RichText.render(post.data.title)}
									<Link
										href={hrefResolver(post)}
										as={linkResolver(post)}
										passHref
									>
										<a>{RichText.render(post.data.title)}</a>
										{/* <img src={post.data.href} alt="image" /> */}
									</Link>
									<span>{Date(post.data.date).toString()}</span>
								</li>
							))}
						</ul>
					</Card>
				</Category>
				<aside>
					<CpForm />
				</aside>
			</Layout>
		</>
	);
}

export async function getServerSideProps() {
	const category = await client.getSingle("category");
	const posts = await client.query(
		Prismic.Predicates.at("document.type", "post"),
		{ orderings: "[my.post.date desc]" }
	);

	return { props: { category, posts } };
}
