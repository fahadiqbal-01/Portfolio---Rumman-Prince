export default function ContainerSec({ children, className }) {
  return (
    <div className={` ${className} w-full max-w-300 mx-auto `}>{children}</div>
  );
}
