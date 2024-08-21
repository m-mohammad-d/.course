import FeadBackCard from "../components/FeadBackCard";
import Spinner from "../components/Spinner";
import useGetFeadBack from "../hooks/useGetFeadBack";

function FeedbackManagement() {
  const { data, isLoading } = useGetFeadBack();
  
  if (isLoading) return <Spinner />;

  const feedbackData = data || []; // Default to an empty array if data is undefined

  return (
    <div className="bg-backgroundGray p-6 rounded-lg">
      {feedbackData.length > 0
        ? feedbackData.map((feedback) => (
            <FeadBackCard key={feedback.id} feedback={feedback} />
          ))
        : "No feedback found"}
    </div>
  );
}

export default FeedbackManagement;
