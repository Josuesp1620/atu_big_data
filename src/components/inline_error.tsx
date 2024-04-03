import { InfoCircledIcon } from "@radix-ui/react-icons";

export function InlineError({ children }) {
  return (
    <div
      role="alert"
      className="pt-1 text-sm flex items-start gap-x-1 text-red-700"
    >
      <InfoCircledIcon className="flex-shrink-0" style={{ marginTop: 2 }} />
      {Array.isArray(children) ? children.join(", ") : children}
    </div>
  );
}
