import { type PropsWithChildren } from "react";

// type CourseGoalProps = {
//     title: string;
//     children: ReactNode
// };

type CourseGoalProps = PropsWithChildren<{
    id: number;
    title: string;
    onDelete: (id: number) => void;
}>;

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 {children}
//             </div>
//             <button>Delete</button>
//         </article>
//     );
// };

// export default CourseGoal;

export default function CourseGoal({
    id,
    title,
    onDelete,
    children,
}: CourseGoalProps) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            {/* <button onClick={onDelete}>Delete</button> */}
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    );
}
