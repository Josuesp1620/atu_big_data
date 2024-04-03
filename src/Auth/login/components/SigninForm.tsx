import { Signin } from "@/Auth/validations";
import Form from "@/components/Form";
import LabeledTextField from "@/components/LabeledTextField";
import { http } from "@/services/http.service";
import { useNotifications } from "@/utils/notifications";
import { useRouter } from 'next/navigation'


export const SigninForm = () => {
  const router = useRouter()


  const {toastError, toastSuccess} = useNotifications();

  return (
    <div>
        <Form
        submitText="Acceder"
        schema={Signin}
        fullWidthSubmit
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          console.log(values)
        // try {
        //     const { data } = await http.post('/users/login', values);
        //     // setLocal(data.data.accessToken, data.data.user)
        //     if (data.data.user.role === "user") {
        //       router.push(`/login`)
        //     } else {
        //       router.push('/map')
        //     }
        // } catch (error) {
        //     console.log(error);
        //     toastError(error.response.data.message)
        // }        
        }}
      >
        <LabeledTextField
          name="email"
          type="email"
          label="Email"
          autoComplete="username"
        />
        <LabeledTextField
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </Form>
    </div>
  );
};

export default SigninForm;
