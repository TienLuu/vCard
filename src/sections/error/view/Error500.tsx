export default function Error500() {
   return (
      <div className="min-h-screen flex items-center justify-center text-center">
         <div className="max-w-[400px]">
            <h3 className="mb-4 text-[#F9F9F9] text-3xl font-bold">
               500 Internal Server Error
            </h3>
            <p className="text-[#919EAB]">
               There was an error, please try again later.
            </p>
            <div className="max-w-[320px] my-16">
               <img
                  alt="bixso 500"
                  src="/assets/illustrations/illustration_500.svg"
               />
            </div>
         </div>
      </div>
   );
}
