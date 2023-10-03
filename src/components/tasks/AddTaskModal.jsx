import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onCancle = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancle();
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="title">Title</label>
          <input
            className="w-full rounded-md"
            type="text"
            id="title"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="description">Description</label>
          <textarea
            className="w-full rounded-md"
            type="text"
            id="description"
            {...register("description")}
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="date">Deadline</label>
          <input
            className="w-full rounded-md"
            type="date"
            id="date"
            {...register("date")}
          />
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="assignTo">Assign To</label>
          <select
            className="w-full rounded-md"
            id="assignTo"
            {...register("assignTo")}
          >
            <option value="mir hossain">Mir Hossain</option>
            <option value="Shipan">Shipan</option>
            <option value="mohidul">Mohidul</option>
            <option value="simanto">Simanto</option>
            <option value="sadhin">Sadhin</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="priority">Priority</label>
          <select
            className="w-full rounded-md"
            id="priority"
            {...register("priority")}
          >
            <option defaultValue value="high">
              High
            </option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={() => onCancle()}
            type="button"
            className="hover:bg-orange-600 px-6 py-2 rounded-md hover:text-white font-bold border border-orange-600 bg-white text-black transition-all ease-in-out duration-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 px-6 py-2 rounded-md text-white font-bold border border-blue-600 hover:bg-white hover:text-black transition-all ease-in-out duration-500"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
