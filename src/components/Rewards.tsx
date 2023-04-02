import React from 'react';
import star from '../images/star.svg';
import check from '../images/check.svg';
import telegram from '../images/telegram.svg';

const Rewards: React.FunctionComponent = (): React.ReactElement => {
	return (
		<div className="pt-[180px] flex justify-between pb-[178px]">
			<div className="flex flex-col pr-20">
				<h2 className="font-semibold text-5xl/[77px] max-w-[622px] tracking-[0.01em] pb-6">
					You do the business, we’ll handle the money.
				</h2>
				<p className="text-lg/[31px] w-[570px] opacity-70 text-[rgba(255, 255, 255, 0.7);] tracking-[0.01em] pb-12">
					With the right credit card, you can improve your financial life by
					building credit, earning rewards and saving money. But with hundreds
					of credit cards on the market.
				</p>
				<button className="self-start text-[#00040E] text-lg/[27px] px-8 py-5 font-medium rounded-[10px] bgButton">
					Get Started
				</button>
			</div>
			<div className="flex flex-col">
				<div className="flex max-w-[470px] h-[115px] items-center">
					<img className="w-16 h-16" src={star} alt="#" />
					<div className="pl-5">
						<h3 className="text-lg/[23px] tracking-[0.01em] font-semibold pb-2">
							Rewards
						</h3>
						<p className="text-base/6 text-[rgba(255, 255, 255, 0.7)]">
							The best credit cards offer some tantalizing combinations of
							promotions and prizes
						</p>
					</div>
				</div>
				<div className="flex max-w-[470px] h-[115px] items-center">
					<img className="w-16 h-16" src={check} alt="#" />
					<div className="pl-5">
						<h3 className="text-lg/[23px] tracking-[0.01em] font-semibold pb-2">
							100% Secured
						</h3>
						<p className="text-base/6 text-[rgba(255, 255, 255, 0.7)]">
							We take proactive steps make sure your information and
							transactions are secure.
						</p>
					</div>
				</div>
				<div className="flex max-w-[470px] h-[115px] items-center">
					<img className="w-16 h-16" src={telegram} alt="#" />
					<div className="pl-5">
						<h3 className="text-lg/[23px] tracking-[0.01em] font-semibold pb-2">
							Balance Transfer
						</h3>
						<p className="text-base/6 text-[rgba(255, 255, 255, 0.7)]">
							A balance transfer credit card can save you a lot of money in
							interest charges.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rewards;
