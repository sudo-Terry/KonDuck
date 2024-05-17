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

interface ArticleCardProps {
  title: string;
  description: string;
  author: string;
  avatarSrc: string;
  href: string;
}

export function ArticleCard({
  title,
  description,
  author,
  avatarSrc,
  href,
}: ArticleCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className="flex items-center space-x-4 mb-4">
        <Avatar className="h-10 w-10 ml-4">
          <AvatarImage alt={`@${author}`} src={avatarSrc} />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{author}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Author</div>
        </div>
      </div>
      <CardContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam
          nisl nisl eget nisl.
        </p>
      </CardContent>
      <CardFooter>
        <Link className="text-indigo-600 hover:text-indigo-900" href={href}>
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
}
