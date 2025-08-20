"use client";

export default function LoadingSpinner() {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ 
        background: 'linear-gradient(to right, #6232C2, #9F54DF)' 
      }}
    >
      <div className="relative mb-6">
        {/* Main spinning ring */}
        <div 
          className="rounded-full border-4 border-solid"
          style={{
            width: '80px',
            height: '80px',
            borderColor: 'rgba(255, 255, 255, 0.3)',
            borderTopColor: 'white',
            borderRightColor: 'white',
            animation: 'spin 1s linear infinite'
          }}
        ></div>
        
        {/* Crown symbol in the center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            width="40" 
            height="40" 
            fill="white" 
            viewBox="0 0 24 24"
            style={{ 
              animation: 'pulse 2s ease-in-out infinite' 
            }}
          >
            <path d="M5 16L3 7l2.5 1.5L8 4l4 6 4-6 2.5 4.5L21 7l-2 9H5zm2.7-2h8.6l.9-4.4L15 11l-3-4.5L9 11l-2.2-1.4L7.7 14z"/>
          </svg>
        </div>
      </div>
      
      {/* Loading text */}
      <div className="text-center">
        <div 
          className="text-white font-medium mb-3"
          style={{ 
            fontSize: '20px',
            animation: 'pulse 2s ease-in-out infinite' 
          }}
        >
          Loading your crown...
        </div>
        <div className="flex justify-center gap-2">
          <div 
            className="bg-white rounded-full"
            style={{
              width: '12px',
              height: '12px',
              animation: 'bounce 1.4s ease-in-out infinite both'
            }}
          ></div>
          <div 
            className="bg-white rounded-full"
            style={{
              width: '12px',
              height: '12px',
              animation: 'bounce 1.4s ease-in-out infinite both',
              animationDelay: '0.16s'
            }}
          ></div>
          <div 
            className="bg-white rounded-full"
            style={{
              width: '12px',
              height: '12px',
              animation: 'bounce 1.4s ease-in-out infinite both',
              animationDelay: '0.32s'
            }}
          ></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}