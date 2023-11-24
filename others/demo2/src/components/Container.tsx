import {
    type ReactNode,
    type ComponentPropsWithoutRef,
    type ElementType,
} from "react";

type ContainerProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
    as,
    children,
    ...props
}: ContainerProps<C>) {
    const Component = as || "div"; // 항상 null이 아님을 뜻함
    return <Component className="container" {...props} >{children}</Component>;
}
