import CompactLayout from "@/layouts/main/CompactLayout";

// ----------------------------------------------------------------------

interface Props {
   children: React.ReactNode;
}

export default function layout({ children }: Props) {
   return <CompactLayout>{children}</CompactLayout>;
}
