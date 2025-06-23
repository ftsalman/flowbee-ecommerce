import React, { useState } from "react";
import { SidePanel } from "../Components/settings-page/SidePanel";
import { cn } from "../utils/utils";
import { Button } from "../Components/ui/button/Button";
import Avatar from "../Components/ui/Avatar";
import { CardContainer } from "../Components/ui/CardContainer";
import { InputGroup } from "../Components/ui/InputGroup";

import { inputboxVariants } from "../Components/ui/input-box/inputboxVariants";
import PhoneInput from "../Components/phone-input/PhoneInput ";
import {
  IconArrowRightAlt,
  IconCheck,
  IconClose,
} from "../assets/icons/InterfaceIcons";

const initialFormData = {
  name: "Yogesh E",
  email: "Sample@gmail.com",
  profile_IMG:
    "https://i.pinimg.com/736x/31/c3/53/31c353dbaebf190752e7340b9de72bc2.jpg",
  Phone: "+44 (158) 008–9987",
  Notifications: "sound",
};

const SettingsPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [activeTab, setActiveTab] = useState("account-settings");

  return (
    <div className="relative sm:p-3 p-0 min-h-[calc(100vh-3.73rem)] flex">
      <div className="container mx-auto flex gap-3 sm:rounded-2xl">
        <SidePanel
          user={{ name: formData.name, avatar: formData.profile_IMG }}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onLogout={() => console.log("Logging out...")}
        />

        <div className="md:ml-[212px] lg:ml-[252px] flex-grow bg-white sm:rounded-2xl shadow overflow-y-auto no-scrollbar max-h-[calc(100vh-3.73rem)]">
          <div className="p-4 space-y-4">
            {/* Heading */}
            <SettingsSection>
              <div className="flex flex-col">
                <h4 className="text-md md:text-lg font-semibold">
                  Your Profile
                </h4>
                <p className="text-sm text-gray-600">
                  Please update your profile settings here
                </p>
              </div>
            </SettingsSection>

            {/* Profile Picture */}
            <SettingsSection>
              <CardContainer className="grid grid-cols-12 items-center gap-4 p-0">
                <h5 className="col-span-3 text-sm font-semibold">
                  Profile Picture
                </h5>
                <div className="col-span-9 flex items-center gap-4">
                  <Avatar
                    imgUrl="https://i.pinimg.com/736x/6a/b4/24/6ab42465a1ee7d5bcb103decfef88ecc.jpg"
                    loading={false}
                    className="size-14 cursor-pointer hover:scale-105 transition-all duration-300"
                  />
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      className="bg-gray-800 text-white rounded-full w-[5rem]"
                    >
                      Edit
                      <IconArrowRightAlt size="20" />
                    </Button>
                    <Button
                      variant="secondary"
                      className="bg-red-400 rounded-full text-white"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContainer>
            </SettingsSection>

            {/* Username */}
            <SettingsSection>
              <CardContainer className="grid grid-cols-12 items-center gap-4 p-0">
                <h5 className="col-span-3 text-sm font-semibold">Username</h5>
                <div className="col-span-9">
                  <InputGroup
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    inputClassName="rounded-full w-full"
                  />
                </div>
              </CardContainer>
            </SettingsSection>

            {/* Phone Number */}
            <SettingsSection>
              <CardContainer className="grid grid-cols-12 items-center gap-4 p-0">
                <h5 className="col-span-3   text-sm  font-semibold">
                  Phone Number
                </h5>
                <div className="col-span-9 ">
                  <InputGroup className="rounded-full">
                    <PhoneInput
                      number={formData.Phone}
                      setNumber={(num) =>
                        setFormData((prev) => ({ ...prev, Phone: num }))
                      }
                      intlProps={{
                        inputProps: {
                          name: "mobile",
                          id: "mobile",
                          className: inputboxVariants({
                            variant: "secondary",
                            size: "md",
                            className: " w-full  ",
                          }),
                        },
                        initOptions: {
                          initialCountry: "in",
                          onlyCountries: [
                            "in",
                            "ae",
                            "qa",
                            "bh",
                            "kw",
                            "om",
                            "sa",
                          ],
                        },
                      }}
                    />
                  </InputGroup>
                </div>
              </CardContainer>
            </SettingsSection>

            {/* Email */}
            <SettingsSection>
              <CardContainer className="grid grid-cols-12 items-center gap-4 p-0">
                <h5 className="col-span-3 text-sm font-semibold">
                  Email Address
                </h5>
                <div className="col-span-9">
                  <InputGroup
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    inputClassName="rounded-full w-full"
                  />
                </div>
              </CardContainer>
            </SettingsSection>

            {/* Notifications */}
            <SettingsSection>
              <CardContainer className="grid grid-cols-12 gap-4 p-0">
                <h5 className="col-span-3 mt-[-6rem]  text-sm font-semibold">
                  Notifications
                </h5>
                <div className="col-span-9 flex flex-col gap-4">
                  <label className="flex items-start  gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="notification"
                      checked={formData.Notifications === "email"}
                      onChange={() =>
                        setFormData((prev) => ({
                          ...prev,
                          Notifications: "email",
                        }))
                      }
                    />
                    <div>
                      <p className="font-semibold">Email Notification</p>
                      <p className="text-sm text-gray-500">
                        You will be notified when a new email arrives.
                      </p>
                    </div>
                  </label>

                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="notification"
                      checked={formData.Notifications === "sound"}
                      onChange={() =>
                        setFormData((prev) => ({
                          ...prev,
                          Notifications: "sound",
                        }))
                      }
                    />
                    <div>
                      <p className="font-semibold">Sound Notification</p>
                      <p className="text-sm text-gray-500">
                        You will be notified with sound when someone messages
                        you.
                      </p>
                    </div>
                  </label>
                </div>
              </CardContainer>
            </SettingsSection>

            {/* Action Buttons */}
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="secondary" className="border rounded-full px-4">
                Cancel
                <IconClose />
              </Button>
              <Button
                variant="secondary"
                className="bg-black text-white rounded-full px-4"
              >
                Save
                <IconCheck />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

// Reusable Section Wrapper
export const SettingsSection = ({ children, className }) => {
  return (
    <div
      className={cn(
        "p-4 flex flex-col gap-4 border-b border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};
