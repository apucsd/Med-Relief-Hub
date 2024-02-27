import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { setTheme } from "@/redux/features/theme/themeSlice";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Moon, Sun } from "lucide-react";

const SelectTheme = () => {
  const { mode } = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();

  const handleSelectTheme = (data: "light" | "dark") => {
    dispatch(setTheme(data));
  };
  console.log(mode);
  return (
    <Select
      onValueChange={(value: "light" | "dark") => handleSelectTheme(value)}
    >
      <SelectTrigger className="">
        <div className="flex justify-center items-center gap-2">
          {mode === "light" ? (
            <>
              <Sun className="size-4 " /> <span>Light</span>
            </>
          ) : (
            <>
              <Moon className="size-4 " /> <span>Dark</span>
            </>
          )}
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Theme</SelectLabel>
          <SelectItem value="light">
            <div className="flex justify-center items-center gap-2">
              <Sun className="size-4 " /> <span>Light</span>
            </div>
          </SelectItem>
          <SelectItem value="dark">
            <div className="flex justify-center items-center gap-2">
              <Moon className="size-4 " /> <span>Dark</span>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectTheme;
