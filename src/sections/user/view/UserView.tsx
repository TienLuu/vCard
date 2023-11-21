"use client";

import { User } from "@/types/user";

import { vCardContent } from "../config";
import { useEffect, useState } from "react";

// ----------------------------------------------------------------------

interface Props {
   user: User;
}

export default function UserView({ user }: Props) {
   const { fullname, phoneNumber, email, imgURL, role } = user;
   const [vCardUrl, setVCardUrl] = useState("");

   const vCardBlob = new Blob([vCardContent], { type: "text/vcard" });

   useEffect(() => {
      const url = URL.createObjectURL(vCardBlob);
      setVCardUrl(url);
   }, []);

   return (
      <div className="text-[#F9F9F9]">
         <div className="h-max-p-[506px]">
            <img src="/assets/images/demo.jpg" alt="img user" />
         </div>
         <div className="text-center px-3 py-[17px] bg-blue-bg">
            <h1 className="text-3xl font-bold mb-2">{fullname}</h1>
            <h2 className="text-lg font-bold">{role}</h2>
            <ul className="ps-3 pt-5 text-left">
               <li className="mb-5">
                  <a href="" className="flex items-center">
                     <span className="inline-block p-3 bg-blue rounded-full me-2">
                        <img
                           src="/assets/icons/ic_phone.svg"
                           alt="icon phone"
                           width={21}
                           height={21}
                        />
                     </span>
                     <span>{phoneNumber}</span>
                  </a>
               </li>
               <li className="mb-5">
                  <a href="" className="flex items-center">
                     <span className="inline-block px-3 py-[14.5px] bg-blue rounded-full me-2">
                        <img
                           src="/assets/icons/ic_email.svg"
                           alt="icon email"
                           width={21}
                           height={16}
                        />
                     </span>
                     <span>{email}</span>
                  </a>
               </li>
               <li>
                  <a href="" className="flex items-center">
                     <span className="inline-block py-[12.5px] px-[15px] bg-blue rounded-full me-2">
                        <img
                           src="/assets/icons/ic_location.svg"
                           alt="icon location"
                           width={25}
                           height={25}
                        />
                     </span>
                     <span>
                        Lầu 3, 170 Trần Quang Khải, Phường Tân Định, Quận 1, Tp
                        Hồ Chí Minh
                     </span>
                  </a>
               </li>
            </ul>
            <a
               href={vCardUrl}
               rel="noreferrer"
               download="contact.vcf"
               className="block font-[500] py-[14px] px-[120px] bg-[#058283] border-[1px] border-[#058283] border-solid rounded mt-8 hover:opacity-80 cursor-pointer"
            >
               ADD TO CONTACT
            </a>
         </div>
      </div>
   );
}
