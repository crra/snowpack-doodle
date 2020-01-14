/** @jsx h */
/** @jsxFrag Fragment */
import { h, render, Fragment } from "preact";
import { Link, Route, Switch, useRoute } from "wouter/preact/index";

const ActiveLink = props => {
	const [isActive] = useRoute(props.href);
	return (
		<Link {...props}>
			<a className={isActive ? "active" : ""}>{props.children}</a>
		</Link>
	);
};

const HomePage = () => <h2>Home Page</h2>;
const AboutPage = () => <h2>About Page</h2>;
const NotFoundPage = () => <h2>Sorry, this page does not exist</h2>;

const App = (
	<Fragment>
		<header>
			<h1>header</h1>
		</header>
		<nav>
			<h2>nav</h2>
			<ul>
				<li>
					<ActiveLink href="/">Home</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/about">About</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/404">Invalid link</ActiveLink>
				</li>
			</ul>
		</nav>
		<main>
			<h1>main</h1>
			<Switch>
				<Route path="/">
					<HomePage />
				</Route>
				<Route path="/about">
					<AboutPage />
				</Route>
				<Route path="/:rest*">
					<NotFoundPage />
				</Route>
			</Switch>
		</main>
		<footer>
			<h2>footer</h2>
		</footer>
	</Fragment>
);

render(App, document.getElementById("app"));
