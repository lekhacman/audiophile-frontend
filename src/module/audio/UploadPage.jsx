import { FormProvider, useForm } from "react-hook-form";
import SubmitBtn from "../form/SubmitBtn.jsx";
import { upload } from "../../api/assetApi.js";
import { head } from "ramda";
import { useNavigate } from "react-router";

export default function UploadPage() {
  const methods = useForm();
  const navigate = useNavigate();
  function handleUpload({ myfile }) {
    if (!myfile.length) {
      return;
    }
    return upload(head(myfile)).then(() => navigate("/dashboard"));
  }
  return (
    <div>
      <h1>Upload audio</h1>
      <section>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleUpload)}>
            <input type="file" name="myfile" {...methods.register("myfile")} />
            <SubmitBtn>Upload</SubmitBtn>
          </form>
        </FormProvider>
      </section>
    </div>
  );
}
