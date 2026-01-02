import ThemeToggle from "@/components/theme-toggle";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-end p-4">
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
