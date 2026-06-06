import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';

function CalendarIcon() {
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			aria-hidden='true'
		>
			<rect
				x='1'
				y='2'
				width='14'
				height='13'
				rx='1.5'
				stroke='#9ca3af'
				strokeWidth='1.2'
			/>
			<line x1='1' y1='6' x2='15' y2='6' stroke='#9ca3af' strokeWidth='1.2' />
			<line
				x1='5'
				y1='1'
				x2='5'
				y2='4'
				stroke='#9ca3af'
				strokeWidth='1.2'
				strokeLinecap='round'
			/>
			<line
				x1='11'
				y1='1'
				x2='11'
				y2='4'
				stroke='#9ca3af'
				strokeWidth='1.2'
				strokeLinecap='round'
			/>
		</svg>
	);
}

function ClearIcon() {
	return (
		<svg
			width='12'
			height='12'
			viewBox='0 0 12 12'
			fill='none'
			aria-hidden='true'
		>
			<line
				x1='2'
				y1='2'
				x2='10'
				y2='10'
				stroke='#9ca3af'
				strokeWidth='1.5'
				strokeLinecap='round'
			/>
			<line
				x1='10'
				y1='2'
				x2='2'
				y2='10'
				stroke='#9ca3af'
				strokeWidth='1.5'
				strokeLinecap='round'
			/>
		</svg>
	);
}

const CustomDateInput = forwardRef(function CustomDateInput(
	{ value, onClick, placeholder, onClear },
	ref,
) {
	return (
		<div
			onClick={onClick}
			className='flex h-[36px] w-full cursor-pointer items-center rounded border border-gray-300 bg-white px-3'
		>
			<input
				ref={ref} 
				readOnly
				value={value || ''} 
				placeholder={placeholder}
				className='flex-1 cursor-pointer bg-transparent text-sm text-gray-700 placeholder:text-gray-400 outline-none'
			/>
			{value && (
				<button
					type='button'
					onClick={e => {
						e.stopPropagation(); 
						onClear();
					}}
					className='mr-2 flex shrink-0 items-center justify-center cursor-pointer'
					aria-label='Clear date'
				>
					<ClearIcon />
				</button>
			)}
			<CalendarIcon />
		</div>
	);
});

function DateInput({ value, onChange, placeholder }) {
	return (
		<div className='relative w-[140px] sm:w-[160px]'>
			{' '}
			<DatePicker
				selected={value}
				onChange={onChange}
				dateFormat='dd_MM_yyyy'
				placeholderText={placeholder}
				showYearDropdown
				showMonthDropdown
				dropdownMode='select'
				yearDropdownItemNumber={15}
				// --- РІШЕННЯ ДЛЯ ЦЕНТРУВАННЯ ТА МОБІЛЬНИХ ---
				popperPlacement='bottom' // Спочатку позиціонуємо знизу
				popperClassName='custom-mobile-popper' // Наш клас для кастомних стилів (див. нижче)
				popperModifiers={[
					{
						name: 'preventOverflow',
						options: {
							boundary: 'viewport', // Не дає календарю виходити за межі екрана
							padding: 8, // Мінімальний відступ від краю екрана
						},
					},
					{
						name: 'offset',
						options: {
							offset: [0, 8], // Відступ [по горизонталі, по вертикалі] від інпуту
						},
					},
				]}
				// ------------------------------------------

				customInput={
					<CustomDateInput
						placeholder={placeholder}
						onClear={() => onChange(null)}
					/>
				}
			/>
		</div>
	);
}

export default function DateFilter({
	dateFrom,
	dateTo,
	onDateFromChange,
	onDateToChange,
}) {
	return (
		<div className='flex flex-wrap items-center gap-2 sm:gap-3'>
			<span className='text-sm text-gray-500 mr-1 sm:mr-0'>Date</span>
			<DateInput
				value={dateFrom}
				onChange={onDateFromChange}
				placeholder='from'
			/>
			<DateInput value={dateTo} onChange={onDateToChange} placeholder='to' />
		</div>
	);
}
