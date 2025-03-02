import  { useState } from "react";
import { Table, Button, Modal, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";

const SlaSearch = () => {
  const dispatch = useDispatch();
  const issueLogData = useSelector((state) => state.issueLogs);
  console.log(issueLogData,"filtered data");
  

  // State for managing modal visibility and selected SLA details
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlaDetails, setSelectedSlaDetails] = useState(null);

  // Filter data to include only rows where slaMiss.status is true
  const filteredData = issueLogData.filter(
    (issue) => issue.slaMiss && issue.slaMiss[0]?.status === true
  );
  

  // Show SLA details in modal
  const showSlaDetails = (slaMiss) => {
    setSelectedSlaDetails(slaMiss);
    setIsModalOpen(true);
  };

  // Table columns
  const columns = [
    {
      title: "#",
      key: "rowNumber",
      render: (text, record, index) => index + 1, // Add row number dynamically
    },
    { title: "Ticket No", dataIndex: "ticketNumber", key: "ticketNumber" },
    { title: "Client", dataIndex: "Client", key: "Client" },
    { title: "Region", dataIndex: "Region", key: "Region" },
    {
      title: "Issue Classification",
      dataIndex: "issueClassification",
      key: "issueClassification",
    },
    {
      title: "Issue Details",
      dataIndex: "issuedetails",
      key: "issuedetails",
      render: (text) => (text.length > 15 ? `${text.substring(0, 15)}...` : text),
    },
    { title: "Shift Handled by", dataIndex: "ShiftHandledBy", key: "ShiftHandledBy" },
    {
      title: "Issue Assigned To",
      dataIndex: "issueAssignedTo",
      key: "issueAssignedTo",
      render: (text) => text || "Unassigned",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: (status) => (
        <Tag color={status === "pending" ? "red" : status === "Working on this" ? "blue" : "green"}>
          {status}
        </Tag>
      ),
    },
    {
      title: "SLA Details",
      key: "slaDetails",
      render: (text, record) => (
        <Button type="link" onClick={() => showSlaDetails(record.slaMiss)}>
          View Details
        </Button>
      ),
    },
  ];

  return (
    <div>
      <h2>SLA Search</h2>
      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="ticketNumber"
        pagination={{ pageSize: 5 }}
      />

      {/* Modal for SLA Details */}
      <Modal
        title="SLA Details"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="close" type="primary" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>,
        ]}
      >
        {selectedSlaDetails && (
          <div>
            <p><strong>Current DB Latency:</strong> {selectedSlaDetails[0].currentDbLatency}</p>
            <p><strong>Max DB Latency:</strong> {selectedSlaDetails[0].maxDblatency}</p>
            <p><strong>SLA Details:</strong> {selectedSlaDetails[0].sladetails}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SlaSearch;