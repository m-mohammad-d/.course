import { Link } from "react-router-dom";

interface AuthLinkProps {
  text: string;
  href: string;
  type: "login" | "signup" | "dashboard"
}

function AuthLink({ text, href, type }: AuthLinkProps) {
  const backgroundColor =
    type === "signup" ? "bg-gray1" : type === "dashboard" ? "bg-blue-600" : "bg-white";
  const textColor =
    type === "signup" ? "text-white" : type === "dashboard" ? "text-white" : "text-gray1";

  return (
    <div>
      <Link
        to={href}
        className={`${backgroundColor} ${textColor} px-4 py-3 border border-gray-300 transition duration-300 ease-in-out`}
      >
        <span>{text}</span>
      </Link>
    </div>
  );
}

export default AuthLink;
