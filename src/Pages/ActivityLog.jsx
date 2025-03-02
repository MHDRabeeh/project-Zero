import React, { useState } from 'react';
import { Table, Input } from 'antd';
import { useSelector } from 'react-redux';

const ActivityLog = () => {
  const activityLogs = useSelector((state) => state.activityLogs);
  const [searchText, setSearchText] = useState('');

  // Handle search input change
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  // Filter activity logs based on search text
  const filteredLogs = activityLogs.filter((log) => {
    return (
      log.client.toLowerCase().includes(searchText.toLowerCase()) ||
      log.region.toLowerCase().includes(searchText.toLowerCase()) ||
      log.mailSub.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const columns = [
    {
      title: 'Client',
      dataIndex: 'client',
      key: 'client',
    },
    {
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
    },
    {
      title: 'Mail Subject',
      dataIndex: 'mailSub',
      key: 'mailSub',
    },
    {
      title: 'From Date',
      dataIndex: 'fromDate',
      key: 'fromDate',
    },
    {
      title: 'From Time',
      dataIndex: 'fromTime',
      key: 'fromTime',
    },
    {
      title: 'To Date',
      dataIndex: 'toDate',
      key: 'toDate',
    },
    {
      title: 'Time Zone',
      dataIndex: 'timeZone',
      key: 'timeZone',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      key: 'createdBy',
      render: (createdBy) => (
        <span>
          {createdBy.fname} {createdBy.lname} ({createdBy.role})
        </span>
      ),
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt) => new Date(createdAt * 1000).toLocaleString(), // Convert timestamp to readable date
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold rounded-t-md pl-3 bg-cyan-50 text-cyan-700 mb-1.5 border-b-2 border-cyan-200 pb-2 hover:bg-cyan-100 hover:text-cyan-800 transition-colors duration-200">
        Activity Log</h1>
      {/* Search Input */}
      <Input
        placeholder="Search by Client, Region, or Mail Subject"
        value={searchText}
        onChange={handleSearch}
        style={{ marginBottom: 12 }}
      />
      {/* Table with filtered data */}
      <Table dataSource={filteredLogs} columns={columns} />
    </div>
  );
};

export default ActivityLog;