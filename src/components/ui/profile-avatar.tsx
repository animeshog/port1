
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface ProfileAvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const ProfileAvatar = ({ className, size = 'md' }: ProfileAvatarProps) => {
  const sizeClasses = {
    sm: 'h-10 w-10',
    md: 'h-16 w-16',
    lg: 'h-24 w-24',
    xl: 'h-32 w-32',
  };

  return (
    <Avatar className={`${sizeClasses[size]} ${className || ''}`}>
      <AvatarImage src="/lovable-uploads/a20a44c6-ba63-44cf-8361-5c8b8d24c99d.png" alt="Animesh" />
      <AvatarFallback>A</AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;
