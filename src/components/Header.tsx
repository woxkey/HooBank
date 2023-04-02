import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../images/logo.svg';
import Burger from './Burger';

const links: string[] = ['Home', 'About Us', 'Features', 'Solution'];

const Header: React.FunctionComponent = (): React.ReactElement => {
	return (
		<div className="flex justify-between items-center pt-[30px]">
			<div className="flex items-center cursor-pointer">
				<img src={Logo} alt="#" />
				<h2 className="text-lg/[23.4px] text-white pl-1">
					Hoo<span className="text-[#5CE1E6]">Bank</span>
				</h2>
			</div>
			<div className="lg:flex hidden gap-14">
				{links.map((link: string, idx: number) => {
					return (
						<NavLink
							key={idx}
							className="text-white/70 text-base/[20.8px] hover:text-white"
							to={link}
						>
							{link}
						</NavLink>
					);
				})}
			</div>
		</div>
	);
};

export default Header;
