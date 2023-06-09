import React from 'react';
import started from '../images/started.svg';
import hand from '../images/hand.png';

const Hand: React.FunctionComponent = (): React.ReactElement => {
	return (
		<div className=" relative">
			<div className="pt-[187px] md:block flex flex-col items-center">
				<p className=" w-[408px] h-10 before:content-discount bg-gradient-to-r from-[#272727] to-[#11101D]  text-white/60 text-lg/[27px] flex items-center before:pt-2 before:pr-3 before:pl-3 rounded-[10px]">
					<span className="text-white">20%&nbsp;</span> DISCOUNT FOR&nbsp;
					<span className="text-white">1 MONTH&nbsp;</span> ACCOUNT
				</p>
				<div className="relative max-w-[669px] min-h-[303px] mt-12">
					<h1 className="text-6xl/[80px] text-center md:text-start sm:text-7xl/[101px]  font-semibold">
						The Next <span className="gradient">Generation</span> Payment
						Method.
					</h1>
					<img
						className="lg:block hidden absolute top-3 right-[60.41px] cursor-pointer"
						src={started}
						alt="#"
					/>
				</div>
				<p className="text-center md:text-start pt-10 pb-[143px] max-w-[483px] h-[93px] opacity-70 text-lg/[30.6px]">
					Our team of experts uses a methodology to identify the credit cards
					most likely to fit your needs. We examine annual percentage rates,
					annual fees.
				</p>
			</div>
			<img
				src={hand}
				className="xl:block hidden w-[669px] h-[674px] float-right absolute top-[127px] right-0"
				alt="#"
			/>
		</div>
	);
};

export default Hand;
