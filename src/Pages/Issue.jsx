import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const AddTableDataForm = () => {
    const [formData, setFormData] = useState({
        client: "",
        region: "",
        issueClassification: "",
        issueDetails: "",
        shiftHandledBy: "",
        issueAssignedTo: "",
        status: "Pending", // Default status
    });

    const [errors, setErrors] = useState({});

    // Sample dropdown options
    const clients = ["Client A", "Client B", "Client C"];
    const regions = ["Region 1", "Region 2", "Region 3"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.client) newErrors.client = "Client is required";
        if (!formData.region) newErrors.region = "Region is required";
        if (!formData.issueClassification) newErrors.issueClassification = "Issue Classification is required";
        if (!formData.issueDetails) newErrors.issueDetails = "Issue Details are required";
        if (!formData.shiftHandledBy) newErrors.shiftHandledBy = "Shift Handled By is required";
        if (!formData.issueAssignedTo) newErrors.issueAssignedTo = "Issue Assigned To is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Submit form data (e.g., send to API)
            console.log("Form Data Submitted:", formData);
            alert("Form submitted successfully!");
        } else {
            console.log("Form validation failed");
        }
    };

    const handleCancel = () => {
        // Reset form and go back
        setFormData({
            client: "",
            region: "",
            issueClassification: "",
            issueDetails: "",
            shiftHandledBy: "",
            issueAssignedTo: "",
            status: "Pending",
        });
        setErrors({});
        alert("Form canceled.");
    };
 let headingStyle = "text-2xl font-semibold rounded-t-md pl-3 bg-cyan-50 text-cyan-700 mb-6 border-b-2 border-cyan-200 pb-2 hover:bg-cyan-100 hover:text-cyan-800 transition-colors duration-200"
    return (
        <div className="flex flex-col bg-white rounded-md p-6 shadow-lg border border-cyan-100">
            {/* Cyan Shading Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-white opacity-30 rounded-md -z-10"></div>

            <h1 className={headingStyle}>Add New Issue</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Client and Region in One Row */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Client Dropdown */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Client</label>
                        <select
                            name="client"
                            value={formData.client}
                            onChange={handleChange}
                            className={`mt-1 block w-full rounded-md border ${
                                errors.client ? "border-red-500" : "border-gray-300"
                            } p-2 shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all`}
                        >
                            <option value="">Select Client</option>
                            {clients.map((client, index) => (
                                <option key={index} value={client}>
                                    {client}
                                </option>
                            ))}
                        </select>
                        {errors.client && <p className="text-red-500 text-sm mt-1">{errors.client}</p>}
                    </div>

                    {/* Region Dropdown */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Region</label>
                        <select
                            name="region"
                            value={formData.region}
                            onChange={handleChange}
                            className={`mt-1 block w-full rounded-md border ${
                                errors.region ? "border-red-500" : "border-gray-300"
                            } p-2  shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all`}
                        >
                            <option value="">Select Region</option>
                            {regions.map((region, index) => (
                                <option key={index} value={region}>
                                    {region}
                                </option>
                            ))}
                        </select>
                        {errors.region && <p className="text-red-500 text-sm mt-1">{errors.region}</p>}
                    </div>
                </div>

                {/* Issue Classification Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Issue Classification</label>
                    <input
                        type="text"
                        name="issueClassification"
                        value={formData.issueClassification}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md border ${
                            errors.issueClassification ? "border-red-500" : "border-gray-300"
                        } p-2 shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all`}
                    />
                    {errors.issueClassification && (
                        <p className="text-red-500 text-sm mt-1">{errors.issueClassification}</p>
                    )}
                </div>

                {/* Issue Details Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Issue Details</label>
                    <textarea
                        name="issueDetails"
                        value={formData.issueDetails}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md border ${
                            errors.issueDetails ? "border-red-500" : "border-gray-300"
                        } p-2 shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all`}
                        rows="3"
                    />
                    {errors.issueDetails && <p className="text-red-500 text-sm mt-1">{errors.issueDetails}</p>}
                </div>

                {/* Shift Handled By Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Shift Handled By</label>
                    <input
                        type="text"
                        name="shiftHandledBy"
                        value={formData.shiftHandledBy}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md border ${
                            errors.shiftHandledBy ? "border-red-500" : "border-gray-300"
                        } p-2 shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all`}
                    />
                    {errors.shiftHandledBy && (
                        <p className="text-red-500 text-sm mt-1">{errors.shiftHandledBy}</p>
                    )}
                </div>

                {/* Issue Assigned To Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Issue Assigned To</label>
                    <input
                        type="text"
                        name="issueAssignedTo"
                        value={formData.issueAssignedTo}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md border ${
                            errors.issueAssignedTo ? "border-red-500" : "border-gray-300"
                        } p-2 shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all`}
                    />
                    {errors.issueAssignedTo && (
                        <p className="text-red-500 text-sm mt-1">{errors.issueAssignedTo}</p>
                    )}
                </div>

                {/* Buttons */}
                <div className="flex justify-end space-x-4">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                    >
                        <XCircle size={18} className="mr-2" />
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="flex items-center bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors"
                    >
                        <CheckCircle size={18} className="mr-2" />
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTableDataForm;