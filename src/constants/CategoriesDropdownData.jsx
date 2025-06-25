// import {
//   IconCamera,
//   IconComputer,
//   IconGaming,
//   IconHeadphones,
//   IconPhone,
// } from "../assets/icons/InterfaceIcons";

// export const CATEGORIES_DATA = [
//   {
//     id: "1",
//     label: "Men",
//     icon: IconPhone,
//     subMenu: [
//       {
//         title: "Top Wear",
//         items: [
//           "All Top Wear",
//           "Shirts",
//           "T-Shirts",
//           "Winter Wear",
//           "Jackets",
//           "Sweat Shirts",
//           "Jackets",
//         ],
//       },
//       { title: "Bottom Wear", items: ["Jeans", "Shorts", "Trousers"] },
//       { title: "Accessories", items: ["Belts", "Bags", "Watches"] },
//     ],
//   },

//   {
//     id: "2",
//     label: "Computers",
//     icon:IconComputer,
//     subMenu: [
//       { title: "Laptops", items: ["Gaming", "MacBooks"] },
//       { title: "Desktops", items: ["Towers", "All‑in‑Ones"] },
//     ],
//   },
//   {
//     id: "3",
//     label: "Smart Watches",
//     icon: IconGaming,
//     subMenu: [
//       { title: "Brands", items: ["Apple", "Samsung", "Fitbit"] },
//       { title: "Straps", items: ["Leather", "Silicone", "Metal"] },
//     ],
//   },

//   { id: "4", label: "Cameras", icon:IconCamera },
//   { id: "5", label: "Headphones", icon:IconHeadphones },
//   { id: "6", label: "Gaming", icon: IconGaming },
// ];

  import {
    IconCamera,
    IconComputer,
    IconGaming,
    IconHeadphones,
    IconPhone,
  } from "../assets/icons/InterfaceIcons";

  export const CATEGORIES_DATA = [
    {
      id: "Phones",
      label: "Phones",
      icon: IconPhone,
      subMenu: [
        {
          title: "Top Wear",
          items: [
            "All Top Wear",
            "Shirts",
            "T-Shirts",
            "Winter Wear",
            "Jackets",
            "Sweat Shirts",
            "Jackets",
          ],
        },
        { title: "Bottom Wear", items: [ "All Bottom Wear", "Pants","Jeans", "Shorts", "Trousers"] },
        { title: "Accessories", items:[ "All Accessories","Jewellery","Belts", "Bags", "Watches"] },
        { title: "Men Accessories", items: ["Belts", "Bags", "Watches"] },
        { title: "Men Footwear", items: ["Belts", "Bags", "Watches"] },
        { title: "Ethnic Wear", items: ["Belts", "Bags", "Watches"] },
      { title: "Inner & Sleepwear", items: ["Belts", "Bags", "Watches"] },


    
      ],
    },
    { id: "computers", label: "Computers", icon: IconComputer },
    { id: "watches", label: "Smart Watches", icon: IconGaming },
    { id: "cameras", label: "Cameras", icon: IconCamera },
    { id: "headphones", label: "Headphones", icon: IconHeadphones },
    { id: "gaming", label: "Gaming", icon: IconGaming },
  ];
