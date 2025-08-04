import "./style.css";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" >
      <body
        
      >
        <div className={` bg-[#FFFAF1] relative container overflow-x-hidden` }>
              <div className='w-[300px] h-[300px] bg-gradient-to-tr from-[#8459AB] to-[#A47EC6CC] rounded-full absolute -top-[1%] -left-[5%] blur-[200px]  z-30'></div>
              {/* <div className='w-[300px] h-[300px] bg-gradient-to-tr from-[#8459AB] to-[#A47EC6CC] rounded-full absolute top-1/2 -right-[10%] blur-[200px]  z-30'></div>
              <div className='w-[300px] h-[300px] bg-gradient-to-tr from-[#8459AB] to-[#A47EC6CC] rounded-full absolute -bottom-[1%] -left-[1%] blur-[200px]  z-30'></div> */}
             
          {children}
          </div>
      </body>
    </html>
  );
}
