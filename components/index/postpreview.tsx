import Link from "next/link";
import { HTMLAttributes, ReactElement } from "react";

interface Props {
  title: string;
  slug: string | ReactElement;
  className: HTMLAttributes<HTMLDivElement>['className'];
}

export const PostPreview: React.FC<Props> = ({ title, slug, className }) => (
  <Link href="/" className={`flex flex-col w-full md:w-56 h-36 md:h-60 rounded-xl ${className ?? ""}`}>
    <div className="p-3 m-1 flex-1 rounded-xl bg-base-100">
      <h4>{title}</h4>
      <p>{slug}</p>
    </div>
  </Link>
);
