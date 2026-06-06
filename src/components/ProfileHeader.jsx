import Logo from './Logo';
import DateFilter from './DateFilter';

function formatNumber(num) {
	return num.toLocaleString('en-US');
}

function Skeleton({ className }) {
	return <div className={`animate-pulse rounded bg-gray-100 ${className}`} />;
}

export default function ProfileHeader({
	profile,
	dateFrom,
	dateTo,
	onDateFromChange,
	onDateToChange,
}) {
	return (
		<header className='border-b border-gray-200 px-4 sm:px-8 py-6 bg-[rgba(255,255,255,0.67)] shadow-[0_4px_24px_0_rgba(0,0,0,0.12),inset_0_12px_24px_0_rgba(0,0,0,0.12)] backdrop-blur-sm'>
			{profile ? (
				<div className='flex flex-col md:flex-row md:items-center gap-4 md:gap-6 max-w-[836px] mx-auto'>
					<Logo />

					<div className='w-full flex flex-col gap-4'>
						<div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4'>
							<h1 className='text-xl sm:text-2xl montserrat font-medium text-gray-900'>
								{profile.username}
							</h1>

							<span className='w-fit rounded border border-blue-400 px-3 py-1 text-xs text-blue-500'>
								Start on {profile.startDate}
							</span>
						</div>

						{/* stats */}
						<div className='roboto font-bold flex flex-col sm:flex-row sm:gap-6 gap-1 text-sm'>
							<span>
								{formatNumber(profile.posts)}{' '}
								<span className='font-normal'>posts</span>
							</span>
							<span>
								{formatNumber(profile.followers)}{' '}
								<span className='font-normal'>followers</span>
							</span>
							<span>
								{profile.following}{' '}
								<span className='font-normal'>following</span>
							</span>
						</div>

						<div className='relative z-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4'>
							<DateFilter
								dateFrom={dateFrom}
								dateTo={dateTo}
								onDateFromChange={onDateFromChange}
								onDateToChange={onDateToChange}
							/>
						</div>
					</div>
				</div>
			) : (
				<div className='flex flex-col md:flex-row md:items-center gap-4 md:gap-6 max-w-[836px] mx-auto'>
					<Logo />
					<div className='w-full flex flex-col gap-4'>
						<div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4'>
							<Skeleton className='h-6 w-40 sm:w-48' />
							<Skeleton className='h-6 w-28 rounded-md' />
						</div>
						<div className='flex flex-col sm:flex-row sm:gap-6 gap-2'>
							<Skeleton className='h-4 w-24' />
							<Skeleton className='h-4 w-28' />
							<Skeleton className='h-4 w-20' />
						</div>
						<div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
							<Skeleton className='h-9 w-full sm:w-36 rounded-lg' />
							<Skeleton className='h-9 w-full sm:w-36 rounded-lg' />
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
