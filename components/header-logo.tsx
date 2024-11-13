import Image from  'next/image';
import Link from 'next/link';

export const HeaderLogo = () => (
  <Link href="/">
    <div className='items-center hidden lg:flex'>
        <Image src='/logo.png' width={28} height={28} alt='logo' />
        <p className='font-semibold text-white text-2xl ml-2.5'>Budget Tracker</p>
    </div>
  </Link>
);