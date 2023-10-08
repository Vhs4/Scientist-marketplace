import React, { useState } from 'react';

const SignUpModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
                    <div className="bg-white w-1/2 p-4 rounded-lg shadow-lg z-50 relative">
                        <button
                            className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-800 cursor-pointer"
                            onClick={closeModal}
                        >
                            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <h2 className="text-2xl font-semibold mb-4">Sign up</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-gray-700 font-semibold">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="w-full border rounded-lg px-3 py-2 mt-1"
                                    placeholder="Your username"
                                    required={true}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 font-semibold">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full border rounded-lg px-3 py-2 mt-1"
                                    placeholder="Your email"
                                    required={true}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full border rounded-lg px-3 py-2 mt-1"
                                    placeholder="Your password"
                                    required={true}
                                />
                            </div>
                            <div className="mb-4 text-gray-700 font-semibold">Profile photo (Required)</div>
                            <div className="flex items-center justify-center w-full mt-4 mb-4">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" required={true} />
                                </label>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    style={{ backgroundColor: '#3abff8' }}
                                    className="text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                                >
                                    Create account
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

            )}
        </>
    );
};

export default SignUpModal;
