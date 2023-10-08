import "./styles.css";
import Footer from "@/components/footer";


export default function editprofile() {
    return (

        <div className="bg-primary-bg min-h-screen">
            <div className="navbar bg-primary-bg">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl text-white" href="../">Nebulab</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search for a post..." className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container flex justify-center mt-5">
                <div className="avatar">
                    <div className="w-24 ml-8 rounded-full ring ring-primary-color ring-offset-base-100 ring-offset-2" id="changecirclecolor">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>

            <div className="description container flex justify-center mt-5">
                <textarea placeholder="Bio" className="ml-12 mb-4 textarea textarea-bordered textarea-lg w-full max-w-md" id="textareadescription" ></textarea>
            </div>
            <div className="container flex justify-center mt-4">
                <p className="mt-3 mr-4 font-bold text-white">Skill 1</p>
                <select className="select select-bordered">
                    <option disabled selected>Skill</option>
                    <option>Data analysis</option>
                    <option>Scientific Observation</option>
                    <option>Laboratory Methods</option>
                    <option>Space Observation</option>
                    <option>Experimentation</option>
                </select>
                <select className="select ml-2 select-bordered">
                    <option disabled selected>Tier</option>
                    <option>Junior</option>
                    <option>Pleno</option>
                    <option>Sênior</option>
                </select>

            </div>
            <div className="container flex justify-center mt-4">
                <p className="mt-3 mr-4 font-bold text-white">Skill 2</p>
                <select className="select select-bordered">
                    <option disabled selected>Skill</option>
                    <option>Data analysis</option>
                    <option>Scientific Observation</option>
                    <option>Laboratory Methods</option>
                    <option>Space Observation</option>
                    <option>Experimentation</option>
                </select>
                <select className="select ml-2 select-bordered">
                    <option disabled selected>Tier</option>
                    <option>Junior</option>
                    <option>Pleno</option>
                    <option>Sênior</option>
                </select>
            </div>
            <div className="container flex justify-center mt-4">
                <p className="mt-3 mr-4 font-bold text-white">Skill 3</p>
                <select className="select select-bordered">
                    <option disabled selected>Skill</option>
                    <option>Data analysis</option>
                    <option>Scientific Observation</option>
                    <option>Laboratory Methods</option>
                    <option>Space Observation</option>
                    <option>Experimentation</option>
                </select>
                <select className="select ml-2 select-bordered">
                    <option disabled selected>Tier</option>
                    <option>Junior</option>
                    <option>Pleno</option>
                    <option>Sênior</option>
                </select>
            </div>
            <div className="container flex justify-center mt-4">
                <button className="btn btn-success  ml-60 mr-3">Save</button>
                <button className="btn btn-error">Cancel</button>
            </div>
            <hr className="mt-1" />
            <Footer />
        </div>


    );
};






