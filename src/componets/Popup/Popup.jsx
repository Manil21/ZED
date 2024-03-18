import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";

const LoginForm = () => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {/* Les champs de formulaire pour le login */}
      <h2>Login</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </motion.div>
  );
};

const SignUpForm = () => {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {/* Les champs de formulaire pour le signup */}
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
    </motion.div>
  );
};

const Popup = ({ orderPopup, handleOrderPopup }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {orderPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="relative bg-white dark:bg-gray-900 rounded-xl w-full max-w-lg">
            <IoCloseOutline
              onClick={handleOrderPopup}
              className="absolute top-0 right-0 m-4 cursor-pointer text-2xl"
            />
            <div className="p-6 flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                {isSignUp ? (
                  <SignUpForm key="signup" />
                ) : (
                  <LoginForm key="login" />
                )}
              </AnimatePresence>
            </div>
            <div className="text-center pb-4">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-blue-500 hover:underline"
              >
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </button>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
