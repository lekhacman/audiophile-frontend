import { userApi } from "../../api";
import { Link, useLoaderData } from "react-router";
export default function DashboardPage() {
  const { users } = useLoaderData();
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <div>
        <Link to="/create-user">Create a new user</Link>
        <h2>User list</h2>
        <ul>
          {users.map(({ username }) => (
            <li key={username}>
              {username} <Link to={`/user/${username}`}>Edit</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
DashboardPage.loader = async function () {
  return { users: await userApi.list() };
};
