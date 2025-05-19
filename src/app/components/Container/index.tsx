import './style.css';

export default function Container({
  children,
  backHome
}: {
  children: React.ReactNode;
  backHome: () => void;
}) {
  return (
    <div className='container'>
      <button onClick={() => backHome()} className='back-button'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='12' cy='12' r='10' />
          <polyline points='12 8 8 12 12 16' />
          <line x1='16' y1='12' x2='8' y2='12' />
        </svg>
      </button>
      <div className='content'>{children}</div>
    </div>
  );
}
