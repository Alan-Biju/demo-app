import Link from 'next/link';
import LinkButton from '/components/button/navButton';
const Sidebar = () => {
  return (
    <div className="bg-white border-r border-gray-200 p-6" style={{width: "300px"}}>
      <nav className='h-[500px]'>
        <ul className="flex flex-col" style={{height: "300px", gap: "30px"}}>
            <LinkButton path='/settings'>
                <li className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-black rounded-md transition-colors duration-300">
                    Settings
                </li>
            </LinkButton>
            <LinkButton path='/dashboard/list' >
                <li className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-black rounded-md transition-colors duration-300">
                    List
                </li>
            </LinkButton>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
