export default function ContainerSec({ children, className }) {
  return (
    <div className={` ${className} w-full max-w-280 mx-auto 2xl:px-0 xl:px-0 lg:px-12 md:px-12 px-8 `}>{children}</div>
  );
}
