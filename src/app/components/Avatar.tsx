import Image from "next/image";
import { HiOutlineUserGroup } from "react-icons/hi2";

interface AvatarProps {
  name: string;
  image?: string;
  isGroup?: boolean;
}

export default function Avatar({ image, name, isGroup }: AvatarProps) {
  return (
    <>
      {image ? (
        <Image alt={name} src={image} />
      ) : (
        <div
          className={`
          border
          flex
          items-center
          justify-center
          h-12 
          w-12 
          min-w-[3rem]
          mr-4 
          rounded-full 
          text-lg 
          font-medium
          bg-white 
          text-cyan-900 
        `}
        >
          {isGroup ? (
            <HiOutlineUserGroup size={34} />
          ) : (
            name.slice(0, 2).toUpperCase()
          )}
        </div>
      )}
    </>
  );
}
