import classes from './FooterLink.module.scss';

type Props = {
	link: string;
	name: string;
};

export const FooterLink = ({ link, name }: Props) => {
	return (
		<li>
			<a
				target='_blank'
				rel='noopener noreferrer'
				className={classes.link}
				href={link}
			>
				{name}
			</a>
		</li>
	);
};
