import FormForgotPassword from "../components/Fragments/FormForgotPassword";
import AuthLayout from "../components/Layouts/AuthLayout";

const ForgotPassword = () => {
  return(
    <AuthLayout type="forgot-password">
      <FormForgotPassword/>
    </AuthLayout>
  );
};

export default ForgotPassword;