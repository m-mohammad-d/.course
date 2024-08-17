import { Link } from "react-router-dom";

interface AuthLinkProps {
  text: string;
  href: string;
  type: "login" | "signup" | "dashboard";
}

function AuthLink({ text, href, type }: AuthLinkProps) {
  const backgroundColor =
    type === "signup"
      ? "bg-darkGray" 
      : type === "dashboard"
      ? "bg-primary" 
      : "bg-softWhite"; 
  const textColor =
    type === "signup"
      ? "text-softWhite" 
      : type === "dashboard"
      ? "text-softWhite" 
      : "text-mediumGray"; 
  const borderColor =
    type === "signup"
      ? "border-darkGray" 
      : type === "dashboard"
      ? "border-primary" 
      : "border-backgroundGray";

  return (
    <Link
      to={href}
      className={`${backgroundColor} ${textColor} ${borderColor} px-4 py-3 border rounded-md transition duration-300 ease-in-out hover:bg-darkOrange hover:text-softWhite`}
    >
      {text}
    </Link>
  );
}

export default AuthLink;
