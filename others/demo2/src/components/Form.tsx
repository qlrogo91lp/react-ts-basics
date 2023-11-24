import { type FormEvent, type ComponentPropsWithoutRef } from "react";

type FormProps = {
    // 어떤 타입이 들어올지 모르니깐 unknown으로 설정
    onSave: (value: unknown) => void; 
} & ComponentPropsWithoutRef<"form">;

export default function Form( { onSave, children, ...otherProps }: FormProps) {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData); // simpler object 로 만들어 줌
        onSave(data);
    };

    return <form onSubmit={handleSubmit} {...otherProps}>{children}</form>;
}
