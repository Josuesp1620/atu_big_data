import React, { PropsWithoutRef, forwardRef } from "react";
import { useField, useFormikContext, ErrorMessage } from "formik";
import { InlineError } from "./inline_error"
import { Field } from "formik";
import { Input, StyledLabelSpan } from "./elements";
import * as E from "../components/elements";

export interface LabeledTextFieldProps
  extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  name: string;
  label: string;
  text_color?: string;
  selectField?: any;
  type?: "text" | "password" | "email" | "number" | "url";
  _size?: E.B3Size;
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>;
}

export const LabeledTextField = forwardRef<
  HTMLInputElement,
  LabeledTextFieldProps
>(
  (
    { name, label, _size = "sm", text_color="text-black", selectField=false, outerProps, ...props }: LabeledTextFieldProps,
    ref
  ) => {
    const [input] = useField(name);
    const { isSubmitting } = useFormikContext();

    return (
      <div className="pb-2 space-y-2" {...outerProps}>
        <label>
          <div className="pb-1 font-bold">
            <StyledLabelSpan className={text_color} size={_size}>{label}</StyledLabelSpan>
          </div>
          {selectField ? (
            <Field
              as="select"
              className={E.styledSelect({ size: "xs" })}
              name={selectField[0].name}
            >
              {selectField.map((column) => {
                return (
                  <option key={column.value} value={column.value}>
                    {column.label}
                  </option>
                );
              })}
            </Field>
            ) : (
              <Input
              spellCheck="false"
              autoCapitalize="false"
              disabled={isSubmitting}
              _size={_size}
              {...input}
              {...props}
              width="w-full"
              ref={ref}
              />
            )
          }
          
        </label>
        <ErrorMessage name={name} component={InlineError} />
      </div>
    );
  }
);
LabeledTextField.displayName = "LabeledTextField"

export default LabeledTextField;
