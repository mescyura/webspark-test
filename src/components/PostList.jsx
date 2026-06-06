import PostCard from './PostCard';
import PostGridCard from './PostGridCard';

export default function PostList({ posts, loading, view = 'list' }) {
	if (loading && posts.length === 0) {
		return (
			<div className='flex items-center justify-center py-16 text-sm text-gray-400'>
				Loading...
			</div>
		);
	}

	if (!loading && posts.length === 0) {
		return (
			<div className='mt-5 flex flex-col items-center justify-center py-20 rounded-xl border-2 border-dashed border-gray-200 bg-white p-8 text-center'>
				<h3 className='text-sm font-semibold text-gray-700'>No posts found</h3>
				<p className='mt-1 text-xs text-gray-400 max-w-xs'>
					There are no posts uploaded within the selected date range. Try
					choosing other dates.
				</p>
			</div>
		);
	}

	if (view === 'grid') {
		return (
			<div
				key='grid-view'
				className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
			>
				{posts.map(post => (
					<PostGridCard key={post.id} post={post} />
				))}
			</div>
		);
	}

	return (
		<div key='list-view' className='flex flex-col gap-2'>
			{posts.map((post, index) => (
				<PostCard key={post.id} post={post} index={index} />
			))}
		</div>
	);
}
