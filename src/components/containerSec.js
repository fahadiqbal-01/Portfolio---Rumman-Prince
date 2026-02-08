export default function ContainerSec({ children, className }) {
  return (
    <div className={` ${className} w-full max-w-280 mx-auto `}>{children}</div>
  );
}
