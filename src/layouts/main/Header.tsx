import React from "react";

export default function Header() {
   return (
      <header className="flex justify-center items-center py-3 bg-blue-bg">
         <div className="me-3">
            <img
               src="/assets/logos/logo.svg"
               width={42}
               height={42}
               alt="bixso logo"
            />
         </div>
         <div>
            <img
               src="/assets/logos/logo_text.svg"
               width={92}
               height={18}
               alt="bixso logo"
            />
         </div>
      </header>
   );
}
