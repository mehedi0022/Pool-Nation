interface CustomButtonProps {
  text: string;
}

const CustomButton = ({ text }: CustomButtonProps) => {
  return (
    <div>
      <p className="text-xl mb-2 bg-white/60 text-primary rounded-full w-fit px-4 py-1">
        {text}
      </p>
    </div>
  );
};

export default CustomButton;
