export default function Container({ children, className }) {
  return (
    <div className={` ${className} w-full max-w-450 mx-auto `}>{children}</div>
  );
}
