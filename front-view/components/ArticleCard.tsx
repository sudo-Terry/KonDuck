import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { CompanyTypes } from "../enums/CompanyTypes";
import Kakao_tech from "@/assets/kakao_tech.svg";
import Netflix from "@/assets/Netflix.svg";
import Woowahan from "@/assets/Woowahan.svg";

interface ArticleCardProps {
  title: string;
  subtitle: string;
  description: string;
  author: string;
  company_type: CompanyTypes;
  href: string;
  thumbnail?: string;
  date: string;
  blog_name: string;
}

interface CompanyTypesToSvgProps {
  company_type: CompanyTypes;
  author: string;
}

const CompanyTypesToSvg: React.FC<CompanyTypesToSvgProps> = ({
  company_type,
  author,
}) => {
  switch (company_type) {
    case CompanyTypes.Kakao:
      return <Kakao_tech className="h-10 w-10" />;
    case CompanyTypes.Netflix:
      return <Netflix className="h-10 w-10" />;
    case CompanyTypes.Woowahan:
      return <Woowahan className="h-10 w-10" />;
    default:
      return <AvatarFallback>{author[0]}</AvatarFallback>;
  }
};

export function ArticleCard({
  title,
  subtitle,
  description,
  author,
  company_type,
  href,
  thumbnail,
  date,
  blog_name,
}: ArticleCardProps) {
  return (
    <Card>
      <CardHeader>
        {thumbnail && (
          <div className="overflow-hidden mb-3">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-auto object-cover max-h-60"
            />
          </div>
        )}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <div className="flex items-center space-x-4 mb-4">
        <Avatar className="h-10 w-10 ml-4">
          <CompanyTypesToSvg company_type={company_type} author={author} />
        </Avatar>
        <div>
          <div className="font-medium">{blog_name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {author}
          </div>
        </div>
      </div>
      <CardFooter>
        <Link className="text-indigo-600 hover:text-indigo-900" href={href}>
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
}
