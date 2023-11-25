import { type ReactNode, createContext, useContext, useReducer } from "react";

export type Timer = {
    name: string;
    duration: number;
}

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
};

// data를 바꾸기 위한 callable 함수들
type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void,
    startTimers: () => void,
    stopTimers: () => void,
};

// reducer 초기화 값
const initialState: TimersState = {
    isRunning: true,
    timers: []
};

export const TimersContext = createContext<TimersContextValue | null>(null);

// custom hook
export function useTimersContext() {
    const timersCtx = useContext(TimersContext);

    if(timersCtx === null) {
        throw new Error('TimersContext is null - that should not be the case!');
    }

    return timersCtx;
}

type TimersContextProviderProps = {
    children: ReactNode
};

type StartTimersAction = {
    type: 'START_TIMER';
};

type StopTimersAction = {
    type:  'STOP_TIMER';
};

type AddTimerAction = {
    type: 'ADD_TIMER';
    payload: Timer;
};

type Action = StartTimersAction | StopTimersAction | AddTimerAction;
// type Action = {
//     // union type 사용
//     type: 'ADD_TIMER' | 'START_TIMER' | 'STOP_TIMER';
//     payload?: Timer
// };

function timersReducer(state: TimersState, action: Action): TimersState {
    if (action.type === 'START_TIMER') {
        // 절대 state를 직접 조작하지 말 것 
        // state.isRunning = true;
        return {
            ...state,
            isRunning: true
        };
    }
    if (action.type === 'STOP_TIMER') {
        return {
            ...state,
            isRunning: false
        };
    }
    if (action.type === 'ADD_TIMER') {
        return {
            ...state,
            timers: [
                ...state.timers,
                {
                    name: action.payload.name,
                    duration: action.payload.duration,
                },
            ],
        };
    }

    return state;
}

export default function TimersContextProvider({ children }: TimersContextProviderProps) {
    const [timersState, dispatch] = useReducer(timersReducer, initialState);
    
    const ctx: TimersContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        
        addTimer(timerData) {
            dispatch({type: 'ADD_TIMER', payload: timerData});
        },
        startTimers() {
            dispatch({type: 'START_TIMER'});
        },
        stopTimers() {
            dispatch({type: 'STOP_TIMER'});
        },
    }

    return <TimersContext.Provider value={ctx} >{children}</TimersContext.Provider>
}