import { Link } from "react-router-dom";

interface AuthLinkProps {
  text: string;
  href: string;
  type: "login" | "signup";
}

function AuthLink({ text, href, type }: AuthLinkProps) {
  const backgroundColor = type === "signup" ? "bg-gray1" : "bg-white";
  const textColor = type === "signup" ? "text-white" : "text-gray1";

  return (
    <div>
      <Link
        to={href}
        className={`${backgroundColor} ${textColor} px-6 py-3 border border-gray-300 transition duration-300 ease-in-out`}
      >
        <span>{text}</span>
      </Link>
    </div>
  );
}

export default AuthLink;
