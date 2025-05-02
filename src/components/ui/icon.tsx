
import React from 'react';
import { LucideProps, icons } from 'lucide-react';

export interface IconProps extends LucideProps {
  name: string;
  fallback?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  fallback = 'AlertCircle',
  ...props
}) => {
  const LucideIcon = icons[name as keyof typeof icons] || icons[fallback as keyof typeof icons];
  
  return <LucideIcon {...props} />;
};

export default Icon;
