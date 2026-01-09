import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

function Main() {
	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [num1, setNum1] = useState(0);
	const [num2, setNum2] = useState(0);

	return (
		<main className='flex-none md:flex-1 bg-gray-100 flex items-center justify-center'>
			<div className='flex gap-30'>
				<div className="flex">
					<input
						type="number"
						value={num1}
						onChange={(e) => setNum1(e.target.num1)}
						className="no-spinner w-full rounded-l-md border pl-7 pr-3 py-2"
						placeholder="0.00"
					/>

					<div className='relative'>
						<button
							onClick={() => setOpen1(!open1)}
							className="flex items-center gap-2 rounded-r-md bg-blue-600 px-4 py-2 text-white h-full"
						>
							USD
							{!open1 ? <ChevronDownIcon className="size-6 text-white" /> : <ChevronUpIcon className="size-6 text-white" />}
						</button>

						{open1 && (
							<div className="absolute left-0 w-23.5 rounded-md rounded-tl-none bg-white shadow-lg">
								<button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
									PHP
								</button>
								<button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
									EUR
								</button>
							</div>
						)}
					</div>
				</div>

				<div className="relative flex">
					<input
						type="number"
						value={num2}
						onChange={(e) => setNum2(e.target.num2)}
						className="no-spinner w-full rounded-l-md border pl-7 pr-3 py-2"
						placeholder="0.00"
					/>
					<div className="relative">
						<button
							onClick={() => setOpen2(!open2)}
							className="flex items-center gap-2 rounded-r-md bg-blue-600 px-4 py-2 text-white h-full"
						>
							PHP
							{!open2 ? <ChevronDownIcon className="size-6 text-white" /> : <ChevronUpIcon className="size-6 text-white" />}
						</button>

						{open2 && (
							<div className="absolute left-0 w-23.5 rounded-md rounded-tl-none bg-white shadow-lg">
								<button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
									USD
								</button>
								<button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
									EUR
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	)
}

export default Main