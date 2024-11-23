import React, { useState } from "react";

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  const [editingTask, setEditingTask] = useState(null);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const saveEdit = () => {
    onUpdateTask(editingTask.id, editingTask);
    setEditingTask(null);
  };

  return (
    <table className="w-full bg-white border-collapse rounded-lg shadow-md">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-4 text-left">Title</th>
          <th className="p-4 text-left">Description</th>
          <th className="p-4 text-left">Due Date</th>
          <th className="p-4 text-left">Status</th>
          <th className="p-4 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id} className="border-t">
            {editingTask?.id === task.id ? (
              <>
                <td className="p-4">
                  <input
                    type="text"
                    name="title"
                    value={editingTask.title}
                    onChange={handleEditChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </td>
                <td className="p-4">
                  <input
                    type="text"
                    name="description"
                    value={editingTask.description}
                    onChange={handleEditChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </td>
                <td className="p-4">
                  <input
                    type="date"
                    name="dueDate"
                    value={editingTask.dueDate}
                    onChange={handleEditChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </td>
                <td className="p-4">
                  <select
                    name="status"
                    value={editingTask.status}
                    onChange={handleEditChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td className="flex gap-2 p-4">
                  <button
                    onClick={saveEdit}
                    className="px-3 py-1 text-white bg-green-500 rounded-md hover:bg-green-600"
                  >
                    Save
                  </button>
                </td>
              </>
            ) : (
              <>
                <td className="p-4">{task.title}</td>
                <td className="p-4">{task.description}</td>
                <td className="p-4">{task.dueDate}</td>
                <td className="p-4">{task.status}</td>
                <td className="flex gap-2 p-4">
                  <button
                    onClick={() => setEditingTask(task)}
                    className="px-3 py-1 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDeleteTask(task.id)}
                    className="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
