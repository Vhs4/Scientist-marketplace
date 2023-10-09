import React, { useState, ChangeEvent, FormEvent } from "react";

interface SignUpModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const body = new FormData();
    body.append("grant_type", "");
    body.append("scope", "");
    body.append("client_id", "");
    body.append("client_secret", "");
    body.append("username", formData.username);
    body.append("password", formData.password);

    try {
      const response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(body),
      });

      if (response.ok) {
        // Usuário criado com sucesso, faça o que for necessário (redirecionar, mostrar uma mensagem, etc.)
        const userToken = await response.json();
        localStorage.setItem("user_token", JSON.stringify(userToken));
        window.location.href = "/home";
      } else {
        console.log("Login Error");
      }
    } catch (error) {
      console.error("Error to send the form:", error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeModal}
          ></div>
          <div className="bg-white w-1/2 p-4 rounded-lg shadow-lg z-50 relative">
            <button
              className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-800 cursor-pointer"
              onClick={closeModal}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-semibold"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  placeholder="Your username"
                  required={true}
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-semibold"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  placeholder="Your password"
                  required={true}
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  style={{ backgroundColor: "#3abff8" }}
                  className="text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
