import React from "react";
import StatusCheckbox from "./StatusCheckbox";
import { List } from "../ui/List";

export const OrdersFilter = ({
  selected = [],
  onChange,
  selectedTime = [],
  onTimeChange,
}) => {
  const ORDER_STATUSES = ["On the way", "Delivered", "Cancelled", "Returned"];
  const ORDER_TIME = ["Last 30 Days", "2024", "2025", "2030"];

  return (
    <div className="w-full max-w-[250px]">
      <div className="space-y-2  px-2">
        <div className="w-full border-b border-gray-200 p-3">
          <h2 className=" text-md font-semibold mb-4 text-gray-900 ">
            Filters
          </h2>

          <div className=" space-y-4">
            <h4 className=" text-sm text-gray-600 font-semibold">
              ORDER STATUS
            </h4>
            <List
              className=" flex flex-col"
              data={ORDER_STATUSES}
              uniqueKey="id"
              render={(status) => (
                <>
                  <StatusCheckbox
                    label={status}
                    checked={selected.includes(status)}
                    onChange={(checked) => onChange?.(status, checked)}
                  />
                </>
              )}
            />
          </div>
        </div>
        {/* Order Time */}
        <div className=" p-3">
          <div className=" space-y-4">
            <h4 className=" text-sm text-gray-600 font-semibold">Order Time</h4>
            <List
              className=" flex flex-col"
              data={ORDER_TIME}
              uniqueKey="id"
              render={(time) => (
                <>
                  <StatusCheckbox
                    label={time}
                    checked={selectedTime.includes(time)}
                    onChange={(checked) => onTimeChange?.(time, checked)}
                  />
                </>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
