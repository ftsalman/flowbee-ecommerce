import React, { useState } from "react";
import { CardContainer } from "../../ui/CardContainer";
import { Button } from "../../ui/button/Button";
import { IconArrowDown } from "../../../assets/icons/InterfaceIcons";

/* ------------------------------------------------------------------ */
/*  DATA  (add more sections if you want the expand/collapse to show) */
const specData = [
  {
    section: "Screen",
    rows: [
      { label: "Screen diagonal", value: "6.7″" },
      { label: "The screen resolution", value: "2796×1290" },
      { label: "The screen refresh rate", value: "120 Hz" },
      { label: "The pixel density", value: "460 ppi" },
      { label: "Screen type", value: "OLED" },
      {
        label: "Additionally",
        value: [
          "Dynamic Island",
          "Always‑On display",
          "HDR display",
          "True Tone",
          "Wide color (P3)",
        ],
      },
    ],
  },
  {
    section: "CPU",
    rows: [
      { label: "CPU", value: "A16 Bionic" },
      { label: "Number of cores", value: 6 },
    ],
  },

  {
    section: "Screen",
    rows: [
      { label: "Screen diagonal", value: "6.7″" },
      { label: "The screen resolution", value: "2796×1290" },
      { label: "The screen refresh rate", value: "120 Hz" },
      { label: "The pixel density", value: "460 ppi" },
      { label: "Screen type", value: "OLED" },
      {
        label: "Additionally",
        value: [
          "Dynamic Island",
          "Always‑On display",
          "HDR display",
          "True Tone",
          "Wide color (P3)",
        ],
      },
    ],
  },

  {
    section: "Screen",
    rows: [
      { label: "Screen diagonal", value: "6.7″" },
      { label: "The screen resolution", value: "2796×1290" },
      { label: "The screen refresh rate", value: "120 Hz" },
      { label: "The pixel density", value: "460 ppi" },
      { label: "Screen type", value: "OLED" },
      {
        label: "Additionally",
        value: [
          "Dynamic Island",
          "Always‑On display",
          "HDR display",
          "True Tone",
          "Wide color (P3)",
        ],
      },
    ],
  },
];

export const ProductInfo = ({ description }) => {
  const PREVIEW_SECTIONS = 2;

  const [expanded, setExpanded] = useState(false);

  const displayedSections = expanded
    ? specData
    : specData.slice(0, PREVIEW_SECTIONS);

  return (
    <CardContainer className="rounded-sm space-y-6">
      {/* Headline & intro */}
      <div className="space-y-2">
        <h2 className="text-lg font-bold text-gray-800">Product Details</h2>
        <p className="text-sm leading-relaxed text-[#9D9D9D]">
          {description ??
            `Just as a book is judged by its cover, the first thing you notice
            when you pick up a modern smartphone is the display…`}
        </p>
      </div>

      {/* Specs table(s) */}
      <div className="relative">
        <div className="max-h-[400px] overflow-y-auto no-scrollbar">
          {displayedSections.map(({ section, rows }) => (
            <section key={section} className="pt-6 first:pt-0">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                {section}
              </h3>

              <table className="w-full text-sm">
                <tbody>
                  {rows.map(({ label, value }) => (
                    <tr key={label} className="border-b border-gray-200">
                      <td className="py-3 pr-4 text-gray-600">{label}</td>

                      <td className="py-3 px-4 text-right font-medium">
                        {Array.isArray(value) ? (
                          <ul className="flex flex-col items-end">
                            {value.map((v, i) => (
                              <li key={i}>{v}</li>
                            ))}
                          </ul>
                        ) : (
                          value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          ))}
        </div>
      </div>

      {/* Expand / collapse button  */}
      {specData.length > PREVIEW_SECTIONS && (
        <div className="flex justify-center">
          <Button
            variant="secondary"
            onClick={() => setExpanded((prev) => !prev)}
            className="border px-10 py-2 mt-2 rounded-md text-sm border-black font-medium hover:bg-gray-100 transition"
          >
            {expanded ? "View Less" : "View More "}
            {expanded ? (
              <IconArrowDown />
            ) : (
              <IconArrowDown className="rotate-180" />
            )}
          </Button>
        </div>
      )}
    </CardContainer>
  );
};
