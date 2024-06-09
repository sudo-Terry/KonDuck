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
import Google_AI from "@/assets/GoogleAI.svg";
import Google_Mobile from "@/assets/GoogleAI.svg";
import Google_Web_Cloud from "@/assets/GoogleAI.svg";
import Nvidia_ComputerVision from "@/assets/Nvidia.svg";
import Nvidia_Cloud from "@/assets/Nvidia.svg";
import Naver_D2 from "@/assets/naver.svg";

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
  blog_mainurl: string;
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
    //case CompanyTypes.Woowahan:
    //return <Woowahan className="h-10 w-10" />;
    case CompanyTypes.Google_AI:
      return <Google_AI className="h-10 w-10" />;
    case CompanyTypes.Google_Mobile:
      return <Google_Mobile className="h-10 w-10" />;
    // case CompanyTypes.Google_Web_Cloud:
    //   return <Google_Web_Cloud className="h-10 w-10" />;
    case CompanyTypes.Nvidia_ComputerVision:
      return <Nvidia_ComputerVision className="h-10 w-10" />;
    case CompanyTypes.Nvidia_Cloud:
      return <Nvidia_Cloud className="h-10 w-10" />;
    case CompanyTypes.Naver_D2:
      return <Naver_D2 className="h-10 w-10" />;
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
  blog_mainurl,
}: ArticleCardProps) {
  return (
    <Card>
      <CardHeader>
        {thumbnail && (
          <Link href={href}>
            <div className="overflow-hidden mb-3">
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-auto object-cover max-h-60"
              />
            </div>
          </Link>
        )}
        <CardTitle>
          <Link href={href}>
          {title}
          </Link>
        </CardTitle>
        
        <CardDescription>
            {date}
        </CardDescription>
        
      </CardHeader>
      <div className="flex items-center space-x-4 mb-4">
        <Link href={blog_mainurl}>
          <Avatar className="h-10 w-10 ml-4">
            <CompanyTypesToSvg company_type={company_type} author={author} />
          </Avatar>
        </Link>
        <div>
          <Link href={blog_mainurl}>
            <div className="font-medium">
              {blog_name}
            </div>
          </Link>
          <Link href={blog_mainurl}>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {author}
            </div>
          </Link>
        </div>
      </div>
      <CardFooter>
        <Link className="text-indigo-600 hover:text-indigo-900" href={href}>
          본문 보기
        </Link>
      </CardFooter>
    </Card>
  );
}
