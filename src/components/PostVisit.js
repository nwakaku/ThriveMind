import { FaSortDown } from "react-icons/fa";
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
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ctk = "https://i.ibb.co/SnMGHdq/1.png";
const imans = "https://i.ibb.co/3z55V65/2.png";
const jj = "https://i.ibb.co/QQB5z95/3.png";
const salford = "https://i.ibb.co/fkB5tRK/4.png";


const postVisitData = () => {
  return [
    {
      hospital: "Christ The King Hospital",
      last_Visit: "22nd-June-2023",
      doctor: "Dr. Johnson",
      condition: "Hypertension",
      medication: "Lisinopril",
      medication_Instructions: "Take 1 tablet in the morning and 1 tablet at night",
      next_Appointment: "30th-July-2023",
      img: ctk
    },
    {
      hospital: "Salford Medical Centre",
      last_Visit: "1th-May-2023",
      doctor: "Dr. Smith",
      condition: "Chronic Bronchitis",
      medication: "Inhaled Corticosteroids",
      medication_Instructions: "Use inhaler 2 puffs every 12 hours",
      next_Appointment: "15th-June-2023",
      img: salford
    },
    {
      hospital: "IMans Memorial Hospital",
      last_Visit: "8th-Oct-2022",
      doctor: "Dr. Patel",
      condition: "Type 2 Diabetes",
      medication: "Metformin",
      medication_Instructions: "Take 1 tablet with meals",
      next_Appointment: "12th-Nov-2022",
      img: imans
    },
    {
      hospital: "Jakes & Jakes Medical Centre",
      last_Visit: "11th-April-2022",
      doctor: "Dr. Brown",
      condition: "Rheumatoid Arthritis",
      medication: "Methotrexate",
      medication_Instructions: "Take 1 tablet once a week",
      next_Appointment: "25th-May-2022",
      img: jj
    },
  ];
};


const EditDialog = ({ isOpen, onClose, recordType, recordDetails, recordImage }) => {
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
        <DialogHeader className='flex flex-row items-center'>
          <img className="w-6 h-6 mr-2 mt-1 rounded-full" src={recordImage}/>
          <DialogTitle>{`Checkup Details`}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-around">
          {Object.entries(recordDetails).map(([key, value]) => (
            key !== "img" && (
              <div key={key} className="my-3">
                <Label htmlFor={key} className="text-right font-semibold">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Label>
                <p id={key} className="text-sm">
                  {value}
                </p>
              </div>
            )
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              className="mx-auto bg-indigo-500 hover:bg-indigo-700"
              onClick={onClose}
            >
              Set Reminder
            </Button>
          </DialogClose>
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
                <img
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
                    recordImage={record.img}
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
