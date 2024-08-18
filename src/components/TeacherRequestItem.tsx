
interface TeacherRequestItemProps {
  name: string;
  jobTitle: string;
  biography: string;
  onConfirm: () => void;
  onReject: () => void;
}

function TeacherRequestItem({
  name,
  jobTitle,
  biography,
  onConfirm,
  onReject,
}: TeacherRequestItemProps) {
  return (
    <li className="border p-4 rounded-lg flex justify-between items-center">
      <div>
        <p className="font-bold">{name}</p>
        <p>{jobTitle}</p>
        <p>{biography}</p>
      </div>
      <div className="space-x-4">
        <button
          onClick={onConfirm}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Confirm
        </button>
        <button
          onClick={onReject}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Reject
        </button>
      </div>
    </li>
  );
}

export default TeacherRequestItem;
