import blob1 from '../assets/blob_1.png';
import blob2 from '../assets/blob_2.png';

export default function BackgroundBlobs() {
	return (
		<div className='pointer-events-none fixed inset-0 overflow-hidden'>
			<div className='absolute left-0 top-0'>
				<img src={blob1} alt='Blob 1' className='h-full w-full object-cover' />
			</div>

			<div className='absolute bottom-[41px] right-0'>
				<img src={blob2} alt='Blob 2' className='h-full w-full object-cover' />
			</div>
		</div>
	);
}
