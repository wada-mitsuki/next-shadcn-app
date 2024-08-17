import {
  Avatar as ShadcnAvatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/shadcn-ui/ui/avatar';

interface AvatarProps {
  image: string;
}

export const Avatar = ({ image }: AvatarProps) => {
  return (
    <ShadcnAvatar>
      <AvatarImage src={image} />
      <AvatarFallback>CN</AvatarFallback>
    </ShadcnAvatar>
  );
};
