function GridIcon({ active }) {
	return (
		<svg
			width='22'
			height='22'
			viewBox='0 0 22 22'
			fill='none'
			className='pointer-events-none'
			aria-hidden='true'
		>
			<rect width='6' height='6' rx='1' fill={active ? '#3b82f6' : '#9ca3af'} />
			<rect
				x='8'
				y='16'
				width='6'
				height='6'
				rx='1'
				fill={active ? '#3b82f6' : '#9ca3af'}
			/>
			<rect
				x='16'
				y='8'
				width='6'
				height='6'
				rx='1'
				fill={active ? '#3b82f6' : '#9ca3af'}
			/>
			<rect
				x='16'
				y='16'
				width='6'
				height='6'
				rx='1'
				fill={active ? '#3b82f6' : '#9ca3af'}
			/>
			<rect
				x='8'
				width='6'
				height='6'
				rx='1'
				fill={active ? '#3b82f6' : '#9ca3af'}
			/>
			<rect
				x='16'
				width='6'
				height='6'
				rx='1'
				fill={active ? '#3b82f6' : '#9ca3af'}
			/>
			<rect
				y='8'
				width='6'
				height='6'
				rx='1'
				fill={active ? '#3b82f6' : '#9ca3af'}
			/>
			<rect
				y='16'
				width='6'
				height='6'
				rx='1'
				fill={active ? '#3b82f6' : '#9ca3af'}
			/>
			<rect
				x='8'
				y='8'
				width='6'
				height='6'
				rx='1'
				fill={active ? '#3b82f6' : '#9ca3af'}
			/>
		</svg>
	);
}

function ListIcon({ active }) {
	return (
		<svg
			width='24'
			height='22'
			viewBox='0 0 24 22'
			fill='none'
			className='pointer-events-none'
			aria-hidden='true'
		>
			<rect width='6' height='6' rx='1' fill={active ? '#3b82f6' : '#9ca3af'} />
			<rect
				y='8'
				width='6'
				height='6'
				rx='1'
				fill={active ? '#3b82f6' : '#9ca3af'}
			/>
			<rect
				y='16'
				width='6'
				height='6'
				rx='1'
				fill={active ? '#3b82f6' : '#9ca3af'}
			/>
			<rect
				x='9'
				y='10'
				width='15'
				height='2'
				rx='1'
				fill={active ? '#3b82f6' : '#9ca3af'}
			/>
			<rect
				x='9'
				y='18'
				width='15'
				height='2'
				rx='1'
				fill={active ? '#3b82f6' : '#9ca3af'}
			/>
			<rect
				x='9'
				y='2'
				width='15'
				height='2'
				rx='1'
				fill={active ? '#3b82f6' : '#9ca3af'}
			/>
		</svg>
	);
}

export default function ViewToggle({ view, onViewChange }) {
	return (
		<div className='p-5 flex items-center justify-end gap-3'>
			<button
				type='button'
				onClick={() => onViewChange('grid')}
				className='flex cursor-pointer items-center justify-center rounded p-1.5 hover:bg-gray-50'
				aria-label='Grid view'
				aria-pressed={view === 'grid'}
			>
				<GridIcon active={view === 'grid'} />
			</button>
			<button
				type='button'
				onClick={() => onViewChange('list')}
				className='flex cursor-pointer items-center justify-center rounded p-1.5 hover:bg-gray-50'
				aria-label='List view'
				aria-pressed={view === 'list'}
			>
				<ListIcon active={view === 'list'} />
			</button>
		</div>
	);
}
