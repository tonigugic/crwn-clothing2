// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
	// auth,
	signInWithGooglePopup,
	// signInWithGoogleRedirect,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";

const SignIn = () => {
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const response = await getRedirectResult(auth);
	// 		if (response) {
	// 			const userDockRef = await createUserDocumentFromAuth(response.user);
	// 		}
	// 	};
	// 	fetchData();
	// }, []);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign In Page</h1>
			<Button onClick={logGoogleUser} buttonType="google">
				Sign in with Google Popup
			</Button>
			{/* <button onClick={signInWithGoogleRedirect}>
				Sign in with Google Redirect
			</button> */}
			<SignUpForm />
		</div>
	);
};

export default SignIn;
