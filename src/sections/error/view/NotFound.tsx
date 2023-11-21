export default function NotFound() {
   return (
      <div className="min-h-screen flex items-center justify-center text-center">
         <div className="max-w-[400px]">
            <h3 className="mb-4 text-[#F9F9F9] text-3xl font-bold">
               Sorry, Page Not Found!
            </h3>
            <p className="text-[#919EAB]">
               Sorry, we couldn’t find the page you’re looking for. Perhaps
               you’ve mistyped the URL? Be sure to check your spelling.
            </p>
            <div className="max-w-[320px] mx-auto my-16">
               <img
                  alt="bixso 404"
                  src="/assets/illustrations/illustration_404.svg"
               />
            </div>
         </div>
      </div>
   );
}
