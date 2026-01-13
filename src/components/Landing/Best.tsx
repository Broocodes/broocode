import React from "react";
import Folder from "../magicui/Folder";


export default function Best() {
  return (
    <div className="w-full flex items-center justify-center my-8 md:my-12 lg:my-16 h-[50vh] md:h-[60vh] px-4 bg-accentColor border-t-8 border-b-8 border-myblack py-8 md:py-12">
      <div className="max-w-6xl w-full">
        <Folder
        size={2}
          items={[
            <div key={"fira"} 
            style={{
              backgroundImage: "url(https://cdn.dribbble.com/userupload/10634460/file/original-3ff6d156cc05c382e7a196da5944232b.png?format=webp&resize=320x240&vertical=center)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="border-4 md:border-8 border-myblack shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] md:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] h-full"></div>,
            <div key={"water"} 
            style={{
              backgroundImage: "url(https://cdn.dribbble.com/userupload/32296481/file/original-f4e16c755fb54fd64e6996e68579c6e6.png?resize=1024x800&vertical=center)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="border-4 md:border-8 border-myblack shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] md:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] h-full"></div>,
            <div key={"watea"} 
            style={{
              backgroundImage: "url(https://cdn.dribbble.com/userupload/18474558/file/original-74ca9a622ff89ced7b5ed9635e8f82f3.jpg?crop=0x546-3241x2977&format=webp&resize=320x240&vertical=center)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="border-4 md:border-8 border-myblack shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] md:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] h-full"></div>,
            
          ]}
        />
      </div>
    </div>
  );
}
