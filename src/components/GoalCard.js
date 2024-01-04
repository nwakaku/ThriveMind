import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FaTrash, FaTrashAlt } from "react-icons/fa";
import { useWeb5 } from "@/app/web5Context";

const goalsMatric = [
  {
    title: "Physio-therapy session",
    status: "Active",
    date: "1-01-2024",
    content: "I'm going for three sessions with miss Nitta for therapy ...",
    tasks: {
      total: 4,
      completed: 1,
    },
    todos: [
      {
        id: 1,
        description: "Complete exercise 1",
        completed: false,
      },
      {
        id: 2,
        description: "Attend therapy session",
        completed: true,
      },
      // Add more todos as needed
    ],
  },
  {
    title: "Gym workout",
    status: "Active",
    date: "2-01-2024",
    content:
      "Working out at the gym to stay fit and healthy and bubbling rata...",
    tasks: {
      total: 6,
      completed: 2,
    },
    todos: [
      {
        id: 3,
        description: "Do cardio exercises",
        completed: false,
      },
      {
        id: 4,
        description: "Lift weights",
        completed: true,
      },
      // Add more todos as needed
    ],
  },
  {
    title: "Yoga and meditation",
    status: "Completed",
    date: "3-01-2024",
    content: "Daily yoga and meditation practice for mental well-being...",
    tasks: {
      total: 4,
      completed: 4,
    },
    todos: [
      {
        id: 5,
        description: "Practice mindfulness",
        completed: true,
      },
      {
        id: 6,
        description: "Deep breathing exercises",
        completed: true,
      },
      // Add more todos as needed
    ],
  },
  {
    title: "Learning a new language",
    status: "Completed",
    date: "4-01-2024",
    content:
      "Studying and practicing a new language for personal development...",
    tasks: {
      total: 6,
      completed: 6,
    },
    todos: [
      {
        id: 7,
        description: "Complete language exercises",
        completed: true,
      },
      {
        id: 8,
        description: "Watch language learning videos",
        completed: true,
      },
      // Add more todos as needed
    ],
  },
  {
    title: "Reading challenge",
    status: "Completed",
    date: "5-01-2024",
    content: "Reading a set number of books for intellectual growth...",
    tasks: {
      total: 2,
      completed: 2,
    },
    todos: [
      {
        id: 9,
        description: "Finish book on personal development",
        completed: true,
      },
      {
        id: 10,
        description: "Explore new genres",
        completed: true,
      },
      // Add more todos as needed
    ],
  },
];

