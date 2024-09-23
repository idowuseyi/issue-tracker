"use client";

import React from "react";
import SimpleMDE from "react-simplemde-editor"
import { TextField, TextArea, Button } from "@radix-ui/themes";

import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title" />
      <SimpleMDE placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
