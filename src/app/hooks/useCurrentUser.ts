import { IUser } from "@/schemas";

// define current user details
const useCurrentUser = (): IUser => ({
  id: "user1",
  name: "John",
});

export default useCurrentUser;
