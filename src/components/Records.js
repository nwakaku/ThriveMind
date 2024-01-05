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

const recordData = () => {
  return [
    {
      type: "Allergies",
      count: 3,
      label: "diagnosed allergies",
      imageSrc: "https://i.ibb.co/1Z3fXW1/allergies.png",
      details: [
        {
          allergy: "Peanuts",
          reaction: "Hives",
        },
        {
          allergy: "Penicillin",
          reaction: "Anaphylaxis",
        },
        {
          allergy: "Dust Mites",
          reaction: "Runny nose",
        },
      ],
    },
    {
      type: "Clinical Vitals",
      count: 24,
      label: "vital records",
      imageSrc: "https://i.ibb.co/X7709gS/vitals.png",
      details: [
        {
          date: "2023-01-15",
          temperature: "98.6°F",
          bloodPressure: "120/80 mmHg",
          heartRate: "75 bpm",
        },
        {
          date: "2023-02-02",
          temperature: "99.2°F",
          bloodPressure: "122/78 mmHg",
          heartRate: "80 bpm",
        },
        // Additional records...
      ],
    },
    {
      type: "Conditions",
      count: 3,
      label: "known conditions",
      imageSrc: "https://i.ibb.co/xGGrzR8/condition.png",
      details: [
        {
          condition: "Hypertension",
          diagnosisDate: "2022-05-10",
        },
        {
          condition: "Type 2 Diabetes",
          diagnosisDate: "2021-08-20",
        },
        {
          condition: "Asthma",
          diagnosisDate: "2023-03-03",
        },
      ],
    },
    {
      type: "Immunizations",
      count: 10,
      label: "total immunizations",
      imageSrc: "https://i.ibb.co/mq6pMx2/immunization.png",
      details: [
        {
          vaccine: "COVID-19 Pfizer",
          date: "2022-12-15",
        },
        {
          vaccine: "Influenza",
          date: "2022-10-02",
        },
        // Additional records...
      ],
    },
    {
      type: "Test Results",
      count: 124,
      label: "lab results",
      imageSrc: "https://i.ibb.co/D9qYtMN/result.png",
      details: [
        {
          test: "Complete Blood Count (CBC)",
          date: "2022-11-28",
          result: "Normal",
        },
        {
          test: "Lipid Panel",
          date: "2023-01-10",
          result: "High cholesterol",
        },
        // Additional records...
      ],
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
          <ArrowRightCircle />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-gray-700">
        <DialogHeader className='flex flex-row items-center'>
          <img className="w-6 h-6 mr-2 mt-1" src={recordImage}/>
          <DialogTitle>{`${recordType} Record`}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-around">
          {recordDetails.map((detail, index) => (
            <>
              <div key={index} className="flex flex-col items-start">
                {Object.entries(detail).map(([key, value]) => (
                  <div key={key} className="my-3">
                    <Label htmlFor={key} className="text-right font-semibold">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Label>
                    <p id={key} className="text-sm">
                      {Array.isArray(value)
                        ? value.map((item, idx) => (
                            <div key={idx} className="ml-4">
                              {Object.entries(item).map(
                                ([itemKey, itemValue]) => (
                                  <p key={itemKey}>
                                    <span className="font-semibold">
                                      {itemKey}:
                                    </span>{" "}
                                    {itemValue}
                                  </p>
                                )
                              )}
                            </div>
                          ))
                        : value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-b border-gray-400"></div>
            </>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              className="mx-auto bg-indigo-500 hover:bg-indigo-700"
              onClick={onClose}
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const Records = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecordType, setEditedRecordType] = useState("");
  const [recordDetails, setRecordDetails] = useState([]);

  const handleEditClick = (recordType, details) => {
    setEditedRecordType(recordType);
    setRecordDetails(details);
    setIsEditing(true);
  };

  const handleCloseDialog = () => {
    setIsEditing(false);
    setRecordDetails([]);
  };

  return (
    <div className="h-full w-full flex flex-col p-6">
      {/* Header top */}
      <div className="flex justify-between space-x-4">
        <p className="font-semibold text-lg">Clinical data</p>
        <div className="flex ">
          <button className="text-indigo-500 flex items-center space-x-2 mr-6 ">
            <ArrowUpLeft />
            <p className=" text-sm ">Export Medical Records</p>
          </button>

          <button className="text-indigo-500 flex items-center space-x-2">
            <FaSortDown className="mb-2" />
            <p className=" text-sm ">Sort</p>
          </button>
        </div>
      </div>

      {/* Main body */}
      <div className="flex flex-col mt-5">
        {/* Options available */}
        {recordData().map((record, index) => (
          <>
            <div key={index} className="flex justify-between my-6 items-center">
              <div className="flex space-x-4 items-center">
                <Image
                  width="40"
                  height="40"
                  src={record.imageSrc}
                  className="w-10 h-10"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-sm">{record.type}</p>
                  <p className="text-xs">{`${record.count} ${record.label}`}</p>
                </div>
              </div>
              <div>
                <button
                  className="text-indigo-500 flex items-center space-x-2 "
                  onClick={() => handleEditClick(record.type, record.details)}
                >
                  <p className=" text-sm mr-3 ">{record.type}</p>
                  <EditDialog
                    isOpen={isEditing && editedRecordType === record.type}
                    onClose={handleCloseDialog}
                    recordType={editedRecordType}
                    recordDetails={recordDetails}
                    recordImage={record.imageSrc}
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
