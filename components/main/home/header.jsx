
import Link from 'next/link';
import { checkSession } from '/utils/checkSession';

async function Header() {
  const session = await checkSession();

  return (
    <header className="shadow-lg" style={{ backgroundColor: '#F9FAFA' }}>
      <nav className="flex items-center p-4" style={{ width: '100vw', justifyContent: 'space-between' }}>
        <div className="flex items-center space-x-8 w-[50%]" style={{ width: 'fit-content', justifyContent: 'space-between', gap:'0 20px' }}>
          <Link href="/" className="hover:text-teal-500 text-gray-800 transition-colors duration-300">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-teal-500 text-gray-800 transition-colors duration-300">
            About us
          </Link>
          <Link href="/dashboard" className="hover:text-teal-500 text-gray-800 transition-colors duration-300">
            Dashboard
          </Link>
          <Link href="/craftjs" className="hover:text-teal-500 text-gray-800 transition-colors duration-300">
            Craftjs
          </Link>
          <Link href="/grape" className="hover:text-teal-500 text-gray-800 transition-colors duration-300">
            Grape
          </Link>
          <Link href="/dnd" className="hover:text-teal-500 text-gray-800 transition-colors duration-300">
            DND
          </Link>
          <Link href="/reactgrid" className="hover:text-teal-500 text-gray-800 transition-colors duration-300">
           React-grid
          </Link>
        </div>
        <div className="flex items-center justify-around">
          {session ? (
            <>
              <span className="text-teal-600">{session.user.email}</span>
              <form action="/api/auth/signout" method="POST">
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md text-white transition-colors duration-300"
                  style={{ background: 'black', margin: '0 15px' }}
                >
                  Sign Out
                </button>
              </form>
            </>
          ) : (
            <Link
              href="/api/auth/signin"
              className="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-md text-white transition-colors duration-300"
            >
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
