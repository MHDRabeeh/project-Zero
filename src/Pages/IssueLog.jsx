import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditOutlined, DeleteOutlined, MessageOutlined } from '@ant-design/icons';
import { Table, Button, Typography, Space, Tag, Row, Col, Modal } from 'antd';
import EditIssueDrawer from '../components/EditeIssueDrawer';
import { Filter } from 'lucide-react';
import FilterDrawer from '../components/FilterDrawer';
import { deleteRow, updateIssue } from '../features/issueSlice';
import IssueLogDeleteModal from '../components/modal/IssueLogDeleteModal';


const { Title } = Typography;

const IssueLog = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
   
  },[])
  const issueLogData = useSelector((state) => state.issueLogs);
  const filteredData = issueLogData.filter((issue) =>  issue.slaMiss[0]?.status === false);
  console.log(issueLogData,"issue log data");
  console.log(filteredData,"filtered data");
  
  
   
  // State for managing drawer and modal visibility
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openedit, setOpenedit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpendeleteModal, setIsOpenDeleteModal] = useState(false);

  // State for selected issue and item
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // Toggle functions
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const editToggleDrawer = () => setOpenedit(!openedit);

  // Handle edit functionality
  const handleEdit = (record) => {
    setSelectedIssue(record); // Set the selected row's data
    setIsDrawerOpen(true); // Open the drawer
  };

  // Handle update issue
  const handleUpdateIssue = (values) => {
    dispatch(updateIssue(values)); // Dispatch the update action
    setIsDrawerOpen(false); // Close the drawer
  };

  // Handle delete functionality
  const showDeleteModal = (value) => {
    setSelectedItem(value);
    setIsOpenDeleteModal(true);
  };

  const handleDelete = (ticketNumber) => {
    dispatch(deleteRow(ticketNumber));
  };

  // Show issue details in modal
  const showDetails = (record) => {
    setSelectedIssue(record);
    setIsModalOpen(true);
  };

  // Table columns
  const columns = [
    {
      title: '#',
      key: 'rowNumber',
      render: (text, record, index) => index + 1, // Add row number dynamically
    },
    { title: 'Ticket No', dataIndex: 'ticketNumber', key: 'ticketNumber' },
    { title: 'Client', dataIndex: 'Client', key: 'Client' },
    { title: 'Region', dataIndex: 'Region', key: 'Region' },
    { title: 'Issue Classification', dataIndex: 'issueClassification', key: 'issueClassification' },
    {
      title: 'Issue Details',
      dataIndex: 'issuedetails',
      key: 'issuedetails',
      render: (text, record) => (
        <Button type="link" onClick={() => showDetails(record)}>
          {text.length > 15 ? `${text.substring(0, 15)}...` : text}
        </Button>
      ),
    },
    { title: 'Shift Handled by', dataIndex: 'ShiftHandledBy', key: 'ShiftHandledBy' },
    { title: 'Issue Assigned To', dataIndex: 'issueAssignedTo', key: 'issueAssignedTo', render: (text) => text || 'Unassigned' },
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'Status',
      render: (status) => (
        <Tag color={status === 'pending' ? 'red' : status === 'Working on this' ? 'blue' : 'green'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'SLA Miss',
      dataIndex: 'slaMiss',
      key: 'slaMiss',
      render: (slaMiss) => (
        <Tag color={slaMiss[0]?.status ? 'red' : 'green'}>
          {slaMiss[0]?.status ? 'True' : 'False'}
        </Tag>
      ),
    },
    { title: 'Date', dataIndex: 'date', key: 'date' }, // Add a date field if available in Redux
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space>
          <Button type="link" icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button type="link" icon={<DeleteOutlined />} danger onClick={() => showDeleteModal(record)} />
        </Space>
      ),
    },
    { title: 'Comment', key: 'comment', render: () => <Button type="link" icon={<MessageOutlined />} /> },
  ];

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Row justify="space-between" align="middle" className="px-2">
          <Col>
            <Title level={3} style={{ color: '#1890ff' }}>Issues</Title>
          </Col>
          <Col>
            <button
              onClick={editToggleDrawer}
              className="flex items-center bg-white mb-1 text-[#1890ff] px-4 py-2 rounded-md hover:bg-cyan-100 transition-colors"
            >
              <Filter size={18} className="mr-2" />Filter
            </button>
          </Col>
        </Row>
        <Table columns={columns} dataSource={issueLogData} rowKey="ticketNumber" pagination={{ pageSize: 5 }} />
      </div>

      {/* Edit Drawer */}
      <EditIssueDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        selectedIssue={selectedIssue}
        updateIssue={handleUpdateIssue}
      />

      {/* Filter Drawer */}
      <FilterDrawer isOpen={openedit} onClose={editToggleDrawer} />

      {/* Issue Details Modal */}
      <Modal
        title="Issue Details"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="close" type="primary" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>,
        ]}
      >
        <p><strong>Client:</strong> {selectedIssue?.Client}</p>
        <p><strong>Region:</strong> {selectedIssue?.Region}</p>
        <p><strong>Issue Classification:</strong> {selectedIssue?.issueClassification}</p>
        <p><strong>Handled By:</strong> {selectedIssue?.ShiftHandledBy}</p>
        <p><strong>Assigned To:</strong> {selectedIssue?.issueAssignedTo || 'Unassigned'}</p>
        <p><strong>Status:</strong> <Tag color={selectedIssue?.Status === 'pending' ? 'red' : selectedIssue?.Status === 'Working on this' ? 'blue' : 'green'}>
          {selectedIssue?.Status}
        </Tag></p>
        <p><strong>SLA Miss:</strong> <Tag color={selectedIssue?.slaMiss?.status ? 'red' : 'green'}>
          {selectedIssue?.slaMiss?.status ? 'True' : 'False'}
        </Tag></p>
        <p><strong>Date:</strong> {selectedIssue?.date}</p>
        <p><strong>Details:</strong></p>
        <p>{selectedIssue?.issuedetails}</p>
      </Modal>

      {/* Delete Modal */}
      <IssueLogDeleteModal
        isModalVisible={isOpendeleteModal}
        setIsModalVisible={setIsOpenDeleteModal}
        selectedItem={selectedItem}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default IssueLog;