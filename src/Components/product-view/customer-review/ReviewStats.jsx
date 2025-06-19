// components/reviews/ReviewStats.jsx
import React from "react";
import { IconStar } from "../../../assets/icons/InterfaceIcons";
import { CardContainer } from "../../ui/CardContainer";
import { Card } from "../../ui/Card";

/* ───────────────────────────────────────────────────────────
   EXAMPLE DATA … replace with props or API payload as needed
   ─────────────────────────────────────────────────────────── */
const defaultBreakdown = [
  { label: "Excellent", value: 100 },
  { label: "Good", value: 11 },
  { label: "Average", value: 3 },
  { label: "Poor", value: 1 },
];

export const ReviewStats = ({
  average = 4.8,
  breakdown = defaultBreakdown,
}) => {
  /* total # of reviews from breakdown */
  const totalReviews = breakdown.reduce((sum, b) => sum + b.value, 0);

  return (
    <CardContainer>
      <Card className="flex flex-col md:flex-row gap-10  border-none shadow-none hover:shadow-none hover:border-none hover:bg-transparent">
        {/* ▸ Left box: average score + stars */}
        <div
          className="flex flex-col items-center justify-center w-full md:w-40
                        space-y-2 rounded-xl bg-gray-50 py-5"
        >
          <span className="text-4xl font-bold">{average.toFixed(1)}</span>
          <p className="text-sm text-gray-500">of {totalReviews} reviews</p>

          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar
                key={i}
                size={14}
                className={
                  i < Math.round(average) ? "fill-yellow-400" : "fill-gray-300"
                }
              />
            ))}
          </div>
        </div>

        {/* ▸ Right side: rating bars */}
        <div className="flex-1 space-y-4">
          {breakdown.map(({ label, value }) => {
            const percent = totalReviews ? (value / totalReviews) * 100 : 0;

            return (
              <div key={label} className="flex items-center text-sm">
                {/* label */}
                <span className="w-[80px]">{label}</span>

                {/* bar */}
                <div className="flex-1 mx-2 h-[3px] bg-gray-300 rounded overflow-hidden">
                  <div
                    className="bg-[#F5AA29] h-full"
                    style={{ width: `${percent}%` }}
                  />
                </div>

                {/* count */}
                <span className="w-6 text-right">{value}</span>
              </div>
            );
          })}
        </div>
      </Card>

      {/* ▸ comment box  */}
      <textarea
        placeholder="Leave Comment"
        className="mt-6 w-full border border-gray-100 bg-white rounded-sm h-10 p-2 text-sm
                  focus:ring focus:ring-gray-200 outline-none resize-none"
      />
    </CardContainer>
  );
};
