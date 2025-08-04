import React from 'react';

interface ProfileCardProps {
  imageSrc: string;
  name: string;
  title: string;
  description?: string;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ 
  imageSrc, 
  name, 
  title, 
  description, 
  className = "" 
}) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Bottom Box - Square with soft shadows and rounded corners, aligned left */}
      <div className="w-96 h-96 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl shadow-2xl border border-slate-600/50 animate-gentle-pulse hover:animate-soft-bounce group-hover:animate-rotate-180 transition-all duration-700 ease-in-out group-hover:shadow-blue-300/30">
        {/* Content for bottom box */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
          <h3 className="text-3xl font-bold text-white mb-4 animate-glow">{name}</h3>
          <p className="text-blue-300 font-medium text-xl">{title}</p>
          {description && (
            <p className="text-gray-300 text-lg mt-4 leading-relaxed">{description}</p>
          )}
        </div>
      </div>
      
      {/* Top Box - Square with image, shifted right */}
      <div className="absolute top-8 left-8 w-80 h-80 bg-white rounded-xl shadow-xl border border-gray-200/50 transform transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-300/20">
        {/* Profile Image - Full size rectangular/square */}
        <div className="w-full h-full rounded-xl overflow-hidden">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
          />
        </div>
        
        {/* Hover overlay with glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ProfileCard; 