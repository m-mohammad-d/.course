import TeacherRequestItem from "../components/TeacherRequestItem";
import useTeacherRequestActions from "../hooks/useTeacherRequestActions";
import { useTeacherRequests } from "../hooks/useTeacherRequest";
import Spinner from "../components/Spinner";

function TeacherRequestListPage() {
  const { requests, isLoading } = useTeacherRequests();
  const { confirmRequest, rejectRequest } = useTeacherRequestActions();

  if (isLoading) <Spinner />;

  return (
    <div className="w-full mx-auto p-4 bg-white border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Teacher Requests</h2>
      {requests && requests.length > 0 ? (
        <ul className="space-y-4">
          {requests.map((request) => (
            <TeacherRequestItem
              key={request.id}
              name={request.name}
              jobTitle={request.job_title}
              biography={request.biography}
              onConfirm={() => confirmRequest({ requestId: request.id, userId: request.user_id })}
              onReject={() => rejectRequest(request.id)}
            />
          ))}
        </ul>
      ) : (
        <p>No pending requests.</p>
      )}
    </div>
  );
}

export default TeacherRequestListPage;
