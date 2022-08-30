import { ReactNode } from 'react';
import classes from './WindowLayout.module.scss';

type Props = {
	children: ReactNode;
};
export const WindowLayout = ({ children }: Props) => {
	return <div className={classes.root}>{children}</div>;
};
