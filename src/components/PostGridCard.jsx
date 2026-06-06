import EngagementStats from './EngagementStats';

export default function PostGridCard({ post }) {
	return (
		<article className='group overflow-hidden bg-white shadow-sm'>
			<div className='aspect-square overflow-hidden'>
				<img
					src={post.thumbnailUrl}
					alt=''
					className='h-full w-full object-cover transition-transform duration-200 group-hover:scale-105'
				/>
			</div>

			<div className='p-3 flex flex-col gap-2'>
				<div className='flex justify-between'>
					<EngagementStats
						title={post.statusText}
						AllLikes={post.AllLikes}
						AllComments={post.AllComments}
						direction='col'
					/>

					<EngagementStats
						title={post.updateStatsDate}
						AllLikes={post.likesOnUploadedDate}
						AllComments={post.commentsOnUploadedDate}
						direction='col'
					/>
				</div>
				<div className='flex items-center justify-between text-[14px] text-gray-900'>
					<p className='font-semibold'>{post.actionText}</p>
					<p className='text-[12px'>{post.uploadedDate}</p>
				</div>
			</div>
		</article>
	);
}
