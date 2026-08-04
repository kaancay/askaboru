import { LucideIcon } from "lucide-react";

type IconCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function IconCard({
  icon: Icon,
  title,
  description,
}: IconCardProps) {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-700 hover:shadow-2xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-700 transition group-hover:bg-red-700 group-hover:text-white">
        <Icon size={30} strokeWidth={2} />
      </div>

      <h3 className="mt-8 text-2xl font-bold text-neutral-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-neutral-600">
        {description}
      </p>
    </div>
  );
}