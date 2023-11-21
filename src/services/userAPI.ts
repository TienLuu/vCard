import { cache } from "react";
import axios from "axios";

import { User } from "@/types/user";

// ----------------------------------------------------------------------

export const getUsers = cache(async (slug: string): Promise<User> => {
   const response = await axios.get(
      `https://62f50939535c0c50e76847d8.mockapi.io/users/${slug}`
   );
   return response.data;
});
