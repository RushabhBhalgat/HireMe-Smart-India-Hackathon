import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePDF } from "react-to-pdf";
import { Download, ArrowLeft } from "lucide-react";

export default function ResumePDF() {
  const location = useLocation();
  const navigate = useNavigate();
  const { toPDF, targetRef } = usePDF({ filename: "resume.pdf" });

  // this is the line responsible for the local storage
  const resumeData = location.state?.resumeData;

  if (!resumeData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No resume data found. Please go back and fill the form.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 overflow-auto">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium text-lg"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Form</span>
        </button>
        <button
          onClick={() => toPDF()}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 ease-in-out"
        >
          <Download className="w-5 h-5" />
          <span>Download PDF</span>
        </button>
      </div>
      <div
        className="bg-white p-8 shadow-lg rounded-lg"
        ref={targetRef}
        style={{
          fontFamily: "helvetica-neue-bold",
        }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {resumeData.personalInfo.firstName}{" "}
            {resumeData.personalInfo.lastName}
          </h1>
          <div className="flex justify-center gap-6 mt-4 text-gray-600 text-sm">
            <div className="flex gap-4">
              <p>{resumeData.personalInfo.email}</p>|
              <p>{resumeData.personalInfo.phone}</p>|
              <p>{resumeData.personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div
          className="container mb-8"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <h2 className="text-2xl font-bold  text-gray-800 border-b-2 border-gray-600 pb-2 mb-4">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {resumeData.personalInfo.summary}
          </p>
        </div>

        {/* Education */}
        {resumeData.education.length > 0 && (
          <div className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-800 border-b-2 border-gray-600 mb-4 mt-2"
              style={{
                fontFamily: "computer-modern-serif",
              }}
            >
              Education
            </h2>

            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-4">
                  {/* Left Section: School/Graduation Institute/Certification */}
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-gray-900">
                      <b>{edu.school}</b>
                    </h3>
                    {/* Display the Graduation Institute Name if it exists */}
                    {edu.graduation && (
                      <h4 className="text-gray-600">
                        <b>{edu.graduation}</b>
                      </h4>
                    )}
                    <p className="text-gray-600">
                      <i>{edu.degree}</i>
                    </p>
                    {/* Display GPA if it exists */}
                    {edu.gpa && (
                      <p className="text-gray-600 mt-1">
                        <b>GPA:</b> {edu.gpa}
                      </p>
                    )}
                    {/* Display Coursework if it exists */}
                    {edu.coursework && (
                      <p className="text-gray-600 mt-1">
                        <b>Coursework: </b>
                        {edu.coursework}
                      </p>
                    )}
                  </div>

                  {/* Right Section: Dates */}
                  <div className="text-gray-600 text-right flex flex-col">
                    {edu.location && (
                      <p className="text-gray-600 mt-1">{edu.location}</p>
                    )}
                    {edu.startDate && edu.endDate && (
                      <p className="mt-1">
                        <i>
                          {new Date(edu.startDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                          })}
                          -
                          {new Date(edu.endDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                          })}
                        </i>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {resumeData.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-600 mb-4">
              Skills
            </h2>

            <div>
              {resumeData.skills.map((skills, index) => (
                <div key={index} className="mb-6 w-full flex flex-wrap gap-4">
                  <div>
                    {/* Technical Skills */}
                    {Array.isArray(skills.technical) &&
                      skills.technical.length > 0 && (
                        <>
                          <h3 className="font-bold text-gray-800 mb-2">
                            Technical Skills:
                          </h3>
                          <p className="text-gray-600">
                            {skills.technical.join(", ")}
                          </p>
                        </>
                      )}

                    {/* Soft Skills */}
                    {Array.isArray(skills.soft) && skills.soft.length > 0 && (
                      <>
                        <h3 className="font-bold text-gray-800 mt-4 mb-2">
                          Soft Skills:
                        </h3>
                        <p className="text-gray-600">
                          {skills.soft.join(", ")}
                        </p>
                      </>
                    )}

                    {/* Industry-Specific Skills */}
                    {Array.isArray(skills.industry) &&
                      skills.industry.length > 0 && (
                        <>
                          <h3 className="font-bold text-gray-800 mt-4 mb-2">
                            Industry-Specific Skills:
                          </h3>
                          <p className="text-gray-600">
                            {skills.industry.join(", ")}
                          </p>
                        </>
                      )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience */}
        {resumeData.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-600 mb-2">
              Experience
            </h2>

            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start">
                  <div className="w-3/4">
                    {/* Title (Bold) */}
                    <h3 className="font-bold text-gray-800 text-lg">
                      <b>{exp.title}</b>
                    </h3>
                    {/* Company Name (Bold) */}
                    <h4 className="font-semibold text-gray-700 text-md">
                      <i>{exp.company}</i>
                    </h4>
                    {/* Position and Location */}
                    <div className="text-gray-600 mt-1">
                      {exp.position && (
                        <p>
                          <span className="font-bold">Position:</span>{" "}
                          {exp.position}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Date (Right aligned) */}

                  <div className="w-1/4 text-right text-gray-600">
                    {exp.startDate && exp.endDate && (
                      <p className="mt-1">
                        {new Date(exp.startDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })}
                        -
                        {new Date(exp.endDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })}
                      </p>
                    )}
                    {exp.location && (
                      <p>
                        <span className="font-bold"></span>{" "}
                        <i>{exp.location}</i>
                      </p>
                    )}
                  </div>
                </div>

                {/* Description */}
                {exp.description && (
                  <div
                    className="text-gray-600 mt-4"
                    style={{
                      width: "100%",
                      maxWidth: "800px",
                      margin: "0 auto",
                      overflowWrap: "break-word",
                      whiteSpace: "normal",
                      boxSizing: "border-box",
                    }}
                  >
                    <h3 className="font-bold text-gray-800 mb-2">
                      Description
                    </h3>
                    <ul className="list-disc pl-6">
                      {
                        // Split the description into sentences by full stops, and create bullet points for each
                        exp.description
                          .split(".")
                          .map((sentence) => sentence.trim()) // Remove any leading/trailing spaces
                          .filter((sentence) => sentence.length > 0) // Remove empty sentences
                          .map((sentence, index) => (
                            <li key={index} className="mb-1">
                              {sentence}
                            </li>
                          ))
                      }
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {resumeData.certifications && resumeData.certifications.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-600 mb-4">
              Certifications
            </h2>

            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start">
                  <div className="w-3/4">
                    {/* Certification Name (Bold) */}
                    {cert.name && (
                      <h3 className="font-bold text-gray-800 text-lg">
                        {cert.name}
                      </h3>
                    )}

                    {/* Organization */}
                    {cert.org && (
                      <p className="text-gray-600">
                        <span className="font-bold"></span>
                        <i>{cert.org}</i>
                      </p>
                    )}
                  </div>

                  {/* Date (Right aligned) */}
                  <div className="w-1/4 text-right text-gray-600">
                    {cert.date && (
                      <p className="mt-1">
                        {new Date(cert.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })}
                      </p>
                    )}
                  </div>
                </div>

                {/* Credential ID/URL */}
                {cert.id && (
                  <p className="text-gray-600 mt-2">
                    <span className="font-bold">Credential ID/URL:</span>{" "}
                    {cert.id}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {resumeData.projects && resumeData.projects.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-600 mb-4">
              Projects
            </h2>

            {resumeData.projects.map((project, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start">
                  <div className="w-3/4">
                    {/* Project Title */}
                    {/* Conditional rendering for title and tools */}
                    {project.title && (
                      <h3 className="font-bold text-gray-800 text-lg">
                        {project.title}
                      </h3>
                    )}
                    {/* Technologies/Tools Used */}
                    {project.tools && project.tools.length > 0 && (
                      <p className="text-gray-600 ">
                        <i>{project.tools}</i>
                      </p>
                    )}
                    {/* Role */}
                    {project.role && (
                      <p className="text-gray-600">
                        <span className="font-bold">Role:</span> {project.role}
                      </p>
                    )}

                    {/* Description */}
                    {project.description && (
                      <div
                        className="text-gray-600 mt-4"
                        style={{
                          width: "100%",
                          maxWidth: "800px",
                          margin: "0 auto",
                          overflowWrap: "break-word",
                          whiteSpace: "normal",
                          boxSizing: "border-box",
                        }}
                      >
                        <h3 className="font-bold text-gray-800 mb-2">
                          Description
                        </h3>
                        <ul className="list-disc pl-6">
                          {project.description
                            .split(".")
                            .map((sentence) => sentence.trim()) // Trim any extra spaces
                            .filter((sentence) => sentence.length > 0) // Remove empty sentences
                            .map((sentence, index) => (
                              <li key={index} className="mb-1">
                                {sentence}
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}

                    {/* Impact/Results */}
                    {project.impact && (
                      <div
                        className="text-gray-600 mt-4"
                        style={{
                          width: "100%",
                          maxWidth: "800px",
                          margin: "0 auto",
                          overflowWrap: "break-word",
                          whiteSpace: "normal",
                          boxSizing: "border-box",
                        }}
                      >
                        <h3 className="font-bold text-gray-800 mb-2"></h3>
                        <ul className="list-disc pl-6">
                          {project.impact
                            .split(".")
                            .map((sentence) => sentence.trim()) // Trim spaces around sentences
                            .filter((sentence) => sentence.length > 0) // Remove any empty sentences
                            .map((sentence, index) => (
                              <li key={index} className="mb-1">
                                {sentence}
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Date Right-aligned */}
                  <div className="w-1/4 text-right text-gray-600">
                    {project.dates && (
                      <p className="mt-1">
                        {new Date(project.dates).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Awards & Achievements */}
        {resumeData.awards && resumeData.awards.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-600 mb-4">
              Awards & Achievements
            </h2>

            {resumeData.awards.map((award, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start">
                  <div className="w-3/4">
                    {/* Award Name */}
                    {award.name && (
                      <h3 className="font-bold text-lg text-gray-800">
                        {award.name}
                      </h3>
                    )}

                    {/* Issuing Organization */}
                    {award.org && (
                      <p className="text-gray-600">
                        <span className="font-bold">Issuing Organization:</span>{" "}
                        {award.org}
                      </p>
                    )}

                    {/* Description */}
                    {award.description && (
                      <div
                        className="text-gray-600 mt-4"
                        style={{
                          width: "100%",
                          maxWidth: "800px",
                          margin: "0 auto",
                          overflowWrap: "break-word",
                          whiteSpace: "normal",
                          boxSizing: "border-box",
                        }}
                      >
                        <h3 className="font-bold text-gray-800 mb-2">
                          Description
                        </h3>
                        <ul className="list-disc pl-6">
                          {award.description
                            .split(".")
                            .map((sentence) => sentence.trim()) // Trim any extra spaces
                            .filter((sentence) => sentence.length > 0) // Remove empty sentences
                            .map((sentence, index) => (
                              <li key={index} className="mb-1">
                                {sentence}
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Date Right-aligned */}
                  <div className="w-1/4 text-right text-gray-600">
                    {award.date && (
                      <p className="mt-1">
                        <i>
                          {new Date(award.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                          })}
                        </i>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Volunteer Experience */}
        {resumeData.volunteerExperience &&
          resumeData.volunteerExperience.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-600 mb-4">
                Volunteer Experience
              </h2>

              {resumeData.volunteerExperience.map((experience, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-start">
                    <div className="w-3/4">
                      {/* Role */}
                      {experience.role && (
                        <h3 className="font-bold text-lg text-gray-800">
                          {experience.role}
                        </h3>
                      )}

                      {/* Organization */}
                      {experience.org && (
                        <p className="text-gray-600">
                          <span className="font-bold">Organization:</span>{" "}
                          {experience.org}
                        </p>
                      )}

                      {/* Responsibilities & Achievements */}
                      {experience.responsibilities && (
                        <div>
                          <ul className="list-disc pl-6 mt-2">
                            {experience.responsibilities
                              .split("•") // Split by bullet point character
                              .map((item) => item.trim()) // Trim any extra spaces
                              .filter((item) => item.length > 0) // Remove empty items
                              .map((item, index) => (
                                <li key={index} className="text-gray-600">
                                  {item}
                                </li>
                              ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Dates (Right-aligned) */}
                    {experience.dates && (
                      <div className="w-1/4 text-right text-gray-600">
                        <p>
                          <span className="font-bold">Dates:</span>{" "}
                          <i>{experience.dates}</i>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

        {/* Languages */}
        {resumeData.languages && resumeData.languages.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-600 mb-4">
              Languages
            </h2>

            {resumeData.languages.map((language, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center">
                  <div className="w-3/4">
                    <ul>
                      {/* Language Name */}
                      {language.name && (
                        <li>
                          <h3 className="font-bold text-lg text-gray-800">
                            {language.name}
                          </h3>
                        </li>
                      )}
                      {/* Proficiency Level */}
                      {language.proficiency && (
                        <div className="w-2/4 text-gray-600">
                          <p>
                            <b>Proficiency:</b> <i>{language.proficiency}</i>
                          </p>
                        </div>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Publications */}
        {resumeData.publications && resumeData.publications.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-600 mb-4">
              Publications
            </h2>

            {resumeData.publications.map((publication, index) => (
              <div key={index} className="mb-6">
                <div className="flex flex-col mb-4">
                  <div className="flex justify-between items-start">
                    <div className="w-3/4">
                      {/* Publication Title */}
                      {publication.title && (
                        <h3 className="font-bold text-lg text-gray-800">
                          {publication.title}
                        </h3>
                      )}

                      {/* Journal or Conference Name */}
                      {publication.journal && (
                        <p className="text-gray-600">
                          <span className="font-bold">Journal/Conference:</span>{" "}
                          <i>{publication.journal}</i>
                        </p>
                      )}

                      {/* Description */}
                      {publication.description && (
                        <div>
                          <p className="text-gray-600">
                            <span className="font-bold">Description:</span>
                          </p>
                          <ul className="list-disc pl-6">
                            {publication.description
                              .split("•") // Split by bullet point character
                              .map((item) => item.trim()) // Trim any extra spaces
                              .filter((item) => item.length > 0) // Remove empty items
                              .map((item, index) => (
                                <li key={index} className="text-gray-600">
                                  {item}
                                </li>
                              ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Date Right-aligned */}
                    <div className="w-1/4 text-right text-gray-600">
                      {publication.date && (
                        <p className="mt-1">
                          <i>
                            {new Date(publication.date).toLocaleDateString(
                              "en-US",
                              { year: "numeric", month: "short" }
                            )}
                          </i>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
