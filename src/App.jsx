import { useState, useEffect } from 'react';
import BackgroundBlobs from './components/BackgroundBlobs';
import ProfileHeader from './components/ProfileHeader';
import PostList from './components/PostList';
import { fetchProfile, fetchPosts } from './api/fetchPosts';
import ViewToggle from './components/ViewToggle';

export default function App() {
	const [profile, setProfile] = useState(null);
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(false);
	const [loading, setLoading] = useState(true);
	const [loadingMore, setLoadingMore] = useState(false);
	const [dateFrom, setDateFrom] = useState(null);
	const [dateTo, setDateTo] = useState(null);
	const [view, setView] = useState('list');

	useEffect(() => {
		fetchProfile().then(setProfile);
	}, []);

	useEffect(() => {
		setPosts([]);
		setLoading(true);
		setPage(1);
	}, [dateFrom, dateTo]);

	useEffect(() => {
		if (page === 1) {
			setLoading(true);
		} else {
			setLoadingMore(true);
		}

		fetchPosts(page, dateFrom, dateTo).then(data => {
			setPosts(prev => {
				if (page === 1) {
					return [...data.posts];
				} else {
					return [...prev, ...data.posts];
				}
			});

			setHasMore(data.hasMore);
			setLoading(false);
			setLoadingMore(false);
		});
	}, [page, dateFrom, dateTo]);

	function handleLoadMore() {
		setPage(p => p + 1);
	}

	return (
		<div className='relative min-h-screen bg-gray-50'>
			<BackgroundBlobs />
			<main className='relative z-10 mx-auto'>
				<ProfileHeader
					profile={profile}
					dateFrom={dateFrom}
					dateTo={dateTo}
					onDateFromChange={setDateFrom}
					onDateToChange={setDateTo}
				/>

				<div className='px-3 mx-auto max-w-[850px] pb-6'>
					{(loading || posts.length > 0) && (
						<ViewToggle view={view} onViewChange={setView} />
					)}

					<PostList posts={posts} loading={loading} view={view} />

					{hasMore && !loading && (
						<div className='flex justify-center py-8'>
							<button
								type='button'
								onClick={handleLoadMore}
								disabled={loadingMore}
								className='rounded-full border-2 font-bold border-gray-300 px-10 py-2.5 text-xs tracking-widest text-gray-400 transition-colors hover:border-gray-400 hover:text-gray-500 disabled:opacity-50 cursor-pointer'
							>
								{loadingMore ? 'LOADING...' : 'LOAD MORE'}
							</button>
						</div>
					)}
				</div>
			</main>
		</div>
	);
}
