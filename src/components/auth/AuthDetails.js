import { useEffect, useState } from "react";
import auth from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const AuthDetail = () => {
  const [authUser, setAuthUser] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log("Sign out successfull"))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => listen();
  }, []);

  return (
    <div>
      {" "}
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>{" "}
          <button className="btn btn-error" onClick={userSignOut}>
            Sign Out
          </button>
        </>
      ) : (
        <div className="flex flex-col">
          {showSignUp ? <SignUp /> : <SignIn />}
          <button
            className="btn btn-primary"
            onClick={() => setShowSignUp(!showSignUp)}
          >
            {showSignUp ? "Sign In Instead" : "Sign Up Instead"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthDetail;