const GoalItem = ({ goal }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedGoal, setEditedGoal] = useState({ ...goal });

  const { updateGoals } = useWeb5();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = () => {
    // Add logic to save the changes to your data source
    // For now, let's just log the edited goal
    console.log("Edited Goal:", editedGoal);
    updateGoals(editedGoal);

    // Close the edit dialog
    setIsEditing(false);
  };

  return (
    <div className="mb-6 rounded-lg bg-white p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <h3 className="text-base font-semibold text-gray-900">
              {editedGoal.title}
            </h3>
            <span className="block text-xs font-normal text-gray-500">
              {editedGoal.status === "Active"
                ? `Opened: ${editedGoal.date}`
                : `Closed: ${editedGoal.date}`}
            </span>
          </div>
        </div>
        <EditDialog
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editedGoal={editedGoal}
          setEditedGoal={setEditedGoal}
          handleSaveChanges={handleSaveChanges}
          handleEditClick={handleEditClick}
        />
      </div>
      <p className="my-6 text-sm font-normal text-gray-500">
        {editedGoal.content}
      </p>
      <div className="flex items-center justify-between text-sm font-semibold text-gray-900">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="mr-2 h-5 w-5 text-base text-gray-500">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
            />
          </svg>
          <span className="mr-1">{editedGoal.tasks.completed}</span> Task
        </div>
        <div className="flex flex-col ">
          <p className="text-gray-300 mb-2 text-sm">{`${editedGoal.tasks.completed}/${editedGoal.todos.length} task completed`}</p>
          <div className="w-full h-2 bg-blue-200 rounded-full">
            <div
              className="w-full h-full text-center text-xs text-white bg-blue-600 rounded-full"
              style={{
                width: `${
                  (editedGoal.tasks.completed / editedGoal.todos.length) * 100
                }%`,
              }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EditDialog = ({
  isEditing,
  setIsEditing,
  editedGoal,
  setEditedGoal,
  handleSaveChanges,
  handleEditClick,
}) => {
  const todos = editedGoal.todos || [];

  // Function to add a new todo
  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      description: "",
      completed: false,
    };

    setEditedGoal((prevGoal) => {
      const logCompletedTodosLength = (prevGoal) => {
        const completedTodos = prevGoal.todos.filter(
          (todo) => todo.completed === true
        );
        return completedTodos.length;
      };

      const completedTodosLength = logCompletedTodosLength(prevGoal);

      return {
        ...prevGoal,
        status:
          completedTodosLength === prevGoal.tasks.total + 1
            ? "Completed"
            : "Active",
        tasks: {
          ...prevGoal.tasks,
          total: prevGoal.tasks.total + 1,
          completed: completedTodosLength,
        },
        todos: [...prevGoal.todos, newTodo],
      };
    });
  };

  // Function to update todo details
  const handleTodoChange = (todoId, field, value) => {
    setEditedGoal((prevGoal) => {
      const updatedTodos = prevGoal.todos.map((todo) =>
        todo.id === todoId ? { ...todo, [field]: value } : todo
      );

      const newTasksCompleted = updatedTodos.filter(
        (todo) => todo.completed
      ).length;

      return {
        ...prevGoal,
        status:
          newTasksCompleted === prevGoal.tasks.total ? "Completed" : "Active",
        tasks: {
          ...prevGoal.tasks,
          completed: newTasksCompleted,
        },
        todos: updatedTodos,
      };
    });
  };

  // Function to delete a todo
  const handleDeleteTodo = (todoId) => {
    setEditedGoal((prevGoal) => {
      const updatedTodos = prevGoal.todos.filter((todo) => todo.id !== todoId);

      const newTasksCompleted = updatedTodos.filter(
        (todo) => todo.completed
      ).length;

      return {
        ...prevGoal,
        status:
          newTasksCompleted === prevGoal.tasks.total ? "Completed" : "Active",
        tasks: {
          ...prevGoal.tasks,
          completed: newTasksCompleted,
        },
        todos: updatedTodos,
      };
    });
  };

  return (
    <Dialog isOpen={isEditing} onDismiss={() => setIsEditing(false)}>
      <DialogTrigger asChild>
        <button
          className="text-sm font-medium text-indigo-500"
          onClick={handleEditClick}>
          <span className="mr-0.5 font-semibold">+</span>Edit
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-gray-700">
        <DialogHeader>
          <DialogTitle>Edit goal</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-around ">
          <div className=" flex flex-col items-start ">
            <Label htmlFor="title" className="text-right my-3 font-semibold">
              Title
            </Label>
            <Input
              id="title"
              value={editedGoal.title}
              onChange={(e) =>
                setEditedGoal({ ...editedGoal, title: e.target.value })
              }
              className="col-span-5 focus:outline-none focus:ring-0"
            />
          </div>
          <div className=" items-center gap-4 mt-2">
            <Label htmlFor="content" className="text-right my-3 font-semibold">
              Info
            </Label>
            <Input
              id="content"
              value={editedGoal.content}
              onChange={(e) =>
                setEditedGoal({ ...editedGoal, content: e.target.value })
              }
              className="col-span-5 focus:outline-none focus:ring-0"
            />
          </div>
          <div>
            <div className="flex justify-between mt-4 mr-2 mb-1">
              <Label className="font-semibold">Todos</Label>
              <button
                type="button"
                onClick={handleAddTodo}
                className="text-sm font-semibold text-indigo-500">
                + Add
              </button>
            </div>

            {todos.map((todo) => (
              <div key={todo.id} className="flex items-center gap-4 my-2">
                <Checkbox
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  onCheckedChange={(checked) => {
                    setEditedGoal((prevGoal) => {
                      const updatedTodos = prevGoal.todos.map((t) =>
                        t.id === todo.id ? { ...t, completed: checked } : t
                      );

                      return {
                        ...prevGoal,
                        todos: updatedTodos,
                      };
                    });
                  }}
                  className="w-5 h-5"
                />
                <div className="relative w-full">
                  <Input
                    value={todo.description}
                    onChange={(e) =>
                      handleTodoChange(todo.id, "description", e.target.value)
                    }
                    placeholder="Todo description"
                    className="focus:outline-none focus:ring-0"
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 ">
                    <FaTrashAlt className="w-3 h-3 text-gray-800" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button
            className="mx-auto bg-indigo-500 hover:bg-indigo-700"
            onClick={handleSaveChanges}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const GoalsSection = ({ goals, title, create }) => {
  const { createGoal } = useWeb5();

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const handleCreateClick = () => {
    setIsCreateDialogOpen(true);
  };

  const handleSaveNewGoal = (newGoal) => {
    // Add logic to save the new goal to your data source
    // For now, let's just log the new goal
    console.log("New Goal:", newGoal);
    createGoal(newGoal);
  };

  return (
    <div className="px-4">
      <div className="my-3 mx-2 flex justify-between">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        {create && (
          <CreateDialog
            isOpen={isCreateDialogOpen}
            setIsOpen={setIsCreateDialogOpen}
            handleSaveChanges={handleSaveNewGoal}
            handleCreateClick={handleCreateClick}
          />
        )}
      </div>
      <div className="grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
        {goals.map((goal, index) => (
          <GoalItem key={index} goal={goal} />
        ))}
      </div>
    </div>
  );
};

export const ActiveGoals = () => {
  const { goalsData } = useWeb5();

  return (
    <div>
      <GoalsSection
        goals={goalsData.filter((goal) => goal.status === "Active")}
        title="Active Goals"
        create="Create New"
      />
    </div>
  );
};

export const CompletedGoals = () => {
  return (
    <div>
      <GoalsSection
        goals={goalsMatric.filter((goal) => goal.status === "Completed")}
        title="Completed Goals"
      />
    </div>
  );
};

const CreateDialog = ({
  isOpen,
  setIsOpen,
  handleSaveChanges,
  handleCreateClick,
}) => {
  const [editedGoal, setEditedGoal] = useState({
    title: "",
    status: "Active",
    date: new Date().toLocaleDateString(),
    content: "",
    tasks: {
      total: 0,
      completed: 0,
    },
    todos: [],
  });

  // Function to add a new todo
  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      description: "",
      completed: false,
    };

    setEditedGoal((prevGoal) => {
      const newTasksCompleted =
        prevGoal.tasks.completed + (newTodo.completed ? 1 : 0);

      return {
        ...prevGoal,
        status:
          newTasksCompleted === prevGoal.tasks.total + 1
            ? "Completed"
            : "Active",
        tasks: {
          ...prevGoal.tasks,
          total: prevGoal.tasks.total + 1,
          completed: newTasksCompleted,
        },
        todos: [...prevGoal.todos, newTodo],
      };
    });
  };

  // Function to update todo details
  const handleTodoChange = (todoId, field, value) => {
    const updatedTodos = editedGoal.todos.map((todo) =>
      todo.id === todoId ? { ...todo, [field]: value } : todo
    );
    setEditedGoal((prevGoal) => ({
      ...prevGoal,
      todos: updatedTodos,
    }));
  };

  // Function to delete a todo
  const handleDeleteTodo = (todoId) => {
    const updatedTodos = editedGoal.todos.filter((todo) => todo.id !== todoId);
    setEditedGoal((prevGoal) => ({
      ...prevGoal,
      todos: updatedTodos,
    }));
  };

  return (
    <Dialog isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
      <DialogTrigger asChild>
        <Button
          className="bg-indigo-500 hover:bg-indigo-700"
          onClick={handleCreateClick}>
          Create New
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-gray-700">
        <DialogHeader>
          <DialogTitle>Create new goal</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-around">
          <div className="flex flex-col items-start">
            <Label htmlFor="title" className="text-right my-3 font-semibold">
              Title
            </Label>
            <Input
              id="title"
              value={editedGoal.title}
              onChange={(e) =>
                setEditedGoal({ ...editedGoal, title: e.target.value })
              }
              className="col-span-5 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="items-center gap-4 mt-2">
            <Label htmlFor="content" className="text-right my-3 font-semibold">
              Info
            </Label>
            <Input
              id="content"
              value={editedGoal.content}
              onChange={(e) =>
                setEditedGoal({ ...editedGoal, content: e.target.value })
              }
              className="col-span-5 focus:outline-none focus:ring-0"
            />
          </div>
          <div>
            <div className="flex justify-between mt-4 mr-2 mb-1">
              <Label className="font-semibold">Todos</Label>
              <button
                type="button"
                onClick={handleAddTodo}
                className="text-sm font-semibold text-indigo-500">
                + Add
              </button>
            </div>

            {editedGoal.todos.map((todo) => (
              <div key={todo.id} className="flex items-center gap-4 my-2">
                <Checkbox
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  onChange={(e) =>
                    handleTodoChange(todo.id, "completed", e.target.checked)
                  }
                  className="w-5 h-5"
                />
                <div className="relative w-full">
                  <Input
                    value={todo.description}
                    onChange={(e) =>
                      handleTodoChange(todo.id, "description", e.target.value)
                    }
                    placeholder="Todo description"
                    className="focus:outline-none focus:ring-0"
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 ">
                    <FaTrashAlt className="w-3 h-3 text-gray-800" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              className="mx-auto bg-indigo-500 hover:bg-indigo-700"
              onClick={() => {
                // Add the logic for the create button click here
                handleSaveChanges(editedGoal);
                setIsOpen(false);
              }}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
