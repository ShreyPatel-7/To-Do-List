import { Check, Trash2 } from "lucide-react";
import type { Todo } from "@/hooks/useTodos";

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <div className="task-enter group flex items-center gap-3 rounded-lg bg-card px-4 py-3 transition-all hover:bg-secondary">
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
          todo.completed
            ? "border-primary bg-primary text-primary-foreground"
            : "border-muted-foreground/40 hover:border-primary"
        }`}
        aria-label={todo.completed ? "Mark incomplete" : "Mark complete"}
      >
        {todo.completed && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
      </button>

      <span
        className={`flex-1 text-sm transition-all ${
          todo.completed
            ? "text-muted-foreground line-through"
            : "text-foreground"
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-all p-1 rounded-md hover:bg-destructive/10"
        aria-label="Delete task"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}
