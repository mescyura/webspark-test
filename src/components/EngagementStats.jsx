function HeartIcon({ color }) {
	return (
		<svg
			width='14'
			height='14'
			viewBox='0 0 14 14'
			fill='none'
			aria-hidden='true'
		>
			<path
				d='M7 12.5C7 12.5 1.5 8.5 1.5 5C1.5 3.2 2.9 1.8 4.7 1.8C5.8 1.8 6.8 2.3 7 3.1C7.2 2.3 8.2 1.8 9.3 1.8C11.1 1.8 12.5 3.2 12.5 5C12.5 8.5 7 12.5 7 12.5Z'
				fill={color}
			/>
		</svg>
	);
}

function CommentIcon({ color }) {
	return (
		<svg
			width='14'
			height='14'
			viewBox='0 0 14 14'
			fill='none'
			aria-hidden='true'
		>
			<path
				d='M2 2H12C12.55 2 13 2.45 13 3V9C13 9.55 12.55 10 12 10H5L2 13V3C2 2.45 2.45 2 3 2Z'
				fill={color}
			/>
		</svg>
	);
}

export default function EngagementStats({
	title,
	AllLikes,
	AllComments,
	direction = 'row',
}) {
	const directionClass = direction === 'row' ? 'flex-row' : 'flex-col';

	return (
		<div className={`flex flex-col items-start gap-3`}>
			<p className='text-base font-semibold text-gray-900'>{title}</p>

			<div className={`flex ${directionClass} gap-2 text-sm`}>
				<span className='flex items-center gap-1.5'>
					<HeartIcon color='black' />
					{AllLikes}
				</span>

				<span className='flex items-center gap-1.5'>
					<CommentIcon color='black' />
					{AllComments}
				</span>
			</div>
		</div>
	);
}
