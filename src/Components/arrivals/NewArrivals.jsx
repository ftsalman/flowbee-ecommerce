import React, { useEffect, useRef, useState } from "react";
import { List } from "../ui/List";
import { Card } from "../ui/Card";
import { IconFavorites, IconStar } from "../../assets/icons/InterfaceIcons";
import { Button } from "../ui/button/Button";
import { Link } from "react-router-dom";
import { arrivals_data } from "../../assets/ArrivalsData";
// const initialProducts = [
//   {
//     id: 1,
//     label: "Skullcandy - Crusher anc 2 wireless headphone",
//     price: "$299.99",
//     image: "/images/products/imag5.png",
//     rating: 1,
//   },
//   {
//     id: 2,
//     label: "Skullcandy - Crusher anc 2 wireless headphone",
//     price: "$299.99",
//     image: "/images/products/img4.png",
//     rating: 1,
//   },
//   {
//     id: 3,
//     label: "Skullcandy - Crusher anc 2 wireless headphone",
//     price: "$299.99",
//     image: "/images/products/img3.png",
//     rating: 1,
//   },
//   {
//     id: 4,
//     label: "Skullcandy - Crusher anc 2 wireless headphone",
//     price: "$299.99",
//     image: "/images/products/img2.png",
//     rating: 1,
//   },
//   {
//     id: 5,
//     label: "Skullcandy - Crusher anc 2 wireless headphone",
//     price: "$299.99",
//     image:
//       "https://i.pinimg.com/736x/b7/d6/98/b7d698bd2003ab473c9e4c5c4d14a9da.jpg",
//     rating: 1,
//   },

//   {
//     id: 6,
//     label: "Skullcandy - Crusher anc 2 wireless headphone",
//     price: "$299.99",
//     image: "/images/products/img1.png",
//     rating: 1,
//   },

//   {
//     id: 7,
//     label: "Skullcandy - Crusher anc 2 wireless headphone",
//     price: "$299.99",
//     image:
//       "https://i.pinimg.com/736x/b7/d6/98/b7d698bd2003ab473c9e4c5c4d14a9da.jpg",
//     rating: 1,
//   },

//   {
//     id: 8,
//     label: "Skullcandy - Crusher anc 2 wireless headphone",
//     price: "$299.99",
//     image: "/images/products/img1.png",
//     rating: 1,
//   },
// ];

const CARD_WIDTH = 236;
const VISIBLE = 2;

const NewArrivals = () => {
  const trackRef = useRef(null);
  const [newArrivals] = useState(arrivals_data.slice(0, 6));
  const [favourites, setFavourites] = useState(new Set());
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const pages = Math.ceil(newArrivals.length / VISIBLE);

  const toggleFav = (id) => {
    setFavourites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const handleScroll = () => {
      const index = Math.round(el.scrollLeft / (CARD_WIDTH * VISIBLE));
      if (index !== page) {
        setPage(index);
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [page]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const scrollToPage = (pageIndex) => {
    const el = trackRef.current;
    if (!el) return;

    const scrollAmount = pageIndex * CARD_WIDTH * VISIBLE;
    el.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
    setPage(pageIndex);
  };

  return (
    <section className="py-12 px-6 md:px-20 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl px-9 font-semibold">New Arrivals</h2>

        {pages > 1 && (
          <div className="flex gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
                className="relative cursor-pointer h-4 w-4"
              >
                <span
                  className={`absolute top-0 left-0 h-4 w-4 rounded-full border transition ${
                    page === i ? "border-black" : "border-transparent"
                  }`}
                />
                <span
                  className={`absolute top-1 left-1 h-2 w-2 rounded-full transition ${
                    page === i ? "bg-black" : "bg-gray-500"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Scrollable Card Track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-9"
      >
        {isLoading ? (
          <div className="flex gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <List
            className="flex gap-4"
            uniqueKey="id"
            data={newArrivals}
            render={(item) => (
              <Link to={`/home/products/${item.id}`}>
                <Card
                  key={item.id}
                  className="relative group min-w-[220px] rounded-md flex-shrink-0 border shadow-sm p-4"
                >
                  <div className="relative">
                    <img
                      src={item.images?.[0]}
                      alt={item.label}
                      className="w-full h-45 object-contain mb-3"
                    />
                    <span className="absolute top-3 left-2 bg-white text-black font-semibold text-[10px] px-3 py-0.5 rounded shadow">
                      NEW
                    </span>
                    <Link to={"/home"}>
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={() => toggleFav(item.id)}
                      className="absolute top-2 right-2 bg-white shadow rounded-full p-2"
                    >
                      <IconFavorites
                        size={20}
                        className={
                          favourites.has(item.id)
                            ? "text-red-500"
                            : "text-gray-600"
                        }
                      />
                    </Button>
                    </Link>
                  </div>

                  <div className="space-y-2">
                    <Link to={'/home'}>
                    <Button
                      variant="secondary"
                      size="md"
                      className="w-full bg-black rounded-lg cursor-pointer text-white text-xs py-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    >
                      Add to cart
                    </Button>
                    </Link>

                    <div className="flex items-center gap-0.5 text-xs mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <IconStar
                          key={i}
                          size={12}
                          className={
                            i < item.rating
                              ? "fill-yellow-400"
                              : "fill-gray-300"
                          }
                        />
                      ))}
                    </div>

                    <h3 className="text-sm font-medium leading-snug w-[180px] line-clamp-2 mb-1">
                      {item.label}
                    </h3>
                    <p className="text-gray-800 text-sm mb-3">{item.price}</p>
                  </div>
                </Card>
              </Link>
            )}
          />
        )}
      </div>
    </section>
  );
};

export default NewArrivals;

const SkeletonCard = () => {
  return (
    <div className="relative min-w-[220px] rounded-md flex-shrink-0 border border-gray-200 shadow-sm p-4 animate-pulse bg-white">
      <div className="relative">
        <div className="w-full h-40 bg-gray-200 rounded mb-3" />
        <span className="absolute top-3 left-2 h-4 w-10 bg-gray-300 rounded" />
        <div className="absolute top-2 right-2 h-8 w-8 bg-gray-300 rounded-full" />
      </div>
      <div className="space-y-2">
        <div className="w-full h-10 bg-gray-200 rounded" />
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-3 w-3 bg-gray-300 rounded" />
          ))}
        </div>
        <div className="w-[180px] h-4 bg-gray-300 rounded" />
        <div className="w-20 h-4 bg-gray-300 rounded" />
      </div>
    </div>
  );
};
