import { Drawer, Form, Input, Select, Button } from "antd";
// import { useState } from "react";

const { Option } = Select;

const EditIssueDrawer = ({ isOpen, onClose }) => {
    const [form] = Form.useForm();

    const handleSave = () => {
        form.validateFields().then((values) => {
            console.log("Edited values:", values);
            onClose();
        });
    };

    return (
        <Drawer
            title="Edit Issue"
            placement="right"
            width={400}
            onClose={onClose}
            open={isOpen}
        >
            <Form layout="vertical" form={form}>
                <Form.Item name="client" label="Client" rules={[{ required: true, message: "Please select a client" }]}>                
                    <Select placeholder="Select client">
                        <Option value="Mark">Mark</Option>
                        <Option value="John">John</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="region" label="Region" rules={[{ required: true, message: "Please select a region" }]}>                
                    <Select placeholder="Select region">
                        <Option value="Otto">Otto</Option>
                        <Option value="Doe">Doe</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="classification" label="Issue Classification" rules={[{ required: true, message: "Please enter classification" }]}>                
                    <Input placeholder="Enter classification" />
                </Form.Item>

                <Form.Item name="details" label="Issue Details">                
                    <Input.TextArea placeholder="Enter issue details" rows={3} />
                </Form.Item>

                <Form.Item name="assignedTo" label="Issue Assigned To">                
                    <Input placeholder="Enter assigned person" />
                </Form.Item>

                <Form.Item name="status" label="Status" rules={[{ required: true, message: "Please select status" }]}>                
                    <Select placeholder="Select status">
                        <Option value="Pending">Pending</Option>
                        <Option value="Completed">Completed</Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" onClick={handleSave} style={{ marginRight: 8 }}>Save</Button>
                    <Button onClick={onClose}>Cancel</Button>
                </Form.Item>
            </Form>
        </Drawer>
    );
};

export default EditIssueDrawer;