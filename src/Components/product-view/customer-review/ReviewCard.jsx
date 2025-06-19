// components/reviews/ReviewCard.jsx
import React from "react";
import { IconArrowDown, IconStar } from "../../../assets/icons/InterfaceIcons";
import Avatar from "../../ui/Avatar";
import { CardContainer } from "../../ui/CardContainer";
import { Card } from "../../ui/Card";
import { List } from "../../ui/List";
import { Button } from "../../ui/button/Button";

export const ReviewCard = ({ data = {}, loading = false }) => {
  if (!data) return null;

  // ─────────────────────────
  // Destructure with defaults
  // ─────────────────────────
  const {
    name = "Anonymous",
    rating = 0,
    avatar = "",
    comment = "",
    date,
    images = [], // ← thumbnail URLs
  } = data;

  // “24 January 2023”
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

  // Helper: fraction → array [full, half, empty]
  const getStarFill = (index) => {
    const diff = rating - index;
    if (diff >= 1) return "fill-yellow-400";
    if (diff > 0) return "fill-yellow-400/50"; // half star
    return "fill-gray-300";
  };

  return (
    <CardContainer className="bg-[#FAFAFA] p-4 rounded-xl boxShadow">
      <Card className="flex flex-col md:flex-row gap-4 bg-transparent border-none shadow-none hover:shadow-none hover:border-none hover:bg-transparent">
        {/* Avatar */}
        <Avatar imgUrl={avatar} loading={loading} />

        {/* Right column */}
        <div className="flex-1 flex flex-col gap-1">
          {/* Name + date */}
          <div className="flex justify-between items-start">
            <h4 className="font-semibold leading-none">{name}</h4>
            {formattedDate && (
              <span className="text-xs text-gray-400">{formattedDate}</span>
            )}
          </div>
          {/* Rating */}
          <div className="flex items-center gap-[2px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} size={14} className={getStarFill(i)} />
            ))}
          </div>
          {/* Comment */}
          {comment && (
            <p className="text-sm text-gray-700 mt-2 leading-relaxed">
              {comment}
            </p>
          )}
          {/* Thumbnails */}
          {images.length > 0 && (
            <List
              className="flex flex-col md:flex-row mt-1.5"
              data={images}
              render={(src, idx) => (
                <Card className="w-24 h-24 p-0 overflow-hidden rounded-md flex items-center justify-center">
                  <img
                    src={src}
                    alt={`review-img-${idx}`}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                </Card>
              )}
            />
          )}
        </div>
      </Card>
      
    </CardContainer>
  );
};
