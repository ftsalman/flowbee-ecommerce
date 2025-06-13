import React, { useEffect, useRef, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { inputboxVariants } from "../ui/input-box/inputboxVariants";
import { cn } from "../../utils/utils";

const PhoneInput = ({
  number = "",
  setNumber = undefined,
  setIsValid = undefined,
  intlProps = {},
  placeholder,
  hasError = false,
  ...props
}) => {
  const inputRef = useRef(null);
  const { initOptions, inputProps, ...rest } = intlProps;

  const placeholdertext = "Enter mobile number";

  const [inputValue, setInputValue] = useState(number);

  useEffect(() => {
    setNumber?.(inputValue);
  }, [inputValue]);

  useEffect(() => {
    if (inputRef.current) {
      const iti = intlTelInput(inputRef.current, {
        separateDialCode: true,
        initialCountry: "ae",
        strictMode: true,
        ...initOptions,
        utilsScript:
          "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
      });

      const handleChange = () => {
        const val = inputRef.current.value;
        setInputValue(val);
        if (setIsValid) {
          setIsValid(iti.isValidNumber());
        }
      };

      inputRef.current.addEventListener("input", handleChange);
      return () => {
        // inputRef.current.removeEventListener("input", handleChange);
        iti.destroy();
      };
    }
  }, []);

  return (
    <input
      ref={inputRef}
      type="tel"
      defaultValue={number}
      placeholder={placeholder || placeholdertext}
      className={inputboxVariants({
        variant: hasError ? "error" : "secondary",
        size: "md",
        className: cn("w-full", inputProps?.className),
      })}
      {...props}
      {...inputProps}
    />
  );
};

export default PhoneInput;
