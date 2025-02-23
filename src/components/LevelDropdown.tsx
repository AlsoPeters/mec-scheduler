import React, { useState } from "react";
import studentsData from "../data/members.json"; // Adjust path to your JSON file

const dropdownStyle = "w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";
const searchStyle = "w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";
const studentCardStyle = "border-2 p-3 rounded-md bg-white shadow-sm";

const LevelDropdown = () => {
    // Extract unique levels and add "All" option
    const uniqueLevels = [...new Set(studentsData.students.map((student) => student.level))];
    const levels = ["All", ...uniqueLevels];
    const [selectedLevel, setSelectedLevel] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    // Filter students by level
    const levelFilteredStudents = selectedLevel === "All"
        ? studentsData.students
        : studentsData.students.filter((student) => student.level === selectedLevel);

    // Further filter by search term (case-insensitive)
    const filteredStudents = levelFilteredStudents.filter((student) => {
        const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
        const japaneseName = `${student.japaneseFirstName} ${student.japaneseLastName}`.toLowerCase();
        const search = searchTerm.toLowerCase();
        return fullName.includes(search) || japaneseName.includes(search);
    });

    // Handle level selection
    const handleLevelChange = (e) => {
        setSelectedLevel(e.target.value);
        setSearchTerm(""); // Reset search when level changes
    };

    // Handle search input
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-2xl mx-auto">
            {/* Dropdown */}
            <div className="mb-4">
                <label htmlFor="levelDropdown" className="block text-sm font-bold text-gray-700 mb-2">
                    Choose a Level
                </label>
                <select
                    id="levelDropdown"
                    value={selectedLevel}
                    onChange={handleLevelChange}
                    className={dropdownStyle}
                >
                    {levels.map((level) => (
                        <option key={level} value={level}>
                            {level}
                        </option>
                    ))}
                </select>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
                <label htmlFor="searchBar" className="block text-sm font-bold text-gray-700 mb-2">
                    Search Students
                </label>
                <input
                    id="searchBar"
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search by name..."
                    className={searchStyle}
                />
            </div>

            {/* Student List */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Students in {selectedLevel} ({filteredStudents.length})
                </h3>
                <div className="max-h-96 overflow-y-auto">
                    <div className="grid gap-4 md:grid-cols-2">
                        {filteredStudents.length > 0 ? (
                            filteredStudents.map((student) => (
                                <div key={student.id} className={studentCardStyle}>
                                    <p className="font-medium text-gray-900">
                                        {student.firstName} {student.lastName}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {student.japaneseFirstName} {student.japaneseLastName}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Age: {student.age} | Sex: {student.sex}
                                    </p>
                                    <p className="text-sm text-gray-500">Email: {student.email}</p>
                                    <p className="text-sm text-gray-500">Phone: {student.phoneNumber}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No students found matching your search.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LevelDropdown;

{/* Search Bar */ }
//             <div className="mb-6">
//                 <label htmlFor="searchBar" className="block text-sm font-bold text-gray-700 mb-2">
//                     Search Students
//                 </label>
//                 <input
//                     id="searchBar"
//                     type="text"
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     placeholder="Search by name..."
//                     className={searchStyle}
//                 />
//             </div>

//             <h3 className="text-lg font-semibold text-gray-800 mb-3">Students in {selectedLevel} ({filteredStudents.length})</h3>
//             <div className="grid gap-4 md:grid-cols-2">
//                 {filteredStudents.length > 0 ? (
//                     filteredStudents.map((student) => (
//                         <div key={student.id} className="border-2 p-3 rounded-md bg-white shadow-sm">
//                             <p className=" font-bold text-blue-600">
//                                 Id: {student.id}
//                             </p>
//                             <p className="font-medium text-gray-900">
//                                 {student.firstName} {student.lastName}
//                             </p>
//                             <p className="text-sm text-gray-600">
//                                 {student.japaneseFirstName} {student.japaneseLastName}
//                             </p>

//                             <p className="text-sm text-gray-500">
//                                 Age: {student.age} | Sex: {student.sex}
//                             </p>
//                             <p className="text-sm text-gray-500">Email: {student.email}</p>
//                             <p className="text-sm text-gray-500">Phone: {student.phoneNumber}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p className="text-gray-500">No students found for this level.</p>
//                 )}
//             </div>
//         </>

//     )
// }

// export default LevelDropdown