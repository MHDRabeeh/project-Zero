
import { Form, Input, DatePicker, TimePicker, Select, Button, Row, Col } from 'antd';
import dayjs from 'dayjs'; // For date and time handling
import { createActivity } from '../features/activitySlice';
import { useDispatch } from 'react-redux';

const { Option } = Select;

const ActivityForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const onFinish = (values) => {
    console.log('Form values:', values);
    // Convert date and time to the desired format
    const formattedValues = {
      ...values,
      fromDate: values.fromDate.format('D/M/YYYY'),
      fromTime: values.fromTime.format('h:mm A'),
      toDate: values.toDate.format('D/M/YYYY'),
      id:Date.now(),
      createdAt: dayjs().unix(), // Current timestamp
    };
    console.log('Formatted values:', formattedValues);
    // You can now send this data to your backend or state management
    dispatch(createActivity(formattedValues))
    form.resetFields(); 
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold rounded-t-md pl-3 bg-cyan-50 text-cyan-700 mb-6 border-b-2 border-cyan-200 pb-2 hover:bg-cyan-100 hover:text-cyan-800 transition-colors duration-200">
        Create New Activity</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          timeZone: 'EST', // Default time zone
        }}
      >
        {/* Client and Region in the same row */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Client"
              name="client"
              rules={[{ required: true, message: 'Please select the client!' }]}
            >
              <Select placeholder="Select client">
                <Option value="MND">MND</Option>
                <Option value="Client2">Client 2</Option>
                <Option value="Client3">Client 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Region"
              name="region"
              rules={[{ required: true, message: 'Please select the region!' }]}
            >
              <Select placeholder="Select region">
                <Option value="Prod">Prod</Option>
                <Option value="Dev">Dev</Option>
                <Option value="Test">Test</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Mail Subject */}
        <Form.Item
          label="Mail Subject"
          name="mailSub"
          rules={[{ required: true, message: 'Please input the mail subject!' }]}
        >
          <Input.TextArea placeholder="Enter mail subject" />
        </Form.Item>

        {/* From Date and From Time in the same row */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="From Date"
              name="fromDate"
              rules={[{ required: true, message: 'Please select the from date!' }]}
            >
              <DatePicker format="D/M/YYYY" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="From Time"
              name="fromTime"
              rules={[{ required: true, message: 'Please select the from time!' }]}
            >
              <TimePicker format="h:mm A" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        {/* To Date and Time Zone in the same row */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="To Date"
              name="toDate"
              rules={[{ required: true, message: 'Please select the to date!' }]}
            >
              <DatePicker format="D/M/YYYY" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Time Zone"
              name="timeZone"
              rules={[{ required: true, message: 'Please select the time zone!' }]}
            >
              <Select placeholder="Select time zone">
                <Option value="EST">EST</Option>
                <Option value="PST">PST</Option>
                <Option value="CST">CST</Option>
                <Option value="GMT">GMT</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Action */}
        <Form.Item
          label="Action"
          name="action"
          rules={[{ required: true, message: 'Please input the action!' }]}
        >
          <Input placeholder="Enter action" />
        </Form.Item>

        {/* Created By */}
        <Form.Item
          label="Created By"
          name="createdBy"
          rules={[{ required: true, message: 'Please input the created by details!' }]}
        >
          <Input.Group>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name={['createdBy', 'fname']}
                  rules={[{ required: true, message: 'Please input the first name!' }]}
                >
                  <Input placeholder="First Name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={['createdBy', 'lname']}
                  rules={[{ required: true, message: 'Please input the last name!' }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name={['createdBy', 'email']}
                  rules={[{ required: true, message: 'Please input the email!' }]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={['createdBy', 'role']}
                  rules={[{ required: true, message: 'Please input the role!' }]}
                >
                  <Input placeholder="Role" />
                </Form.Item>
              </Col>
            </Row>
          </Input.Group>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ActivityForm;