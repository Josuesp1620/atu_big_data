
import LabeledTextField from "../../../components/LabeledTextField";
import Form from "../../../components/Form";
import { ChangePassword } from "../../validations";
import { http } from "../../../services/Api.js";
import { getUserLocal } from "../../../utils/localStorage.js";
import { useNotifications } from "../../../utils/notifications.js";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

export const ChangePasswordForm = () => {
  const navigate = useNavigate()
  const userData = getUserLocal()
  const {toastError, toastSuccess} = useNotifications();
  return (
    <div>
        <Form
        submitText="Cambiar Contraseña"
        schema={ChangePassword}
        fullWidthSubmit
        initialValues={{ email: userData === null ? "" : userData.email, password: "", new_password: "" }}
        onSubmit={async (values) => {
        try {          
          const { data } = await http.post('/users/change-password', values);
          if (data.code === 200) {
            if(userData !== null && userData.role === "admin") {
              navigate("/admin");
            } else if(userData !== null) {
              navigate("/map");
            } else {
              navigate("/");
            }
            toastSuccess("Contraseña Cambiada Correctamente");
          }
        } catch (error) {          
          if(error.response.data.data){
            error.response.data.data.errors.map((error) => {
              toastError(error.msg)
            })
          } else {
            toastError(error.response.data.message)
          }          
        }        
      }}
      >
        <LabeledTextField 
            className={clsx({"hidden": userData !== null})}       
            name="email"
            value={userData === null ? null : userData.email}
            type="email"
            label={userData !== null ? "" : "Correo"}     
            autoComplete="username"
        />
        <LabeledTextField
          name="password"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
        />
        <LabeledTextField
          name="new_password"
          label="Nueva Contraseña"
          type="password"
          autoComplete="current-password"
        />
      </Form>
    </div>
  );
};

export default ChangePasswordForm;
