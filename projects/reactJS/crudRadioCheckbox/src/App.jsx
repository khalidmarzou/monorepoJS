import { useEffect, useState } from "react";

export default function App() {
  const [branches, setBranches] = useState([]);
  const [student, setStudent] = useState({
    id: null,
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    modules: [],
  });
  const [students, setStudents] = useState([]);
  const [branche, setBranche] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/branches")
      .then((response) => response.json())
      .then((data) => setBranches(data))
      .catch((err) => console.error(err));
  }, []);

  const generateID = (list) => {
    const IDs = list.map((item) => item.id);
    let id = 1;
    if (IDs.includes(id)) {
      id++;
    }
    return id;
  };

  return (
    <>
      <div className="flex justify-center py-12 w-1/2">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label htmlFor="fName" className="mb-3 block text-base font-medium text-[#07074D]">
                    First Name
                  </label>
                  <input
                    value={student.firstName}
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="First Name"
                    onChange={(e) => setStudent({ ...student, firstName: e.target.value })}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label htmlFor="lName" className="mb-3 block text-base font-medium text-[#07074D]">
                    Last Name
                  </label>
                  <input
                    value={student.lastName}
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Last Name"
                    onChange={(e) => setStudent({ ...student, lastName: e.target.value })}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">Gender</label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    className="h-5 w-5"
                    checked={student.gender === "male"}
                    onChange={() => setStudent({ ...student, gender: "male" })}
                  />
                  <label htmlFor="male" className="pl-3 text-base font-medium text-[#07074D]">
                    Male
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    className="h-5 w-5"
                    checked={student.gender === "female"}
                    onChange={() => setStudent({ ...student, gender: "female" })}
                  />
                  <label htmlFor="female" className="pl-3 text-base font-medium text-[#07074D]">
                    Female
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="age" className="mb-3 block text-base font-medium text-[#07074D]">
                How old are you?
              </label>
              <input
                value={student.age}
                type="number"
                name="age"
                id="age"
                placeholder="18"
                min="15"
                onChange={(e) => setStudent({ ...student, age: e.target.value })}
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="branches" className="mb-3 block text-base font-medium text-[#07074D]">
                Select a branch
              </label>
              <select
                onChange={(e) => {
                  const selectedBranch = branches.find((b) => b.id === parseInt(e.target.value));
                  setBranche(selectedBranch || {});
                }}
                defaultValue="default"
                id="branches"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="default">Choose a branch</option>
                {branches.map((branche) => (
                  <option key={branche.id} value={branche.id}>
                    {branche.branche}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">Select Modules</label>
              {branche.modules &&
                branche.modules.map((module) => (
                  <div key={module.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={module.id}
                      className="h-5 w-5"
                      checked={student.modules.some((m) => m.id === module.id) || false}
                      onChange={() => {
                        if (student.modules.some((m) => m.id === module.id)) {
                          const updatedModules = student.modules.filter((m) => m.id !== module.id);
                          setStudent({
                            ...student,
                            modules: updatedModules,
                          });
                        } else {
                          setStudent({
                            ...student,
                            modules: [...student.modules, module],
                          });
                        }
                      }}
                    />
                    <label htmlFor={module.id} className="pl-3 text-base font-medium text-[#07074D]">
                      {module.name}
                    </label>
                  </div>
                ))}
            </div>

            <div>
              <button
                onClick={() => {
                  if (student.firstName && student.lastName && student.gender && student.age && student.modules.length > 0) {
                    setStudents([...students, { ...student, id: generateID(students) }]);
                    setStudent({ id: null, firstName: "", lastName: "", gender: "", age: "", modules: [] });
                  } else {
                    alert("Please fill in all required fields");
                  }
                }}
                className="rounded-md bg-[#6A64F1] hover:bg-[#8882f3] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-12 w-2/3">
        <div className="mx-auto w-full bg-white">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Age
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Branch
                </th>
                <th scope="col" className="px-6 py-3">
                  Modules
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b ${item.id === student.id ? "bg-red-50" : "bg-white"} cursor-pointer`}
                  tabIndex={1}
                  onClick={() =>
                    item.id === student.id
                      ? setStudent({ id: null, firstName: "", lastName: "", gender: "", age: "", modules: [] })
                      : setStudent({ ...item })
                  }
                >
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {`${item.firstName} ${item.lastName}`}
                  </th>
                  <td className="px-6 py-4">{item.age}</td>
                  <td className="px-6 py-4">{item.gender}</td>
                  <td className="px-6 py-4">{branche.branche}</td>
                  <td className="px-6 py-4">{item.modules.map((module) => module.name).join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="fixed bottom-2 flex gap-5">
        <button
          onClick={() => {
            if (student.id === null) {
              alert("Select a student from the table");
            } else {
              if (student.firstName && student.lastName && student.gender && student.age && student.modules.length > 0) {
                const newStudents = students.map((item) => {
                  if (item.id === student.id) {
                    item = { ...student };
                  }
                  return item;
                });
                setStudents(newStudents);
              } else {
                alert("Please fill in all required fields");
              }
            }
          }}
          className="rounded-md bg-[#e7a222] hover:bg-[#eec579]  py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Edit
        </button>
        <button
          onClick={() => {
            setStudents([...students.filter((s) => s.id !== student.id)]);
            setStudent({ id: null, firstName: "", lastName: "", gender: "", age: "", modules: [] });
          }}
          className="rounded-md bg-[#ca2b2b] hover:bg-[#df6868] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Delete
        </button>
      </div>
    </>
  );
}
