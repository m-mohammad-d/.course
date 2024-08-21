import FeadBackCard from "../components/FeadBackCard";
import Spinner from "../components/Spinner";
import useGetFeadBack from "../hooks/useGetFeadBack";

function FeedbackManagement() {
  const { data, isLoading } = useGetFeadBack();
  if (isLoading) return <Spinner />;

  return (
    <div className="bg-backgroundGray p-6 rounded-lg">
      {data?.length > 0
        ? data?.map((feedback) => (
            <FeadBackCard key={feedback.id} feedback={feedback} />
          ))
        : "is not found"}
    </div>
  );
}

export default FeedbackManagement;
