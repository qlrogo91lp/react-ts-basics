import { useRef, type FormEvent } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function hadnleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // new FormData(event.currentTarget);

        // null 아닌걸 확신할 때 !를 사용
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        onAddGoal(enteredGoal, enteredSummary);

        // FormElement built-in method
        event.currentTarget.reset();
    }
    
    return (
        <form onSubmit={hadnleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input type="text" id="goal" ref={goal} />
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input type="text" id="summary" ref={summary} />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    );
}
