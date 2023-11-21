import Header from "./Header";

// ----------------------------------------------------------------------

interface Props {
   children: React.ReactNode;
}

export default function CompactLayout({ children }: Props) {
   return (
      <div className="max-w-[430px] mx-[auto] min-h-screen">
         <Header />

         {children}
      </div>
   );
}
