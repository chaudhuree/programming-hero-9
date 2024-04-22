import { useState } from "react";
import { useNavigate } from "react-router-dom";
// firebase
import { getAuth, updateProfile } from "firebase/auth";

import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { useAuth } from "../context/AuthProvider";
import { Helmet } from "react-helmet";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();

  const { logout, setUpdateCount } = useAuth();

  const [loading, setLoading] = useState(false);
  // for updating profile details(button action)
  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
    photoURL: auth.currentUser?.photoURL,
  });
  const { name, email, photoURL } = formData;

  // logout function
  function onLogout() {
    logout();
    navigate("/");
  }

  // update form data
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  // update profile details
  async function onSubmit() {
    try {
      setLoading(true);
      //update display name in firebase auth
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      setUpdateCount((prevState) => prevState + 1);
      setLoading(false);
      toast.success("Profile details updated");
    } catch (error) {
      setLoading(false);
      toast.error("Could not update the profile details");
    }
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="max-w-6xl font-poppins flex justify-center items-center flex-col container mx-auto">
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            {/* Name Input */}

            <input
              type="text"
              id="name"
              value={name}
              disabled={!changeDetail}
              onChange={onChange}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                changeDetail && "bg-red-200 focus:bg-red-200"
              }`}
            />

            {/* Email Input */}

            <input
              type="email"
              id="email"
              value={email || "not available"}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />
            <input
              type="url"
              id="photoURL"
              value={photoURL}
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
              onChange={onChange}
              disabled={!changeDetail}
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center">
                {changeDetail
                  ? "If everything ok then ➜ "
                  : "Do you want to update your profile?"}
                <span
                  onClick={() => {
                    changeDetail && onSubmit();
                    setChangeDetail((prevState) => !prevState);
                  }}
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-2 cursor-pointer"
                >
                  {changeDetail ? "Apply change" : "Edit"}
                </span>
              </p>
              <p
                onClick={onLogout}
                className="py-[10px] px-[38px] bg-[#FEFEFF] text-[#1E1E1E] rounded-[40px] font-semibold cursor-pointer border-slate-400 border hover:text-red-500 delay-100 "
              >
                Sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
