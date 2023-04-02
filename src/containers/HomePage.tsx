import React from 'react';
import Hand from '../components/Hand';
import UserUsage from '../components/UserUsage';
import Rewards from '../components/Rewards';

const HomePage: React.FunctionComponent = (): React.ReactElement => {
	return (
		<>
			<Hand />
			<UserUsage />
			<Rewards />
		</>
	);
};

export default HomePage;
