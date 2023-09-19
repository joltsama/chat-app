import { IUser } from "@/schemas";

const useOtherUsers = (me: IUser, users: IUser[]): IUser[] => {
  const otherUsers = users.filter((user) => user.id !== me.id);
  return otherUsers;
};

export default useOtherUsers;
