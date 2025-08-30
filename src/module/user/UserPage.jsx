import { useNavigate, useParams } from "react-router";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { update, updateUserRequest } from "../../api/userApi.js";
import TextField from "../form/TextField.jsx";
import SubmitBtn from "../form/SubmitBtn.jsx";

export default function UserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const methods = useForm({ resolver: yupResolver(updateUserRequest) });
  function handleSubmit(user) {
    return update({ ...user, username: id }).then(() => navigate("/admin"));
  }
  return (
    <div>
      <h1>User {id}</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <TextField name="password" label="Password" />
          <SubmitBtn>Update</SubmitBtn>
        </form>
      </FormProvider>
    </div>
  );
}
