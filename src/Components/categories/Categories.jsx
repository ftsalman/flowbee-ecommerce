// import React from "react";
// import { List } from "../ui/List";
// import { Link } from "react-router-dom";
// import { Card } from "../ui/Card";

// export const Categories = ({ data = [], isLoading = false }) => {
//   const slugify = (text) =>
//     text
//       .toLowerCase()
//       .replace(/\s+/g, "-")
//       .replace(/[^\w-]/g, "");

//   return (
//     // <section className="flex flex-col gap-6 py-12 px-10 md:px-20">
//     //   <h2 className="text-2xl md:text-4xl font-semibold text-center">
//     //     Popular Categories
//     //   </h2>

//     //   <div className="space-y-2">
//     //     {isLoading ? (
//     //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//     //         {Array.from({ length: 8 }).map((_, idx) => (
//     //           <SkeletonCard key={idx} />
//     //         ))}
//     //       </div>
//     //     ) : (
//     //       <List
//     //         className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full max-w-6xl mx-auto"
//     //         uniqueKey="id"
//     //         data={data}
//     //         render={(item) => (
//     //           <Link
//     //             to={`/home/category/${slugify(item.label)}`}
//     //             key={item.id}
//     //             className="group cursor-pointer"
//     //           >
//     //             <Card
//     //               className="flex p-0 flex-col items-center justify-center bg-white rounded-lg hover:scale-105  shadow-sm transition-all duration-300 hover:shadow-md"
//     //                style={{ backgroundColor: item.bgColor || "#fef3c7" }}
//     //             >
//     //               <div className="flex flex-col items-center justify-center w-full h-32 p-4">
//     //                 <img
//     //                   src={item.image}
//     //                   alt={item.label}
//     //                   className="w-30 h-30 object-contain mb-2"
//     //                 />
//     //                 <p className="text-sm font-medium text-gray-800 text-center">
//     //                   {item.label}
//     //                 </p>
//     //               </div>
//     //             </Card>
//     //           </Link>
//     //         )}
//     //       />
//     //     )}
//     //   </div>
//     // </section>

//     <>
//       <div className="mt-16">
//         <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8">
//           Popular Categories
//         </h2>
//         <div className="px-4">
//           <List
//             data={data}
//             uniqueKey="id"
//             render={(item) => (
//               <>
//                 <div
//                   key={item.id}
//                   className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center"
//                   style={{ backgroundColor: item.bgColor || "#fef3c7" }}
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.label}
//                     className=" group-hover:scale-105 transition max-w-full"
//                   />
//                   <p className=" text-sm font-medium">{item.label}</p>
//                 </div>
//               </>
//             )}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// // Skeleton loader
// const SkeletonCard = () => (
//   <div className="flex flex-col items-center space-y-3 animate-pulse p-4">
//     <div className="w-12 h-12 bg-gray-200 rounded-full" />
//     <div className="w-3/4 h-3 bg-gray-300 rounded" />
//   </div>
// );

import React from "react";
import { List } from "../ui/List";
import { Link } from "react-router-dom";
import { Card } from "../ui/Card";
import { assets, categories } from "../../../public/images/grocery/assets";
import { SectionHeader } from "../ui/SectionHeader";

export const Categories = ({ data = [], isLoading = false }) => {
  const handleCategoryClick = (categoryText) => {
    navigate(`/home/category/${slugify(categoryText)}`);
    window.scrollTo(0, 0);
  };

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

  return (
    <section className="mt-16 px-7">
      <div>
        <SectionHeader header=" Popular Categories" />
      </div>

      <div className="px-4">
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
          </div>
        ) : (
          <List
            className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4"
            data={categories}
            uniqueKey="id"
            render={(item) => (
              <Link
                key={item.id}
                className="group cursor-pointer"
                onClick={() => handleCategoryClick(item.text)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleCategoryClick(item.text)
                }
              >
                <div
                  className="group cursor-pointer  py-2 px-2 gap-2 rounded-lg flex flex-col justify-center items-center"
                  style={{ backgroundColor: item.bgColor || "#fef3c7" }}
                >
                  <img
                    src={item.image}
                    alt={item.text}
                    className="group-hover:scale-105 transition max-w-full h-24 object-contain mb-2"
                  />
                  <p className="text-sm font-medium">{item.text}</p>
                </div>
              </Link>
            )}
          />
        )}
      </div>
    </section>
  );
};

// Skeleton loader
const SkeletonCard = () => (
  <div className="flex flex-col border-2  border-gray-200 items-center justify-center gap-3 p-4 rounded-lg bg-gray-50 animate-pulse">
    <div className="w-16 h-16 bg-gray-200 rounded-full" />
    <div className="w-20 h-3 bg-gray-300 rounded" />
  </div>
);
