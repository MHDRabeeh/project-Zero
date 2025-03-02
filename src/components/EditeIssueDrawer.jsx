import { useEffect, useState } from 'react';
import { Drawer, Form, Input, Select, Button, Modal, DatePicker } from 'antd';
import dayjs from 'dayjs'; // For handling date formatting

const { Option } = Select;

const EditIssueDrawer = ({ isOpen, onClose, selectedIssue, updateIssue }) => {
  const [form] = Form.useForm();
  const [isSlaMissModalVisible, setIsSlaMissModalVisible] = useState(false);
  const [updatedslamissvalues, setUpdatedSlaMissValue] = useState([]);

  // Set form values when selectedIssue changes
  useEffect(() => {
    if (selectedIssue) {
      // Convert the date string to a dayjs object for the DatePicker
      const formattedIssue = {
        ...selectedIssue,
        date: selectedIssue.date ? dayjs(selectedIssue.date) : null,
      };
      form.setFieldsValue(formattedIssue);
    }
  }, [selectedIssue, form]);

  // Define clients and regions
  const clients = ['Client A', 'Client B', 'Client C'];
  const regions = ['Region 1', 'Region 2', 'Region 3'];

  const onFinish = (values) => {
    // Convert the date back to a string format before saving
    const formattedValues = {
      ...values,
      date: values.date ? values.date.format('YYYY-MM-DD') : null,
    };

    if (updatedslamissvalues) {
      updateIssue({ ...formattedValues, slaMiss: updatedslamissvalues });
      console.log({ ...formattedValues, slaMiss: updatedslamissvalues }, 'updatedslamissvalues');
    } else {
      updateIssue(formattedValues);
    }
    onClose(); // Close the drawer
  };

  const handleSlaMissChange = (value) => {
    if (value === true) {
      setIsSlaMissModalVisible(true);
    } else {
      // If SLA Miss is set to false, reset the SLA Miss details
      form.setFieldsValue({ slaMiss: [{ status: false, currentDbLatency: null, maxDblatency: null, sladetails: null }] });
    }
  };

  const handleSlaMissModalOk = (values) => {
    setUpdatedSlaMissValue([{ status: true, ...values }]);
    setIsSlaMissModalVisible(false);
  };

  return (
    <Drawer title="Edit Issue" placement="right" onClose={onClose} open={isOpen}>
      <Form form={form} onFinish={onFinish} initialValues={selectedIssue}>
        <Form.Item name="ticketNumber" label="Ticket Number">
          <Input disabled />
        </Form.Item>

        {/* Client Dropdown */}
        <Form.Item name="Client" label="Client">
          <Select placeholder="Select a client">
            {clients.map((client) => (
              <Option key={client} value={client}>
                {client}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Region Dropdown */}
        <Form.Item name="Region" label="Region">
          <Select placeholder="Select a region">
            {regions.map((region) => (
              <Option key={region} value={region}>
                {region}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Date Field */}
        <Form.Item name="date" label="Date">
          <DatePicker format="YYYY-MM-DD" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name="issueClassification" label="Issue Classification">
          <Input />
        </Form.Item>
        <Form.Item name="issuedetails" label="Issue Details">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="ShiftHandledBy" label="Shift Handled By">
          <Input />
        </Form.Item>
        <Form.Item name="issueAssignedTo" label="Issue Assigned To">
          <Input />
        </Form.Item>
        <Form.Item name="Status" label="Status">
          <Select>
            <Option value="pending">Pending</Option>
            <Option value="Working on this">Working on this</Option>
            <Option value="resolved">Resolved</Option>
          </Select>
        </Form.Item>
        <Form.Item name={['slaMiss', 0, 'status']} label="SLA Miss">
          <Select onChange={handleSlaMissChange}>
            <Option value={false}>False</Option>
            <Option value={true}>True</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>

      <Modal
        title="SLA Miss Details"
        open={isSlaMissModalVisible}
        onCancel={() => setIsSlaMissModalVisible(false)}
        footer={null}
      >
        <Form onFinish={handleSlaMissModalOk}>
          <Form.Item name="currentDbLatency" label="Current DB Latency">
            <Input type="number" />
          </Form.Item>
          <Form.Item name="maxDblatency" label="Max DB Latency">
            <Input type="number" />
          </Form.Item>
          <Form.Item name="sladetails" label="SLA Details">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Drawer>
  );
};

export default EditIssueDrawer;