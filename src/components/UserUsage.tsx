import React from 'react';

const UserUsage: React.FunctionComponent = (): React.ReactElement => {
	return (
		<div className="flex pt-[99px] justify-between items-center px-10">
			<div className="flex items-center">
				<p className="text-white  text-[40px]/[53px] max-w-[158px]">3800+</p>
				<p className="gradient uppercase text-[25px]/7 ml-[25px] ">
					User Active
				</p>
			</div>
			<div className="flex items-center">
				<p className="text-white  text-[40px]/[53px] max-w-[158px]">230+</p>
				<p className="gradient uppercase text-[25px]/7 ml-[25px]">
					TRUSTED BY COMPANY
				</p>
			</div>
			<div className="flex items-center">
				<p className="text-white text-[40px]/[53px] max-w-[158px]">$230M+</p>
				<p className="gradient uppercase text-[25px]/7 ml-[25px]">
					TRANSACTION
				</p>
			</div>
		</div>
	);
};

export default UserUsage;
