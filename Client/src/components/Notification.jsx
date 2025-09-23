import { useSelector } from 'react-redux';

const Notification = () => {
  const message = useSelector(state => state.message);

  if (!message) return null;
  console.log(message)
  return (
    <div className="fixed top-16 right-5 bg-indigo-500 text-white px-4 py-2 rounded shadow-lg animate-fade-in-out z-50">
      {message}
    </div>
  );
};

export default Notification;
