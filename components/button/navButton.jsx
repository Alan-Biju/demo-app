import Link from 'next/link';

export default function LinkButton({  children, path, className = '' }) {
  return (
    <Link href={path} className={className}>
     {children}
    </Link>
  );
}
