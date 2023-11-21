import Image from "next/image";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
         <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] text-6xl">
            <span className="me-3">
               <img
                  src="/assets/logos/logo.svg"
                  width={42}
                  height={42}
                  alt="logo bixso"
               />
            </span>
            <span>
               <img
                  src="/assets/logos/logo_text.svg"
                  width={92}
                  height={18}
                  alt="logo bixso"
               />
            </span>
         </div>
      </main>
   );
}
