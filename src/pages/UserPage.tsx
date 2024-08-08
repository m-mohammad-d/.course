
import { useUserProfile } from '../hooks/useGetProfile';

function UserProfile() {
  const { profile, loading, error } = useUserProfile();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Full Name: {profile?.full_name}</p>
      <p>Email: {profile?.email}</p>
      <p>Purchased Courses:</p>
      <ul>
        {profile?.purchased_courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
