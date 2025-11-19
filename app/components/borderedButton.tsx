import { cn } from "@/utils/cn";

export default function BorderedButton({
  text,
  textColor,
  children,
}: {
  text: string;
  textColor?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      target="_blank"
      className={cn(
        "inline-flex items-center bg-dark-3 text-dark-1  border border-dashed border-text hover:border-accent py-0.5 px-2 ml-2 rounded-md ",
        textColor
      )}
      href="https://www.typescriptlang.org/"
    >
      <span className="block size-4 shrink-0">{children}</span>
      <span className="ml-1 text-sm font-semibold">{text}</span>
    </a>
  );
}
