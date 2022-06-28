import React, { useState } from "react";
import { TaskGridContainer } from "./styles";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const notify = (message) => toast(message);
function TaskGrid({ tasks }) {
  const assignStatus = (taskId, statusId) => {
    console.log(taskId, statusId);
    axios.post(
      `${import.meta.env.VITE_API_URL}/users/${localStorage.id}/tasks/${taskId}/status/${statusId}`
    )
    .then((res) => {
      notify("El estado de la tarea se actualizó 👌");
    })
    .catch((error) => {
      notify("Hubo un error con el servidor");
    });
  };
  return (
    <TaskGridContainer>
      <div className="relative  shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Expiración
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((tsk, key) => (
              <tr
                key={key}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {tsk.name}
                </th>
                <th className="px-6 py-4">
                  {/* <Dropdown
                    inline={true}
                    label={
                      tsk?.Statuses[0]?.name
                        ? tsk?.Statuses[0]?.name
                        : "Incompleta"
                    }
                    size="sm"
                  >
                    <Dropdown.Item>Completado</Dropdown.Item>
                    <Dropdown.Item>Descartado</Dropdown.Item>
                  </Dropdown> */}

                  <select
                    id="countries"
                    value={
                      tsk?.Statuses[0]?.id
                        ? tsk?.Statuses[0]?.id
                        : "0d7e64ae-ec2a-4ab8-a749-d401f0d4e4f1"
                    }
                    name={"status"}
                    onChange={(e) => assignStatus(tsk.id, e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="0d7e64ae-ec2a-4ab8-a749-d401f0d4e4f1">
                      Incompleto
                    </option>
                    <option value="7addec62-c319-47ca-aaf1-74ef0d9063bb">
                      Completado
                    </option>
                    <option value="030f3152-c561-459e-b598-96b6e358f4ff">
                      Expirado
                    </option>
                  </select>
                </th>
                <th className="px-6 py-4 text-right">
                  {/* <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to={tsk.id + "/detalles"}>Ver detalles</p> */}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer position="top-center" theme="dark" />
    </TaskGridContainer>
  );
}

export default TaskGrid;
