import { Handbag, CircleUserRound, Search } from 'lucide-react';
export const Header = () => {
  return (
    <>
      <div className='flex justify-between items-center min-h-[100px] bg-awhite border-b border-gray-300'>
        <div className='flex items-center mx-10'>
          <img
            src='/images/Ulta_logo.png'
            alt='logo'
            className='max-h-[50px]'
          />
        </div>
        <div className='flex items-center mx-10 gap-5'>
          <button>
            <Handbag size={30} />
          </button>
          <button>
            <CircleUserRound size={30} />
          </button>
          <button>
            <Search size={30} />
          </button>
        </div>
      </div>
    </>
  );
};
