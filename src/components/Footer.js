export default function Footer() {
  return (
    <footer className="w-full bg-[#000000] py-8 text-center text-sm text-gray-500 border-t border-gray-300 select-none ">
      <div className=" mb-10 ">
        <p className=" font-Bebas text-[32px] text-[#ffffff] ">
          Let's get in touch!
        </p>
        <div className=" flex justify-center items-center gap-4 mt-2 ">
          <a
            href="https://www.linkedin.com/in/shah-mohammad-rumman-princee/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="icons/linkedin.png"
              className=" w-6 invert-100 hover:scale-[1.2] duration-300 ease-out "
            />
          </a>
          <a
            href="https://github.com/rummanaminn-stack"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="icons/github.png"
              className=" w-6 invert-100 hover:scale-[1.2] duration-300 ease-out "
            />
          </a>
          <a
            href="mailto:shahmdrumman-11-2022412854@idmvs.du.ac.bd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="icons/apple.png"
              className=" w-6 invert-100 hover:scale-[1.2] duration-300 ease-out "
            />
          </a>
        </div>
      </div>
      <div className=" pt-4 ">
        &copy; {new Date().getFullYear()} Mohammad R. Prince. All rights
        reserved.
      </div>
    </footer>
  );
}
