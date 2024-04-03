import StandaloneFormLayout from "@/components/standalone_form_layout";
import SigninForm from "./components/SigninForm";

const LoginAuth = () => {
    return (
        <StandaloneFormLayout title="Iniciar Session">
            <SigninForm/>
        </StandaloneFormLayout>
    )
}

export default LoginAuth