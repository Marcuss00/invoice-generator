
const Logo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
      {/* Dollar sign */}
      <path d="M60,30 Q60,20 70,20 H80 Q90,20 90,30 Q90,40 80,40 H70 Q60,40 60,50 Q60,60 70,60 H80 Q90,60 90,50" 
            stroke="#ffffff" strokeWidth="5" fill="none" />
      
      {/* Lightbulb */}
      <path d="M120,20 Q140,20 140,40 Q140,55 130,60 L130,70 Q130,75 125,75 H115 Q110,75 110,70 L110,60 Q100,55 100,40 Q100,20 120,20Z" 
            fill="#ffffff" />
      <rect x="115" y="75" width="10" height="5" fill="#ffffff" />
      
      {/* Text */}
      <text x="100" y="95" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle">Bill Genius</text>
    </svg>
  );
}

export default Logo;
