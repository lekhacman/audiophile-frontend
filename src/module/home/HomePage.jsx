import { getSystemHealth } from "../../api";
import { useLoaderData } from "react-router";
import CreateRootUser from "../auth/CreateRootUser.jsx";

export default function HomePage() {
  const { msg, pristine } = useLoaderData();
  return (
    <div>
      <h1>Audiophile</h1>
      <p>{msg}</p>
      {pristine && <CreateRootUser />}
    </div>
  );
}

HomePage.loader = function () {
  return getSystemHealth();
};
