import React from "react";
import { FileText } from "lucide-react";
import ResumeForm from "../../components/ResumeComponents/ResumeForm";
import ResumePDF from "../../components/ResumeComponents/ResumePDF";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Professional Resume Builder
            </h1>
          </div>
        </div>
      </header>
      <main className="py-8">
        <ResumeForm />
      </main>
      <footer className="bg-white border-t py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>Create your professional resume with our ATS-friendly builder</p>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
