import { links } from './Footer.data';
import classes from './Footer.module.scss';
import { FooterLink } from './FooterLink';

export const Footer = () => {
	const LinkListItems = links.map((link) => (
		<FooterLink key={link.id} link={link.url} name={link.name} />
	));

	return (
		<footer className={classes.root}>
			<nav>
				<ul className={classes.list}>{LinkListItems}</ul>
			</nav>
		</footer>
	);
};
