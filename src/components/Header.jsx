import {
  Navbar,
  Typography,
} from "@material-tailwind/react";
import ProfileAvatar from './ProfileAvatar';
 
const Header = ( props ) => {
 
  return (
    <Navbar width="w-full" fullWidth={true} className="h-20 flex flex-col justify-center rounded-none shadow-xl shadow-blue-gray-900/5">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          variant="h4"
          className="mx-4 cursor-pointer py-1.5"
        > {props.heading}
        </Typography>
        <ProfileAvatar />
      </div>
    </Navbar>
  );
}

export default Header