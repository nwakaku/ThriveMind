import { FaSortDown } from "react-icons/fa";
import ctk from "/public/assets/1.png";
import imans from "/public/assets/2.png";
import jj from "/public/assets/3.png";
import salford from "/public/assets/4.png";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowRightCircle, ArrowUpLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const postVisitData = () => {
  return [
    {
      hospital: "Christ The King Hospital",
      lastVisit: "22nd-June-2023",
      doctor: "Dr. Johnson",
      condition: "Fever",
      medication: "Paracetamol",
      nextAppointment: "30th-July-2023",
    },
    {
      hospital: "Salford Medical Centre",
      lastVisit: "1th-May-2023",
      doctor: "Dr. Smith",
      condition: "Cough",
      medication: "Cough Syrup",
      nextAppointment: "15th-June-2023",
    },
    {
      hospital: "IMans Memorial Hospital",
      lastVisit: "8th-Oct-2022",
      doctor: "Dr. Patel",
      condition: "Headache",
      medication: "Aspirin",
      nextAppointment: "12th-Nov-2022",
    },
    {
      hospital: "Jakes & Jakes Medical Centre",
      lastVisit: "11th-April-2022",
      doctor: "Dr. Brown",
      condition: "Allergy",
      medication: "Antihistamine",
      nextAppointment: "25th-May-2022",
    },
  ];
};

const EditDialog = ({ isOpen, onClose, recordType, recordDetails }) => {
  return (
    <Dialog isOpen={isOpen} onDismiss={onClose}>
      <DialogTrigger asChild>
        <button
          className="text-sm font-medium text-indigo-500"
          onClick={onClose}
        >
          View details
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-gray-700">
        <DialogHeader>
          <DialogTitle>{`${recordType} Details`}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-around">
          {Object.entries(recordDetails).map(([key, value]) => (
            <div key={key} className="my-3">
              <Label htmlFor={key} className="text-right font-semibold">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Label>
              <p id={key} className="text-sm">
                {value}
              </p>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button
            className="mx-auto bg-indigo-500 hover:bg-indigo-700"
            onClick={onClose}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const PostVisit = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecordType, setEditedRecordType] = useState("");
  const [recordDetails, setRecordDetails] = useState({});

  const handleEditClick = (recordType, details) => {
    setEditedRecordType(recordType);
    setRecordDetails(details);
    setIsEditing(true);
  };

  const handleCloseDialog = () => {
    setIsEditing(false);
    setRecordDetails({});
  };

  return (
    <div className="h-full w-full flex flex-col p-6">
      {/* Header top */}
      <div className="flex justify-between space-x-4">
        <p className="font-semibold text-lg">Medical Check-in History</p>
        <div className="flex ">
          {/* <button className="text-indigo-500 flex items-center space-x-2 mr-6 ">
            <ArrowUpLeft />
            <p className=" text-sm ">Export Medical Records</p>
          </button> */}

          <button className="text-indigo-500 flex items-center space-x-2">
            <FaSortDown className="mb-2" />
            <p className=" ">Sort</p>
          </button>
        </div>
      </div>

      {/* Main body */}
      <div className="flex flex-col mt-2">
        {/* Options available */}
        {postVisitData().map((record, index) => (
          <>
            <div
              key={index}
              className="flex justify-between mt-8 mb-5 items-center"
            >
              <div className="flex space-x-6 items-center">
                <Image
                  width="56"
                  height="56"
                  src={
                    index === 0
                      ? ctk
                      : index === 1
                      ? salford
                      : index === 2
                      ? imans
                      : jj
                  }
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-sm">{record.hospital}</p>
                  <p className="text-xs">{`Last visit: ${record.lastVisit}`}</p>
                </div>
              </div>
              <div>
                <button
                  className="text-indigo-500 flex items-center space-x-2 "
                  onClick={() => handleEditClick(record.hospital, record)}
                >
                  <EditDialog
                    isOpen={isEditing && editedRecordType === record.hospital}
                    onClose={handleCloseDialog}
                    recordType={editedRecordType}
                    recordDetails={recordDetails}
                  />
                </button>
              </div>
            </div>
            <div className="border-b border-gray-400"></div>
          </>
        ))}
      </div>
    </div>
  );
};
