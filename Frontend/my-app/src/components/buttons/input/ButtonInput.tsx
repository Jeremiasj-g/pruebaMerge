interface ButtonInputProps {
    children: React.ReactNode;
    onClick?: () => void;
  }
  
  export default function ButtonInput({ children, onClick }: ButtonInputProps) {
    return (
      <button onClick={onClick} className="w-10 h-10 text-xl text-white bg-gray-900 transition-all hover:brightness-125 hover:bg-gray-700 rounded-full flex justify-center items-center">
        <b>{children}</b>
      </button>
    );
  }
  