import EngagementStats from './EngagementStats';

export default function PostCard({ post }) {
	return (
		<article className='flex items-center gap-2 sm:gap-6 bg-white shadow-sm'>
			<div className='shrink-0 max-w-[116px] max-h-[116px] sm:max-h-[86px] sm:max-w-[86px] overflow-hidden'>
				<img
					src={post.thumbnailUrl}
					alt=''
					className='h-full w-full object-cover aspect-square'
				/>
			</div>

			<div className='grid flex-1 grid-cols-2 sm:grid-cols-3 gap-4 p-2 sm:p-0'>
				<EngagementStats
					title={post.statusText}
					AllLikes={post.AllLikes}
					AllComments={post.AllComments}
				/>

				<EngagementStats
					title={post.updateStatsDate}
					AllLikes={post.likesOnUploadedDate}
					AllComments={post.commentsOnUploadedDate}
				/>

				<div className='flex items-center sm:items-start gap-3 mb-1 sm:mb-0 sm:flex-col col-span-2 sm:col-span-1'>
					<p className='text-base font-semibold text-gray-900'>
						{post.actionText}
					</p>
					<p className='text-sm text-gray-900'>{post.uploadedDate}</p>
				</div>
			</div>
		</article>
	);
}
