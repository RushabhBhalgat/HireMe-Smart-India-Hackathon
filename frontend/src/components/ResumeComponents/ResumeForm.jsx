import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Minus } from "lucide-react";
import { defaultResumeData } from "./utils";

export default function ResumeForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(defaultResumeData);

  const handleSubmit = (e) => {
    e.preventDefault(); // to ensuure that the whole page does not reload
    navigate("/preview", { state: { resumeData: formData } });
  };

  const handlePersonalInfoChange = (e) => {
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  const addSection = (section) => {
    if (Array.isArray(formData[section])) {
      setFormData({
        ...formData,
        [section]: [...formData[section], defaultResumeData[section][0]],
      });
    }
  };

  const removeSection = (section, index) => {
    if (Array.isArray(formData[section])) {
      setFormData({
        ...formData,
        [section]: formData[section].filter((_, i) => i !== index),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Personal Information */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Personal Information
        </h2>

        {/* Grid for Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              First Name
            </label>
            <input
              className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.personalInfo.firstName}
              onChange={handlePersonalInfoChange}
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Last Name
            </label>
            <input
              className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.personalInfo.lastName}
              onChange={handlePersonalInfoChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Email
            </label>
            <input
              className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.personalInfo.email}
              onChange={handlePersonalInfoChange}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Phone Number
            </label>
            <input
              className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.personalInfo.phone}
              onChange={handlePersonalInfoChange}
              required
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Location
            </label>
            <input
              className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="location"
              placeholder="Location"
              value={formData.personalInfo.location}
              onChange={handlePersonalInfoChange}
              required
            />
          </div>

          {/* Professional Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Professional Title
            </label>
            <input
              className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="title"
              placeholder="Professional Title"
              value={formData.personalInfo.title}
              onChange={handlePersonalInfoChange}
              required
            />
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mt-6">
          <label
            htmlFor="summary"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Professional Summary
          </label>
          <textarea
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            name="summary"
            placeholder="Professional Summary"
            value={formData.personalInfo.summary}
            onChange={handlePersonalInfoChange}
            rows={4}
            required
          />
        </div>
      </div>

      {/* Education */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Education</h2>

          {/* Add Education Section */}
        </div>

        {/* Dynamic Education Fields */}
        {formData.education.map((edu, index) => (
          <div key={index} className="mb-6 border-b pb-6">
            <div className="flex justify-between items-center">
              {/* Remove Education Section */}
              <button
                type="button"
                onClick={() => removeSection("education", index)}
                className="text-red-600 hover:text-red-800 flex items-center"
              >
                <Minus className="w-5 h-5 mr-2" /> Remove
              </button>
            </div>

            {/* Education Fields */}
            <div className="mt-4">
              <input
                className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                type="text"
                placeholder="School/Institution Name"
                value={edu.school}
                onChange={(e) => {
                  const newEdu = [...formData.education];
                  newEdu[index].school = e.target.value;
                  setFormData({ ...formData, education: newEdu });
                }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Degree */}
                <input
                  className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Degree/Certification"
                  value={edu.degree}
                  onChange={(e) => {
                    const newEdu = [...formData.education];
                    newEdu[index].degree = e.target.value;
                    setFormData({ ...formData, education: newEdu });
                  }}
                />

                {/* Graduation Institution Name */}
                <input
                  className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Graduation Institute Name"
                  value={edu.graduation}
                  onChange={(e) => {
                    const newEdu = [...formData.education];
                    newEdu[index].graduation = e.target.value;
                    setFormData({ ...formData, education: newEdu });
                  }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {/* Graduation Start Date */}
                <input
                  className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="date"
                  placeholder="Graduation Start Date"
                  value={edu.startDate}
                  onChange={(e) => {
                    const newEdu = [...formData.education];
                    newEdu[index].startDate = e.target.value;
                    setFormData({ ...formData, education: newEdu });
                  }}
                />

                {/* Graduation End Date */}
                <input
                  className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="date"
                  placeholder="Graduation End Date"
                  value={edu.endDate}
                  onChange={(e) => {
                    const newEdu = [...formData.education];
                    newEdu[index].endDate = e.target.value;
                    setFormData({ ...formData, education: newEdu });
                  }}
                />
              </div>

              <input
                className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Location"
                value={edu.location}
                onChange={(e) => {
                  const newEdu = [...formData.education];
                  newEdu[index].location = e.target.value;
                  setFormData({ ...formData, education: newEdu });
                }}
              />

              <div className="mt-4">
                {/* GPA */}
                <input
                  className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="GPA"
                  value={edu.gpa}
                  onChange={(e) => {
                    const newEdu = [...formData.education];
                    newEdu[index].gpa = e.target.value;
                    setFormData({ ...formData, education: newEdu });
                  }}
                />
              </div>

              {/* Relevant Coursework */}
              <div className="mt-4">
                <input
                  className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Relevant Coursework"
                  value={edu.coursework}
                  onChange={(e) => {
                    const newEdu = [...formData.education];
                    newEdu[index].coursework = e.target.value;
                    setFormData({ ...formData, education: newEdu });
                  }}
                />
              </div>
            </div>
          </div>
        ))}

        {/* Add Another Education Section Button */}
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              education: [
                ...formData.education,
                {
                  school: "",
                  degree: "",
                  graduation: "",
                  startDate: "",
                  endDate: "",
                  gpa: "",
                  coursework: "",
                },
              ],
            })
          }
          className="text-blue-600 hover:text-blue-800 flex items-center mt-4"
        >
          <Plus className="w-6 h-6 mr-2" /> Add Education
        </button>
      </div>

      {/* Skills */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Skills</h2>
        </div>

        {/* Dynamic Skills Fields */}
        {(formData.skills || []).map((skills, index) => (
          <div key={index} className="mb-8 border-b pb-6">
            <div className="flex justify-between items-center">
              {/* Remove the Skills Section */}
              <button
                type="button"
                onClick={() => removeSection("skills", index)}
                className="text-red-600 hover:text-red-800 flex items-center"
              >
                <Minus className="w-5 h-5 mr-2" /> Remove Section
              </button>
            </div>

            {/* Technical Skills */}
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills.technical.map((techSkill, techIndex) => (
                  <div key={techIndex} className="flex items-center space-x-2">
                    <input
                      className="p-3 border rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                      placeholder="Technical Skills"
                      value={techSkill}
                      onChange={(e) => {
                        const newSkills = [...formData.skills];
                        newSkills[index].technical[techIndex] = e.target.value;
                        setFormData({ ...formData, skills: newSkills });
                      }}
                    />
                    {/* Show the Minus icon only if there's more than 1 skill */}
                    {skills.technical.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          const newSkills = [...formData.skills];
                          newSkills[index].technical.splice(techIndex, 1);
                          setFormData({ ...formData, skills: newSkills });
                        }}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {/* Add a new technical skill field */}
              <button
                type="button"
                onClick={() => {
                  const newSkills = [...formData.skills];
                  newSkills[index].technical.push("");
                  setFormData({ ...formData, skills: newSkills });
                }}
                className="text-blue-600 hover:text-blue-800 flex items-center mt-2"
              >
                <Plus className="w-4 h-4 mr-2" /> Add Technical Skill
              </button>
            </div>

            {/* Soft Skills */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills.soft.map((softSkill, softIndex) => (
                  <div key={softIndex} className="flex items-center space-x-2">
                    <input
                      className="p-3 border rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                      placeholder="Soft Skills"
                      value={softSkill}
                      onChange={(e) => {
                        const newSkills = [...formData.skills];
                        newSkills[index].soft[softIndex] = e.target.value;
                        setFormData({ ...formData, skills: newSkills });
                      }}
                    />
                    {/* Show the Minus icon only if there's more than 1 skill */}
                    {skills.soft.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          const newSkills = [...formData.skills];
                          newSkills[index].soft.splice(softIndex, 1);
                          setFormData({ ...formData, skills: newSkills });
                        }}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {/* Add a new soft skill field */}
              <button
                type="button"
                onClick={() => {
                  const newSkills = [...formData.skills];
                  newSkills[index].soft.push("");
                  setFormData({ ...formData, skills: newSkills });
                }}
                className="text-blue-600 hover:text-blue-800 flex items-center mt-2"
              >
                <Plus className="w-4 h-4 mr-2" /> Add Soft Skill
              </button>
            </div>

            {/* Industry-Specific Skills */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Industry-Specific Skills
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills.industry.map((industrySkill, industryIndex) => (
                  <div
                    key={industryIndex}
                    className="flex items-center space-x-2"
                  >
                    <input
                      className="p-3 border rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                      placeholder="Industry-Specific Skills"
                      value={industrySkill}
                      onChange={(e) => {
                        const newSkills = [...formData.skills];
                        newSkills[index].industry[industryIndex] =
                          e.target.value;
                        setFormData({ ...formData, skills: newSkills });
                      }}
                    />
                    {/* Show the Minus icon only if there's more than 1 skill */}
                    {skills.industry.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          const newSkills = [...formData.skills];
                          newSkills[index].industry.splice(industryIndex, 1);
                          setFormData({ ...formData, skills: newSkills });
                        }}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {/* Add a new industry-specific skill field */}
              <button
                type="button"
                onClick={() => {
                  const newSkills = [...formData.skills];
                  newSkills[index].industry.push("");
                  setFormData({ ...formData, skills: newSkills });
                }}
                className="text-blue-600 hover:text-blue-800 flex items-center mt-2"
              >
                <Plus className="w-4 h-4 mr-2" /> Add Industry-Specific Skill
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Expereince */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Experience</h2>
        </div>

        {/* Dynamic Experience Fields */}
        {formData.experience.map((exp, index) => (
          <div key={index} className="mb-8 border-b pb-6">
            <div className="flex justify-between items-center">
              {/* Remove the Experience Section */}
              <button
                type="button"
                onClick={() => removeSection("experience", index)}
                className="text-red-600 hover:text-red-800 flex items-center"
              >
                <Minus className="w-5 h-5 mr-2" /> Remove Experience
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* Job Title */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Job Title"
                value={exp.title}
                onChange={(e) => {
                  const newExp = [...formData.experience];
                  newExp[index].title = e.target.value;
                  setFormData({ ...formData, experience: newExp });
                }}
              />
              {/* Company Name */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Company Name"
                value={exp.company}
                onChange={(e) => {
                  const newExp = [...formData.experience];
                  newExp[index].company = e.target.value;
                  setFormData({ ...formData, experience: newExp });
                }}
              />
              {/* Position */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Position"
                value={exp.position}
                onChange={(e) => {
                  const newExp = [...formData.experience];
                  newExp[index].position = e.target.value;
                  setFormData({ ...formData, experience: newExp });
                }}
              />
              {/* Location */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Location"
                value={exp.location}
                onChange={(e) => {
                  const newExp = [...formData.experience];
                  newExp[index].location = e.target.value;
                  setFormData({ ...formData, experience: newExp });
                }}
              />
            </div>

            <div className="flex gap-4 mt-4">
              {/* Start Date */}
              <input
                className="p-3 border rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="date"
                placeholder="Start Date"
                value={exp.startDate}
                onChange={(e) => {
                  const newExp = [...formData.experience];
                  newExp[index].startDate = e.target.value;
                  setFormData({ ...formData, experience: newExp });
                }}
              />
              {/* End Date */}
              <input
                className="p-3 border rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="date"
                placeholder="End Date"
                value={exp.endDate}
                onChange={(e) => {
                  const newExp = [...formData.experience];
                  newExp[index].endDate = e.target.value;
                  setFormData({ ...formData, experience: newExp });
                }}
                disabled={exp.current}
              />
            </div>

            {/* Description */}
            <textarea
              className="w-full p-3 border rounded-lg mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Description"
              value={exp.description}
              onChange={(e) => {
                const newExp = [...formData.experience];
                newExp[index].description = e.target.value;
                setFormData({ ...formData, experience: newExp });
              }}
              rows={4}
            />
          </div>
        ))}

        {/* Add New Experience */}
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              experience: [
                ...formData.experience,
                {
                  title: "",
                  company: "",
                  position: "",
                  location: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                },
              ],
            })
          }
          className="text-blue-600 hover:text-blue-800 flex items-center mt-4"
        >
          <Plus className="w-6 h-6 mr-2" /> Add Experience
        </button>
      </div>

      {/* Certifications */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Certifications
          </h2>
        </div>

        {/* Dynamic Certifications Fields */}
        {formData.certifications.map((cert, index) => (
          <div key={index} className="mb-8 border-b pb-6">
            <div className="flex justify-between items-center">
              {/* Remove Certification Section */}
              <button
                type="button"
                onClick={() => removeSection("certifications", index)}
                className="text-red-600 hover:text-red-800 flex items-center"
              >
                <Minus className="w-5 h-5 mr-2" /> Remove Certification
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* Certification Name */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Certification Name"
                value={cert.name}
                onChange={(e) => {
                  const newCert = [...formData.certifications];
                  newCert[index].name = e.target.value;
                  setFormData({ ...formData, certifications: newCert });
                }}
              />
              {/* Issuing Organization */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Issuing Organization"
                value={cert.org}
                onChange={(e) => {
                  const newCert = [...formData.certifications];
                  newCert[index].org = e.target.value;
                  setFormData({ ...formData, certifications: newCert });
                }}
              />
              {/* Date Issued */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="date"
                placeholder="Date Issued/Expiration"
                value={cert.date}
                onChange={(e) => {
                  const newCert = [...formData.certifications];
                  newCert[index].date = e.target.value;
                  setFormData({ ...formData, certifications: newCert });
                }}
              />
              {/* Credential ID/URL */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Credential ID/URL"
                value={cert.id}
                onChange={(e) => {
                  const newCert = [...formData.certifications];
                  newCert[index].id = e.target.value;
                  setFormData({ ...formData, certifications: newCert });
                }}
              />
            </div>
          </div>
        ))}

        {/* Add New Certification */}
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              certifications: [
                ...formData.certifications,
                { name: "", org: "", date: "", id: "" },
              ],
            })
          }
          className="text-blue-600 hover:text-blue-800 flex items-center mt-4"
        >
          <Plus className="w-6 h-6 mr-2" /> Add Certification
        </button>
      </div>

      {/* Projects */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Projects</h2>
        </div>

        {/* Dynamic Projects Fields */}
        {formData.projects.map((project, index) => (
          <div key={index} className="mb-8 border-b pb-6">
            <div className="flex justify-between items-center">
              {/* Remove Project Section */}
              <button
                type="button"
                onClick={() => removeSection("projects", index)}
                className="text-red-600 hover:text-red-800 flex items-center"
              >
                <Minus className="w-5 h-5 mr-2" /> Remove Project
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* Project Title */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Project Title"
                value={project.title}
                onChange={(e) => {
                  const newProject = [...formData.projects];
                  newProject[index].title = e.target.value;
                  setFormData({ ...formData, projects: newProject });
                }}
              />
              {/* Role */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Role"
                value={project.role}
                onChange={(e) => {
                  const newProject = [...formData.projects];
                  newProject[index].role = e.target.value;
                  setFormData({ ...formData, projects: newProject });
                }}
              />
              {/* Project Dates */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="date"
                placeholder="Dates"
                value={project.dates}
                onChange={(e) => {
                  const newProject = [...formData.projects];
                  newProject[index].dates = e.target.value;
                  setFormData({ ...formData, projects: newProject });
                }}
              />

              {/* Technologies/Tools */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Technologies/Tools Used"
                value={project.tools}
                onChange={(e) => {
                  const newProject = [...formData.projects];
                  newProject[index].tools = e.target.value;
                  setFormData({ ...formData, projects: newProject });
                }}
              />
              {/* Impact/Results */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Impact or Results"
                value={project.impact}
                onChange={(e) => {
                  const newProject = [...formData.projects];
                  newProject[index].impact = e.target.value;
                  setFormData({ ...formData, projects: newProject });
                }}
              />
            </div>
            <div>
              {/* Project Description */}
              <textarea
                className="mt-4 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Description"
                value={project.description}
                onChange={(e) => {
                  const newProject = [...formData.projects];
                  newProject[index].description = e.target.value;
                  setFormData({ ...formData, projects: newProject });
                }}
                rows={4}
              />
            </div>
          </div>
        ))}

        {/* Add New Project */}
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              projects: [
                ...formData.projects,
                {
                  title: "",
                  role: "",
                  dates: "",
                  description: "",
                  tools: "",
                  impact: "",
                },
              ],
            })
          }
          className="text-blue-600 hover:text-blue-800 flex items-center mt-4"
        >
          <Plus className="w-6 h-6 mr-2" /> Add Project
        </button>
      </div>

      {/* Awards & Achievements */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Awards & Achievements
          </h2>
        </div>

        {/* Dynamic Awards Fields */}
        {(formData.awards || []).map((award, index) => (
          <div key={index} className="mb-8 border-b pb-6">
            <div className="flex justify-between items-center">
              {/* Remove Award Section */}
              <button
                type="button"
                onClick={() => removeSection("awards", index)}
                className="text-red-600 hover:text-red-800 flex items-center"
              >
                <Minus className="w-5 h-5 mr-2" /> Remove Award
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* Award Name */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Award"
                value={award.name}
                onChange={(e) => {
                  const newAwards = [...formData.awards];
                  newAwards[index].name = e.target.value;
                  setFormData({ ...formData, awards: newAwards });
                }}
              />
              {/* Issuing Organization */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Issuing Organization"
                value={award.organization}
                onChange={(e) => {
                  const newAwards = [...formData.awards];
                  newAwards[index].organization = e.target.value;
                  setFormData({ ...formData, awards: newAwards });
                }}
              />
              {/* Award Date */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="date"
                placeholder="Date"
                value={award.date}
                onChange={(e) => {
                  const newAwards = [...formData.awards];
                  newAwards[index].date = e.target.value;
                  setFormData({ ...formData, awards: newAwards });
                }}
              />
            </div>
            <div>
              {/* Award Description */}
              <textarea
                className="mt-4 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Description"
                value={award.description}
                onChange={(e) => {
                  const newAwards = [...formData.awards];
                  newAwards[index].description = e.target.value;
                  setFormData({ ...formData, awards: newAwards });
                }}
                rows={4}
              />
            </div>
          </div>
        ))}

        {/* Add New Award */}
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              awards: [
                ...formData.awards,
                { name: "", organization: "", date: "", description: "" },
              ],
            })
          }
          className="text-blue-600 hover:text-blue-800 flex items-center mt-4"
        >
          <Plus className="w-6 h-6 mr-2" /> Add Award
        </button>
      </div>

      {/* Volunteer Experience  */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Volunteer Experience
          </h2>
        </div>

        {/* Dynamic Volunteer Experience Fields */}
        {(formData.volunteer || []).map((experience, index) => (
          <div key={index} className="mb-8 border-b pb-6">
            <div className="flex justify-between items-center">
              {/* Remove Volunteer Experience Section */}
              <button
                type="button"
                onClick={() => removeSection("volunteer", index)}
                className="text-red-600 hover:text-red-800 flex items-center"
              >
                <Minus className="w-5 h-5 mr-2" /> Remove Experience
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* Role */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Role"
                value={experience.role}
                onChange={(e) => {
                  const newVolunteer = [...formData.volunteer];
                  newVolunteer[index].role = e.target.value;
                  setFormData({ ...formData, volunteer: newVolunteer });
                }}
              />
              {/* Organization */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Organization"
                value={experience.organization}
                onChange={(e) => {
                  const newVolunteer = [...formData.volunteer];
                  newVolunteer[index].organization = e.target.value;
                  setFormData({ ...formData, volunteer: newVolunteer });
                }}
              />
              {/* Dates */}
              <input
                className="p-3 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="date"
                placeholder="Dates"
                value={experience.dates}
                onChange={(e) => {
                  const newVolunteer = [...formData.volunteer];
                  newVolunteer[index].dates = e.target.value;
                  setFormData({ ...formData, volunteer: newVolunteer });
                }}
              />
            </div>
            <div>
              {/* Responsibilities & Achievements */}
              <textarea
                className="mt-4 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Responsibilities & Achievements"
                value={experience.responsibilities}
                onChange={(e) => {
                  const newVolunteer = [...formData.volunteer];
                  newVolunteer[index].responsibilities = e.target.value;
                  setFormData({ ...formData, volunteer: newVolunteer });
                }}
                rows={4}
              />
            </div>
          </div>
        ))}

        {/* Add New Volunteer Experience */}
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              volunteer: [
                ...formData.volunteer,
                { role: "", organization: "", dates: "", responsibilities: "" },
              ],
            })
          }
          className="text-blue-600 hover:text-blue-800 flex items-center mt-4"
        >
          <Plus className="w-6 h-6 mr-2" /> Add Experience
        </button>
      </div>

      {/* Languages */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Languages</h2>
        </div>

        {/* Dynamic Language Fields */}
        {(formData.languages || []).map((language, index) => (
          <div key={index} className="mb-8 border-b pb-6">
            <div className="flex justify-between items-center">
              {/* Remove Language Section */}
              <button
                type="button"
                onClick={() => removeSection("languages", index)}
                className="text-red-600 hover:text-red-800 flex items-center"
              >
                <Minus className="w-5 h-5 mr-2" /> Remove Language
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* Language Name */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Language"
                value={language.name}
                onChange={(e) => {
                  const newLanguages = [...formData.languages];
                  newLanguages[index].name = e.target.value;
                  setFormData({ ...formData, languages: newLanguages });
                }}
              />
              {/* Language Proficiency */}
              <select
                className="p-3 border rounded-lg text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={language.proficiency}
                onChange={(e) => {
                  const newLanguages = [...formData.languages];
                  newLanguages[index].proficiency = e.target.value;
                  setFormData({ ...formData, languages: newLanguages });
                }}
              >
                <option value="">Select Proficiency</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Fluent">Fluent</option>
                <option value="Native">Native</option>
              </select>
            </div>
          </div>
        ))}

        {/* Add New Language */}
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              languages: [...formData.languages, { name: "", proficiency: "" }],
            })
          }
          className="text-blue-600 hover:text-blue-800 flex items-center mt-4"
        >
          <Plus className="w-6 h-6 mr-2" /> Add Language
        </button>
      </div>

      {/* Publications */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Publications</h2>
        </div>

        {/* Dynamic Publication Fields */}
        {(formData.publications || []).map((publication, index) => (
          <div key={index} className="mb-8 border-b pb-6">
            <div className="flex justify-between items-center">
              {/* Remove Publication Section */}
              <button
                type="button"
                onClick={() => removeSection("publications", index)}
                className="text-red-600 hover:text-red-800 flex items-center"
              >
                <Minus className="w-5 h-5 mr-2" /> Remove Publication
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {/* Publication Title */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Publication Title"
                value={publication.title}
                onChange={(e) => {
                  const newPublications = [...formData.publications];
                  newPublications[index].title = e.target.value;
                  setFormData({ ...formData, publications: newPublications });
                }}
              />
              {/* Journal/Conference */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Journal/Conference"
                value={publication.journal}
                onChange={(e) => {
                  const newPublications = [...formData.publications];
                  newPublications[index].journal = e.target.value;
                  setFormData({ ...formData, publications: newPublications });
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {/* Publication Date */}
              <input
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="date"
                placeholder="Publication Date"
                value={publication.date}
                onChange={(e) => {
                  const newPublications = [...formData.publications];
                  newPublications[index].date = e.target.value;
                  setFormData({ ...formData, publications: newPublications });
                }}
              />
              {/* Description */}
              <textarea
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Description"
                value={publication.description}
                onChange={(e) => {
                  const newPublications = [...formData.publications];
                  newPublications[index].description = e.target.value;
                  setFormData({ ...formData, publications: newPublications });
                }}
              />
            </div>
          </div>
        ))}

        {/* Add New Publication */}
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              publications: [
                ...formData.publications,
                { title: "", journal: "", date: "", description: "" },
              ],
            })
          }
          className="text-blue-600 hover:text-blue-800 flex items-center mt-6"
        >
          <Plus className="w-6 h-6 mr-2" /> Add Publication
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Create Resume
      </button>
    </form>
  );
}
