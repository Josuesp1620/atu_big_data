import { useFormikContext } from "formik";
import clsx from "clsx";
import { Button } from "../elements";
import { SymbolIcon } from "@radix-ui/react-icons";

export default function SimpleDialogActions({
  action,
  onClose,
  fullWidthSubmit = false,
  secondary,
  variant = "md",
}:{
  action?:any,
  onClose?:any,
  fullWidthSubmit?: boolean,
  secondary?:any,
  variant?: string,
}) {
  const { isSubmitting } = useFormikContext();

  return (
    <div
      className={clsx(
        variant === "xs" ? "pt-2" : "pt-6",
        "pb-1 relative",
        fullWidthSubmit
          ? "flex items-stretch justify-stretch"
          : `flex items-center justify-center space-x-5`
      )}
    >
      {action ? (
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="default"
          className={clsx(
            fullWidthSubmit ? "bg-blue-600 border-blue-600 hover:bg-blue-500 hover:border-blue-600 text-white" :            
            "bg-gray-400 border-gray-500 hover:bg-gray-400 hover:border-gray-500 px-14",
            )}
          size={fullWidthSubmit ? "full-width" : "sm"}
        >
          {action}
        </Button>
      ) : null}
      {secondary ? (
        <Button
          type="button"
          disabled={isSubmitting}
          variant="default"
          onClick={secondary.onClick}
        >
          {secondary.action}
        </Button>
      ) : null}
      {onClose ? (
        <Button 
          type="button" 
          variant="default"
          className={clsx("bg-white-500 border-gray-500 hover:bg-white hover:border-gray-500 px-14")}
          onClick={async () => await onClose()}>
          Cancel
        </Button>
      ) : (
        <SymbolIcon
          className={clsx(
            "animate-spin transition-opacity",
            isSubmitting ? "opacity-50" : "opacity-0",
            fullWidthSubmit && "absolute top-8 right-2.5 text-white"
          )}
        />
      )}
      
    </div>
  );
}
