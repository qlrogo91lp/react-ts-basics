// Input with ref
import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<"input">;

// HTMLInputElement : Ref value
// InputProps : Input 함수가 props로 받는 props
const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { label, id, ...props },
    ref
) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} {...props} ref={ref}/>
        </p>
    );
});

export default Input;
