import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../images/logo.svg';

const Header: React.FunctionComponent = (): React.ReactElement => {
	return (
		<div className="flex justify-between items-center pt-[30px]">
			<div className="flex items-center cursor-pointer">
				<img src={Logo} alt="#" />
				<h2 className="text-lg/[23.4px] text-white pl-1">
					Hoo<span className="text-[#5CE1E6]">Bank</span>
				</h2>
			</div>
			<div className="flex gap-14">
				<NavLink
					className="text-white/70 text-base/[20.8px] hover:text-white"
					to={'/'}
				>
					Home
				</NavLink>
				<NavLink
					className="text-white/70 text-base/[20.8px] hover:text-white"
					to={'#'}
				>
					About Us
				</NavLink>
				<NavLink
					className="text-white/70 text-base/[20.8px] hover:text-white"
					to={'#'}
				>
					Features
				</NavLink>
				<NavLink
					className="text-white/70 text-base/[20.8px] hover:text-white"
					to={'#'}
				>
					Solution
				</NavLink>
			</div>
		</div>
	);
};

export default Header;
