interface CustomButtonProps {
  text: string;
}

const CustomButton = ({ text }: CustomButtonProps) => {
  return (
    <div>
      <p className="text-base md:text-xl mb-2 bg-[#E3DCF8] text-primary dark:text-secondary rounded-full w-fit px-4 py-0.5">
        {text}
      </p>
    </div>
  );
};

export default CustomButton;
