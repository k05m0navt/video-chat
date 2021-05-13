import { Logo } from "../components/atoms";

function LoginPage() {
    return (
        <div className="login-page h-screen w-screen flex items-center justify-center">
            <div className="sign-in-form flex flex-col items-center bg-white w-max h-max rounded-lg">
                <Logo height="16" width="16" />
            </div>
        </div>
    );
}

export default LoginPage;
