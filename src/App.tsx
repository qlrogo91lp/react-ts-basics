import Header from './components/Header';

import goalsImg from './assets/goals.jpg';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<Array<CourseGoal>>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary
      };  
      // 이전 배열을 복사하고 새로운 객체 추가
      return [...prevGoals, newGoal];
    });  
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
  }
  
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }} >
        <h1>Your Cource Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  )
}
