import { type ReactNode } from "react";

type HintBoxProps = {
    mode: 'hint';
    children: ReactNode;
};

type WarningBoxProps = {
    mode: 'warning', 
    severity: 'low' | 'medium' | 'high' // union type, literal type
    children: ReactNode
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
    const { children, mode } = props;

    if (mode === 'hint') {
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
        );
    }

    // TypeScript에서 severity를 자동으로 인식한다 
    const { severity } = props;

    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    );
}