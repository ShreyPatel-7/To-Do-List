import { useState } from "react";
import { Plus, ListChecks } from "lucide-react";
import { useTodos } from "@/hooks/useTodos";
import { TodoItem } from "@/components/TodoItem";

const Index = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  const pending = todos.filter((t) => !t.completed);
  const completed = todos.filter((t) => t.completed);

  return (
    <div className="flex min-h-screen items-start justify-center px-4 py-16">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <ListChecks className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight font-heading">
              My Tasks
            </h1>
          </div>
          <p className="text-sm text-muted-foreground pl-[52px]">
            {pending.length} remaining · {completed.length} done
          </p>
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task…"
            className="flex-1 rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Add task"
          >
            <Plus className="h-5 w-5" />
          </button>
        </form>

        {/* Task List */}
        <div className="space-y-2">
          {pending.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
          ))}
        </div>

        {/* Completed */}
        {completed.length > 0 && (
          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Completed
            </h2>
            {completed.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
            ))}
          </div>
        )}

        {todos.length === 0 && (
          <div className="py-12 text-center text-muted-foreground text-sm">
            No tasks yet. Add one above!
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
