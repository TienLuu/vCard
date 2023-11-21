import UserView from "@/sections/user/view/UserView";
import { getUsers } from "@/services/userAPI";
import { User } from "@/types/user";
import { notFound } from "next/navigation";

// ----------------------------------------------------------------------

type Props = {
   params: { slug: string };
};

const user: User[] = [
   {
      fullname: "Đào Trung Thành",
      email: "thanh.dao@bixso.vn",
      phoneNumber: "0931 334 340",
      role: "Giám Đốc Điều Hành",
      imgURL: "",
   },
];

// ----------------------------------------------------------------------

export default async function UserDetails({ params }: Props) {
   try {
      // const user = await getUsers(params.slug as string);

      // console.log(user);

      return <UserView user={user[0]} />;
   } catch (error) {
      notFound();
   }
}
