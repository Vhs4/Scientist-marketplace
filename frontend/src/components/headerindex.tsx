export default function headerIndex() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
        <a className="btn btn-ghost normal-case text-xl">Logo</a>
      </div>
      <div className="navbar-end">
        <a className="btn mr-2">Log in</a>
        <a className="btn">Sign Up</a>
      </div>
    </div>)
}