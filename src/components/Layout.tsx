import React from 'react';
import {Outlet} from 'react-router';
import Header from './Header';

const Layout: React.FunctionComponent = (): React.ReactElement => {
	return (
		<div className="container  mx-auto  px-4">
			<Header />
			<Outlet />
		</div>
	);
};

export default Layout;
