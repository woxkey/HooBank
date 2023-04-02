import React from 'react';

const Burger: React.FunctionComponent = (): React.ReactElement => {
	return (
		<div className="space-y-2">
			<div className="w-8 h-0.5 bg-gray-600">Home</div>
			<div className="w-8 h-0.5 bg-gray-600">About</div>
			<div className="w-8 h-0.5 bg-gray-600">Features</div>
			<div className="w-8 h-0.5 bg-gray-600">Solution</div>
		</div>
	);
};

export default Burger;
